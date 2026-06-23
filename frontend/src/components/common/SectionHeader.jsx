function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-6 pb-4 border-b border-slate-100">
      <div className="flex items-center gap-3">
        
        {/* Crisp icon container */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 shadow-sm">
          {Icon && <Icon size={20} strokeWidth={2.5} />}
        </div>
        
        <div>
          <h2 className="text-lg font-bold text-slate-800 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;