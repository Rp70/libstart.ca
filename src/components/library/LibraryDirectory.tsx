import { useState, useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  List, 
  MapTrifold, 
  Bank, 
  BookBookmark, 
  Books,
  MagnifyingGlass,
  Phone,
  MapPin as MapPinIcon,
  Globe
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'
import { 
  libraries, 
  provinceNames, 
  getLibraryStats,
  type Library,
  type Province,
  type LibraryType 
} from '@/lib/libraryData'
import { LibraryMap } from './LibraryMap'

export function LibraryDirectory() {
  const { t } = useTranslation()
  const [view, setView] = useState<'list' | 'map'>('list')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProvince, setSelectedProvince] = useState<Province | 'all'>('all')
  const [selectedType, setSelectedType] = useState<LibraryType | 'all'>('all')
  
  const stats = useMemo(() => getLibraryStats(), [])
  
  const filteredLibraries = useMemo(() => {
    return libraries.filter(lib => {
      const matchesSearch = searchQuery === '' || 
        lib.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lib.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lib.region.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesProvince = selectedProvince === 'all' || lib.province === selectedProvince
      const matchesType = selectedType === 'all' || lib.type === selectedType
      
      return matchesSearch && matchesProvince && matchesType
    })
  }, [searchQuery, selectedProvince, selectedType])
  
  const getTypeLabel = (type: LibraryType) => {
    switch(type) {
      case 'public': return t('directory.typePublic')
      case 'private': return t('directory.typePrivate')
      case 'little': return t('directory.typeLittle')
    }
  }
  
  const getTypeIcon = (type: LibraryType) => {
    switch(type) {
      case 'public': return <Bank size={16} weight="fill" />
      case 'private': return <BookBookmark size={16} weight="fill" />
      case 'little': return <Books size={16} weight="fill" />
    }
  }
  
  const getGoogleMapsUrl = (lib: Library) => {
    const query = encodeURIComponent(`${lib.address}, ${lib.city}, ${lib.postalCode}`)
    return `https://www.google.com/maps/search/?api=1&query=${query}`
  }
  
  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12">
      <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">{t('directory.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl font-bold mb-2">{stats.total}</div>
            <div className="text-primary-foreground/90">{t('directory.totalLibraries')}</div>
          </div>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl font-bold mb-2">{Object.keys(stats.byProvince).length}</div>
            <div className="text-primary-foreground/90">{t('directory.provincesServed')}</div>
          </div>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex gap-3 mb-2">
              <div className="flex items-center gap-1">
                <Bank size={20} weight="fill" />
                <span className="font-semibold">{stats.byType.public || 0}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookBookmark size={20} weight="fill" />
                <span className="font-semibold">{stats.byType.private || 0}</span>
              </div>
              <div className="flex items-center gap-1">
                <Books size={20} weight="fill" />
                <span className="font-semibold">{stats.byType.little || 0}</span>
              </div>
            </div>
            <div className="text-primary-foreground/90">{t('directory.byType')}</div>
          </div>
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            <div className="relative flex-1">
              <MagnifyingGlass 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
                size={20} 
              />
              <Input
                placeholder={t('directory.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedProvince} onValueChange={(val) => setSelectedProvince(val as Province | 'all')}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder={t('directory.selectProvince')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('directory.allProvinces')}</SelectItem>
                {Object.entries(provinceNames).map(([code, name]) => (
                  <SelectItem key={code} value={code}>
                    {name} ({code})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedType} onValueChange={(val) => setSelectedType(val as LibraryType | 'all')}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder={t('directory.selectType')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('directory.allTypes')}</SelectItem>
                <SelectItem value="public">{t('directory.typePublic')}</SelectItem>
                <SelectItem value="private">{t('directory.typePrivate')}</SelectItem>
                <SelectItem value="little">{t('directory.typeLittle')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2 justify-between">
            <div className="text-sm text-muted-foreground">
              {t('directory.showingResults', { count: filteredLibraries.length })}
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={view === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setView('list')}
                className="gap-2"
              >
                <List size={18} />
                {t('directory.listView')}
              </Button>
              <Button
                variant={view === 'map' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setView('map')}
                className="gap-2"
              >
                <MapTrifold size={18} />
                {t('directory.mapView')}
              </Button>
            </div>
          </div>
        </div>
        
        {view === 'list' ? (
          <div className="space-y-4">
            {filteredLibraries.map((lib) => (
              <Card key={lib.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row">
                  {lib.photoUrl && (
                    <div className="w-full md:w-48 h-48 md:h-auto flex-shrink-0 bg-muted">
                      <img 
                        src={lib.photoUrl} 
                        alt={lib.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="mt-1 text-primary">
                            {getTypeIcon(lib.type)}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-1">{lib.name}</h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                              <Badge variant="secondary">
                                {provinceNames[lib.province]}
                              </Badge>
                              <Badge variant="outline">
                                {getTypeLabel(lib.type)}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {lib.region}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPinIcon size={16} className="mt-0.5 flex-shrink-0" />
                            <span>{lib.address}, {lib.city}, {lib.postalCode}</span>
                          </div>
                          
                          {lib.phone !== 'N/A' && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Phone size={16} className="flex-shrink-0" />
                              <a href={`tel:${lib.phone}`} className="hover:text-primary transition-colors">
                                {lib.phone}
                              </a>
                            </div>
                          )}
                          
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Globe size={16} className="flex-shrink-0" />
                            <a 
                              href={lib.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors truncate"
                            >
                              {lib.website}
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex md:flex-col gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          asChild
                          className="flex-1 md:flex-none"
                        >
                          <a 
                            href={getGoogleMapsUrl(lib)} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <MapPinIcon size={16} />
                            {t('directory.directions')}
                          </a>
                        </Button>
                        
                        <Button 
                          variant="default" 
                          size="sm"
                          asChild
                          className="flex-1 md:flex-none"
                        >
                          <a 
                            href={lib.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <Globe size={16} />
                            {t('directory.visit')}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
            
            {filteredLibraries.length === 0 && (
              <Card className="p-12 text-center">
                <div className="text-muted-foreground">
                  <Books size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium mb-2">{t('directory.noResults')}</p>
                  <p className="text-sm">{t('directory.tryDifferentFilters')}</p>
                </div>
              </Card>
            )}
          </div>
        ) : (
          <LibraryMap libraries={filteredLibraries} />
        )}
      </Card>
    </div>
  )
}
