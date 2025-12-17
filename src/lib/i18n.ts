export type Language = 'en' | 'pa' | 'zh' | 'ar' | 'es'

export const languages = {
  en: { name: 'English', nativeName: 'English', dir: 'ltr' },
  pa: { name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', dir: 'ltr' },
  zh: { name: 'Mandarin', nativeName: '中文', dir: 'ltr' },
  ar: { name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  es: { name: 'Spanish', nativeName: 'Español', dir: 'ltr' },
} as const

export const defaultLanguage: Language = 'en'
