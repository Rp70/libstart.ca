import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { useTranslation } from '@/hooks/use-translation'
import { LanguageSelector } from '@/components/library/LanguageSelector'
import LibStartLogo from '@/components/ui/LibStartLogo'
import { CultureGuide } from '@/components/library/CultureGuide'
import { VisualTours } from '@/components/library/VisualTours'
import { LibraryBingo } from '@/components/library/LibraryBingo'
import { LibraryGlossary } from '@/components/library/LibraryGlossary'
import { VolunteerProfile } from '@/components/library/VolunteerProfile'
import { LibraryDirectory } from '@/components/library/LibraryDirectory'
import { LibraryServices } from '@/components/library/LibraryServices'
import { LibraryEvents } from '@/components/library/LibraryEvents'
import { AccessibilityGuide } from '@/components/library/AccessibilityGuide'
import { CareerPathways } from '@/components/library/CareerPathways'
import { SpecialCollections } from '@/components/library/SpecialCollections'
import { 
  BookOpen, 
  Camera, 
  CheckSquare, 
  MapPin, 
  ChatCircleDots, 
  UserCircle,
  ListMagnifyingGlass,
  CalendarBlank,
  Wheelchair,
  TrendUp,
  Vault,
  List,
  CaretDown
} from '@phosphor-icons/react'

function AppContent() {
  const [activeTab, setActiveTab] = useState('culture')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <header className="bg-primary text-primary-foreground shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Logo Section */}
            <div className="py-4 sm:py-5 border-b border-primary-foreground/10">
              <LibStartLogo className="w-64 md:w-80" />
              <p className="text-sm sm:text-base md:text-lg opacity-90 mt-2">
                {t('app.tagline')}
              </p>
            </div>

            {/* Mobile Navigation - Dropdown Menu */}
            <div className="lg:hidden py-4 flex items-center justify-between gap-3">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex-1 justify-between bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-11">
                    <span className="flex items-center gap-2">
                      <List size={20} />
                      {t('navigation.' + activeTab)}
                    </span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] sm:w-[320px]">
                <div className="flex flex-col gap-2 mt-6">
                  <Button
                    variant={activeTab === 'culture' ? 'default' : 'ghost'}
                    className="justify-start gap-2"
                    onClick={() => { setActiveTab('culture'); setMobileMenuOpen(false) }}
                  >
                    <BookOpen size={18} />
                    {t('navigation.culture')}
                  </Button>
                  <Button
                    variant={activeTab === 'tours' ? 'default' : 'ghost'}
                    className="justify-start gap-2"
                    onClick={() => { setActiveTab('tours'); setMobileMenuOpen(false) }}
                  >
                    <Camera size={18} />
                    {t('navigation.tours')}
                  </Button>
                  <Button
                    variant={activeTab === 'bingo' ? 'default' : 'ghost'}
                    className="justify-start gap-2"
                    onClick={() => { setActiveTab('bingo'); setMobileMenuOpen(false) }}
                  >
                    <CheckSquare size={18} />
                    {t('navigation.bingo')}
                  </Button>
                  <Button
                    variant={activeTab === 'glossary' ? 'default' : 'ghost'}
                    className="justify-start gap-2"
                    onClick={() => { setActiveTab('glossary'); setMobileMenuOpen(false) }}
                  >
                    <ChatCircleDots size={18} />
                    {t('navigation.glossary')}
                  </Button>
                  <Button
                    variant={activeTab === 'directory' ? 'default' : 'ghost'}
                    className="justify-start gap-2"
                    onClick={() => { setActiveTab('directory'); setMobileMenuOpen(false) }}
                  >
                    <MapPin size={18} />
                    {t('navigation.directory')}
                  </Button>
                  <Button
                    variant={activeTab === 'services' ? 'default' : 'ghost'}
                    className="justify-start gap-2"
                    onClick={() => { setActiveTab('services'); setMobileMenuOpen(false) }}
                  >
                    <ListMagnifyingGlass size={18} />
                    {t('navigation.services')}
                  </Button>
                  <Button
                    variant={activeTab === 'events' ? 'default' : 'ghost'}
                    className="justify-start gap-2"
                    onClick={() => { setActiveTab('events'); setMobileMenuOpen(false) }}
                  >
                    <CalendarBlank size={18} />
                    {t('navigation.events')}
                  </Button>
                  <Button
                    variant={activeTab === 'volunteer' ? 'default' : 'ghost'}
                    className="justify-start gap-2"
                    onClick={() => { setActiveTab('volunteer'); setMobileMenuOpen(false) }}
                  >
                    <UserCircle size={18} />
                    {t('navigation.volunteer')}
                  </Button>
                  <Button
                    variant={activeTab === 'accessibility' ? 'default' : 'ghost'}
                    className="justify-start gap-2"
                    onClick={() => { setActiveTab('accessibility'); setMobileMenuOpen(false) }}
                  >
                    <Wheelchair size={18} />
                    {t('navigation.accessibility')}
                  </Button>
                  <Button
                    variant={activeTab === 'careers' ? 'default' : 'ghost'}
                    className="justify-start gap-2"
                    onClick={() => { setActiveTab('careers'); setMobileMenuOpen(false) }}
                  >
                    <TrendUp size={18} />
                    {t('navigation.careers')}
                  </Button>
                  <Button
                    variant={activeTab === 'collections' ? 'default' : 'ghost'}
                    className="justify-start gap-2"
                    onClick={() => { setActiveTab('collections'); setMobileMenuOpen(false) }}
                  >
                    <Vault size={18} />
                    {t('navigation.collections')}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            <LanguageSelector />
          </div>

          {/* Desktop Navigation - Grouped Dropdowns with Language Selector */}
          <div className="hidden lg:flex items-center justify-between py-4">
            <div className="flex gap-3">
            {/* Discover */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 text-primary-foreground hover:bg-primary-foreground/10 h-11 px-4 text-base">
                  <BookOpen size={20} />
                  {t('groups.discover')}
                  <CaretDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[200px]">
                <DropdownMenuItem onClick={() => setActiveTab('culture')} className={activeTab === 'culture' ? 'bg-accent' : '' + ' py-3 text-base cursor-pointer'}>
                  <BookOpen size={18} className="mr-3" />
                  {t('navigation.culture')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab('tours')} className={activeTab === 'tours' ? 'bg-accent' : '' + ' py-3 text-base cursor-pointer'}>
                  <Camera size={18} className="mr-3" />
                  {t('navigation.tours')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab('collections')} className={activeTab === 'collections' ? 'bg-accent' : '' + ' py-3 text-base cursor-pointer'}>
                  <Vault size={18} className="mr-3" />
                  {t('navigation.collections')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Learn */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 text-primary-foreground hover:bg-primary-foreground/10 h-11 px-4 text-base">
                  <CheckSquare size={20} />
                  {t('groups.learn')}
                  <CaretDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[200px]">
                <DropdownMenuItem onClick={() => setActiveTab('bingo')} className={activeTab === 'bingo' ? 'bg-accent' : '' + ' py-3 text-base cursor-pointer'}>
                  <CheckSquare size={18} className="mr-3" />
                  {t('navigation.bingo')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab('glossary')} className={activeTab === 'glossary' ? 'bg-accent' : '' + ' py-3 text-base cursor-pointer'}>
                  <ChatCircleDots size={18} className="mr-3" />
                  {t('navigation.glossary')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Access */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 text-primary-foreground hover:bg-primary-foreground/10 h-11 px-4 text-base">
                  <MapPin size={20} />
                  {t('groups.access')}
                  <CaretDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[200px]">
                <DropdownMenuItem onClick={() => setActiveTab('directory')} className={activeTab === 'directory' ? 'bg-accent' : '' + ' py-3 text-base cursor-pointer'}>
                  <MapPin size={18} className="mr-3" />
                  {t('navigation.directory')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab('services')} className={activeTab === 'services' ? 'bg-accent' : '' + ' py-3 text-base cursor-pointer'}>
                  <ListMagnifyingGlass size={18} className="mr-3" />
                  {t('navigation.services')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab('accessibility')} className={activeTab === 'accessibility' ? 'bg-accent' : '' + ' py-3 text-base cursor-pointer'}>
                  <Wheelchair size={18} className="mr-3" />
                  {t('navigation.accessibility')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Connect */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 text-primary-foreground hover:bg-primary-foreground/10 h-11 px-4 text-base">
                  <CalendarBlank size={20} />
                  {t('groups.connect')}
                  <CaretDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[200px]">
                <DropdownMenuItem onClick={() => setActiveTab('events')} className={activeTab === 'events' ? 'bg-accent' : '' + ' py-3 text-base cursor-pointer'}>
                  <CalendarBlank size={18} className="mr-3" />
                  {t('navigation.events')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab('volunteer')} className={activeTab === 'volunteer' ? 'bg-accent' : '' + ' py-3 text-base cursor-pointer'}>
                  <UserCircle size={18} className="mr-3" />
                  {t('navigation.volunteer')}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveTab('careers')} className={activeTab === 'careers' ? 'bg-accent' : '' + ' py-3 text-base cursor-pointer'}>
                  <TrendUp size={18} className="mr-3" />
                  {t('navigation.careers')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            </div>
            
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
        <div className="mt-0">
            <TabsContent value="culture" className="mt-0">
              <CultureGuide />
            </TabsContent>

            <TabsContent value="tours" className="mt-0">
              <VisualTours />
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

            <TabsContent value="volunteer" className="mt-0">
              <VolunteerProfile />
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
          </div>
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
      </Tabs>
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
