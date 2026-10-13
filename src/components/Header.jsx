export default function Header() {
    return (
        <>
            <header className="w-full py-5 px-4 bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-teal-600 p-2 rounded-lg text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
                                Flipper.txt <span className="bg-slate-100 text-slate-600 border border-slate-200 text-[10px] uppercase px-1.5 py-0.5 rounded font-semibold tracking-wider">Alat Utilitas</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}