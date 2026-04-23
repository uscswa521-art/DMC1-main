"use client";

import React, { createContext, useContext, useState } from 'react';
import translations, { LangCode, LANGUAGES, Translations } from '@/lib/i18n';

interface LanguageContextType {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'zh-TW',
  setLang: () => {},
  t: translations['zh-TW'],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>('zh-TW');

  const setLang = (newLang: LangCode) => {
    setLangState(newLang);
    const meta = LANGUAGES.find((l) => l.code === newLang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang;
      document.documentElement.dir = meta?.dir ?? 'ltr';
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
