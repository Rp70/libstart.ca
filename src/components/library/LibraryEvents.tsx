import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  CalendarBlank, 
  ArrowRight,
  Info
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

export function LibraryEvents() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Library Events & Programs</h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
          Find events and programs at libraries across Canada. Visit your library's website for the most current schedule and registration information.
        </p>
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 sm:p-8">
        <div className="flex items-start gap-3 sm:gap-4 mb-4">
          <Info size={24} className="text-primary shrink-0 mt-1" weight="duotone" />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">How to Find Library Events</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              To discover events and programs at libraries near you, first find your library using our Directory page, then visit their official website to view their events calendar.
            </p>
            <Button 
              className="gap-2"
              onClick={() => {
                const directoryTab = document.querySelector('[value="directory"]') as HTMLElement
                if (directoryTab) directoryTab.click()
              }}
            >
              Go to Library Directory
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Card>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
          <CalendarBlank size={20} className="sm:w-6 sm:h-6" weight="duotone" />
          About Library Events
        </h3>
        <div className="space-y-3 sm:space-y-4">
          <div>
            <h4 className="font-medium mb-2 text-sm sm:text-base">What to Expect</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">•</span>
                <span>Most library events and programs are <strong>completely free</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">•</span>
                <span>Events include storytimes, book clubs, tech help, workshops, and community programs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">•</span>
                <span>Many programs are offered for specific age groups: children, teens, adults, and seniors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">•</span>
                <span>Some events require advance registration, while others are drop-in</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2 text-sm sm:text-base">Programs for Newcomers</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">•</span>
                <span>English conversation circles and language practice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">•</span>
                <span>Settlement services and citizenship test preparation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">•</span>
                <span>Job search workshops and resume writing help</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">•</span>
                <span>Cultural programs and multilingual storytimes</span>
              </li>
            </ul>
          </div>

          <div className="pt-3 sm:pt-4 border-t border-primary/20">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>Tip:</strong> Can't find what you're looking for? Call your local library directly - staff are happy to help you find programs that match your interests and needs. Many libraries also offer virtual events you can attend from home!
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
