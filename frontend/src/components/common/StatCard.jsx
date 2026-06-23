import { TrendingUp } from "lucide-react";

function StatCard({ title, value, icon: Icon = TrendingUp }) {
  return (
    <div className="relative overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex justify-between items-center group hover:shadow-md hover:border-indigo-200 transition-all duration-300">
      
      {/* Replaced the flashy gradient with a clean, solid accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          {title}
        </p>
        <h2 className="text-4xl font-extrabold mt-2 text-slate-800 tracking-tight">
          {value.toLocaleString()}
        </h2>
      </div>
      
      <div className="bg-indigo-50 p-4 rounded-2xl group-hover:bg-indigo-100 transition-colors duration-300 border border-indigo-50/50">
        <Icon className="w-7 h-7 text-indigo-600" strokeWidth={2.5} />
      </div>
    </div>
  );
}

export default StatCard;