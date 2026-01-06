import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/contexts/LanguageContext'
import { Language, languages } from '@/lib/i18n'
import { Translate, MagnifyingGlass } from '@phosphor-icons/react'

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredLanguages = (Object.keys(languages) as Language[]).filter((lang) => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      languages[lang].nativeName.toLowerCase().includes(query) ||
      languages[lang].name.toLowerCase().includes(query) ||
      lang.toLowerCase().includes(query)
    )
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default" className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground/20 h-11 px-4 text-base">
          <Translate size={20} />
          <span className="hidden sm:inline">{languages[language].nativeName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[280px] max-h-[400px]">
        <div className="p-2 pb-1 sticky top-0 bg-background z-10">
          <div className="relative">
            <MagnifyingGlass 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" 
              size={16} 
            />
            <Input
              placeholder="Search languages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
        <div className="overflow-y-auto max-h-[320px]">
          {filteredLanguages.length > 0 ? (
            filteredLanguages.map((lang) => (
              <DropdownMenuItem
                key={lang}
                onClick={() => {
                  setLanguage(lang)
                  setSearchQuery('')
                }}
                className={language === lang ? 'bg-accent py-3 text-base cursor-pointer' : 'py-3 text-base cursor-pointer'}
              >
                <div className="flex items-center justify-between w-full gap-3">
                  <span className="font-medium">{languages[lang].nativeName}</span>
                  <span className="text-sm text-muted-foreground">{languages[lang].name}</span>
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="py-6 text-center text-sm text-muted-foreground">
              No languages found
            </div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
