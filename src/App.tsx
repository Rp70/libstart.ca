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
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
              {t('app.title')}
            </h1>
            <p className="text-sm sm:text-base md:text-lg opacity-90">
              {t('app.tagline')}
            </p>
          </div>
          <div className="w-full sm:w-auto">
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-14 gap-1.5 sm:gap-2 h-auto bg-muted/50 p-1.5 sm:p-2 mb-6 sm:mb-8 overflow-x-auto">
            <TabsTrigger 
              value="culture" 
              className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-h-[60px] sm:min-h-[70px]"
            >
              <BookOpen size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">{t('navigation.culture')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tours" 
              className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-h-[60px] sm:min-h-[70px]"
            >
              <Camera size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">{t('navigation.tours')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="hiddenmenu" 
              className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-h-[60px] sm:min-h-[70px]"
            >
              <Lightbulb size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">{t('navigation.hidden')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="bingo" 
              className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-h-[60px] sm:min-h-[70px]"
            >
              <CheckSquare size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">{t('navigation.bingo')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="glossary" 
              className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-h-[60px] sm:min-h-[70px]"
            >
              <ChatCircleDots size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">{t('navigation.glossary')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="directory" 
              className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-h-[60px] sm:min-h-[70px]"
            >
              <MapPin size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">{t('navigation.directory')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="services" 
              className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-h-[60px] sm:min-h-[70px]"
            >
              <ListMagnifyingGlass size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">{t('navigation.services')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="events" 
              className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-h-[60px] sm:min-h-[70px]"
            >
              <CalendarBlank size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">{t('navigation.events')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="testimonials" 
              className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-h-[60px] sm:min-h-[70px]"
            >
              <Quotes size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">{t('navigation.testimonials')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="volunteer" 
              className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-h-[60px] sm:min-h-[70px]"
            >
              <UserCircle size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">{t('navigation.volunteer')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="bookclubs" 
              className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-h-[60px] sm:min-h-[70px]"
            >
              <BookBookmark size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">{t('navigation.bookclubs')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="accessibility" 
              className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-h-[60px] sm:min-h-[70px]"
            >
              <Wheelchair size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">{t('navigation.accessibility')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="careers" 
              className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-h-[60px] sm:min-h-[70px]"
            >
              <TrendUp size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">{t('navigation.careers')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="collections" 
              className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1 sm:px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground min-h-[60px] sm:min-h-[70px]"
            >
              <Vault size={18} className="sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs md:text-sm leading-tight text-center">{t('navigation.collections')}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="culture" className="mt-0">
            <CultureGuide />
          </TabsContent>

          <TabsContent value="tours" className="mt-0">
            <VisualTours />
          </TabsContent>

          <TabsContent value="hiddenmenu" className="mt-0">
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

      <footer className="bg-muted mt-12 sm:mt-16 py-6 sm:py-8 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
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
