export default function ToastNotification({ isVisible }) {
    return (
        <>
            <div className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
                <div className="bg-slate-800 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium">Teks disalin ke papan klip</span>
                </div>
            </div>
        </>
    );
}