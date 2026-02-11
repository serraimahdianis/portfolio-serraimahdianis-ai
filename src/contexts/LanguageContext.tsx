import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '@/lib/types';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    // Validate that saved language is valid, otherwise default to English
    if (saved && Object.values(Language).includes(saved as Language)) {
      return saved as Language;
    }
    return Language.EN;
  });

  const isRtl = lang === Language.AR;

  useEffect(() => {
    localStorage.setItem('language', lang);
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [lang, isRtl]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, isRtl }}>
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
