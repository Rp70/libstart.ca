import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { 
  CalendarBlank, 
  MapPin, 
  ArrowSquareOut,
  MagnifyingGlass
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'
import { libraries, provinceNames, type Province } from '@/lib/libraryData'

export function LibraryEvents() {
  const { t } = useTranslation()
  const [selectedProvince, setSelectedProvince] = useState<Province | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredLibraries = libraries.filter(library => {
    const matchesProvince = selectedProvince === 'all' || library.province === selectedProvince
    const matchesSearch = searchQuery === '' || 
      library.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      library.city.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesProvince && matchesSearch
  })

  const uniqueProvinces = Array.from(new Set(libraries.map(lib => lib.province))).sort()

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Library Events & Programs</h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
          Find events and programs at libraries across Canada. Visit your library's website for the most current schedule and registration information.
        </p>
      </div>

      <Card className="p-4 sm:p-6">
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex-1">
            <label className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">Search Libraries</label>
            <div className="relative">
              <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                type="text"
                placeholder="Search by library name or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-sm"
              />
            </div>
          </div>

          <div className="flex-1">
            <label className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 block">Filter by Province</label>
            <Select value={selectedProvince} onValueChange={(val) => setSelectedProvince(val as Province | 'all')}>
              <SelectTrigger className="text-sm">
                <SelectValue placeholder="Select a province" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Provinces</SelectItem>
                {uniqueProvinces.map(province => (
                  <SelectItem key={province} value={province}>
                    {provinceNames[province]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
          Showing {filteredLibraries.length} {filteredLibraries.length === 1 ? 'library' : 'libraries'}
        </p>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredLibraries.map(library => (
            <Card key={library.id} className="p-4 sm:p-5 hover:shadow-md transition-shadow flex flex-col">
              <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="p-1.5 sm:p-2 bg-primary/10 text-primary rounded-lg shrink-0">
                  <CalendarBlank size={20} className="sm:w-6 sm:h-6" weight="duotone" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base mb-1 line-clamp-2">{library.name}</h4>
                  <div className="flex items-start gap-1.5 text-xs sm:text-sm text-muted-foreground">
                    <MapPin size={12} className="sm:w-3.5 sm:h-3.5 shrink-0 mt-0.5" />
                    <span className="truncate">{library.city}, {library.province}</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Button 
                  asChild 
                  className="w-full gap-1.5 sm:gap-2 text-xs sm:text-sm h-9 sm:h-10"
                  variant="default"
                >
                  <a 
                    href={library.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Events Calendar
                    <ArrowSquareOut size={14} className="sm:w-4 sm:h-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredLibraries.length === 0 && (
          <Card className="p-8 sm:p-12 text-center">
            <div className="text-muted-foreground">
              <CalendarBlank size={40} className="sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" />
              <p className="text-base sm:text-lg font-medium mb-2">No libraries found</p>
              <p className="text-xs sm:text-sm">Try adjusting your search or filters</p>
            </div>
          </Card>
        )}
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
