import EmptyState from "../common/EmptyState";

function HeatmapCanvas({ clicks }) {

    if (!clicks.length) {
        return (
            <EmptyState
                title="No Click Data"
                description="No click events available for this page."
            />
        );
    }

    return (

        <div
            className="
                relative
                h-[400px]
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                overflow-hidden
            "
        >

            {clicks.map(({ click }, index) => (

                <div

                    key={index}

                    className="
                        absolute
                        h-6
                        w-6
                        rounded-full
                        bg-red-500/30
                        border
                        border-red-500/40
                    "

                    style={{

                        left: `${click.x}px`,

                        top: `${click.y}px`,

                        transform: "translate(-50%, -50%)",

                    }}

                />

            ))}

        </div>

    );

}

export default HeatmapCanvas;