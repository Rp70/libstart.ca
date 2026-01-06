# Translation System

This directory contains all translations for the LibStart application, organized by language.

## Structure

```
src/locales/
├── types.ts       # TypeScript type definitions
├── index.ts       # Main export with deepMerge and getTranslation
├── en.ts          # English (base/fallback language)
├── pa.ts          # Punjabi
├── zh.ts          # Mandarin Chinese
├── ar.ts          # Arabic
├── es.ts          # Spanish
├── it.ts          # Italian
├── de.ts          # German
├── pt.ts          # Portuguese
├── ur.ts          # Urdu
├── ru.ts          # Russian
├── fa.ts          # Persian (partial)
├── vi.ts          # Vietnamese (partial)
├── ko.ts          # Korean (partial)
├── pl.ts          # Polish (partial)
└── hi.ts          # Hindi (partial)
```

## How It Works

### Full Translations
Languages with full translations (en, pa, zh, ar, es, it, de, pt, ur, ru) contain translations for all keys in the application.

### Partial Translations
Languages with partial translations (fa, vi, ko, pl, hi) only translate key UI elements. Missing translations automatically fall back to English.

### Fallback Languages
The following languages are configured to use English translations:
- Cantonese (yue), Tagalog (tl), Tamil (ta), Gujarati (gu), and 31 others
- See `src/locales/index.ts` for the complete list

## Adding a New Language

### 1. Create a New Language File

For a full translation, create `src/locales/XX.ts` where XX is the language code:

```typescript
import { TranslationKeys } from './types'

export const xx: TranslationKeys = {
  app: {
    title: 'Your Translation Here',
    tagline: 'Your Translation Here',
    // ... all other keys
  },
  // ... all other sections
}
```

For a partial translation (recommended for starting out):

```typescript
import { TranslationKeys } from './types'

export const xx: Partial<TranslationKeys> = {
  app: {
    title: 'Your Translation Here',
    tagline: 'Your Translation Here',
    footer: 'Your Translation Here',
    footerDisclaimer: 'Your Translation Here',
    footerNote: 'Your Translation Here',
    footerGitHub: 'Your Translation Here',
  },
  navigation: {
    home: 'Your Translation Here',
    culture: 'Your Translation Here',
    // ... translate what you can
  },
  // Any untranslated keys will automatically use English
}
```

### 2. Add to Index File

In `src/locales/index.ts`, import and add your language:

```typescript
import { xx } from './xx'

// Add to the locales object
export const locales = {
  en: en,
  // ... other languages
  xx: deepMerge(en, xx),  // For full or partial translations
} as const

// Re-export your language
export { en, pa, zh, ar, es, it, de, pt, ur, ru, fa, vi, ko, pl, hi, xx }
```

### 3. Add Language Code

In `src/lib/i18n.ts`, add your language to the Language type and languages object.

## Fallback Logic

The translation system uses a multi-level fallback approach:

1. **Language-level**: If a language file doesn't exist, English is used
2. **Key-level**: If a specific key doesn't exist in a language, the English value is used
3. **Nested key-level**: Works at any depth (e.g., `services.wifi.name`)

Example:
- `vi.app.title` exists → Use Vietnamese translation
- `vi.home.heroTitle` doesn't exist → Use English fallback
- `yue` language file doesn't exist → Use English for everything

## Using Translations

### In React Components

```typescript
import { useTranslation } from '@/hooks/use-translation'

function MyComponent() {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('app.title')}</h1>
      <p>{t('home.heroSubtitle')}</p>
      <p>{t('directory.showingResults', { count: 42 })}</p>
    </div>
  )
}
```

### Directly (Outside Components)

```typescript
import { getTranslation } from '@/locales'

const text = getTranslation('en', 'app.title')
const withParams = getTranslation('es', 'directory.showingResults', { count: 10 })
```

## Parameter Replacement

Use `{paramName}` in translation strings:

```typescript
// In translation file:
showingResults: 'Showing {count} libraries'

// In code:
t('directory.showingResults', { count: 42 })
// Result: "Showing 42 libraries"
```

Multiple parameters are supported:

```typescript
greeting: 'Hello {name}, you have {count} messages'

t('greeting', { name: 'Alice', count: 5 })
// Result: "Hello Alice, you have 5 messages"
```

## Best Practices

1. **Start with partial translations** - Translate the most visible UI elements first
2. **Test RTL languages** - Arabic, Urdu, Persian, and Pashto require right-to-left layout
3. **Check character length** - Translations may be longer than English; ensure UI accommodates
4. **Use native speakers** - Machine translations should be reviewed by native speakers
5. **Maintain consistency** - Use the same terms throughout (e.g., "Library" vs "Public Library")
6. **Include cultural context** - Some concepts may not translate directly

## Type Safety

All translation keys are type-checked using the `TranslationKeys` interface. TypeScript will:
- ✅ Warn you if you reference a non-existent key
- ✅ Autocomplete available keys as you type
- ✅ Ensure all required keys are present in full translations
- ✅ Allow partial translations with `Partial<TranslationKeys>`

## Backward Compatibility

The old import path still works for existing code:

```typescript
// Old way (still works)
import { getTranslation } from '@/lib/translations'

// New way (recommended for new code)
import { getTranslation } from '@/locales'
```

## Contributing Translations

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines on contributing translations.

Priority languages for community translation:
- Cantonese (yue)
- Tagalog (tl)
- Tamil (ta)
- Gujarati (gu)

All contributions are welcome!
