import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/use-translation'
import { LanguageSelector } from '@/components/library/LanguageSelector'
import { CultureGuide } from '@/components/library/CultureGuide'
import { VisualTours } from '@/components/library/VisualTours'
import { HiddenMenu } from '@/components/library/HiddenMenu'
import { LibraryBingo } from '@/components/library/LibraryBingo'
import { NeighborhoodHacks } from '@/components/library/NeighborhoodHacks'
import { LibraryGlossary } from '@/components/library/LibraryGlossary'
import { VolunteerProfile } from '@/components/library/VolunteerProfile'
import { LibraryDirectory } from '@/components/library/LibraryDirectory'
import { LibraryServices } from '@/components/library/LibraryServices'
import { LibraryEvents } from '@/components/library/LibraryEvents'
import { Testimonials } from '@/components/library/Testimonials'
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
  Quotes
} from '@phosphor-icons/react'

function AppContent() {
  const [activeTab, setActiveTab] = useState('culture')
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6 px-6 md:px-8 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                {t('app.title')}
              </h1>
              <p className="text-primary-foreground/90 text-base md:text-lg">
                {t('app.subtitle')}
              </p>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 lg:grid-cols-11 gap-2 h-auto bg-muted/50 p-2 mb-8">
            <TabsTrigger 
              value="culture" 
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <BookOpen size={20} />
              <span className="text-xs md:text-sm">{t('navigation.culture')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tours"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Camera size={20} />
              <span className="text-xs md:text-sm">{t('navigation.tours')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="menu"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Lightbulb size={20} />
              <span className="text-xs md:text-sm">{t('navigation.menu')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="bingo"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              <CheckSquare size={20} />
              <span className="text-xs md:text-sm">{t('navigation.bingo')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="neighborhood"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <MapPin size={20} />
              <span className="text-xs md:text-sm">{t('navigation.neighborhood')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="glossary"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <ChatCircleDots size={20} />
              <span className="text-xs md:text-sm">{t('navigation.glossary')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="directory"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-sage data-[state=active]:text-sage-foreground"
            >
              <ListMagnifyingGlass size={20} />
              <span className="text-xs md:text-sm">{t('navigation.directory')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="services"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Stack size={20} />
              <span className="text-xs md:text-sm">{t('navigation.services')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="events"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              <CalendarBlank size={20} />
              <span className="text-xs md:text-sm">{t('navigation.events')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="testimonials"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
            >
              <Quotes size={20} />
              <span className="text-xs md:text-sm">{t('navigation.stories')}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="volunteer"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
            >
              <UserCircle size={20} />
              <span className="text-xs md:text-sm">{t('navigation.volunteer')}</span>
            </TabsTrigger>
          </TabsList>

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

          <TabsContent value="neighborhood" className="mt-0">
            <NeighborhoodHacks />
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
        </Tabs>
      </main>

      <footer className="bg-muted mt-16 py-8 px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="text-sm">
            {t('app.footer')}
          </p>
          <p className="text-xs mt-2">
            {t('app.footerDisclaimer')}
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
