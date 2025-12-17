import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Package, GraduationCap, Sparkle } from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

type MenuItem = {
  item: string
  description: string
  newcomerTip: string
}

type MenuList = {
  id: string
  title: string
  description: string
  icon: any
  color: string
  items: MenuItem[]
}

const menuLists: MenuList[] = [
  {
    id: 'borrow',
    title: 'Things You Didn\'t Know You Could Borrow',
    description: 'Unusual items from FVRL Playground - way beyond books!',
    icon: Package,
    color: 'secondary',
    items: [
      {
        item: 'Radon Detector',
        description: 'Test for dangerous radon gas in your home or basement suite',
        newcomerTip: 'Perfect for newcomers renting basement suites - radon testing usually costs $150+. Borrow for free to ensure your family\'s safety.'
      },
      {
        item: 'Birdwatching Kit',
        description: 'Binoculars, field guide, and checklist to explore BC\'s nature',
        newcomerTip: 'Great way to learn about Canadian wildlife! The kit includes a local bird guide so you can identify species in your neighborhood.'
      },
      {
        item: 'Wi-Fi Hotspot',
        description: 'Mobile internet device you can take home for a week',
        newcomerTip: 'Don\'t have home internet yet? Borrow a hotspot while you\'re setting up services. Includes unlimited data!'
      },
      {
        item: 'Energy Monitor',
        description: 'Device to check which appliances use the most electricity',
        newcomerTip: 'Confused by your first BC Hydro bill? This helps you understand which devices cost the most to run.'
      },
      {
        item: 'Musical Instruments',
        description: 'Ukuleles, keyboards, and more to try before you buy',
        newcomerTip: 'Want your kids to learn music but can\'t afford instruments? Try different ones for free to see what they like.'
      }
    ]
  },
  {
    id: 'learning',
    title: 'Free English Teachers (Digital Tools)',
    description: 'Expert review of the best language learning resources',
    icon: GraduationCap,
    color: 'primary',
    items: [
      {
        item: 'Mango Languages',
        description: 'Interactive language courses with pronunciation practice',
        newcomerTip: '⭐ BEST FOR SPEAKING: Uses real conversations and voice recording. Great for improving pronunciation and listening skills. Start here if you need to speak English at work.'
      },
      {
        item: 'LinkedIn Learning',
        description: 'Professional skills courses including business English',
        newcomerTip: '⭐ BEST FOR WORKPLACE ENGLISH: Learn professional vocabulary, email writing, and presentation skills. Perfect for job hunting.'
      },
      {
        item: 'Pronunciator',
        description: 'Language learning with movies, music, and cultural content',
        newcomerTip: 'BEST FOR CULTURAL LEARNING: Teaches through songs and videos. Great for understanding Canadian culture while learning English.'
      },
      {
        item: 'Grammar e-Books',
        description: 'Downloadable workbooks focused on English grammar',
        newcomerTip: '⭐ BEST FOR WRITING: Self-paced grammar exercises. Perfect if you need to improve written English for school or immigration paperwork.'
      },
      {
        item: 'ESL Conversation Groups',
        description: 'Free weekly practice sessions with volunteers (in-person)',
        newcomerTip: 'BEST FOR CONFIDENCE: Practice speaking without judgment. Ask the library for schedule - usually multiple times per week!'
      }
    ]
  },
  {
    id: 'surprising',
    title: 'Surprisingly Useful Services',
    description: 'Hidden gems that solve real newcomer problems',
    icon: Sparkle,
    color: 'accent',
    items: [
      {
        item: 'Free Laminating',
        description: 'Protect important documents at some branches',
        newcomerTip: 'Laminate your work permit, SIN card confirmation, or kids\' vaccination records to keep them safe!'
      },
      {
        item: 'Faxing Services',
        description: 'Send faxes when government offices require them',
        newcomerTip: 'Some immigration and government forms still need faxing. The library can help - much cheaper than a print shop!'
      },
      {
        item: 'Passport Photos',
        description: 'Get official photos taken at select branches',
        newcomerTip: 'Need photos for PR card renewal or driver\'s license? Some branches offer this free or for a small fee.'
      },
      {
        item: 'Tax Prep Help',
        description: 'Free volunteer tax assistance during tax season',
        newcomerTip: 'Filing your first Canadian tax return? Volunteers can help for free (usually Feb-April). You might get money back!'
      },
      {
        item: 'Citizenship Test Prep',
        description: 'Study materials and practice tests for citizenship exam',
        newcomerTip: 'All the official study guides plus practice tests. Librarians can help you find resources in your language.'
      }
    ]
  }
]

export function HiddenMenu() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-3">{t('hiddenMenu.title')}</h2>
        <p className="text-muted-foreground text-lg">
          {t('hiddenMenu.subtitle')}
        </p>
      </div>

      <div className="space-y-8">
        {menuLists.map((list) => {
          const Icon = list.icon
          return (
            <Card 
              key={list.id}
              className={`p-6 bg-gradient-to-br from-${list.color}/5 to-transparent border-${list.color}/30`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 bg-${list.color} text-${list.color}-foreground rounded-lg`}>
                  <Icon size={32} weight="duotone" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{list.title}</h3>
                  <p className="text-muted-foreground">{list.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {list.items.map((item, index) => (
                  <Card 
                    key={index}
                    className="p-5 hover:shadow-md transition-shadow bg-card"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Badge className="bg-accent text-accent-foreground">
                        #{index + 1}
                      </Badge>
                      <h4 className="text-lg font-semibold flex-1">{item.item}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <div className="p-3 bg-primary/5 border-l-4 border-primary rounded">
                      <p className="text-sm">
                        <span className="font-semibold text-primary">💡 For Newcomers: </span>
                        {item.newcomerTip}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          )
        })}
      </div>

      <Card className="p-6 bg-accent/10 border-accent/30">
        <h3 className="text-lg font-semibold mb-3">How to Access These Services</h3>
        <div className="space-y-2 text-sm">
          <p>📱 <strong>FVRL Playground items:</strong> Search the library catalogue and place a hold online</p>
          <p>💻 <strong>Digital tools:</strong> Log in with your library card number on the FVRL website</p>
          <p>🏢 <strong>In-person services:</strong> Call or visit your local branch to book an appointment</p>
        </div>
      </Card>
    </div>
  )
}
