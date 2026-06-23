import { MousePointerClick, Monitor } from "lucide-react";

function TimelineItem({ event }) {
  const isClick = event.eventType === "click";

  const formattedTime = new Date(event.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const pageUrl = event.pageUrl ? event.pageUrl.replace("/index.html", "") || "/" : "/";

  return (
    <div className="relative pl-10 pb-5 group last:pb-0">
      <div className={`absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 ring-4 ring-white z-10 transition-colors ${
        isClick 
          ? "border-amber-200 bg-amber-50 text-amber-500" 
          : "border-blue-200 bg-blue-50 text-blue-500"
      }`}>
        {isClick ? <MousePointerClick size={14} /> : <Monitor size={14} />}
      </div>
      <div className="bg-white border border-slate-100 shadow-sm rounded-lg p-3 transition-all hover:border-blue-200 hover:shadow-md">
        <div className="flex items-center justify-between mb-1.5">
          <h3 className="font-semibold text-slate-800 text-sm flex items-center gap-2">
            {isClick ? "User Clicked" : "Page View"}
          </h3>
          <span className="text-[11px] font-mono text-slate-400">
            {formattedTime}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-slate-600 truncate bg-slate-50 px-2 py-1.5 rounded border border-slate-100" title={event.pageUrl}>
            <span className="text-slate-400 font-normal mr-1">URL:</span> {pageUrl}
          </p>

          {isClick && event.click && (
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded shadow-sm">
                <span className="text-red-400">X:</span> {event.click.x}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded shadow-sm">
                <span className="text-red-400">Y:</span> {event.click.y}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;