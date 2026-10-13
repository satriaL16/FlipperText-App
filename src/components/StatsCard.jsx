export default function StatsCard({ charCount, wordCount, vowelCount }) {
    return (
        <>
            <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-between">
                <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                    Statistik
                </h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div className="text-2xl font-bold text-slate-800">{charCount}</div>
                        <div className="text-xs text-slate-500 mt-1">Karakter</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div className="text-2xl font-bold text-slate-800">{wordCount}</div>
                        <div className="text-xs text-slate-500 mt-1">Kata</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div className="text-2xl font-bold text-slate-800">{vowelCount}</div>
                        <div className="text-xs text-slate-500 mt-1">Vokal</div>
                    </div>
                </div>
            </div>
        </>
    );
}