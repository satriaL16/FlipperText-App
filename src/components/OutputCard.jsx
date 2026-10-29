export default function OutputCard({ outputText, copyToClipboard }) {
    return (
        <>
            <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                    <label htmlFor="outputText" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                        Hasil
                    </label>
                    <button type="button" onClick={copyToClipboard} disabled={!outputText}
                        className="bg-slate-800 hover:bg-slate-900 disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-xs px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 active:scale-95">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        Salin Hasil
                    </button>
                </div>
                <textarea id="outputText" rows="4" readOnly
                    value={outputText}
                    aria-live="polite"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all resize-y text-base font-mono"
                    placeholder="Hasil akan muncul di sini..."></textarea>
            </div>
        </>
    );
}
