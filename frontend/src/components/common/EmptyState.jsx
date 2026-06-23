function EmptyState({ title, description }) {
  return (
    <div className="flex h-full flex-col items-center justify-center py-16 px-4 text-center bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
      <div className="text-5xl opacity-80 mb-4 hover:scale-110 transition-transform duration-300">
        📭
      </div>
      <h3 className="text-lg font-bold text-slate-700">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;