import { Activity } from "lucide-react";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]">
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3 tracking-tight">
            <div className="bg-indigo-600 p-2 rounded-lg shadow-sm">
              <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            User Analytics
          </h1>
          <p className="text-sm text-slate-500 mt-1.5 font-medium ml-11">
            Monitor sessions, user journeys, and click activity
          </p>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 animate-fade-in relative z-10">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;