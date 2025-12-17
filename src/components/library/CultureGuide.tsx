import { Card } from '@/components/ui/card'
import { GlobeHemisphereWest, ShieldCheck, Coffee, Sparkle, DeviceMobile, TreeStructure } from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'
import { useAudience } from '@/contexts/AudienceContext'

export function CultureGuide() {
  const { t } = useTranslation()
  const { audience } = useAudience()

  if (audience === 'canadian') {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-3">{t('cultureGuide.canadianTitle')}</h2>
          <p className="text-muted-foreground text-lg">
            {t('cultureGuide.canadianSubtitle')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary text-secondary-foreground rounded-lg">
                <Sparkle size={28} weight="duotone" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">{t('cultureGuide.beyondBooksTitle')}</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    <strong>{t('cultureGuide.beyondBooksSurprise')}</strong> {t('cultureGuide.beyondBooksDescription')}
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>{t('cultureGuide.beyondBooksMuseum')}</li>
                    <li>{t('cultureGuide.beyondBooksTools')}</li>
                    <li>{t('cultureGuide.beyondBooksInstruments')}</li>
                    <li>{t('cultureGuide.beyondBooksSeeds')}</li>
                  </ul>
                  <p className="text-primary font-medium mt-4">
                    {t('cultureGuide.beyondBooksTip')}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                <DeviceMobile size={28} weight="duotone" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">{t('cultureGuide.digitalTitle')}</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    <strong>{t('cultureGuide.digitalNoCard')}</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>{t('cultureGuide.digitalEbooks')}</li>
                    <li>{t('cultureGuide.digitalAudiobooks')}</li>
                    <li>{t('cultureGuide.digitalMagazines')}</li>
                    <li>{t('cultureGuide.digitalMovies')}</li>
                  </ul>
                  <p className="text-primary font-medium mt-4">
                    {t('cultureGuide.digitalTip')}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-sage/10 to-sage/5 border-sage/20 md:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-sage text-sage-foreground rounded-lg">
                <TreeStructure size={28} weight="duotone" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">{t('cultureGuide.communityTitle')}</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    <strong>{t('cultureGuide.communityHub')}</strong>
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-accent text-lg">✓</span>
                      <span>{t('cultureGuide.communityMakers')}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent text-lg">✓</span>
                      <span>{t('cultureGuide.communityJobs')}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent text-lg">✓</span>
                      <span>{t('cultureGuide.communityBusiness')}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent text-lg">✓</span>
                      <span>{t('cultureGuide.communityMeet')}</span>
                    </li>
                  </ul>
                  <p className="text-primary font-medium mt-4">
                    {t('cultureGuide.communityTip')}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-3">{t('cultureGuide.title')}</h2>
        <p className="text-muted-foreground text-lg">
          {t('cultureGuide.subtitle')}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-secondary text-secondary-foreground rounded-lg">
              <GlobeHemisphereWest size={28} weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">{t('cultureGuide.noiseTitle')}</h3>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  <strong>{t('cultureGuide.noiseSurprise')}</strong> {t('cultureGuide.noiseDescription')}
                </p>
                <p>
                  {t('cultureGuide.noiseHub')} <strong>{t('cultureGuide.noiseCommunityHub')}</strong>{t('cultureGuide.noiseMightSee')}
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>{t('cultureGuide.noiseChildren')}</li>
                  <li>{t('cultureGuide.noiseTeens')}</li>
                  <li>{t('cultureGuide.noisePeople')}</li>
                  <li>{t('cultureGuide.noiseEvents')}</li>
                </ul>
                <p className="text-primary font-medium mt-4">
                  {t('cultureGuide.noiseQuiet')}
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary text-primary-foreground rounded-lg">
              <ShieldCheck size={28} weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">{t('cultureGuide.trustTitle')}</h3>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  <strong>{t('cultureGuide.trustYourRight')}</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>{t('cultureGuide.trustNoTracking')}</li>
                  <li>{t('cultureGuide.trustNoSharing')}</li>
                  <li>{t('cultureGuide.trustNoJudgment')}</li>
                  <li>{t('cultureGuide.trustFreedom')}</li>
                </ul>
                <p className="text-primary font-medium mt-4">
                  {t('cultureGuide.trustSafe')}
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow bg-gradient-to-br from-sage/10 to-sage/5 border-sage/20 md:col-span-2 lg:col-span-1">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-sage text-sage-foreground rounded-lg">
              <Coffee size={28} weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">{t('cultureGuide.comfortTitle')}</h3>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  <strong>{t('cultureGuide.comfortWelcome')}</strong>
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span>{t('cultureGuide.comfortNap')}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span>{t('cultureGuide.comfortCoffee')}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span>{t('cultureGuide.comfortPhone')}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span>{t('cultureGuide.comfortStay')}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent text-lg">✓</span>
                    <span>{t('cultureGuide.comfortBathroom')}</span>
                  </li>
                </ul>
                <p className="text-primary font-medium mt-4">
                  {t('cultureGuide.comfortRespect')}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
