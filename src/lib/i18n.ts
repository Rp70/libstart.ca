export type Language = 'en' | 'pa' | 'zh' | 'ar' | 'es'

export const languages = {
  en: { name: 'English', nativeName: 'English', dir: 'ltr' },
  pa: { name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', dir: 'ltr' },
  zh: { name: 'Mandarin', nativeName: '中文', dir: 'ltr' },
  ar: { name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  es: { name: 'Spanish', nativeName: 'Español', dir: 'ltr' },
} as const

export const defaultLanguage: Language = 'en'

const languageMap: Record<string, Language> = {
  'en': 'en',
  'en-US': 'en',
  'en-GB': 'en',
  'en-CA': 'en',
  'pa': 'pa',
  'pa-IN': 'pa',
  'zh': 'zh',
  'zh-CN': 'zh',
  'zh-TW': 'zh',
  'zh-HK': 'zh',
  'ar': 'ar',
  'ar-SA': 'ar',
  'ar-EG': 'ar',
  'ar-AE': 'ar',
  'es': 'es',
  'es-ES': 'es',
  'es-MX': 'es',
  'es-US': 'es',
}

export function detectBrowserLanguage(): Language {
  const browserLanguages = navigator.languages || [navigator.language]
  
  for (const lang of browserLanguages) {
    if (languageMap[lang]) {
      return languageMap[lang]
    }
    
    const primaryLang = lang.split('-')[0]
    if (languageMap[primaryLang]) {
      return languageMap[primaryLang]
    }
  }
  
  return defaultLanguage
}
