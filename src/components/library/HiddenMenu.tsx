import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Package, GraduationCap, Sparkle, Wrench, Laptop, Rocket } from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'
import { useAudience } from '@/contexts/AudienceContext'

type MenuItem = {
  item: string
  description: string
  tip: string
}

type MenuList = {
  id: string
  title: string
  description: string
  icon: any
  color: string
  items: MenuItem[]
}

const newcomerMenuLists: MenuList[] = [
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
        tip: 'Perfect for newcomers renting basement suites - radon testing usually costs $150+. Borrow for free to ensure your family\'s safety.'
      },
      {
        item: 'Birdwatching Kit',
        description: 'Binoculars, field guide, and checklist to explore BC\'s nature',
        tip: 'Great way to learn about Canadian wildlife! The kit includes a local bird guide so you can identify species in your neighborhood.'
      },
      {
        item: 'Wi-Fi Hotspot',
        description: 'Mobile internet device you can take home for a week',
        tip: 'Don\'t have home internet yet? Borrow a hotspot while you\'re setting up services. Includes unlimited data!'
      },
      {
        item: 'Energy Monitor',
        description: 'Device to check which appliances use the most electricity',
        tip: 'Confused by your first BC Hydro bill? This helps you understand which devices cost the most to run.'
      },
      {
        item: 'Musical Instruments',
        description: 'Ukuleles, keyboards, and more to try before you buy',
        tip: 'Want your kids to learn music but can\'t afford instruments? Try different ones for free to see what they like.'
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
        tip: '⭐ BEST FOR SPEAKING: Uses real conversations and voice recording. Great for improving pronunciation and listening skills. Start here if you need to speak English at work.'
      },
      {
        item: 'LinkedIn Learning',
        description: 'Professional skills courses including business English',
        tip: '⭐ BEST FOR WORKPLACE ENGLISH: Learn professional vocabulary, email writing, and presentation skills. Perfect for job hunting.'
      },
      {
        item: 'Pronunciator',
        description: 'Language learning with movies, music, and cultural content',
        tip: 'BEST FOR CULTURAL LEARNING: Teaches through songs and videos. Great for understanding Canadian culture while learning English.'
      },
      {
        item: 'Grammar e-Books',
        description: 'Downloadable workbooks focused on English grammar',
        tip: '⭐ BEST FOR WRITING: Self-paced grammar exercises. Perfect if you need to improve written English for school or immigration paperwork.'
      },
      {
        item: 'ESL Conversation Groups',
        description: 'Free weekly practice sessions with volunteers (in-person)',
        tip: 'BEST FOR CONFIDENCE: Practice speaking without judgment. Ask the library for schedule - usually multiple times per week!'
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
        tip: 'Laminate your work permit, SIN card confirmation, or kids\' vaccination records to keep them safe!'
      },
      {
        item: 'Faxing Services',
        description: 'Send faxes when government offices require them',
        tip: 'Some immigration and government forms still need faxing. The library can help - much cheaper than a print shop!'
      },
      {
        item: 'Passport Photos',
        description: 'Get official photos taken at select branches',
        tip: 'Need photos for PR card renewal or driver\'s license? Some branches offer this free or for a small fee.'
      },
      {
        item: 'Tax Prep Help',
        description: 'Free volunteer tax assistance during tax season',
        tip: 'Filing your first Canadian tax return? Volunteers can help for free (usually Feb-April). You might get money back!'
      },
      {
        item: 'Citizenship Test Prep',
        description: 'Study materials and practice tests for citizenship exam',
        tip: 'All the official study guides plus practice tests. Librarians can help you find resources in your language.'
      }
    ]
  }
]

const canadianMenuLists: MenuList[] = [
  {
    id: 'makers',
    title: 'Makerspace & Creative Tools',
    description: 'Turn your ideas into reality with professional equipment',
    icon: Wrench,
    color: 'secondary',
    items: [
      {
        item: '3D Printers',
        description: 'Design and print custom objects, prototypes, and replacement parts',
        tip: 'Book a session to learn the basics, then create anything - from custom phone cases to board game pieces. Filament provided!'
      },
      {
        item: 'Laser Cutters & Engravers',
        description: 'Cut and engrave wood, acrylic, leather, and more',
        tip: 'Perfect for custom gifts, signage, or small business products. Staff can help with design software.'
      },
      {
        item: 'Sewing Machines & Sergers',
        description: 'Industrial-grade equipment for clothing and craft projects',
        tip: 'No need to buy expensive machines - borrow time in the makerspace. Some branches offer workshops too.'
      },
      {
        item: 'Recording Studio Equipment',
        description: 'Microphones, mixing boards, and soundproofing for podcasts/music',
        tip: 'Start your podcast or record demos without paying for studio time. Includes editing software training.'
      },
      {
        item: 'Power Tools',
        description: 'Drills, saws, sanders - full workshop equipment',
        tip: 'DIY home projects without buying tools you\'ll only use once. Perfect for renters!'
      }
    ]
  },
  {
    id: 'digital',
    title: 'Premium Digital Resources',
    description: 'Expensive subscriptions you get for free',
    icon: Laptop,
    color: 'primary',
    items: [
      {
        item: 'LinkedIn Learning',
        description: '16,000+ courses on business, tech, creative skills',
        tip: '⭐ Worth $39.99/month - yours free! Get certificates to add to your LinkedIn profile.'
      },
      {
        item: 'Kanopy & Hoopla',
        description: 'Stream thousands of movies, documentaries, and TV shows',
        tip: 'Better than Netflix for indie films and documentaries. Includes Criterion Collection classics!'
      },
      {
        item: 'PressReader',
        description: 'Read 7,000+ magazines and newspapers from 120+ countries',
        tip: 'Get same-day access to NYT, Globe & Mail, National Geographic, and more - no paywalls!'
      },
      {
        item: 'Ancestry & Heritage Quest',
        description: 'Research your family tree with genealogy databases',
        tip: 'Ancestry.ca costs $300/year - access it free at the library or remotely with your card.'
      },
      {
        item: 'CreativeBug',
        description: 'Unlimited craft and art video classes',
        tip: 'Learn knitting, painting, quilting, and more. New classes added weekly!'
      }
    ]
  },
  {
    id: 'business',
    title: 'Small Business & Career Boosters',
    description: 'Professional resources for entrepreneurs and job seekers',
    icon: Rocket,
    color: 'accent',
    items: [
      {
        item: 'Business Plan Resources',
        description: 'Templates, databases, and one-on-one consulting',
        tip: 'Free access to tools like Reference Solutions and expert business librarian consultations.'
      },
      {
        item: 'Job Search Databases',
        description: 'Hidden job postings and company research tools',
        tip: 'Access premium databases that surface jobs not posted publicly. Learn salary ranges and company insights.'
      },
      {
        item: 'Resume & Cover Letter Reviews',
        description: 'Free feedback from career professionals',
        tip: 'Book appointments for personalized advice - not just generic templates!'
      },
      {
        item: 'Meeting Rooms for Client Meetings',
        description: 'Professional spaces with whiteboards and presentation tech',
        tip: 'Freelancers and small businesses can book free meeting rooms - looks more professional than a coffee shop!'
      },
      {
        item: 'Adobe Creative Cloud Access',
        description: 'Use Photoshop, Illustrator, Premiere Pro on library computers',
        tip: 'Create marketing materials, edit videos, design logos - $600/year value, free at the library!'
      }
    ]
  }
]

export function HiddenMenu() {
  const { t } = useTranslation()
  const { audience } = useAudience()

  const menuLists = audience === 'canadian' ? canadianMenuLists : newcomerMenuLists
  const tipLabel = audience === 'canadian' ? '💡 Pro Tip: ' : '💡 For Newcomers: '

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
                        <span className="font-semibold text-primary">{tipLabel}</span>
                        {item.tip}
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
          <p>📱 <strong>Library items:</strong> Search the library catalogue and place a hold online</p>
          <p>💻 <strong>Digital tools:</strong> Log in with your library card number on your library's website</p>
          <p>🏢 <strong>In-person services:</strong> Call or visit your local branch to book an appointment</p>
        </div>
      </Card>
    </div>
  )
}
