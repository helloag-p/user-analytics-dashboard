import EmptyState from "../common/EmptyState";

function HeatmapCanvas({ clicks }) {
  if (!clicks.length) {
    return (
      <EmptyState
        title="No Click Data"
        description="No click events available for this page yet."
      />
    );
  }

  return (
    <div className="relative h-[400px] w-full rounded-xl border border-slate-200 bg-white overflow-hidden shadow-inner">
      {/* Subtle grid background to simulate a webpage canvas */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {clicks.map(({ click }, index) => (
        <div
          key={index}
          className="absolute h-6 w-6 rounded-full bg-red-500/40 border border-red-500/50 shadow-[0_0_12px_rgba(239,68,68,0.6)] backdrop-blur-[1px] transition-transform hover:scale-150"
          style={{
            left: `${click.x}px`,
            top: `${click.y}px`,
            transform: "translate(-50%, -50%)",
          }}
          title={`Click at x:${click.x}, y:${click.y}`}
        />
      ))}
    </div>
  );
}

export default HeatmapCanvas;