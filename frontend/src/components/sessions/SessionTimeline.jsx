import TimelineItem from "./TimelineItem";
import EmptyState from "../common/EmptyState";

function SessionTimeline({ events }) {
  if (!events.length) {
    return (
      <EmptyState
        title="No Events"
        description="Select a session from the list to view the user journey."
      />
    );
  }

  return (
    <div className="h-full max-h-[500px] overflow-y-auto pr-4 pt-2 custom-scrollbar">
      <div className="space-y-0 relative before:absolute before:inset-0 before:ml-[1.1rem] before:h-full before:w-0.5 before:bg-slate-100">
        {events.map((event) => (
          <TimelineItem key={event._id || event.timestamp} event={event} />
        ))}
      </div>
    </div>
  );
}

export default SessionTimeline;