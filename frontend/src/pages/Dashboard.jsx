import { useEffect, useState, useMemo } from "react";
import { AVAILABLE_PAGES } from "../constants/pages";
// Add Map and Flame to your lucide-react imports
import { Users, MousePointerClick, Map, Flame } from "lucide-react";

import { getSessions, getSessionEvents, getHeatmapData } from "../api/analyticsApi";

import MainLayout from "../layouts/MainLayout";
import SessionList from "../components/sessions/SessionList";
import LoadingSpinner from "../components/common/LoadingSpinner";
import SectionHeader from "../components/common/SectionHeader";
import SessionTimeline from "../components/sessions/SessionTimeline";
import HeatmapCanvas from "../components/heatmap/HeatmapCanvas";
import PageSelector from "../components/heatmap/PageSelector";
import StatCard from "../components/common/StatCard";

function Dashboard() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState("");
  const [events, setEvents] = useState([]);
  const [heatmapData, setHeatmapData] = useState([]);
  const [selectedPage, setSelectedPage] = useState("/demo/index.html");

  // Performance optimization: Only recalculate when sessions array changes
  const totalEvents = useMemo(() => {
    return sessions.reduce((sum, session) => sum + session.totalEvents, 0);
  }, [sessions]);

  useEffect(() => {
    async function fetchSessions() {
      try {
        setLoading(true);
        const data = await getSessions();
        setSessions(data);

        if (data.length > 0) {
          setSelectedSession(data[0].sessionId);
        }
      } catch (error) {
        console.error("Failed to fetch sessions:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSessions();
  }, []);

  useEffect(() => {
    if (!selectedSession) return;

    async function fetchEvents() {
      try {
        const data = await getSessionEvents(selectedSession);
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    }
    fetchEvents();
  }, [selectedSession]);

  useEffect(() => {
    async function fetchHeatmap() {
      try {
        const data = await getHeatmapData(selectedPage);
        setHeatmapData(data);
      } catch (error) {
        console.error("Failed to fetch heatmap:", error);
      }
    }
    fetchHeatmap();
  }, [selectedPage]);

  if (loading) {
    return (
      <MainLayout>
        <div className="h-[60vh] flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard
            title="Total Sessions"
            value={sessions.length}
            icon={Users}
          />
          <StatCard
            title="Total Events"
            value={totalEvents}
            icon={MousePointerClick}
          />
        </div>

        {/* Sessions & Timeline Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 min-h-[420px] flex flex-col">
            <SectionHeader
              icon={Users}
              title="Sessions"
              subtitle="Recent tracked user sessions"
            />
            <div className="flex-1 overflow-hidden">
              <SessionList
                sessions={sessions}
                selectedSession={selectedSession}
                onSelect={setSelectedSession}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 min-h-[420px] flex flex-col">
            <SectionHeader
              icon={Map}
              title="User Journey"
              subtitle="Chronological event timeline"
            />
            <div className="flex-1 overflow-hidden">
              <SessionTimeline events={events} />
            </div>
          </div>
        </div>

        {/* Heatmap Row */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 min-h-[500px]">
          <SectionHeader
            icon={Flame}
            title="Click Heatmap"
            subtitle={`${heatmapData.length} clicks tracked on this page`}
          />
          <div className="mb-6">
            <PageSelector
              value={selectedPage}
              onChange={setSelectedPage}
              pages={AVAILABLE_PAGES}
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
            <HeatmapCanvas clicks={heatmapData} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;