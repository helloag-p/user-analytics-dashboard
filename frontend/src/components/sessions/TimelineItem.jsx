import { MousePointerClick, Monitor } from "lucide-react";

function TimelineItem({ event }) {
    const isClick = event.eventType === "click";

    const formattedTime = new Date(event.timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    const pageUrl = event.pageUrl.replace("/index.html", "");

    return (
        <div className="relative border-l-2 border-slate-200 pl-8 pb-6 last:pb-0">

           <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-white"></div>

           <h3 className="font-semibold text-slate-800">
    {isClick ? "Click" : "Page View"}
</h3>

            <p
                className="mt-1 truncate text-sm text-slate-500"
                title={event.pageUrl}
            >
                {pageUrl}
            </p>

            {isClick && (
                <p className="mt-1 text-sm text-slate-500">
                    x: {event.click.x} • y: {event.click.y}
                </p>
            )}

            <p className="mt-2 text-xs text-slate-400">
                {formattedTime}
            </p>

        </div>
    );
}

export default TimelineItem;