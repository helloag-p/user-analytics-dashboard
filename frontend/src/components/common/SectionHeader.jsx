function SectionHeader({ icon, title, subtitle }) {
    return (
        <div className="mb-5">
            <div className="flex items-center gap-2">
                <span>{icon}</span>

                <h2 className="text-lg font-semibold text-slate-800">
                    {title}
                </h2>
            </div>

            <p className="text-sm text-slate-500 mt-1">
                {subtitle}
            </p>
        </div>
    );
}

export default SectionHeader;