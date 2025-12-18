import { useState, useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { 
  CalendarBlank, 
  Clock, 
  MapPin, 
  Users, 
  Baby,
  GraduationCap,
  Laptop,
  Book,
  MusicNotes,
  Palette,
  Heart,
  Globe,
  Barbell,
  Coffee
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'
import { libraries } from '@/lib/libraryData'

type EventCategory = 'children' | 'teens' | 'adults' | 'seniors' | 'newcomers' | 'all-ages'

type LibraryEvent = {
  id: string
  title: string
  description: string
  libraryId: string
  category: EventCategory
  date: string
  time: string
  recurring: boolean
  recurringPattern?: string
  icon: any
  ageGroup?: string
  registration?: boolean
}

const sampleEvents: LibraryEvent[] = [
  {
    id: 'evt-1',
    title: 'Baby Rhyme Time',
    description: 'Songs, rhymes, and gentle bouncing for babies 0-18 months and their caregivers.',
    libraryId: 'vpl-central',
    category: 'children',
    date: '2024-02-05',
    time: '10:00 AM - 10:30 AM',
    recurring: true,
    recurringPattern: 'Every Monday',
    icon: Baby,
    ageGroup: '0-18 months'
  },
  {
    id: 'evt-2',
    title: 'Newcomer English Conversation Circle',
    description: 'Practice your English in a friendly, welcoming environment. All levels welcome!',
    libraryId: 'tpl-reference',
    category: 'newcomers',
    date: '2024-02-06',
    time: '2:00 PM - 3:30 PM',
    recurring: true,
    recurringPattern: 'Every Tuesday',
    icon: Globe,
    registration: false
  },
  {
    id: 'evt-3',
    title: 'Teen Gaming Night',
    description: 'Join us for video games, board games, and snacks! Ages 13-18.',
    libraryId: 'cpl-central',
    category: 'teens',
    date: '2024-02-07',
    time: '6:00 PM - 8:00 PM',
    recurring: true,
    recurringPattern: 'Every Wednesday',
    icon: Laptop,
    ageGroup: '13-18 years'
  },
  {
    id: 'evt-4',
    title: 'Senior Tech Help',
    description: 'One-on-one help with smartphones, tablets, and computers. Book your 30-minute session.',
    libraryId: 'hpl-central',
    category: 'seniors',
    date: '2024-02-08',
    time: '10:00 AM - 12:00 PM',
    recurring: true,
    recurringPattern: 'Every Thursday',
    icon: Laptop,
    ageGroup: '55+',
    registration: true
  },
  {
    id: 'evt-5',
    title: 'Family Storytime',
    description: 'Stories, songs, and activities for children ages 2-5 with their families.',
    libraryId: 'epl-stanley-milner',
    category: 'children',
    date: '2024-02-09',
    time: '10:30 AM - 11:00 AM',
    recurring: true,
    recurringPattern: 'Every Friday',
    icon: Book,
    ageGroup: '2-5 years'
  },
  {
    id: 'evt-6',
    title: 'Citizenship Test Prep Workshop',
    description: 'Free workshop to help you prepare for your Canadian citizenship test.',
    libraryId: 'vpl-central',
    category: 'newcomers',
    date: '2024-02-10',
    time: '1:00 PM - 3:00 PM',
    recurring: true,
    recurringPattern: 'First Saturday of month',
    icon: GraduationCap,
    registration: true
  },
  {
    id: 'evt-7',
    title: 'Book Club: Fiction Favorites',
    description: 'Join our monthly book club discussing the best in contemporary fiction.',
    libraryId: 'tpl-reference',
    category: 'adults',
    date: '2024-02-15',
    time: '7:00 PM - 8:30 PM',
    recurring: true,
    recurringPattern: 'Third Thursday of month',
    icon: Book
  },
  {
    id: 'evt-8',
    title: 'Chair Yoga for Seniors',
    description: 'Gentle yoga practice designed for all mobility levels. No experience needed.',
    libraryId: 'wpl-central',
    category: 'seniors',
    date: '2024-02-12',
    time: '11:00 AM - 12:00 PM',
    recurring: true,
    recurringPattern: 'Every Monday',
    icon: Barbell,
    ageGroup: '55+'
  },
  {
    id: 'evt-9',
    title: 'Homework Help',
    description: 'Free tutoring for students in grades 1-12. Drop in for help with any subject.',
    libraryId: 'cpl-central',
    category: 'teens',
    date: '2024-02-05',
    time: '4:00 PM - 6:00 PM',
    recurring: true,
    recurringPattern: 'Monday to Thursday',
    icon: GraduationCap,
    ageGroup: 'Grades 1-12'
  },
  {
    id: 'evt-10',
    title: 'Seniors Coffee & Conversation',
    description: 'A welcoming space to enjoy coffee and connect with neighbors. Drop in anytime!',
    libraryId: 'hpl-central',
    category: 'seniors',
    date: '2024-02-06',
    time: '10:00 AM - 11:30 AM',
    recurring: true,
    recurringPattern: 'Every Tuesday',
    icon: Coffee,
    ageGroup: '55+'
  },
  {
    id: 'evt-11',
    title: 'LEGO Club',
    description: 'Build, create, and have fun with LEGO! Ages 5-12.',
    libraryId: 'epl-stanley-milner',
    category: 'children',
    date: '2024-02-10',
    time: '2:00 PM - 3:30 PM',
    recurring: true,
    recurringPattern: 'Every Saturday',
    icon: Palette,
    ageGroup: '5-12 years'
  },
  {
    id: 'evt-12',
    title: 'Settlement Services Drop-In',
    description: 'Meet with settlement workers for help with housing, jobs, and integration.',
    libraryId: 'vpl-central',
    category: 'newcomers',
    date: '2024-02-07',
    time: '1:00 PM - 4:00 PM',
    recurring: true,
    recurringPattern: 'Every Wednesday',
    icon: Heart
  },
  {
    id: 'evt-13',
    title: 'Family Movie Night',
    description: 'Free family-friendly movie screening. Popcorn provided!',
    libraryId: 'tpl-reference',
    category: 'all-ages',
    date: '2024-02-16',
    time: '6:00 PM - 8:00 PM',
    recurring: true,
    recurringPattern: 'Every other Friday',
    icon: MusicNotes
  },
  {
    id: 'evt-14',
    title: 'Resume Writing Workshop',
    description: 'Learn how to create a Canadian-style resume that gets noticed by employers.',
    libraryId: 'cpl-central',
    category: 'adults',
    date: '2024-02-14',
    time: '2:00 PM - 4:00 PM',
    recurring: true,
    recurringPattern: 'Second Wednesday of month',
    icon: GraduationCap,
    registration: true
  },
  {
    id: 'evt-15',
    title: 'Punjabi Storytime',
    description: 'Stories and songs in Punjabi for children and families.',
    libraryId: 'fvrl-abbotsford',
    category: 'children',
    date: '2024-02-10',
    time: '11:00 AM - 11:30 AM',
    recurring: true,
    recurringPattern: 'Every Saturday',
    icon: Book,
    ageGroup: 'All ages'
  },
  {
    id: 'evt-16',
    title: 'Mandarin Book Club',
    description: 'Discuss books in Mandarin with other readers. All reading levels welcome.',
    libraryId: 'vpl-central',
    category: 'adults',
    date: '2024-02-17',
    time: '3:00 PM - 4:30 PM',
    recurring: true,
    recurringPattern: 'Third Sunday of month',
    icon: Book
  }
]

const categoryLabels: Record<EventCategory, string> = {
  'children': 'Children',
  'teens': 'Teens',
  'adults': 'Adults',
  'seniors': 'Seniors',
  'newcomers': 'Newcomers',
  'all-ages': 'All Ages'
}

const categoryColors: Record<EventCategory, string> = {
  'children': 'bg-amber-100 text-amber-800 border-amber-200',
  'teens': 'bg-purple-100 text-purple-800 border-purple-200',
  'adults': 'bg-blue-100 text-blue-800 border-blue-200',
  'seniors': 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'newcomers': 'bg-rose-100 text-rose-800 border-rose-200',
  'all-ages': 'bg-gray-100 text-gray-800 border-gray-200'
}

export function LibraryEvents() {
  const { t } = useTranslation()
  const [selectedLibrary, setSelectedLibrary] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'all'>('all')

  const librariesWithEvents = useMemo(() => {
    const libIds = new Set(sampleEvents.map(e => e.libraryId))
    return libraries.filter(lib => libIds.has(lib.id))
  }, [])

  const filteredEvents = useMemo(() => {
    return sampleEvents.filter(event => {
      const matchesLibrary = selectedLibrary === 'all' || event.libraryId === selectedLibrary
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
      return matchesLibrary && matchesCategory
    })
  }, [selectedLibrary, selectedCategory])

  const getLibraryName = (libraryId: string) => {
    return libraries.find(lib => lib.id === libraryId)?.name || libraryId
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">Library Event Calendar</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover free programs and events happening at libraries across Canada. Most events are free and open to everyone!
        </p>
      </div>

      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">Filter by Library</label>
            <Select value={selectedLibrary} onValueChange={setSelectedLibrary}>
              <SelectTrigger>
                <SelectValue placeholder="Select a library" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Libraries</SelectItem>
                {librariesWithEvents.map(lib => (
                  <SelectItem key={lib.id} value={lib.id}>
                    {lib.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">Filter by Audience</label>
            <Select value={selectedCategory} onValueChange={(val) => setSelectedCategory(val as EventCategory | 'all')}>
              <SelectTrigger>
                <SelectValue placeholder="Select audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Audiences</SelectItem>
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <SelectItem key={key} value={key}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <Button
              key={key}
              variant={selectedCategory === key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(selectedCategory === key ? 'all' : key as EventCategory)}
              className="gap-2"
            >
              {key === 'children' && <Baby size={16} />}
              {key === 'teens' && <Laptop size={16} />}
              {key === 'adults' && <Book size={16} />}
              {key === 'seniors' && <Heart size={16} />}
              {key === 'newcomers' && <Globe size={16} />}
              {key === 'all-ages' && <Users size={16} />}
              {label}
            </Button>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Showing {filteredEvents.length} events
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {filteredEvents.map(event => {
            const Icon = event.icon
            return (
              <Card key={event.id} className="p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Icon size={24} weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold">{event.title}</h4>
                      <Badge className={`text-xs shrink-0 ${categoryColors[event.category]}`}>
                        {categoryLabels[event.category]}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                    
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={14} className="shrink-0" />
                        <span className="truncate">{getLibraryName(event.libraryId)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock size={14} className="shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      {event.recurring && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <CalendarBlank size={14} className="shrink-0" />
                          <span>{event.recurringPattern}</span>
                        </div>
                      )}
                      {event.ageGroup && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users size={14} className="shrink-0" />
                          <span>Ages: {event.ageGroup}</span>
                        </div>
                      )}
                    </div>

                    {event.registration && (
                      <Badge variant="outline" className="mt-3 text-xs">
                        Registration Required
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {filteredEvents.length === 0 && (
          <Card className="p-12 text-center">
            <div className="text-muted-foreground">
              <CalendarBlank size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">No events found</p>
              <p className="text-sm">Try adjusting your filters to see more events</p>
            </div>
          </Card>
        )}
      </Card>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 p-6">
        <h3 className="text-xl font-semibold mb-4">Tips for Library Events</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Most events are free! Check if registration is required.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Visit your local library website for the most up-to-date schedule.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Many programs are offered in multiple languages - just ask!</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Can't attend in person? Ask about virtual event options.</span>
          </li>
        </ul>
      </Card>
    </div>
  )
}
