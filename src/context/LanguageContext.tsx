"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '../translations/translations';

type LanguageContextType = {
    lang: Language;
    setLang: (lang: Language) => void;
    t: typeof translations.ko;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>('ko');

    // Initialize language from localStorage if available
    useEffect(() => {
        const savedLang = localStorage.getItem('lang') as Language;
        if (savedLang && (savedLang === 'ko' || savedLang === 'en')) {
            setLang(savedLang);
        }
    }, []);

    const handleSetLang = (newLang: Language) => {
        setLang(newLang);
        localStorage.setItem('lang', newLang);
        document.documentElement.lang = newLang;
    };

    const value = {
        lang,
        setLang: handleSetLang,
        t: translations[lang],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
