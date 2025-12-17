import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslation } from '@/lib/translations'

export function useTranslation() {
  const { language } = useLanguage()
  
  const t = (key: string, params?: Record<string, any>) => getTranslation(language, key, params)
  
  return { t, language }
}
