import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  WifiHigh, 
  Printer, 
  Desktop, 
  Users, 
  BookOpen, 
  CalendarBlank, 
  Baby, 
  Cloud, 
  Wheelchair, 
  Wrench,
  Cube,
  FilmSlate,
  Globe,
  Briefcase,
  Car,
  Coffee,
  Ticket
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'
import { getServicesByAvailability } from '@/lib/serviceData'
import { libraries } from '@/lib/libraryData'

const iconMap = {
  wifi: WifiHigh,
  printer: Printer,
  desktop: Desktop,
  users: Users,
  'book-open': BookOpen,
  calendar: CalendarBlank,
  baby: Baby,
  cloud: Cloud,
  wheelchair: Wheelchair,
  wrench: Wrench,
  cube: Cube,
  film: FilmSlate,
  globe: Globe,
  briefcase: Briefcase,
  car: Car,
  coffee: Coffee,
  ticket: Ticket
}

export function LibraryServices() {
  const { t } = useTranslation()
  const serviceGroups = getServicesByAvailability()
  
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap]
    return IconComponent ? <IconComponent size={24} weight="duotone" /> : null
  }

  const getLibraryCountWithService = (serviceId: string) => {
    return libraries.filter(lib => lib.services?.includes(serviceId as any)).length
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">{t('services.title')}</h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
          {t('services.subtitle')}
        </p>
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 sm:p-6 md:p-8">
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-primary text-primary-foreground p-2 sm:p-3 rounded-lg shrink-0">
            <WifiHigh className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">{t('services.mostLibraries')}</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              {t('services.mostLibrariesDescription')}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {serviceGroups.most.map((service) => {
            const count = getLibraryCountWithService(service.id)
            return (
              <Card key={service.id} className="p-4 sm:p-5 bg-background/80 backdrop-blur-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="text-primary mt-0.5 sm:mt-1 shrink-0">
                    {getIcon(service.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-sm sm:text-base">{t(service.nameKey)}</h4>
                      <Badge variant="secondary" className="text-[10px] sm:text-xs shrink-0">
                        {count}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t(service.descriptionKey)}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-accent/10 to-secondary/10 p-4 sm:p-6 md:p-8">
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-accent text-accent-foreground p-2 sm:p-3 rounded-lg shrink-0">
            <Cube className="w-6 h-6 sm:w-7 sm:h-7" weight="duotone" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">{t('services.someLibraries')}</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              {t('services.someLibrariesDescription')}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {serviceGroups.some.map((service) => {
            const count = getLibraryCountWithService(service.id)
            return (
              <Card key={service.id} className="p-4 sm:p-5 bg-background/80 backdrop-blur-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="text-accent mt-0.5 sm:mt-1 shrink-0">
                    {getIcon(service.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-sm sm:text-base">{t(service.nameKey)}</h4>
                      <Badge variant="outline" className="text-[10px] sm:text-xs shrink-0">
                        {count}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t(service.descriptionKey)}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-sage/20 to-primary/10 p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t('services.tipTitle')}</h3>
        <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>{t('services.tip1')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>{t('services.tip2')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>{t('services.tip3')}</span>
          </li>
        </ul>
      </Card>
    </div>
  )
}
