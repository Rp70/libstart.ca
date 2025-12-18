import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Users, Clock, GraduationCap, Heart, Books, Leaf } from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

type Tour = {
  id: string
  title: string
  description: string
  persona: string
  icon: any
  color: string
  audienceType: 'newcomer' | 'local'
  steps: {
    time: string
    activity: string
    description: string
    service: string
  }[]
}

const tours: Tour[] = [
  {
    id: 'remote-worker',
    title: 'The Remote Worker Routine',
    description: 'How a newcomer uses the library as a free office space',
    persona: 'Meet Sarah - New to Canada, working remotely',
    icon: Briefcase,
    color: 'primary',
    audienceType: 'newcomer',
    steps: [
      {
        time: '9:00 AM',
        activity: 'Arrive & Connect',
        description: 'Sarah enters the library and connects to the free, fast Wi-Fi on her laptop.',
        service: 'Free Wi-Fi (no password required)'
      },
      {
        time: '9:30 AM',
        activity: 'Book a Study Room',
        description: 'She books a private study room for her video call using the online booking system.',
        service: 'Free study room booking (2-hour slots)'
      },
      {
        time: '11:00 AM',
        activity: 'Print Documents',
        description: 'After her call, Sarah prints her resume and cover letters for 15¢ per page.',
        service: 'Printing, copying, scanning services'
      },
      {
        time: '12:00 PM',
        activity: 'Lunch & Learn',
        description: 'She takes a break, eats her lunch in the common area, and browses job search books.',
        service: 'Career development resources'
      },
      {
        time: '2:00 PM',
        activity: 'Use LinkedIn Learning',
        description: 'Sarah accesses free LinkedIn Learning courses with her library card to build new skills.',
        service: 'Free access to LinkedIn Learning'
      }
    ]
  },
  {
    id: 'family-weekend',
    title: 'The Rainy Weekend Plan',
    description: 'How a newcomer family spends 4 hours at the library for free',
    persona: 'Meet the Ahmed family - Parents with two children (ages 4 and 7)',
    icon: Users,
    color: 'secondary',
    audienceType: 'newcomer',
    steps: [
      {
        time: '10:00 AM',
        activity: 'Storytime Fun',
        description: 'The kids join the Saturday morning storytime program with songs and activities.',
        service: 'Free children\'s programs & storytime'
      },
      {
        time: '11:00 AM',
        activity: 'STEAM Discovery',
        description: 'The family checks out a STEAM kit from FVRL Playground - today it\'s a robotics set!',
        service: 'FVRL Playground STEAM kits'
      },
      {
        time: '11:30 AM',
        activity: 'Books in Every Language',
        description: 'Parents find books in Arabic for the kids, plus English learning materials for themselves.',
        service: 'Multilingual collections'
      },
      {
        time: '12:30 PM',
        activity: 'Movie Time',
        description: 'They borrow 3 DVDs for family movie night, including new releases.',
        service: 'Free DVD & Blu-ray borrowing'
      },
      {
        time: '1:30 PM',
        activity: 'Digital Resources',
        description: 'Mom downloads audiobooks and ebooks to her phone for the week ahead.',
        service: 'Libby app for digital borrowing'
      }
    ]
  },
  {
    id: 'settlement-journey',
    title: 'The Settlement Journey',
    description: 'How newcomers use library resources to settle into Canada',
    persona: 'Meet Chen - Recently arrived from China, navigating life in Canada',
    icon: GraduationCap,
    color: 'accent',
    audienceType: 'newcomer',
    steps: [
      {
        time: '10:00 AM',
        activity: 'Get a Library Card',
        description: 'Chen shows ID and proof of address to get a free library card - no citizenship required!',
        service: 'Free library card for all residents'
      },
      {
        time: '10:30 AM',
        activity: 'English Conversation Circle',
        description: 'Chen joins a weekly conversation circle to practice speaking English with other newcomers.',
        service: 'Free English conversation programs'
      },
      {
        time: '12:00 PM',
        activity: 'Citizenship Study Materials',
        description: 'Chen borrows citizenship test preparation books and accesses online practice tests.',
        service: 'Citizenship resources & study guides'
      },
      {
        time: '1:00 PM',
        activity: 'Settlement Agency Meeting',
        description: 'Chen meets with a settlement worker who holds office hours at the library monthly.',
        service: 'Settlement agency partnerships'
      },
      {
        time: '2:30 PM',
        activity: 'Language Learning Apps',
        description: 'Chen downloads Mango Languages on their phone for self-paced English learning at home.',
        service: 'Free access to Mango Languages'
      }
    ]
  },
  {
    id: 'lifelong-learner',
    title: 'The Lifelong Learner',
    description: 'How long-time residents rediscover their library',
    persona: 'Meet Margaret - Retired teacher exploring new hobbies',
    icon: Books,
    color: 'sage',
    audienceType: 'local',
    steps: [
      {
        time: '9:30 AM',
        activity: 'Book Club Meeting',
        description: 'Margaret joins the monthly book club in the community room - free coffee provided!',
        service: 'Free book clubs & reading groups'
      },
      {
        time: '11:00 AM',
        activity: 'Digital Help Session',
        description: 'A library volunteer helps Margaret set up the Libby app on her new tablet.',
        service: 'Free one-on-one tech help'
      },
      {
        time: '12:00 PM',
        activity: 'Genealogy Research',
        description: 'Margaret accesses Ancestry.com for free at the library to research her family tree.',
        service: 'Free access to genealogy databases'
      },
      {
        time: '1:30 PM',
        activity: 'Borrow Museum Passes',
        description: 'She borrows free passes to the local art gallery for her and her grandchildren.',
        service: 'Museum & attraction passes'
      },
      {
        time: '2:30 PM',
        activity: 'Seed Library',
        description: 'Margaret picks up heritage tomato seeds from the seed library for her garden.',
        service: 'Seed lending library'
      }
    ]
  },
  {
    id: 'community-connector',
    title: 'The Community Connector',
    description: 'How locals use the library as a community hub',
    persona: 'Meet David - Active community volunteer and parent',
    icon: Heart,
    color: 'primary',
    audienceType: 'local',
    steps: [
      {
        time: '9:00 AM',
        activity: 'Community Room Booking',
        description: 'David uses the free meeting room for his neighborhood association\'s monthly meeting.',
        service: 'Free community room bookings'
      },
      {
        time: '11:00 AM',
        activity: 'Local History Collection',
        description: 'David browses the local history archives for his neighborhood heritage project.',
        service: 'Local history & archives'
      },
      {
        time: '12:30 PM',
        activity: 'Makerspace Workshop',
        description: 'David attends a free workshop on using the laser cutter for his community garden signs.',
        service: 'Free makerspace workshops'
      },
      {
        time: '2:00 PM',
        activity: 'Tool Library Pickup',
        description: 'He picks up a power drill and level he reserved online for a home project.',
        service: 'Library of Things - tool lending'
      },
      {
        time: '3:00 PM',
        activity: 'Kids Pickup from Programs',
        description: 'David picks up his kids from the after-school homework help program.',
        service: 'After-school programs & homework help'
      }
    ]
  },
  {
    id: 'eco-explorer',
    title: 'The Eco Explorer',
    description: 'How environmentally-conscious locals leverage library resources',
    persona: 'Meet Ava - Environmental advocate and nature enthusiast',
    icon: Leaf,
    color: 'secondary',
    audienceType: 'local',
    steps: [
      {
        time: '10:00 AM',
        activity: 'Borrow Nature Kits',
        description: 'Ava checks out a birdwatching kit with binoculars and a field guide for a family hike.',
        service: 'Nature exploration kits'
      },
      {
        time: '11:00 AM',
        activity: 'Environmental Films',
        description: 'She browses the documentary collection and reserves films for her eco-film club.',
        service: 'Documentary & film collections'
      },
      {
        time: '12:00 PM',
        activity: 'Repair Café',
        description: 'Ava brings a broken toaster to the monthly repair café where volunteers fix items for free.',
        service: 'Repair cafés & sustainability programs'
      },
      {
        time: '1:30 PM',
        activity: 'Energy Monitor Loan',
        description: 'She borrows an electricity usage monitor to track which appliances use the most power.',
        service: 'Energy monitors & radon detectors'
      },
      {
        time: '2:30 PM',
        activity: 'Gardening Books & Seeds',
        description: 'Ava picks up organic gardening books and native plant seeds from the seed library.',
        service: 'Gardening resources & seed library'
      }
    ]
  }
]

export function VisualTours() {
  const [selectedTour, setSelectedTour] = useState<string | null>(null)
  const activeTour = tours.find(t => t.id === selectedTour)
  const { t } = useTranslation()

  const newcomerTours = tours.filter(tour => tour.audienceType === 'newcomer')
  const localTours = tours.filter(tour => tour.audienceType === 'local')

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-3">{t('tours.title')}</h2>
        <p className="text-muted-foreground text-lg">
          {t('tours.subtitle')}
        </p>
      </div>

      {!selectedTour ? (
        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <h3 className="text-xl font-semibold text-primary">For Newcomers to Canada</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newcomerTours.map((tour) => {
                const Icon = tour.icon
                return (
                  <Card 
                    key={tour.id}
                    className="p-6 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary bg-gradient-to-br from-primary/5 to-transparent"
                    onClick={() => setSelectedTour(tour.id)}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                        <Icon size={28} weight="duotone" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2 text-xs">Newcomer</Badge>
                        <h4 className="text-xl font-bold mb-2">{tour.title}</h4>
                        <p className="text-muted-foreground text-sm">{tour.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <p className="text-sm font-medium">{tour.persona}</p>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      See the Full Day →
                    </Button>
                  </Card>
                )
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 bg-sage rounded-full" />
              <h3 className="text-xl font-semibold text-sage-foreground">For Long-Time Residents</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {localTours.map((tour) => {
                const Icon = tour.icon
                return (
                  <Card 
                    key={tour.id}
                    className="p-6 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-sage bg-gradient-to-br from-sage/10 to-transparent"
                    onClick={() => setSelectedTour(tour.id)}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-sage text-sage-foreground rounded-lg">
                        <Icon size={28} weight="duotone" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2 text-xs">Local</Badge>
                        <h4 className="text-xl font-bold mb-2">{tour.title}</h4>
                        <p className="text-muted-foreground text-sm">{tour.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <p className="text-sm font-medium">{tour.persona}</p>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      See the Full Day →
                    </Button>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <Button 
            variant="outline" 
            onClick={() => setSelectedTour(null)}
            className="mb-4"
          >
            ← Back to Tours
          </Button>

          {activeTour && (
            <>
              <Card className={`p-6 bg-gradient-to-br ${activeTour.audienceType === 'newcomer' ? 'from-primary/10' : 'from-sage/10'} to-transparent`}>
                <div className="flex items-start gap-4">
                  <div className={`p-4 ${activeTour.audienceType === 'newcomer' ? 'bg-primary text-primary-foreground' : 'bg-sage text-sage-foreground'} rounded-lg`}>
                    {<activeTour.icon size={40} weight="duotone" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={activeTour.audienceType === 'newcomer' ? 'default' : 'secondary'}>
                        {activeTour.audienceType === 'newcomer' ? 'Newcomer Tour' : 'Local Tour'}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{activeTour.title}</h3>
                    <p className="text-muted-foreground mb-2">{activeTour.description}</p>
                    <Badge variant="outline" className="mt-2">{activeTour.persona}</Badge>
                  </div>
                </div>
              </Card>

              <div className="space-y-4">
                {activeTour.steps.map((step, index) => (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="p-3 bg-accent text-accent-foreground rounded-full">
                          <Clock size={24} weight="duotone" />
                        </div>
                        {index < activeTour.steps.length - 1 && (
                          <div className="w-0.5 h-full bg-accent/30 mt-2" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="font-mono">{step.time}</Badge>
                          <h4 className="text-lg font-semibold">{step.activity}</h4>
                        </div>
                        <p className="text-muted-foreground mb-3">{step.description}</p>
                        <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                          <p className="text-sm">
                            <span className="font-semibold text-primary">Library Service:</span>{' '}
                            {step.service}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-accent/10 border-accent/30">
                <h4 className="font-semibold mb-3">All Services Used in This Visit:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeTour.steps.map((step, index) => (
                    <Badge key={index} variant="secondary">
                      {step.service}
                    </Badge>
                  ))}
                </div>
              </Card>
            </>
          )}
        </div>
      )}
    </div>
  )
}
