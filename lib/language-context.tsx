"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type Language = "en" | "he"

interface LanguageContextType {
  lang: Language
  dir: "ltr" | "rtl"
  toggleLanguage: () => void
  t: (en: string, he: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en")

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === "en" ? "he" : "en"))
  }, [])

  const dir = lang === "he" ? "rtl" : "ltr"

  const t = useCallback(
    (en: string, he: string) => (lang === "en" ? en : he),
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
