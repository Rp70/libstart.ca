import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Coffee, Bus, MapTrifold, Heart, Leaf, Calendar, Users, Bicycle } from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

type LocalTip = {
  category: string
  icon: any
  color: string
  audienceType: 'newcomer' | 'local'
  tips: {
    title: string
    description: string
  }[]
}

const localTips: LocalTip[] = [
  {
    category: 'Coffee & Snacks Nearby',
    icon: Coffee,
    color: 'secondary',
    audienceType: 'newcomer',
    tips: [
      {
        title: 'Tim Hortons (2 min walk)',
        description: 'Coffee from $2, donuts $1.50. Cheapest option with free refills on coffee if you stay.'
      },
      {
        title: 'Save-On-Foods Deli (5 min walk)',
        description: 'Hot coffee $1.50, fresh bakery items. Grab groceries while you\'re there!'
      },
      {
        title: 'Library Vending Machines (inside)',
        description: 'Snacks $1-2, drinks $1.50. Most affordable option without leaving the library.'
      },
      {
        title: 'Bring Your Own',
        description: 'Covered drinks and wrapped snacks are welcome! Save money by packing lunch from home.'
      }
    ]
  },
  {
    category: 'Transit Tips for Newcomers',
    icon: Bus,
    color: 'primary',
    audienceType: 'newcomer',
    tips: [
      {
        title: 'Route #66 - From Abbotsford',
        description: 'Stops directly in front of library. Runs every 30 min weekdays, hourly weekends. $2.50 fare.'
      },
      {
        title: 'Route #11 - From Clearbrook',
        description: 'Short 3-block walk from stop. More frequent service (every 15 min). Connect to other routes easily.'
      },
      {
        title: 'Free Transfer Tip',
        description: 'Ask for a transfer when you board - valid for 90 minutes on all buses. Makes multi-stop trips affordable!'
      },
      {
        title: 'BC Bus Pass (Newcomer Discount)',
        description: 'If you\'re on income assistance, you may qualify for $52/month unlimited transit. Ask library staff for info!'
      }
    ]
  },
  {
    category: 'Settlement Resources Nearby',
    icon: Heart,
    color: 'accent',
    audienceType: 'newcomer',
    tips: [
      {
        title: 'Immigrant Services (10 min walk)',
        description: 'Free help with job search, document translation, and connecting to community services.'
      },
      {
        title: 'Community Health Center (5 min walk)',
        description: 'Free walk-in clinic with interpreters available. No health card required for emergency care.'
      },
      {
        title: 'Food Bank (15 min walk)',
        description: 'Free groceries once a week. Just bring ID - no proof of income required on first visit.'
      },
      {
        title: 'Free ESL Classes at Library',
        description: 'Check the library bulletin board for weekly conversation circles and English tutoring.'
      }
    ]
  },
  {
    category: 'Parking & Access',
    icon: MapTrifold,
    color: 'sage',
    audienceType: 'newcomer',
    tips: [
      {
        title: 'Free Parking (2 hours)',
        description: 'Library has dedicated lot with 2-hour limit. Additional free street parking on side streets for longer visits.'
      },
      {
        title: 'Bike Racks',
        description: 'Covered bike parking right by the entrance. Bring your own lock!'
      },
      {
        title: 'Rainy Day Entrance',
        description: 'Use the side entrance near parking - it\'s covered and closer when it\'s raining.'
      },
      {
        title: 'Accessibility',
        description: 'Wheelchair accessible entrance on west side. Automatic doors and elevator to all floors.'
      }
    ]
  },
  {
    category: 'Hidden Gems for Locals',
    icon: Leaf,
    color: 'sage',
    audienceType: 'local',
    tips: [
      {
        title: 'Quiet Garden Patio',
        description: 'Behind the library is a peaceful reading garden. Perfect for summer afternoons with a book.'
      },
      {
        title: 'Local Art Displays',
        description: 'The library rotates local artist exhibits monthly. Great free "gallery" experience!'
      },
      {
        title: 'Historic Photos Collection',
        description: 'Ask at the reference desk about the local history photo archive - fascinating neighborhood history.'
      },
      {
        title: 'Community Bulletin Board',
        description: 'Near the entrance - best place to find local events, garage sales, and neighborhood news.'
      }
    ]
  },
  {
    category: 'Events & Programming',
    icon: Calendar,
    color: 'primary',
    audienceType: 'local',
    tips: [
      {
        title: 'Monthly Author Readings',
        description: 'Local and visiting authors every second Thursday. Free with refreshments provided.'
      },
      {
        title: 'Film Screenings',
        description: 'Classic movies on the big screen every Friday afternoon. Popcorn included!'
      },
      {
        title: 'Repair Café (Monthly)',
        description: 'Volunteers help fix broken items for free. Bring electronics, clothing, or small appliances.'
      },
      {
        title: 'Seed Swap (Spring/Fall)',
        description: 'Trade seeds with other gardeners. Great way to get heirloom varieties for your garden.'
      }
    ]
  },
  {
    category: 'Community Connections',
    icon: Users,
    color: 'secondary',
    audienceType: 'local',
    tips: [
      {
        title: 'Volunteer Opportunities',
        description: 'Help with storytime, tech tutoring, or shelving books. Great for teens needing volunteer hours.'
      },
      {
        title: 'Friends of the Library',
        description: 'Join the library\'s support group. Get first access to book sales and special events.'
      },
      {
        title: 'Book Sale Room',
        description: 'Donated books for $1-2 each. Proceeds support library programs. New stock weekly!'
      },
      {
        title: 'Community Notice Board',
        description: 'Post or find local services: tutors, babysitters, handypeople, and more.'
      }
    ]
  },
  {
    category: 'Alternative Access Options',
    icon: Bicycle,
    color: 'accent',
    audienceType: 'local',
    tips: [
      {
        title: 'Extended Hours (Summer)',
        description: 'Library stays open until 9 PM on Thursdays during summer months.'
      },
      {
        title: 'Curbside Pickup Available',
        description: 'Order online and pick up without leaving your car. Call when you arrive!'
      },
      {
        title: 'Book Drop Box (24/7)',
        description: 'Return books anytime using the outdoor drop box - even when library is closed.'
      },
      {
        title: 'Home Delivery Service',
        description: 'For seniors or those with mobility challenges. Ask about the library\'s delivery program.'
      }
    ]
  }
]

export function NeighborhoodHacks() {
  const { t } = useTranslation()

  const newcomerTips = localTips.filter(tip => tip.audienceType === 'newcomer')
  const localOnlyTips = localTips.filter(tip => tip.audienceType === 'local')

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-3">{t('neighborhood.title')}</h2>
        <p className="text-muted-foreground text-lg">
          {t('neighborhood.subtitle')}
        </p>
      </div>

      <Card className="p-5 bg-accent/10 border-accent/30">
        <p className="text-sm">
          <strong>📍 Note:</strong> These tips are example data for a Fraser Valley library branch. 
          The actual details will vary by your local branch location.
        </p>
      </Card>

      <div className="space-y-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-8 bg-primary rounded-full" />
            <h3 className="text-xl font-semibold text-primary">Tips for Newcomers</h3>
          </div>
          <div className="space-y-6">
            {newcomerTips.map((tipGroup) => {
              const Icon = tipGroup.icon
              return (
                <Card 
                  key={tipGroup.category}
                  className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/20"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                      <Icon size={28} weight="duotone" />
                    </div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-2xl font-bold pt-2">{tipGroup.category}</h4>
                      <Badge variant="outline" className="mt-2">Newcomer</Badge>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {tipGroup.tips.map((tip, index) => (
                      <Card 
                        key={index}
                        className="p-4 bg-card hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-2 mb-2">
                          <Badge variant="outline" className="mt-0.5">
                            {index + 1}
                          </Badge>
                          <h5 className="font-semibold flex-1">{tip.title}</h5>
                        </div>
                        <p className="text-sm text-muted-foreground pl-9">
                          {tip.description}
                        </p>
                      </Card>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-8 bg-sage rounded-full" />
            <h3 className="text-xl font-semibold text-sage-foreground">Tips for Long-Time Residents</h3>
          </div>
          <div className="space-y-6">
            {localOnlyTips.map((tipGroup) => {
              const Icon = tipGroup.icon
              return (
                <Card 
                  key={tipGroup.category}
                  className="p-6 bg-gradient-to-br from-sage/10 to-transparent border-sage/30"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3 bg-sage text-sage-foreground rounded-lg">
                      <Icon size={28} weight="duotone" />
                    </div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-2xl font-bold pt-2">{tipGroup.category}</h4>
                      <Badge variant="secondary" className="mt-2">Local</Badge>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {tipGroup.tips.map((tip, index) => (
                      <Card 
                        key={index}
                        className="p-4 bg-card hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-2 mb-2">
                          <Badge variant="secondary" className="mt-0.5">
                            {index + 1}
                          </Badge>
                          <h5 className="font-semibold flex-1">{tip.title}</h5>
                        </div>
                        <p className="text-sm text-muted-foreground pl-9">
                          {tip.description}
                        </p>
                      </Card>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="font-semibold mb-3">💡 Smart Visit Planning</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Best Times to Visit:</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary text-base">✓</span>
                <span>Quietest: Weekday mornings (9-11 AM)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary text-base">✓</span>
                <span>Busiest: After school (3-5 PM) and Saturdays</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary text-base">✓</span>
                <span>Programs: Check library website for schedule</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">What to Bring:</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary text-base">✓</span>
                <span>Library card (or ID to get one)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary text-base">✓</span>
                <span>Reusable water bottle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary text-base">✓</span>
                <span>Headphones for computer use</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary text-base">✓</span>
                <span>Bag for carrying borrowed items</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
