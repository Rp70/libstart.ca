import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useTranslation } from '@/hooks/use-translation'
import { 
  UserCircle, 
  UsersThree, 
  Lightbulb, 
  ChartLineUp,
  BookOpen,
  Laptop,
  Briefcase,
  Globe,
  Users,
  ShareNetwork,
  TrendUp,
  Heart
} from '@phosphor-icons/react'

export function LibraryChampion() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">{t('libraryChampion.title')}</h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          {t('libraryChampion.subtitle')}
        </p>
      </div>

      {/* What is a Library Champion */}
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary text-primary-foreground rounded-lg shrink-0">
            <Heart size={32} weight="duotone" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-3">{t('libraryChampion.whatIsTitle')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('libraryChampion.whatIsDescription')}
            </p>
          </div>
        </div>
      </Card>

      {/* Why Become a Champion */}
      <div>
        <h3 className="text-2xl font-bold mb-4">{t('libraryChampion.whyBecomeTitle')}</h3>
        <p className="text-muted-foreground mb-6">{t('libraryChampion.whyBecomeDescription')}</p>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <UsersThree size={24} className="text-primary shrink-0 mt-1" weight="duotone" />
              <p className="text-sm">{t('libraryChampion.reason1')}</p>
            </div>
          </Card>
          <Card className="p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <Lightbulb size={24} className="text-secondary shrink-0 mt-1" weight="duotone" />
              <p className="text-sm">{t('libraryChampion.reason2')}</p>
            </div>
          </Card>
          <Card className="p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <ShareNetwork size={24} className="text-accent shrink-0 mt-1" weight="duotone" />
              <p className="text-sm">{t('libraryChampion.reason3')}</p>
            </div>
          </Card>
          <Card className="p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <TrendUp size={24} className="text-sage shrink-0 mt-1" weight="duotone" />
              <p className="text-sm">{t('libraryChampion.reason4')}</p>
            </div>
          </Card>
        </div>
      </div>

      {/* How It Works */}
      <div>
        <h3 className="text-2xl font-bold mb-6">{t('libraryChampion.howItWorksTitle')}</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 relative overflow-hidden">
            <Badge className="absolute top-4 right-4 bg-primary">1</Badge>
            <div className="mb-4">
              <div className="p-3 bg-primary/10 rounded-lg inline-block">
                <BookOpen size={28} className="text-primary" weight="duotone" />
              </div>
            </div>
            <h4 className="font-semibold mb-2">{t('libraryChampion.step1Title')}</h4>
            <p className="text-sm text-muted-foreground">{t('libraryChampion.step1Description')}</p>
          </Card>

          <Card className="p-6 relative overflow-hidden">
            <Badge className="absolute top-4 right-4 bg-secondary">2</Badge>
            <div className="mb-4">
              <div className="p-3 bg-secondary/10 rounded-lg inline-block">
                <UserCircle size={28} className="text-secondary" weight="duotone" />
              </div>
            </div>
            <h4 className="font-semibold mb-2">{t('libraryChampion.step2Title')}</h4>
            <p className="text-sm text-muted-foreground">{t('libraryChampion.step2Description')}</p>
          </Card>

          <Card className="p-6 relative overflow-hidden">
            <Badge className="absolute top-4 right-4 bg-accent">3</Badge>
            <div className="mb-4">
              <div className="p-3 bg-accent/10 rounded-lg inline-block">
                <Users size={28} className="text-accent" weight="duotone" />
              </div>
            </div>
            <h4 className="font-semibold mb-2">{t('libraryChampion.step3Title')}</h4>
            <p className="text-sm text-muted-foreground">{t('libraryChampion.step3Description')}</p>
          </Card>

          <Card className="p-6 relative overflow-hidden">
            <Badge className="absolute top-4 right-4 bg-sage">4</Badge>
            <div className="mb-4">
              <div className="p-3 bg-sage/10 rounded-lg inline-block">
                <ChartLineUp size={28} className="text-sage" weight="duotone" />
              </div>
            </div>
            <h4 className="font-semibold mb-2">{t('libraryChampion.step4Title')}</h4>
            <p className="text-sm text-muted-foreground">{t('libraryChampion.step4Description')}</p>
          </Card>
        </div>
      </div>

      {/* Your Impact Matters */}
      <Card className="p-6 bg-gradient-to-br from-sage/10 to-accent/10 border-sage/30">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendUp size={24} className="text-sage" weight="duotone" />
          {t('libraryChampion.impactTitle')}
        </h3>
        <p className="text-muted-foreground mb-4">{t('libraryChampion.impactDescription')}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-2">
            <Laptop size={20} className="text-primary shrink-0 mt-0.5" weight="duotone" />
            <p className="text-sm">{t('libraryChampion.impact1')}</p>
          </div>
          <div className="flex items-start gap-2">
            <Globe size={20} className="text-secondary shrink-0 mt-0.5" weight="duotone" />
            <p className="text-sm">{t('libraryChampion.impact2')}</p>
          </div>
          <div className="flex items-start gap-2">
            <Briefcase size={20} className="text-accent shrink-0 mt-0.5" weight="duotone" />
            <p className="text-sm">{t('libraryChampion.impact3')}</p>
          </div>
          <div className="flex items-start gap-2">
            <BookOpen size={20} className="text-sage shrink-0 mt-0.5" weight="duotone" />
            <p className="text-sm">{t('libraryChampion.impact4')}</p>
          </div>
          <div className="flex items-start gap-2 sm:col-span-2">
            <UsersThree size={20} className="text-primary shrink-0 mt-0.5" weight="duotone" />
            <p className="text-sm">{t('libraryChampion.impact5')}</p>
          </div>
        </div>
      </Card>

      {/* Tips for Champions */}
      <div>
        <h3 className="text-xl font-semibold mb-4">{t('libraryChampion.tipsTitle')}</h3>
        <div className="space-y-3">
          <Card className="p-4 hover:bg-accent/5 transition-colors">
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="shrink-0 mt-0.5">1</Badge>
              <p className="text-sm">{t('libraryChampion.tip1')}</p>
            </div>
          </Card>
          <Card className="p-4 hover:bg-accent/5 transition-colors">
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="shrink-0 mt-0.5">2</Badge>
              <p className="text-sm">{t('libraryChampion.tip2')}</p>
            </div>
          </Card>
          <Card className="p-4 hover:bg-accent/5 transition-colors">
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="shrink-0 mt-0.5">3</Badge>
              <p className="text-sm">{t('libraryChampion.tip3')}</p>
            </div>
          </Card>
          <Card className="p-4 hover:bg-accent/5 transition-colors">
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="shrink-0 mt-0.5">4</Badge>
              <p className="text-sm">{t('libraryChampion.tip4')}</p>
            </div>
          </Card>
          <Card className="p-4 hover:bg-accent/5 transition-colors">
            <div className="flex items-start gap-3">
              <Badge variant="outline" className="shrink-0 mt-0.5">5</Badge>
              <p className="text-sm">{t('libraryChampion.tip5')}</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Get Started CTA */}
      <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
        <h3 className="text-2xl font-bold mb-3">{t('libraryChampion.getStartedTitle')}</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {t('libraryChampion.getStartedDescription')}
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          Navigate to "Library Champion tool" in the Connect menu to create your profile
        </p>
        <div className="flex items-center justify-center gap-2 text-primary">
          <UserCircle size={24} weight="duotone" />
          <span className="font-semibold">Connect → Library Champion tool</span>
        </div>
      </Card>
    </div>
  )
}
