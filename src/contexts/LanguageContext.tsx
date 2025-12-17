import { createContext, useContext, ReactNode, useEffect } from 'react'
import { useKV } from '@github/spark/hooks'
import { Language, defaultLanguage, languages } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useKV<Language>('app-language', defaultLanguage)
  const currentLang = language || defaultLanguage
  const dir = languages[currentLang].dir

  useEffect(() => {
    document.documentElement.lang = currentLang
    document.documentElement.dir = dir
  }, [currentLang, dir])

  return (
    <LanguageContext.Provider value={{ language: currentLang, setLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
