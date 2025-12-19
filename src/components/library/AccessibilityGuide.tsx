import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Eye,
  EyeClosed,
  Ear,
  Wheelchair,
  HandsClapping,
  TextAa,
  MagnifyingGlassPlus,
  Books,
  Headphones,
  Lightbulb,
  CheckCircle
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

interface AccessibilityService {
  icon: string
  name: string
  description: string
  availability: 'all-branches' | 'most-branches' | 'select-branches'
  branches?: string[]
  howToAccess: string
  proTip?: string
}

const accessibilityServices: AccessibilityService[] = [
  {
    icon: 'magnifying-glass',
    name: 'Screen Magnification Software',
    description: 'ZoomText and MAGic software installed on public computers for users with low vision',
    availability: 'all-branches',
    howToAccess: 'Available on designated accessible workstations - ask staff to help you locate them',
    proTip: 'You can adjust magnification levels and color contrasts to your preference'
  },
  {
    icon: 'headphones',
    name: 'Text-to-Speech Technology',
    description: 'JAWS, NVDA, and built-in screen readers for visually impaired users',
    availability: 'all-branches',
    howToAccess: 'Pre-installed on accessible workstations with headphones provided',
    proTip: 'Natural Reader is also available for converting documents to audio'
  },
  {
    icon: 'books',
    name: 'Large Print Collections',
    description: 'Extensive collection of large print books, magazines, and newspapers',
    availability: 'all-branches',
    howToAccess: 'Clearly marked section in adult fiction and non-fiction areas',
    proTip: 'You can request large print versions of most popular titles through interlibrary loan'
  },
  {
    icon: 'ear',
    name: 'Assistive Listening Devices',
    description: 'Hearing loops and FM systems for program rooms and circulation desks',
    availability: 'most-branches',
    branches: ['Vancouver Central', 'Surrey City Centre', 'Burnaby Public', 'Richmond Public'],
    howToAccess: 'Available at circulation desk - staff will help you connect to your hearing aid',
    proTip: 'Check program listings for the headphone icon indicating loop availability'
  },
  {
    icon: 'sign-language',
    name: 'ASL Interpretation Services',
    description: 'American Sign Language interpreters available for programs and events with advance notice',
    availability: 'select-branches',
    branches: ['Vancouver Central', 'Surrey City Centre', 'North Vancouver District'],
    howToAccess: 'Request at least 2 weeks in advance when registering for programs',
    proTip: 'Some branches offer regular ASL storytimes - check the events calendar'
  },
  {
    icon: 'wheelchair',
    name: 'Physical Accessibility Features',
    description: 'Automatic doors, wheelchair-accessible washrooms, elevators, and adjustable-height tables',
    availability: 'all-branches',
    howToAccess: 'All new and renovated branches meet full accessibility standards',
    proTip: 'Reserved accessible parking spots are located closest to entrances'
  },
  {
    icon: 'text-aa',
    name: 'Dyslexia-Friendly Resources',
    description: 'Books with dyslexia-friendly fonts, audiobooks, and reading rulers available',
    availability: 'most-branches',
    branches: ['Vancouver Central', 'Burnaby Public', 'Richmond Public', 'Coquitlam Public'],
    howToAccess: 'Ask at the circulation desk for dyslexia-friendly collection or reading aids',
    proTip: 'Learning Ally audiobooks are free with your library card - perfect for dyslexic readers'
  },
  {
    icon: 'eye',
    name: 'Braille and Tactile Materials',
    description: 'Braille books, tactile picture books for children, and embossed graphics',
    availability: 'select-branches',
    branches: ['Vancouver Central', 'Surrey City Centre'],
    howToAccess: 'Available in children\'s and accessibility sections, or request through CNIB partnership',
    proTip: 'The library can order braille versions of popular titles through CNIB at no cost to you'
  },
  {
    icon: 'lightbulb',
    name: 'Sensory-Friendly Spaces',
    description: 'Quiet rooms with reduced lighting and noise-canceling features for sensory-sensitive visitors',
    availability: 'select-branches',
    branches: ['Vancouver Central', 'Burnaby Public', 'Richmond Public'],
    howToAccess: 'Look for the "Quiet Zone" or "Sensory-Friendly Space" signs, or ask staff',
    proTip: 'Some branches offer sensory-friendly storytimes with dimmed lights and reduced noise'
  },
  {
    icon: 'eye-closed',
    name: 'Home Delivery Service',
    description: 'Free delivery of library materials to your home if you cannot visit the library due to disability',
    availability: 'most-branches',
    branches: ['Vancouver Public', 'Fraser Valley Regional', 'Burnaby Public', 'Richmond Public'],
    howToAccess: 'Call your local branch or apply online - verification of need required',
    proTip: 'Staff will help you select materials over the phone or can send curated collections'
  }
]

export function AccessibilityGuide() {
  const { t } = useTranslation()
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const getIcon = (iconName: string) => {
    const icons: Record<string, typeof Eye> = {
      'magnifying-glass': MagnifyingGlassPlus,
      'headphones': Headphones,
      'books': Books,
      'ear': Ear,
      'sign-language': HandsClapping,
      'wheelchair': Wheelchair,
      'text-aa': TextAa,
      'eye': Eye,
      'lightbulb': Lightbulb,
      'eye-closed': EyeClosed
    }
    return icons[iconName] || CheckCircle
  }

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case 'all-branches':
        return <Badge className="bg-sage/20 text-sage-foreground">{t('accessibility.allBranches')}</Badge>
      case 'most-branches':
        return <Badge className="bg-primary/20 text-primary">{t('accessibility.mostBranches')}</Badge>
      case 'select-branches':
        return <Badge className="bg-secondary/20 text-secondary-foreground">{t('accessibility.selectBranches')}</Badge>
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Wheelchair size={28} className="text-primary" weight="duotone" />
          <h2 className="text-3xl font-bold">{t('accessibility.title')}</h2>
        </div>
        <p className="text-muted-foreground text-lg">
          {t('accessibility.description')}
        </p>
      </div>

      <Card className="p-6 bg-accent/10 border-accent/20">
        <div className="flex items-start gap-3">
          <Lightbulb size={24} className="text-accent-foreground flex-shrink-0 mt-1" />
          <div className="space-y-1">
            <h3 className="font-semibold text-accent-foreground">{t('accessibility.didYouKnow')}</h3>
            <p className="text-sm text-foreground/80">
              {t('accessibility.didYouKnowText')}
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        {accessibilityServices.map((service, index) => {
          const Icon = getIcon(service.icon)
          const isExpanded = expandedService === service.name

          return (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setExpandedService(isExpanded ? null : service.name)}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <Icon size={24} className="text-primary" weight="duotone" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    {getAvailabilityBadge(service.availability)}
                  </div>

                  {isExpanded && (
                    <div className="space-y-3 pt-3 border-t border-border animate-in fade-in duration-200">
                      <div>
                        <p className="text-sm font-semibold mb-1">{t('accessibility.howToAccess')}</p>
                        <p className="text-sm text-foreground/80">{service.howToAccess}</p>
                      </div>

                      {service.branches && service.branches.length > 0 && (
                        <div>
                          <p className="text-sm font-semibold mb-2">{t('accessibility.availableAt')}</p>
                          <div className="flex flex-wrap gap-2">
                            {service.branches.map((branch, idx) => (
                              <Badge key={idx} variant="outline">{branch}</Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.proTip && (
                        <div className="p-3 bg-accent/10 rounded-lg">
                          <div className="flex items-start gap-2">
                            <Lightbulb size={16} className="text-accent-foreground flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-xs font-semibold text-accent-foreground mb-1">
                                {t('accessibility.proTip')}
                              </p>
                              <p className="text-xs text-foreground/80">{service.proTip}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <Card className="p-6 bg-primary/5 border-primary/10">
        <h3 className="font-semibold mb-3">{t('accessibility.needMoreHelp')}</h3>
        <p className="text-sm text-foreground/80 mb-4">
          {t('accessibility.needMoreHelpText')}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Badge className="bg-primary text-primary-foreground w-fit">
            {t('accessibility.contactInfo')}
          </Badge>
        </div>
      </Card>
    </div>
  )
}
