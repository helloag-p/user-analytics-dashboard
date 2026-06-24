function PageSelector({ value, onChange, pages }) {
  return (
    <div className="relative mb-6">
      <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="w-full rounded-lg border border-slate-300 p-3"
>
    {pages.map((page) => (
        <option key={page.value} value={page.value}>
            {page.label}
        </option>
    ))}
</select>
      {/* Custom dropdown arrow to replace the default browser one */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default PageSelector;