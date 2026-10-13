import { useState } from 'react';
import Header from './components/Header.jsx';
import InputCard from './components/InputCard.jsx';
import ModeSelector from './components/ModeSelector.jsx';
import OutputCard from './components/OutputCard.jsx';
import StatsCard from './components/StatsCard.jsx';
import PalindromeCard from './components/PalindromeCard.jsx';
import LandingPageInfo from './components/LandingPageInfo.jsx';
import ToastNotification from './components/ToastNotification.jsx';
import Footer from './components/Footer.jsx';
import './app.css';

export default function App() {
    // State Management
    const [inputText, setInputText] = useState('');
    const [mode, setMode] = useState('entire');
    const [toastVisible, setToastVisible] = useState(false);

    // Helper Functions
    const getProcessedText = () => {
        if (!inputText) return '';
        if (mode === 'entire') {
            return inputText.split('').reverse().join('');
        } else if (mode === 'words') {
            return inputText.trim().split(/\s+/).reverse().join(' ');
        } else if (mode === 'eachWord') {
            return inputText.split(' ').map(word => word.split('').reverse().join('')).join(' ');
        }
        return '';
    };

    const outputText = getProcessedText();
    const charCount = inputText.length;
    const wordCount = inputText.trim() === '' ? 0 : inputText.trim().split(/\s+/).length;
    const vowelMatch = inputText.match(/[aiueoAIUEO]/g);
    const vowelCount = vowelMatch ? vowelMatch.length : 0;

    const getPalindromeStatus = () => {
        if (!inputText || inputText.trim().length === 0) {
            return {
                status: 'empty',
                title: 'Belum ada teks',
                desc: 'Ketik teks untuk memeriksa apakah terbaca sama dari depan atau belakang.'
            };
        }
        const cleaned = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (cleaned.length === 0) {
            return {
                status: 'invalid',
                title: 'Tidak dapat dianalisis',
                desc: 'Diperlukan karakter huruf atau angka untuk cek palindrom.'
            };
        }
        const reversedCleaned = cleaned.split('').reverse().join('');
        if (cleaned === reversedCleaned) {
            return {
                status: 'success',
                title: 'Ya, Ini Palindrom!',
                desc: 'Teks ini terbaca sama persis baik dari depan maupun belakang.'
            };
        } else {
            return {
                status: 'danger',
                title: 'Bukan Palindrom',
                desc: 'Teks ini menghasilkan susunan yang berbeda jika dibaca sebaliknya.'
            };
        }
    };

    const palindrome = getPalindromeStatus();

    const loadSampleText = () => {
        const samples = [
            "Kasur ini rusak",
            "Malam",
            "Halo dunia, selamat pagi!",
            "ibu ratu ular",
            "ReactJS Pembalik Teks Pintar"
        ];
        const randomSample = samples[Math.floor(Math.random() * samples.length)];
        setInputText(randomSample);
    };

    const clearText = () => {
        setInputText('');
    };

    const copyToClipboard = () => {
        if (!outputText) return;
        const textarea = document.createElement('textarea');
        textarea.value = outputText;
        textarea.style.position = 'fixed';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                setToastVisible(true);
                setTimeout(() => {
                    setToastVisible(false);
                }, 2500);
            }
        } catch (err) {
            console.error('Gagal menyalin teks', err);
        }
        document.body.removeChild(textarea);
    };

    // Render Component Tree
    return (
        <div className="bg-slate-50 min-h-screen text-slate-900 flex flex-col justify-between selection:bg-teal-200 selection:text-teal-900 font-sans">

            <Header />

            <main className="flex-grow max-w-4xl w-full mx-auto px-4 py-8 flex flex-col gap-6">

                <InputCard
                    inputText={inputText}
                    setInputText={setInputText}
                    loadSampleText={loadSampleText}
                    clearText={clearText}
                />

                <ModeSelector
                    mode={mode}
                    setMode={setMode}
                />

                <OutputCard
                    outputText={outputText}
                    copyToClipboard={copyToClipboard}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <StatsCard
                        charCount={charCount}
                        wordCount={wordCount}
                        vowelCount={vowelCount}
                    />
                    <PalindromeCard
                        palindrome={palindrome}
                    />
                </div>

            </main>

            <LandingPageInfo />

            <ToastNotification isVisible={toastVisible} />

            <Footer />

        </div>
    );
}