import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Users, Clock } from '@phosphor-icons/react'

type Tour = {
  id: string
  title: string
  description: string
  persona: string
  icon: any
  color: string
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
    description: 'How a family spends 4 hours at the library for free',
    persona: 'Meet the Ahmed family - Parents with two children (ages 4 and 7)',
    icon: Users,
    color: 'secondary',
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
  }
]

export function VisualTours() {
  const [selectedTour, setSelectedTour] = useState<string | null>(null)
  const activeTour = tours.find(t => t.id === selectedTour)

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-3">A Day in the Life</h2>
        <p className="text-muted-foreground text-lg">
          See how real people use the library every day
        </p>
      </div>

      {!selectedTour ? (
        <div className="grid gap-6 md:grid-cols-2">
          {tours.map((tour) => {
            const Icon = tour.icon
            return (
              <Card 
                key={tour.id}
                className={`p-6 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-${tour.color} bg-gradient-to-br from-${tour.color}/5 to-transparent`}
                onClick={() => setSelectedTour(tour.id)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 bg-${tour.color} text-${tour.color}-foreground rounded-lg`}>
                    <Icon size={32} weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
                    <p className="text-muted-foreground">{tour.description}</p>
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
              <Card className={`p-6 bg-gradient-to-br from-${activeTour.color}/10 to-transparent border-${activeTour.color}/30`}>
                <div className="flex items-start gap-4">
                  <div className={`p-4 bg-${activeTour.color} text-${activeTour.color}-foreground rounded-lg`}>
                    {<activeTour.icon size={40} weight="duotone" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{activeTour.title}</h3>
                    <p className="text-muted-foreground mb-2">{activeTour.description}</p>
                    <Badge variant="secondary" className="mt-2">{activeTour.persona}</Badge>
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
