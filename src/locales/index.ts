import { Language } from './types'
import { en } from './en'
import { pa } from './pa'
import { zh } from './zh'
import { ar } from './ar'
import { es } from './es'
import { it } from './it'
import { de } from './de'
import { pt } from './pt'
import { ur } from './ur'
import { ru } from './ru'
import { fa } from './fa'
import { vi } from './vi'
import { ko } from './ko'
import { pl } from './pl'
import { hi } from './hi'
import { tl } from './tl'
import { yue } from './yue'
import { ta } from './ta'
import { gu } from './gu'
import { bn } from './bn'
import { el } from './el'
import { ro } from './ro'
import { uk } from './uk'
import { nl } from './nl'
import { sr } from './sr'
import { ml } from './ml'

/**
 * Deep merge two objects, with source taking precedence over target
 * Used to merge partial translations with English fallback
 */
function deepMerge<T extends Record<string, any>>(target: T, source: Partial<T>): T {
  const result = { ...target }
  
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      const sourceValue = source[key]
      const targetValue = result[key]
      
      if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue) &&
          targetValue && typeof targetValue === 'object' && !Array.isArray(targetValue)) {
        // Recursively merge nested objects
        result[key] = deepMerge(targetValue, sourceValue)
      } else if (sourceValue !== undefined) {
        // Override with source value
        result[key] = sourceValue as any
      }
    }
  }
  
  return result
}

// Create merged locales with English as fallback
export const locales = {
  en: en,
  pa: deepMerge(en, pa),
  zh: deepMerge(en, zh),
  ar: deepMerge(en, ar),
  es: deepMerge(en, es),
  it: deepMerge(en, it),
  de: deepMerge(en, de),
  pt: deepMerge(en, pt),
  ur: deepMerge(en, ur),
  ru: deepMerge(en, ru),
  fa: deepMerge(en, fa),
  vi: deepMerge(en, vi),
  ko: deepMerge(en, ko),
  pl: deepMerge(en, pl),
  hi: deepMerge(en, hi),
  tl: deepMerge(en, tl),
  yue: deepMerge(en, yue),
  ta: deepMerge(en, ta),
  gu: deepMerge(en, gu),
  bn: deepMerge(en, bn),
  el: deepMerge(en, el),
  ro: deepMerge(en, ro),
  uk: deepMerge(en, uk),
  nl: deepMerge(en, nl),
  sr: deepMerge(en, sr),
  ml: deepMerge(en, ml),
} as const

// Fallback languages that use English directly
const fallbackLanguages: Language[] = [
  'sh', 'ht', 'hu', 'tr', 'ja', 'hr', 'so', 'hy', 'ilo', 'pdt', 'ti', 'te', 'sq', 
  'nan', 'am', 'kab', 'ne', 'km', 'ps', 'yo', 'cs', 'sw', 'bg', 'sk'
]

// Add fallback languages that use English
const translations: Record<Language, any> = { ...locales } as any
fallbackLanguages.forEach(lang => {
  translations[lang] = en
})

/**
 * Get a translation for a given language and key path
 * @param lang - Language code
 * @param key - Dot-notation key path (e.g., 'app.title')
 * @param params - Optional parameters for string replacement (e.g., {count: 5})
 * @returns Translated string with parameters replaced, or the key itself if not found
 */
export function getTranslation(lang: Language, key: string, params?: Record<string, any>): string {
  const keys = key.split('.')
  let value: any = translations[lang]
  
  // Navigate through nested keys
  for (const k of keys) {
    value = value?.[k]
  }
  
  // If value not found in requested language, try English as fallback
  if (value === undefined) {
    value = en
    for (const k of keys) {
      value = value?.[k]
    }
  }
  
  // If still not found, return the key itself
  let result = value || key
  
  // Replace parameters if provided
  if (params) {
    Object.entries(params).forEach(([paramKey, paramValue]) => {
      // Use regex with global flag to replace all occurrences
      const regex = new RegExp(`\\{${paramKey}\\}`, 'g')
      result = result.replace(regex, String(paramValue))
    })
  }
  
  return result
}

// Re-export types and language modules
export type { TranslationKeys, Language } from './types'
export { en, pa, zh, ar, es, it, de, pt, ur, ru, fa, vi, ko, pl, hi, tl, yue, ta, gu, bn, el, ro, uk, nl, sr, ml }
