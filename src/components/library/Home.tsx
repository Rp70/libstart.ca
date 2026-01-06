import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Heart,
  GitBranch,
  Users,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Globe
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

export function Home() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t('home.heroTitle')}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 mb-6 sm:mb-8">
          {t('home.heroSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto gap-2"
            onClick={() => {
              const directoryTab = document.querySelector('[value="directory"]') as HTMLElement
              if (directoryTab) directoryTab.click()
            }}
          >
            <BookOpen size={20} />
            {t('home.findLibrary')}
            <ArrowRight size={20} />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto gap-2"
            asChild
          >
            <a 
              href="https://github.com/Rp70/libstart.ca" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GitBranch size={20} />
              {t('home.contribute')}
            </a>
          </Button>
        </div>
      </div>

      {/* Purpose Section */}
      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
          <Heart size={24} className="sm:w-7 sm:h-7 text-primary" weight="duotone" />
          {t('home.purposeTitle')}
        </h2>
        <div className="space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed">
          <p>{t('home.purposeIntro')}</p>
          
          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                <CheckCircle size={20} className="text-primary" weight="duotone" />
                {t('home.forNewcomersTitle')}
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.forNewcomers1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.forNewcomers2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.forNewcomers3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.forNewcomers4')}</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                <Users size={20} className="text-primary" weight="duotone" />
                {t('home.forLocalUsersTitle')}
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.forLocalUsers1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.forLocalUsers2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.forLocalUsers3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.forLocalUsers4')}</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                <Globe size={20} className="text-primary" weight="duotone" />
                {t('home.forCanadaTitle')}
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.forCanada1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.forCanada2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.forCanada3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.forCanada4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Community Impact Section - Moved here */}
      <Card className="bg-gradient-to-br from-sage/20 to-accent/20 p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
          <Users size={24} className="sm:w-7 sm:h-7 text-primary" weight="duotone" />
          {t('home.impactTitle')}
        </h2>
        <div className="space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed">
          <p className="text-lg font-medium">{t('home.impactIntro')}</p>
          
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            <div className="bg-background/50 p-4 sm:p-5 rounded-lg space-y-3">
              <h3 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                <CheckCircle size={20} className="text-primary" weight="duotone" />
                {t('home.impactForNewcomersTitle')}
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.impactForNewcomers1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.impactForNewcomers2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.impactForNewcomers3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.impactForNewcomers4')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-background/50 p-4 sm:p-5 rounded-lg space-y-3">
              <h3 className="font-semibold text-base sm:text-lg flex items-center gap-2">
                <CheckCircle size={20} className="text-primary" weight="duotone" />
                {t('home.impactForLocalUsersTitle')}
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.impactForLocalUsers1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg shrink-0">✓</span>
                  <span>{t('home.impactForLocalUsers2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart size={16} className="text-primary mt-1 shrink-0" weight="fill" />
                  <span>{t('home.impactForLocalUsers3')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart size={16} className="text-primary mt-1 shrink-0" weight="fill" />
                  <span>{t('home.impactForLocalUsers4')}</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="font-medium pt-3 sm:pt-4 text-center text-lg">
            {t('home.impactClosing')}
          </p>
        </div>
      </Card>

      {/* How to Contribute Section */}
      <Card className="p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
          <GitBranch size={24} className="sm:w-7 sm:h-7 text-primary" weight="duotone" />
          {t('home.contributeTitle')}
        </h2>
        <div className="space-y-4 sm:space-y-5">
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            {t('home.contributeIntro')}
          </p>
          
          <div className="grid gap-4 sm:gap-5">
            <div className="flex gap-3 sm:gap-4">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">{t('home.contributeStep1Title')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t('home.contributeStep1')}</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">{t('home.contributeStep2Title')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t('home.contributeStep2')}</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">{t('home.contributeStep3Title')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t('home.contributeStep3')}</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">{t('home.contributeStep4Title')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t('home.contributeStep4')}</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">{t('home.contributeStep5Title')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t('home.contributeStep5')}</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                6
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">{t('home.contributeStep6Title')}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{t('home.contributeStep6')}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 sm:pt-6 border-t border-border">
            <Button 
              asChild 
              className="w-full sm:w-auto gap-2"
              size="lg"
            >
              <a 
                href="https://github.com/Rp70/libstart.ca" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GitBranch size={20} />
                {t('home.viewOnGitHub')}
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </div>
      </Card>

      {/* Get Started Section */}
      <Card className="p-6 sm:p-8 text-center bg-primary/5">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          {t('home.getStartedTitle')}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
          {t('home.getStartedSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
          <Button 
            size="lg" 
            className="w-full sm:w-auto gap-2"
            onClick={() => {
              const directoryTab = document.querySelector('[data-tab="directory"]') as HTMLElement
              if (directoryTab) directoryTab.click()
            }}
          >
            <BookOpen size={20} />
            {t('home.findYourLibrary')}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto gap-2"
            onClick={() => {
              const cultureTab = document.querySelector('[data-tab="culture"]') as HTMLElement
              if (cultureTab) cultureTab.click()
            }}
          >
            {t('home.learnMore')}
            <ArrowRight size={20} />
          </Button>
        </div>
      </Card>
    </div>
  )
}
