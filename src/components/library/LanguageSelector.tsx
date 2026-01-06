import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/contexts/LanguageContext'
import { Language, languages } from '@/lib/i18n'
import { Translate } from '@phosphor-icons/react'

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default" className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground/20 h-11 px-4 text-base">
          <Translate size={20} />
          <span className="hidden sm:inline">{languages[language].nativeName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[220px]">
        {(Object.keys(languages) as Language[]).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className={language === lang ? 'bg-accent py-3 text-base cursor-pointer' : 'py-3 text-base cursor-pointer'}
          >
            <div className="flex items-center justify-between w-full gap-3">
              <span className="font-medium">{languages[lang].nativeName}</span>
              <span className="text-sm text-muted-foreground">{languages[lang].name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
