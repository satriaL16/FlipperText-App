export default function PalindromeCard({ palindrome }) {
    return (
        <>
            <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col justify-between">
                <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                    Cek Palindrom
                </h3>
                <div role="status" aria-live="polite" aria-atomic="true" className={`border rounded-xl p-4 flex items-center gap-4 transition-colors ${palindrome.status === 'success' ? 'bg-teal-50 border-teal-200' :
                    palindrome.status === 'danger' ? 'bg-rose-50 border-rose-200' :
                        'bg-slate-50 border-slate-200'
                    }`}>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold flex-shrink-0 ${palindrome.status === 'success' ? 'bg-teal-100 text-teal-600' :
                        palindrome.status === 'danger' ? 'bg-rose-100 text-rose-600' :
                            'bg-slate-200 text-slate-500'
                        }`}>
                        {palindrome.status === 'success' ? (
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        ) : palindrome.status === 'danger' ? (
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        )}
                    </div>
                    <div>
                        <div className={`text-sm font-semibold ${palindrome.status === 'success' ? 'text-teal-800' :
                            palindrome.status === 'danger' ? 'text-rose-800' :
                                'text-slate-700'
                            }`}>
                            {palindrome.title}
                        </div>
                        <div className={`text-xs mt-0.5 ${palindrome.status === 'success' ? 'text-teal-600' :
                            palindrome.status === 'danger' ? 'text-rose-600' :
                                'text-slate-500'
                            }`}>
                            {palindrome.desc}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
