import { useEffect, useState } from "react";
import { AVAILABLE_PAGES } from "../constants/pages";
import SessionList from "../components/sessions/SessionList";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { getSessions } from "../api/analyticsApi";
import { getSessionEvents } from "../api/analyticsApi";
import { getHeatmapData } from "../api/analyticsApi";
import MainLayout from "../layouts/MainLayout";
import SectionHeader from "../components/common/SectionHeader";
import SessionTimeline from "../components/sessions/SessionTimeline";
import HeatmapCanvas from "../components/heatmap/HeatmapCanvas";

import PageSelector from "../components/heatmap/PageSelector";
import { Users, MousePointerClick } from "lucide-react";

import StatCard from "../components/common/StatCard";
function Dashboard() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState("");
  const [events, setEvents] = useState([]);
  const [heatmapData, setHeatmapData] = useState([]);

  const [selectedPage, setSelectedPage] = useState("/demo/index.html");
  const totalEvents = sessions.reduce(
    (sum, session) => sum + session.totalEvents,
    0,
  );
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
        console.error(
          "Failed to fetch sessions:",

          error,
        );
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
        console.error(
          "Failed to fetch events:",

          error,
        );
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
        console.error(error);
      }
    }

    fetchHeatmap();
  }, [selectedPage]);
  if (loading) {

    return (

        <MainLayout>

            <LoadingSpinner />

        </MainLayout>

    );

}

  return (
    <MainLayout>
      <div className="grid gap-6">
        <div className="grid text-4xl font-bold grid-cols-1 md:grid-cols-2 gap-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 min-h-[420px]">
            <SectionHeader
              icon="👥"
              title="Sessions"
              subtitle="Recent tracked user sessions"
            />

            <SessionList
              sessions={sessions}
              selectedSession={selectedSession}
              onSelect={setSelectedSession}
            />
          </div>

          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 min-h-[420px]">
            <SectionHeader
              icon="🛤️"
              title="User Journey"
              subtitle="Chronological event timeline"
            />
            <SessionTimeline events={events} />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 min-h-[420px]">
          <SectionHeader
            icon="🔥"
            title="Click Heatmap"
            subtitle={`${heatmapData.length} Clicks on this page`}
          />

          <PageSelector
            value={selectedPage}
            onChange={setSelectedPage}
            pages={AVAILABLE_PAGES}
          />

          <HeatmapCanvas clicks={heatmapData} />
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
