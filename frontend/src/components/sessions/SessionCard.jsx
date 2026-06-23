import { Clock3, MousePointerClick } from "lucide-react";

function SessionCard({ session, selected, onSelect }) {
  // Keep your exact truncation logic
  const displayId = session.sessionId.length > 20
    ? `${session.sessionId.slice(0, 8)}...${session.sessionId.slice(-6)}`
    : session.sessionId;

  return (
    <button
      type="button"
      onClick={() => onSelect(session.sessionId)}
      title={session.sessionId}
      className={`group w-full text-left rounded-xl border p-4 transition-all duration-200 flex flex-col gap-3 ${
        selected
          ? "border-blue-500 bg-blue-50/50 shadow-[0_0_0_1px_rgba(59,130,246,1)]"
          : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <p className={`font-mono text-sm font-semibold truncate ${selected ? 'text-blue-700' : 'text-slate-700'}`}>
          {displayId}
        </p>
        {selected && (
          <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
        )}
      </div>

      <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
        <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md group-hover:bg-slate-200/50 transition-colors">
          <MousePointerClick size={14} className={selected ? "text-blue-500" : ""} />
          <span>{session.totalEvents} events</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Clock3 size={14} className={selected ? "text-blue-500" : ""} />
          <span>
            {new Date(session.lastActivity).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
    </button>
  );
}

export default SessionCard;