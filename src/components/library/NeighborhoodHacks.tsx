import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Coffee, Bus, MapTrifold } from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

type LocalTip = {
  category: string
  icon: any
  color: string
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
    category: 'Transit Tips',
    icon: Bus,
    color: 'primary',
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
    category: 'Parking & Access',
    icon: MapTrifold,
    color: 'sage',
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
  }
]

export function NeighborhoodHacks() {
  const { t } = useTranslation()

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

      <div className="space-y-6">
        {localTips.map((tipGroup) => {
          const Icon = tipGroup.icon
          return (
            <Card 
              key={tipGroup.category}
              className={`p-6 bg-gradient-to-br from-${tipGroup.color}/5 to-transparent border-${tipGroup.color}/30`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className={`p-3 bg-${tipGroup.color} text-${tipGroup.color}-foreground rounded-lg`}>
                  <Icon size={28} weight="duotone" />
                </div>
                <h3 className="text-2xl font-bold pt-2">{tipGroup.category}</h3>
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
                      <h4 className="font-semibold flex-1">{tip.title}</h4>
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

      <Card className="p-6 bg-primary/5 border-primary/20">
        <h3 className="font-semibold mb-3">💡 Smart Visit Planning</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Best Times to Visit:</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Quietest: Weekday mornings (9-11 AM)</li>
              <li>• Busiest: After school (3-5 PM) and Saturdays</li>
              <li>• Programs: Check library website for schedule</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">What to Bring:</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Library card (or ID to get one)</li>
              <li>• Reusable water bottle</li>
              <li>• Headphones for computer use</li>
              <li>• Bag for carrying borrowed items</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
