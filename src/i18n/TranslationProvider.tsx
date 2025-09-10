import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import en from './en.json';

type Translations = typeof en;

interface TranslationContextProps {
    language: string;
    setLanguage: (lang: string) => void;
    t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

const translations: Record<string, Translations> = {
    EN: en
};

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState('EN');

    const t = (key: string) => {
        const dict = translations[language] || {};
        return dict[key as keyof typeof dict] ?? key;
    };

    return (
        <TranslationContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
}
