import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  SpeakerSimpleSlash,
  SpeakerSimpleLow,
  SpeakerSimpleHigh,
  Clock,
  Users,
  BookOpen,
  Coffee,
  Lightbulb,
  CalendarBlank
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

type NoiseLevel = 'quiet' | 'moderate' | 'busy'
type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

interface QuietPeriod {
  day: DayOfWeek
  timeSlot: string
  noiseLevel: NoiseLevel
  typicalActivity: string
  bestFor: string[]
  crowdLevel: 'low' | 'medium' | 'high'
}

const quietHoursData: Record<string, QuietPeriod[]> = {
  'Vancouver Central': [
    {
      day: 'monday',
      timeSlot: '10:00 AM - 12:00 PM',
      noiseLevel: 'quiet',
      typicalActivity: 'Individual study time',
      bestFor: ['Deep work', 'Reading', 'Writing'],
      crowdLevel: 'low'
    },
    {
      day: 'tuesday',
      timeSlot: '2:00 PM - 4:00 PM',
      noiseLevel: 'moderate',
      typicalActivity: 'After-school programs starting',
      bestFor: ['Casual reading', 'Browsing'],
      crowdLevel: 'medium'
    },
    {
      day: 'wednesday',
      timeSlot: '9:00 AM - 11:00 AM',
      noiseLevel: 'quiet',
      typicalActivity: 'Seniors reading hour',
      bestFor: ['Focused study', 'Research'],
      crowdLevel: 'low'
    },
    {
      day: 'thursday',
      timeSlot: '6:00 PM - 8:00 PM',
      noiseLevel: 'busy',
      typicalActivity: 'Evening programs and events',
      bestFor: ['Community engagement', 'Networking'],
      crowdLevel: 'high'
    },
    {
      day: 'friday',
      timeSlot: '1:00 PM - 3:00 PM',
      noiseLevel: 'moderate',
      typicalActivity: 'Weekend prep, varied activities',
      bestFor: ['Group study', 'Collaborative work'],
      crowdLevel: 'medium'
    },
    {
      day: 'saturday',
      timeSlot: '10:00 AM - 12:00 PM',
      noiseLevel: 'busy',
      typicalActivity: 'Family storytime and children\'s programs',
      bestFor: ['Family activities', 'Social events'],
      crowdLevel: 'high'
    },
    {
      day: 'sunday',
      timeSlot: '3:00 PM - 5:00 PM',
      noiseLevel: 'quiet',
      typicalActivity: 'Quiet weekend afternoon',
      bestFor: ['Peaceful reading', 'Reflection'],
      crowdLevel: 'low'
    }
  ],
  'Surrey City Centre': [
    {
      day: 'monday',
      timeSlot: '11:00 AM - 1:00 PM',
      noiseLevel: 'quiet',
      typicalActivity: 'Mid-morning calm',
      bestFor: ['Study', 'Research', 'Writing'],
      crowdLevel: 'low'
    },
    {
      day: 'tuesday',
      timeSlot: '3:00 PM - 5:00 PM',
      noiseLevel: 'busy',
      typicalActivity: 'After-school rush',
      bestFor: ['Teen programs', 'Homework help'],
      crowdLevel: 'high'
    },
    {
      day: 'saturday',
      timeSlot: '2:00 PM - 4:00 PM',
      noiseLevel: 'moderate',
      typicalActivity: 'Weekend family browsing',
      bestFor: ['Family time', 'Browsing collections'],
      crowdLevel: 'medium'
    }
  ],
  'Burnaby Public': [
    {
      day: 'wednesday',
      timeSlot: '10:00 AM - 12:00 PM',
      noiseLevel: 'quiet',
      typicalActivity: 'Weekday morning tranquility',
      bestFor: ['Deep focus', 'Quiet reading'],
      crowdLevel: 'low'
    },
    {
      day: 'friday',
      timeSlot: '4:00 PM - 6:00 PM',
      noiseLevel: 'moderate',
      typicalActivity: 'End-of-week wind down',
      bestFor: ['Casual browsing', 'Light study'],
      crowdLevel: 'medium'
    }
  ]
}

const dayOrder: DayOfWeek[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

export function QuietHoursTracker() {
  const { t } = useTranslation()
  const [selectedLibrary, setSelectedLibrary] = useState<string>('Vancouver Central')
  const [selectedNoiseLevel, setSelectedNoiseLevel] = useState<NoiseLevel | 'all'>('all')

  const libraries = Object.keys(quietHoursData)
  const periods = quietHoursData[selectedLibrary] || []

  const filteredPeriods = selectedNoiseLevel === 'all' 
    ? periods 
    : periods.filter(p => p.noiseLevel === selectedNoiseLevel)

  const sortedPeriods = [...filteredPeriods].sort((a, b) => {
    return dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day)
  })

  const getNoiseLevelIcon = (level: NoiseLevel) => {
    switch (level) {
      case 'quiet':
        return <SpeakerSimpleSlash size={20} className="text-sage-foreground" weight="duotone" />
      case 'moderate':
        return <SpeakerSimpleLow size={20} className="text-primary" weight="duotone" />
      case 'busy':
        return <SpeakerSimpleHigh size={20} className="text-secondary-foreground" weight="duotone" />
    }
  }

  const getNoiseLevelColor = (level: NoiseLevel) => {
    switch (level) {
      case 'quiet':
        return 'bg-sage/20 text-sage-foreground border-sage/30'
      case 'moderate':
        return 'bg-primary/20 text-primary border-primary/30'
      case 'busy':
        return 'bg-secondary/20 text-secondary-foreground border-secondary/30'
    }
  }

  const getCrowdIcon = (level: 'low' | 'medium' | 'high') => {
    const count = level === 'low' ? 1 : level === 'medium' ? 2 : 3
    return (
      <div className="flex gap-0.5">
        {Array.from({ length: count }).map((_, i) => (
          <Users key={i} size={12} weight="fill" />
        ))}
      </div>
    )
  }

  const getDayLabel = (day: DayOfWeek) => {
    return day.charAt(0).toUpperCase() + day.slice(1)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <SpeakerSimpleSlash size={28} className="text-primary" weight="duotone" />
          <h2 className="text-3xl font-bold">{t('quietHours.title')}</h2>
        </div>
        <p className="text-muted-foreground text-lg">
          {t('quietHours.description')}
        </p>
      </div>

      <Card className="p-6 bg-sage/10 border-sage/20">
        <div className="flex items-start gap-3">
          <Lightbulb size={24} className="text-sage-foreground flex-shrink-0 mt-1" />
          <div className="space-y-1">
            <h3 className="font-semibold text-sage-foreground">{t('quietHours.insiderTip')}</h3>
            <p className="text-sm text-foreground/80">
              {t('quietHours.insiderTipText')}
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">{t('quietHours.selectLibrary')}</label>
          <div className="flex flex-wrap gap-2">
            {libraries.map(library => (
              <Button
                key={library}
                variant={selectedLibrary === library ? 'default' : 'outline'}
                onClick={() => setSelectedLibrary(library)}
                size="sm"
              >
                {library}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">{t('quietHours.filterByNoise')}</label>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedNoiseLevel === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedNoiseLevel('all')}
              size="sm"
            >
              {t('quietHours.allLevels')}
            </Button>
            <Button
              variant={selectedNoiseLevel === 'quiet' ? 'default' : 'outline'}
              onClick={() => setSelectedNoiseLevel('quiet')}
              size="sm"
              className="gap-2"
            >
              <SpeakerSimpleSlash size={16} />
              {t('quietHours.quiet')}
            </Button>
            <Button
              variant={selectedNoiseLevel === 'moderate' ? 'default' : 'outline'}
              onClick={() => setSelectedNoiseLevel('moderate')}
              size="sm"
              className="gap-2"
            >
              <SpeakerSimpleLow size={16} />
              {t('quietHours.moderate')}
            </Button>
            <Button
              variant={selectedNoiseLevel === 'busy' ? 'default' : 'outline'}
              onClick={() => setSelectedNoiseLevel('busy')}
              size="sm"
              className="gap-2"
            >
              <SpeakerSimpleHigh size={16} />
              {t('quietHours.busy')}
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {sortedPeriods.map((period, index) => (
          <Card key={index} className="p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg border-2 ${getNoiseLevelColor(period.noiseLevel)}`}>
                {getNoiseLevelIcon(period.noiseLevel)}
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CalendarBlank size={16} className="text-muted-foreground" />
                      <h3 className="font-bold">{getDayLabel(period.day)}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={16} />
                      <span>{period.timeSlot}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{t('quietHours.crowdLevel')}:</span>
                    {getCrowdIcon(period.crowdLevel)}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Coffee size={16} className="text-muted-foreground" />
                    <span className="text-sm font-medium">{t('quietHours.typicalActivity')}:</span>
                  </div>
                  <p className="text-sm text-foreground/80 ml-6">{period.typicalActivity}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={16} className="text-muted-foreground" />
                    <span className="text-sm font-medium">{t('quietHours.bestFor')}:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-6">
                    {period.bestFor.map((activity, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {sortedPeriods.length === 0 && (
        <Card className="p-12 text-center">
          <SpeakerSimpleSlash size={48} className="mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">{t('quietHours.noResults')}</h3>
          <p className="text-muted-foreground">{t('quietHours.tryDifferentFilter')}</p>
        </Card>
      )}

      <Card className="p-6 bg-primary/5 border-primary/10">
        <h3 className="font-semibold mb-3">{t('quietHours.communityContribution')}</h3>
        <p className="text-sm text-foreground/80 mb-4">
          {t('quietHours.communityContributionText')}
        </p>
        <Button variant="outline" size="sm">
          {t('quietHours.shareYourObservations')}
        </Button>
      </Card>
    </div>
  )
}
