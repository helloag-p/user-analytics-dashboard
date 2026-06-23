import { Clock3, MousePointerClick } from "lucide-react";

function SessionCard({
    session,
    selected,
    onSelect,
}) {

    const displayId =
        session.sessionId.length > 20
            ? `${session.sessionId.slice(0, 8)}...${session.sessionId.slice(-6)}`
            : session.sessionId;

    return (
        <button
            type="button"
            onClick={() => onSelect(session.sessionId)}
            title={session.sessionId}
            className={`
                w-full
                text-left
                rounded-xl
                border
                p-4
                transition-all
                duration-200

                ${
                    selected
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm"
                }
            `}
        >
            <p className="font-semibold text-slate-800 truncate">
                {displayId}
            </p>

            <div className="flex items-center justify-between mt-3 text-sm text-slate-500">

                <div className="flex items-center gap-1">

                    <MousePointerClick size={16} />

                    {session.totalEvents} tracked events

                </div>

                <div className="flex items-center gap-1">

                    <Clock3 size={16} />

                    {new Date(session.lastActivity).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}

                </div>

            </div>

        </button>
    );
}

export default SessionCard;