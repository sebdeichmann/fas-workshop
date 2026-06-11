import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, type Language, type Translation } from "./translations";

type LanguageContextValue = {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "lang";

const getInitialLang = (): Language => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "de") return stored;
  const browser = window.navigator.language?.toLowerCase() ?? "";
  return browser.startsWith("de") ? "de" : "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }, [lang]);

  const setLang = (l: Language) => setLangState(l);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
