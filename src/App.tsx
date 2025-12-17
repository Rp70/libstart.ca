import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CultureGuide } from '@/components/library/CultureGuide'
import { VisualTours } from '@/components/library/VisualTours'
import { HiddenMenu } from '@/components/library/HiddenMenu'
import { LibraryBingo } from '@/components/library/LibraryBingo'
import { NeighborhoodHacks } from '@/components/library/NeighborhoodHacks'
import { LibraryGlossary } from '@/components/library/LibraryGlossary'
import { VolunteerProfile } from '@/components/library/VolunteerProfile'
import { 
  BookOpen, 
  Camera, 
  Lightbulb, 
  CheckSquare, 
  MapPin, 
  ChatCircleDots, 
  UserCircle 
} from '@phosphor-icons/react'

function App() {
  const [activeTab, setActiveTab] = useState('culture')

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6 px-6 md:px-8 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Your Library Companion
          </h1>
          <p className="text-primary-foreground/90 text-base md:text-lg">
            A friendly guide for newcomers to Canadian libraries
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 h-auto bg-muted/50 p-2 mb-8">
            <TabsTrigger 
              value="culture" 
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <BookOpen size={20} />
              <span className="text-xs md:text-sm">Culture</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tours"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Camera size={20} />
              <span className="text-xs md:text-sm">Tours</span>
            </TabsTrigger>
            <TabsTrigger 
              value="menu"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Lightbulb size={20} />
              <span className="text-xs md:text-sm">Hidden Menu</span>
            </TabsTrigger>
            <TabsTrigger 
              value="bingo"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              <CheckSquare size={20} />
              <span className="text-xs md:text-sm">Bingo</span>
            </TabsTrigger>
            <TabsTrigger 
              value="neighborhood"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <MapPin size={20} />
              <span className="text-xs md:text-sm">Local Tips</span>
            </TabsTrigger>
            <TabsTrigger 
              value="glossary"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <ChatCircleDots size={20} />
              <span className="text-xs md:text-sm">Glossary</span>
            </TabsTrigger>
            <TabsTrigger 
              value="volunteer"
              className="flex flex-col items-center gap-1 py-3 px-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
            >
              <UserCircle size={20} />
              <span className="text-xs md:text-sm">Volunteer</span>
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

          <TabsContent value="volunteer" className="mt-0">
            <VolunteerProfile />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-muted mt-16 py-8 px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="text-sm">
            Created with care for newcomers to Canada 🇨🇦
          </p>
          <p className="text-xs mt-2">
            This is an unofficial guide. For official information, visit your local Fraser Valley Regional Library branch.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
