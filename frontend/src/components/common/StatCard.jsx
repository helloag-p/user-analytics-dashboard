import { TrendingUp } from "lucide-react";

function StatCard({

    title,

    value,

    icon: Icon = TrendingUp,

}) {

    return (

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex justify-between items-center">

            <div>

                <p className="text-sm text-slate-500">

                    {title}

                </p>

                <h2 className="text-3xl font-bold mt-2 text-slate-800">

                    {value}

                </h2>

            </div>

            <div className="bg-blue-50 p-3 rounded-xl">

                <Icon className="w-7 h-7 text-blue-600"/>

            </div>

        </div>

    );

}

export default StatCard;