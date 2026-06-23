import SessionCard from "./SessionCard";
import EmptyState from "../common/EmptyState";

function SessionList({ sessions, selectedSession, onSelect }) {
  if (sessions.length === 0) {
    return (
      <EmptyState
        title="No Sessions"
        description="No user sessions have been tracked yet."
      />
    );
  }

  return (
    <div className="space-y-3 h-full overflow-y-auto pr-2 custom-scrollbar pb-4">
      {sessions.map((session) => (
        <SessionCard
          key={session.sessionId}
          session={session}
          selected={selectedSession === session.sessionId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default SessionList;