export default function Footer() {
    return (
        <>
            <footer className="w-full py-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm text-slate-500 border-t border-slate-200 bg-slate-50">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-700">&copy; 2026 FastText Flip</span>
                    <span className="bg-teal-100 text-teal-700 text-[10px] uppercase px-2 py-0.5 rounded-full font-bold tracking-wider">v1.0.0</span>
                </div>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span>Fast, Lightweight, and Free.</span>
            </footer>
        </>
    );
}
