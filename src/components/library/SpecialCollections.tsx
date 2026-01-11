import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Vault,
  Books,
  FilmStrip,
  Newspaper,
  MapTrifold,
  Image,
  Scroll,
  Archive,
  MagnifyingGlass,
  Clock,
  MapPin,
  Lightbulb
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

interface SpecialCollection {
  name: string
  library: string
  type: string
  description: string
  highlights: string[]
  access: string
  appointmentRequired: boolean
  digitalAccess?: string
  historicalPeriod?: string
  icon: string
  uniqueValue: string
}

const specialCollections: SpecialCollection[] = [
  {
    name: 'Vancouver Historical Photographs Archive',
    library: 'Vancouver Central',
    type: 'Photography',
    description: 'Over 80,000 historical photographs documenting Vancouver from the 1880s to present day',
    highlights: [
      'Pre-fire Vancouver (1886) - rare images of the original city',
      'Chinatown heritage photos from 1900s-1950s',
      'Japanese-Canadian internment documentation',
      'Stanley Park construction & early development',
      'Street scenes showing urban transformation'
    ],
    access: 'Digital archive accessible from home + viewing room for original prints',
    appointmentRequired: false,
    digitalAccess: 'Full online database available 24/7',
    historicalPeriod: '1880s - Present',
    icon: 'image',
    uniqueValue: 'Perfect for family history research, school projects, or understanding your neighborhood\'s past'
  },
  {
    name: 'Indigenous Languages Audio Collection',
    library: 'North Vancouver District',
    type: 'Audio Archive',
    description: 'Recordings of Squamish, Halkomelem, and other Coast Salish languages with stories from elders',
    highlights: [
      'Elder oral histories (1960s-1990s)',
      'Traditional story recordings',
      'Language learning materials',
      'Place name pronunciations for local geography',
      'Cultural protocol explanations'
    ],
    access: 'Listening stations in-library + some digitized content online',
    appointmentRequired: true,
    digitalAccess: 'Limited online access (some recordings require community permission)',
    historicalPeriod: '1960s - Present',
    icon: 'archive',
    uniqueValue: 'Essential for truth & reconciliation education and language revitalization'
  },
  {
    name: 'BC Genealogy & Family History Room',
    library: 'Surrey City Centre',
    type: 'Genealogy',
    description: 'Census records, immigration documents, cemetery indexes, and family histories for BC families',
    highlights: [
      'Chinese head tax records & certificates',
      'British Home Children arrival records',
      'BC cemetery & burial indexes',
      'City directories 1890-1990',
      'Passenger ship manifests'
    ],
    access: 'On-site research room with staff assistance',
    appointmentRequired: true,
    historicalPeriod: '1850s - 1990s',
    icon: 'scroll',
    uniqueValue: 'Trace your family immigration story - especially valuable for South Asian & Chinese-Canadian families'
  },
  {
    name: 'Japanese-Canadian Archives',
    library: 'Burnaby Public',
    type: 'Cultural Heritage',
    description: 'Documents, photos, and artifacts from Japanese-Canadian communities, including internment period',
    highlights: [
      'Pre-internment community life (Steveston, Powell Street)',
      'Personal internment camp correspondence',
      'Post-war resettlement documents',
      'Community newspapers in Japanese & English',
      'Fishing industry historical records'
    ],
    access: 'Viewing room with archivist support',
    appointmentRequired: true,
    digitalAccess: 'Partial digitization ongoing',
    historicalPeriod: '1900s - 1980s',
    icon: 'vault',
    uniqueValue: 'Critical resource for understanding BC\'s Japanese-Canadian community and wartime injustice'
  },
  {
    name: 'Fraser Valley Agricultural Heritage',
    library: 'Abbotsford Library',
    type: 'Local History',
    description: 'Farm records, harvest data, settler diaries, and agricultural development of the Fraser Valley',
    highlights: [
      'Original homesteader land grants',
      'Berry farming evolution (1920s-present)',
      'Irrigation system blueprints',
      'Farm family oral histories',
      'Agricultural fair programs & prize records'
    ],
    access: 'Research room access during library hours',
    appointmentRequired: false,
    historicalPeriod: '1870s - Present',
    icon: 'map',
    uniqueValue: 'Connect with farming heritage - many newcomers find parallels to their own agricultural backgrounds'
  },
  {
    name: 'Local Newspaper Archives (Microfilm & Digital)',
    library: 'Multiple Branches',
    type: 'Newspapers',
    description: 'Complete runs of local newspapers from founding to present, searchable digital databases',
    highlights: [
      'The Province (1894-present)',
      'Vancouver Sun (1912-present)',
      'Community newspapers from Chinatown, Punjabi Market, etc.',
      'Obituary indexes for family research',
      'Major event coverage (floods, wars, celebrations)'
    ],
    access: 'Microfilm readers + online digital archives',
    appointmentRequired: false,
    digitalAccess: 'Many newspapers fully searchable online',
    historicalPeriod: '1890s - Present',
    icon: 'newspaper',
    uniqueValue: 'Research what was happening the day you (or your parents) arrived in Canada'
  },
  {
    name: 'Historical Maps & Atlases Collection',
    library: 'Vancouver Central',
    type: 'Cartography',
    description: 'Rare maps showing BC before colonization, settlement patterns, and urban development',
    highlights: [
      'Pre-contact Indigenous territory maps',
      'Gold rush trail maps (1850s-1860s)',
      'Fire insurance maps showing building-by-building detail',
      'Transit evolution maps',
      'Topographical changes (shoreline, rivers)'
    ],
    access: 'Viewing room with large format tables',
    appointmentRequired: true,
    digitalAccess: 'High-resolution scans available online',
    historicalPeriod: '1700s - Present',
    icon: 'map-trifold',
    uniqueValue: 'See how radically the landscape has changed - perfect for urban planning students'
  },
  {
    name: 'Film & Video Archive: BC Stories',
    library: 'Richmond Public',
    type: 'Film & Video',
    description: 'Documentaries, home movies, and educational films about BC communities',
    highlights: [
      'Fishing industry documentaries (1940s-1980s)',
      'Community event footage (parades, festivals)',
      'School & educational films',
      'Amateur home movies donated by families',
      'News footage from local TV stations'
    ],
    access: 'Viewing stations in media room',
    appointmentRequired: false,
    digitalAccess: 'Some content on YouTube channel',
    historicalPeriod: '1930s - Present',
    icon: 'film',
    uniqueValue: 'See historical BC come alive - especially powerful for visual learners and ESL users'
  }
]

export function SpecialCollections() {
  const { t } = useTranslation()

  const getIcon = (iconName: string) => {
    const icons: Record<string, typeof Archive> = {
      'image': Image,
      'archive': Archive,
      'scroll': Scroll,
      'vault': Vault,
      'map': MapTrifold,
      'newspaper': Newspaper,
      'map-trifold': MapTrifold,
      'film': FilmStrip
    }
    return icons[iconName] || Books
  }

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Photography': 'bg-accent/10 text-accent-foreground',
      'Audio Archive': 'bg-primary/10 text-primary',
      'Genealogy': 'bg-secondary/10 text-secondary-foreground',
      'Cultural Heritage': 'bg-sage/20 text-sage-foreground',
      'Local History': 'bg-primary/10 text-primary',
      'Newspapers': 'bg-accent/10 text-accent-foreground',
      'Cartography': 'bg-secondary/10 text-secondary-foreground',
      'Film & Video': 'bg-sage/20 text-sage-foreground'
    }
    return colors[type] || 'bg-muted text-muted-foreground'
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center gap-2">
          <Vault size={24} className="sm:w-7 sm:h-7 text-primary" weight="duotone" />
          <h2 className="text-2xl sm:text-3xl font-bold">{t('specialCollections.title')}</h2>
        </div>
        <p className="text-muted-foreground text-base sm:text-lg">
          {t('specialCollections.description')}
        </p>
      </div>

      <Card className="p-4 sm:p-6 bg-accent/10 border-accent/20">
        <div className="flex items-start gap-3">
          <Lightbulb size={24} className="text-accent-foreground flex-shrink-0 mt-1" />
          <div className="space-y-1">
            <h3 className="font-semibold text-accent-foreground">{t('specialCollections.secretTip')}</h3>
            <p className="text-sm text-foreground/80">
              {t('specialCollections.secretTipText')}
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        {specialCollections.map((collection, index) => {
          const Icon = getIcon(collection.icon)

          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Icon size={24} className="text-primary" weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold">{collection.name}</h3>
                      <Badge className={getTypeColor(collection.type)}>{collection.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{collection.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-muted-foreground" />
                        <span className="text-foreground/80">{collection.library}</span>
                      </div>
                      {collection.historicalPeriod && (
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-muted-foreground" />
                          <span className="text-foreground/80">{collection.historicalPeriod}</span>
                        </div>
                      )}
                      {collection.appointmentRequired && (
                        <Badge variant="outline" className="text-xs">
                          {t('specialCollections.appointmentRequired')}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pl-16 space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">{t('specialCollections.highlights')}</h4>
                    <ul className="space-y-1">
                      {collection.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-primary text-base">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <MagnifyingGlass size={16} className="text-primary" />
                        <p className="text-xs font-semibold">{t('specialCollections.access')}</p>
                      </div>
                      <p className="text-xs text-foreground/80">{collection.access}</p>
                    </div>
                    {collection.digitalAccess && (
                      <div className="p-3 bg-sage/10 rounded-lg border border-sage/20">
                        <div className="flex items-center gap-2 mb-1">
                          <Archive size={16} className="text-sage-foreground" />
                          <p className="text-xs font-semibold text-sage-foreground">
                            {t('specialCollections.digitalAccess')}
                          </p>
                        </div>
                        <p className="text-xs text-foreground/80">{collection.digitalAccess}</p>
                      </div>
                    )}
                  </div>

                  <div className="p-3 bg-accent/5 rounded-lg border border-accent/10">
                    <p className="text-sm">
                      <span className="font-semibold text-accent-foreground">
                        {t('specialCollections.whyItMatters')}:{' '}
                      </span>
                      <span className="text-foreground/80">{collection.uniqueValue}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      <Card className="p-6 bg-primary/5 border-primary/10">
        <h3 className="font-semibold mb-3">{t('specialCollections.researchHelp')}</h3>
        <p className="text-sm text-foreground/80 mb-4">
          {t('specialCollections.researchHelpText')}
        </p>
        <div className="flex items-center gap-3 text-sm">
          <Badge className="bg-primary text-primary-foreground">
            {t('specialCollections.askLibrarian')}
          </Badge>
        </div>
      </Card>
    </div>
  )
}
