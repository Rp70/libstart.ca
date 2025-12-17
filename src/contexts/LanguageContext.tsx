import { createContext, useContext, ReactNode, useEffect, useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Language, defaultLanguage, languages, detectBrowserLanguage } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [hasDetected, setHasDetected] = useKV<boolean>('language-auto-detected', false)
  const [language, setLanguageKV] = useKV<Language>('app-language', defaultLanguage)
  const [isReady, setIsReady] = useState(false)
  
  useEffect(() => {
    if (!hasDetected) {
      const detectedLang = detectBrowserLanguage()
      setLanguageKV(detectedLang)
      setHasDetected(true)
    }
    setIsReady(true)
  }, [hasDetected, setLanguageKV, setHasDetected])

  const currentLang = language || defaultLanguage
  const dir = languages[currentLang].dir

  useEffect(() => {
    document.documentElement.lang = currentLang
    document.documentElement.dir = dir
  }, [currentLang, dir])

  const setLanguage = (lang: Language) => {
    setLanguageKV(lang)
  }

  if (!isReady) {
    return null
  }

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
