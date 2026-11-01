export default function Footer() {
    return (
        <footer className="w-full border-t border-slate-200 bg-slate-50">
            <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 px-4 py-6 text-center text-sm text-slate-500 sm:flex-row sm:justify-between sm:text-left">
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:justify-start">
                    <span className="font-semibold text-slate-700">
                        &copy; 2026 FastText Flip
                    </span>

                    <span className="rounded-full bg-teal-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal-700">
                        v1.0.0
                    </span>
                </div>

                <span className="hidden text-slate-300 sm:inline">|</span>

                <span>Fast, Lightweight, and Free.</span>

                <span className="hidden text-slate-300 sm:inline">|</span>

                <span>
                    Developed by {" "}
                    <a
                        href="https://instagram.com/satriafrwl.p"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram @satriafrwl.p"
                        className="font-medium text-pink-600 transition-colors hover:text-pink-700"
                    >
                        @satriafrwl.p
                    </a>
                </span>
            </div>
        </footer>
    );
}