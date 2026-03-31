import type React from "react";
import { createContext, useCallback, useContext, useState } from "react";
import { type TranslationKey, translations } from "../data/translations";

export type Lang = "en" | "hi" | "mr";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("agro-lang");
    return (saved as Lang) || "en";
  });

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("agro-lang", newLang);
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      // biome-ignore lint/complexity/useLiteralKeys: dynamic translation key
      return translations[lang][key] || translations["en"][key] || key;
    },
    [lang],
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
