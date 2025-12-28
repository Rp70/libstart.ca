import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/use-translation'
import { LanguageSelector } from '@/components/library/LanguageSelector'
import { CultureGuide } from '@/components/library/CultureGuide'
import { VisualTours } from '@/components/library/VisualTours'
import { HiddenMenu } from '@/components/library/HiddenMenu'
import { LibraryBingo } from '@/components/library/LibraryBingo'
import { LibraryGlossary } from '@/components/library/LibraryGlossary'
import { VolunteerProfile } from '@/components/library/VolunteerProfile'
import { LibraryDirectory } from '@/components/library/LibraryDirectory'
import { LibraryServices } from '@/components/library/LibraryServices'
import { LibraryEvents } from '@/components/library/LibraryEvents'
import { Testimonials } from '@/components/library/Testimonials'
import { BookClubFinder } from '@/components/library/BookClubFinder'
import { AccessibilityGuide } from '@/components/library/AccessibilityGuide'
import { CareerPathways } from '@/components/library/CareerPathways'
import { SpecialCollections } from '@/components/library/SpecialCollections'
import { 
  BookOpen, 
  Camera, 
  Lightbulb, 
  CheckSquare, 
  MapPin, 
  ChatCircleDots, 
  UserCircle,
  ListMagnifyingGlass,
  Stack,
  CalendarBlank,
  Quotes,
  BookBookmark,
  Wheelchair,
  SpeakerSimpleSlash,
  TrendUp,
  Vault
} from '@phosphor-icons/react'

function AppContent() {
  const [activeTab, setActiveTab] = useState('culture')
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 sm:py-6 px-4 sm:px-6 md:px-8 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="flex-1 w-full sm:w-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-1 sm:mb-2">
                {t('app.title')}
              </h1>
              <p className="text-primary-foreground/90 text-sm sm:text-base md:text-lg italic">
                {t('app.tagline')}
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="mb-4 sm:mb-6 md:mb-8 -mx-4 sm:mx-0">
            <TabsList className="w-full flex md:grid md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-14 gap-1 sm:gap-1.5 md:gap-2 h-auto bg-muted/50 p-1.5 sm:p-2 overflow-x-auto md:overflow-x-visible scrollbar-hide">
            <TabsTrigger 
              value="culture" 
              className="flex flex-col items-center gap-1 py-2.5 px-3 md:py-3 md:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap shrink-0 md:flex-1"
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-xs leading-tight text-center">{t('navigation.culture')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tours"
              className="flex flex-col items-center gap-1 py-2.5 px-3 md:py-3 md:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap shrink-0 md:flex-1"
            >
              <Camera className="w-5 h-5" />
              <span className="text-xs leading-tight text-center">{t('navigation.tours')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="menu"
              className="flex flex-col items-center gap-1 py-2.5 px-3 md:py-3 md:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap shrink-0 md:flex-1"
            >
              <Lightbulb className="w-5 h-5" />
              <span className="text-xs leading-tight text-center">{t('navigation.menu')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="bingo"
              className="flex flex-col items-center gap-1 py-2.5 px-3 md:py-3 md:px-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground whitespace-nowrap shrink-0 md:flex-1"
            >
              <CheckSquare className="w-5 h-5" />
              <span className="text-xs leading-tight text-center">{t('navigation.bingo')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="glossary"
              className="flex flex-col items-center gap-1 py-2.5 px-3 md:py-3 md:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap shrink-0 md:flex-1"
            >
              <ChatCircleDots className="w-5 h-5" />
              <span className="text-xs leading-tight text-center">{t('navigation.glossary')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="directory"
              className="flex flex-col items-center gap-1 py-2.5 px-3 md:py-3 md:px-2 data-[state=active]:bg-sage data-[state=active]:text-sage-foreground whitespace-nowrap shrink-0 md:flex-1"
            >
              <ListMagnifyingGlass className="w-5 h-5" />
              <span className="text-xs leading-tight text-center">{t('navigation.directory')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="services"
              className="flex flex-col items-center gap-1 py-2.5 px-3 md:py-3 md:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap shrink-0 md:flex-1"
            >
              <Stack className="w-5 h-5" />
              <span className="text-xs leading-tight text-center">{t('navigation.services')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="events"
              className="flex flex-col items-center gap-1 py-2.5 px-3 md:py-3 md:px-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground whitespace-nowrap shrink-0 md:flex-1"
            >
              <CalendarBlank className="w-5 h-5" />
              <span className="text-xs leading-tight text-center">{t('navigation.events')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="testimonials"
              className="flex flex-col items-center gap-1 py-2.5 px-3 md:py-3 md:px-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground whitespace-nowrap shrink-0 md:flex-1"
            >
              <Quotes className="w-5 h-5" />
              <span className="text-xs leading-tight text-center">{t('navigation.stories')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="volunteer"
              className="flex flex-col items-center gap-1 py-2.5 px-3 md:py-3 md:px-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground whitespace-nowrap shrink-0 md:flex-1"
            >
              <UserCircle className="w-5 h-5" />
              <span className="text-xs leading-tight text-center">{t('navigation.volunteer')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="bookclubs"
              className="flex flex-col items-center gap-1 py-2.5 px-3 md:py-3 md:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap shrink-0 md:flex-1"
            >
              <BookBookmark className="w-5 h-5" />
              <span className="text-xs leading-tight text-center">{t('navigation.bookClubs')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="accessibility"
              className="flex flex-col items-center gap-1 py-2.5 px-3 md:py-3 md:px-2 data-[state=active]:bg-sage data-[state=active]:text-sage-foreground whitespace-nowrap shrink-0 md:flex-1"
            >
              <Wheelchair className="w-5 h-5" />
              <span className="text-xs leading-tight text-center">{t('navigation.accessibility')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="careers"
              className="flex flex-col items-center gap-1 py-2.5 px-3 md:py-3 md:px-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground whitespace-nowrap shrink-0 md:flex-1"
            >
              <TrendUp className="w-5 h-5" />
              <span className="text-xs leading-tight text-center">{t('navigation.careers')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="collections"
              className="flex flex-col items-center gap-1 py-2.5 px-3 md:py-3 md:px-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground whitespace-nowrap shrink-0 md:flex-1"
            >
              <Vault className="w-5 h-5" />
              <span className="text-xs leading-tight text-center">{t('navigation.collections')}</span>
            </TabsTrigger>
          </TabsList>
          </div>

          <TabsContent value="culture" className="mt-0">
            <CultureGuide />
          </TabsContent>

          <TabsContent value="tours" className="mt-0">
            <VisualTours />
          </TabsContent>

          <TabsContent value="menu" className="mt-0">
            <HiddenMenu />
          </TabsContent>

          <TabsContent value="bingo" className="mt-0">
            <LibraryBingo />
          </TabsContent>

          <TabsContent value="glossary" className="mt-0">
            <LibraryGlossary />
          </TabsContent>

          <TabsContent value="directory" className="mt-0">
            <LibraryDirectory />
          </TabsContent>

          <TabsContent value="services" className="mt-0">
            <LibraryServices />
          </TabsContent>

          <TabsContent value="events" className="mt-0">
            <LibraryEvents />
          </TabsContent>

          <TabsContent value="testimonials" className="mt-0">
            <Testimonials />
          </TabsContent>

          <TabsContent value="volunteer" className="mt-0">
            <VolunteerProfile />
          </TabsContent>

          <TabsContent value="bookclubs" className="mt-0">
            <BookClubFinder />
          </TabsContent>

          <TabsContent value="accessibility" className="mt-0">
            <AccessibilityGuide />
          </TabsContent>

          <TabsContent value="careers" className="mt-0">
            <CareerPathways />
          </TabsContent>

          <TabsContent value="collections" className="mt-0">
            <SpecialCollections />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-muted mt-8 sm:mt-12 md:mt-16 py-6 sm:py-8 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="text-xs sm:text-sm">
            {t('app.footer')}
          </p>
          <p className="text-[10px] sm:text-xs mt-2">
            {t('app.footerDisclaimer')}
          </p>
          <p className="text-xs sm:text-sm mt-3 sm:mt-4 font-medium bg-muted-foreground/10 p-3 sm:p-4 rounded-lg">
            {t('app.footerNote')}
          </p>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
