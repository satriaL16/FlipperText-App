export default function LandingPageInfo() {
    return (
        <>
            <div className="w-full bg-white border-t border-slate-200 mt-8">
                <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col gap-12">

                    {/* Feature Highlight / Privacy Alert */}
                    <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="bg-teal-100 text-teal-700 p-3 rounded-full flex-shrink-0">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-teal-900">100% Privat & Aman</h3>
                            <p className="text-sm text-teal-800 mt-1">
                                Semua pemrosesan teks dilakukan secara lokal di browser Anda. Tidak ada data yang dikirim ke server kami, disimpan, atau dilacak. Teks Anda sepenuhnya menjadi milik Anda.
                            </p>
                        </div>
                    </div>

                    {/* How to Use Section */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">3 Langkah Mudah</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-xl mb-4 border border-slate-200">1</div>
                                <h4 className="font-semibold text-slate-800">Masukkan Teks</h4>
                                <p className="text-sm text-slate-500 mt-2">Ketik atau tempel paragraf, kalimat, atau kata yang ingin Anda ubah ke dalam kotak input.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-xl mb-4 border border-slate-200">2</div>
                                <h4 className="font-semibold text-slate-800">Pilih Mode</h4>
                                <p className="text-sm text-slate-500 mt-2">Pilih apakah Anda ingin membalik seluruh teks, membalik urutan kata, atau sekadar membalik huruf di tiap kata.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-xl mb-4 border border-teal-200">3</div>
                                <h4 className="font-semibold text-slate-800">Salin Hasilnya</h4>
                                <p className="text-sm text-slate-500 mt-2">Hasil akan muncul seketika. Klik tombol salin dan teks siap digunakan di tempat lain.</p>
                            </div>
                        </div>
                    </div>

                    {/* Use Cases Section */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-800 mb-6">Siapa yang Membutuhkan Alat Ini?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="border border-slate-200 p-5 rounded-2xl hover:border-teal-300 transition-colors">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-teal-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                                <h4 className="font-bold text-slate-800 text-sm mb-2">Programmer</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">Sangat berguna untuk menguji logika manipulasi string, struktur data, atau sekadar membuat data dummy (*test case*) terbalik.</p>
                            </div>
                            <div className="border border-slate-200 p-5 rounded-2xl hover:border-teal-300 transition-colors">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-teal-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                <h4 className="font-bold text-slate-800 text-sm mb-2">Kreator Konten</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">Gunakan untuk membuat variasi teks unik, teka-teki kata di media sosial, atau menyembunyikan pesan rahasia di caption.</p>
                            </div>
                            <div className="border border-slate-200 p-5 rounded-2xl hover:border-teal-300 transition-colors">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-teal-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <h4 className="font-bold text-slate-800 text-sm mb-2">Guru & Siswa Bahasa</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">Alat visual yang hebat untuk mempelajari konsep palindrom, tata bahasa, dan permainan kata linguistik di kelas.</p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-800 mb-6">Pertanyaan yang Sering Diajukan (FAQ)</h2>
                        <div className="flex flex-col gap-3">
                            <details className="group border border-slate-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-slate-800 font-medium">
                                    <h3 className="text-sm">Apa itu Palindrom?</h3>
                                    <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-slate-400">
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                                    Palindrom adalah kata, frasa, angka, atau susunan karakter lain yang terbaca sama persis baik dari depan maupun belakang (mengabaikan spasi dan tanda baca). Contoh kata palindrom dalam bahasa Indonesia adalah "Malam", "Katak", dan "Kasur ini rusak".
                                </div>
                            </details>

                            <details className="group border border-slate-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-slate-800 font-medium">
                                    <h3 className="text-sm">Apakah ada batasan jumlah karakter?</h3>
                                    <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-slate-400">
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                                    Tidak ada batasan ketat dari aplikasi kami. Karena semuanya diproses menggunakan tenaga perangkat Anda sendiri (browser), Anda bisa memasukkan ratusan atau ribuan kata sekaligus tanpa khawatir gagal muat.
                                </div>
                            </details>

                            <details className="group border border-slate-200 rounded-xl bg-white [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-slate-800 font-medium">
                                    <h3 className="text-sm">Bisakah aplikasi ini dipakai secara offline (tanpa internet)?</h3>
                                    <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-slate-400">
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                                    Bisa! Setelah Anda membuka halaman web ini, Anda bisa mematikan koneksi internet Anda dan aplikasi akan tetap berfungsi 100% normal. Semua logika berjalan di JavaScript sisi klien (*Client-side*).
                                </div>
                            </details>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
