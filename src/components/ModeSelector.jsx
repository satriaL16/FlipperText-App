export default function ModeSelector({ mode, setMode }) {
    return (
        <>
            <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-700 mb-3">Mode Pembalikan</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button type="button" onClick={() => setMode('entire')}
                        className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all border ${mode === 'entire' ? 'border-teal-600 bg-teal-600 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300'}`}>
                        Balik Seluruh Teks
                    </button>
                    <button type="button" onClick={() => setMode('words')}
                        className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all border ${mode === 'words' ? 'border-teal-600 bg-teal-600 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300'}`}>
                        Balik Urutan Kata
                    </button>
                    <button type="button" onClick={() => setMode('eachWord')}
                        className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all border ${mode === 'eachWord' ? 'border-teal-600 bg-teal-600 text-white shadow-sm' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300'}`}>
                        Balik Huruf Tiap Kata
                    </button>
                </div>
            </div>
        </>
    );
}
