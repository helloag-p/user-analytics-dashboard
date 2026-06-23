import { useEffect, useState } from "react";

import SessionList from "../components/sessions/SessionList";

import { getSessions } from "../api/analyticsApi";
import MainLayout from "../layouts/MainLayout";
import SectionHeader from "../components/common/SectionHeader";
import { Users, MousePointerClick } from "lucide-react";

import StatCard from "../components/common/StatCard";
function Dashboard() {
  const [sessions, setSessions] = useState([]);

  const [selectedSession, setSelectedSession] = useState("");
  const totalEvents = sessions.reduce(
    (sum, session) => sum + session.totalEvents,
    0
);
  useEffect(() => {
    async function fetchSessions() {
      try {
        const data = await getSessions();

        setSessions(data);

        if (data.length > 0) {
          setSelectedSession(data[0].sessionId);
        }
      } catch (error) {
        console.error("Failed to fetch sessions:", error);
      }
    }

    fetchSessions();
  }, []);

  return (
    <MainLayout>
      <div className="grid gap-6">
        <div className="grid text-4xl font-bold grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard title="Total Sessions" value={sessions.length} icon={Users} />

          <StatCard title="Total Events" value={totalEvents} icon={MousePointerClick} />
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
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 min-h-[420px]">
          <SectionHeader
            icon="🔥"
            title="Click Heatmap"
            subtitle="Visual click distribution"
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
