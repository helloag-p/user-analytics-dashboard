function MainLayout({ children }) {

    return (

        <div className="min-h-screen bg-slate-50">

           <nav className="bg-white border-b border-slate-200 shadow-sm">

    <div className="max-w-7xl mx-auto px-6 py-5">

        <h1 className="text-3xl font-bold text-slate-800">

            📊 User Analytics Dashboard

        </h1>

        <p className="text-sm text-slate-500 mt-1">

            Monitor sessions, user journeys and click activity

        </p>

    </div>

</nav>

            <main className="max-w-7xl mx-auto p-6">

                {children}

            </main>

        </div>

    );

}

export default MainLayout;