export default function InputCard({ inputText, setInputText, loadSampleText, clearText }) {
    return (
        <>
            <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                    <label htmlFor="inputText" className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                        Teks Masukan
                    </label>
                    <div className="flex gap-2">
                        <button onClick={loadSampleText} className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition-colors font-medium">
                            Isi Contoh
                        </button>
                        <button onClick={clearText} className="text-xs px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-100 transition-colors font-medium">
                            Bersihkan
                        </button>
                    </div>
                </div>
                <textarea id="inputText" rows="4"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all resize-y text-base"
                    placeholder="Ketik atau tempel teks di sini..."></textarea>
            </div>
        </>
    );
}