function PageSelector({

    value,

    onChange,

    pages,

}) {

    return (

        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
                mb-4
                w-full
                rounded-lg
                border
                border-slate-200
                p-2
                text-sm
                focus:border-blue-500
                outline-none
            "
        >

            {

                pages.map((page) => (

                    <option
                        key={page}
                        value={page}
                    >

                        {page}

                    </option>

                ))

            }

        </select>

    );

}

export default PageSelector;