function EmptyState({

    title,

    description,

}) {

    return (

        <div className="flex h-full flex-col items-center justify-center py-12 text-center">

            <div className="text-5xl">

                📭

            </div>

            <h3 className="mt-4 text-lg font-semibold text-slate-700">

                {title}

            </h3>

            <p className="mt-2 text-sm text-slate-500">

                {description}

            </p>

        </div>

    );

}

export default EmptyState;