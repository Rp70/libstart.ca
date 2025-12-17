import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Bank, 
  BookBookmark, 
  Books,
  MapPin as MapPinIcon,
  Phone,
  Globe,
  X,
  MapTrifold,
  Image as ImageIcon
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'
import { type Library, provinceNames } from '@/lib/libraryData'

interface LibraryMapProps {
  libraries: Library[]
}

export function LibraryMap({ libraries }: LibraryMapProps) {
  const { t } = useTranslation()
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedLibrary, setSelectedLibrary] = useState<Library | null>(null)
  const [viewMode, setViewMode] = useState<'map' | 'photos'>('map')
  
  const getTypeIcon = (type: Library['type']) => {
    switch(type) {
      case 'public': return <Bank size={16} weight="fill" />
      case 'private': return <BookBookmark size={16} weight="fill" />
      case 'little': return <Books size={16} weight="fill" />
    }
  }
  
  const getTypeLabel = (type: Library['type']) => {
    switch(type) {
      case 'public': return t('directory.typePublic')
      case 'private': return t('directory.typePrivate')
      case 'little': return t('directory.typeLittle')
    }
  }
  
  const getTypeColor = (type: Library['type']) => {
    switch(type) {
      case 'public': return '#7C3AED'
      case 'private': return '#D97706'
      case 'little': return '#059669'
    }
  }
  
  const getGoogleMapsUrl = (lib: Library) => {
    const query = encodeURIComponent(`${lib.address}, ${lib.city}, ${lib.postalCode}`)
    return `https://www.google.com/maps/search/?api=1&query=${query}`
  }
  
  useEffect(() => {
    if (!mapRef.current || libraries.length === 0 || viewMode !== 'map') return
    
    const bounds = libraries.reduce((acc, lib) => {
      return {
        minLat: Math.min(acc.minLat, lib.latitude),
        maxLat: Math.max(acc.maxLat, lib.latitude),
        minLng: Math.min(acc.minLng, lib.longitude),
        maxLng: Math.max(acc.maxLng, lib.longitude)
      }
    }, {
      minLat: libraries[0].latitude,
      maxLat: libraries[0].latitude,
      minLng: libraries[0].longitude,
      maxLng: libraries[0].longitude
    })
    
    const centerLat = (bounds.minLat + bounds.maxLat) / 2
    const centerLng = (bounds.minLng + bounds.maxLng) / 2
    
    const latRange = bounds.maxLat - bounds.minLat
    const lngRange = bounds.maxLng - bounds.minLng
    const maxRange = Math.max(latRange, lngRange)
    
    const width = mapRef.current.clientWidth
    const height = mapRef.current.clientHeight
    
    const points = libraries.map(lib => {
      const x = ((lib.longitude - centerLng) / maxRange) * Math.min(width, height) * 0.8 + width / 2
      const y = (-(lib.latitude - centerLat) / maxRange) * Math.min(width, height) * 0.8 + height / 2
      return { ...lib, x, y }
    })
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '100%')
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`)
    svg.style.background = 'linear-gradient(to bottom, #f0f9ff 0%, #e0f2fe 100%)'
    svg.style.borderRadius = '0.75rem'
    
    points.forEach((point) => {
      const marker = document.createElementNS('http://www.w3.org/2000/svg', 'g')
      marker.setAttribute('transform', `translate(${point.x}, ${point.y})`)
      marker.style.cursor = 'pointer'
      
      const pin = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      pin.setAttribute('d', 'M0,-20 C-5,-20 -10,-15 -10,-10 C-10,-5 0,5 0,5 C0,5 10,-5 10,-10 C10,-15 5,-20 0,-20 Z')
      pin.setAttribute('fill', getTypeColor(point.type))
      pin.setAttribute('stroke', '#ffffff')
      pin.setAttribute('stroke-width', '2')
      pin.setAttribute('filter', 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))')
      
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      circle.setAttribute('cx', '0')
      circle.setAttribute('cy', '-13')
      circle.setAttribute('r', '4')
      circle.setAttribute('fill', '#ffffff')
      
      marker.appendChild(pin)
      marker.appendChild(circle)
      
      if (point.photoUrl) {
        const tooltip = document.createElementNS('http://www.w3.org/2000/svg', 'g')
        tooltip.setAttribute('class', 'marker-tooltip')
        tooltip.style.opacity = '0'
        tooltip.style.pointerEvents = 'none'
        tooltip.style.transition = 'opacity 0.2s'
        
        const tooltipBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        tooltipBg.setAttribute('x', '-60')
        tooltipBg.setAttribute('y', '-120')
        tooltipBg.setAttribute('width', '120')
        tooltipBg.setAttribute('height', '95')
        tooltipBg.setAttribute('rx', '6')
        tooltipBg.setAttribute('fill', '#ffffff')
        tooltipBg.setAttribute('stroke', getTypeColor(point.type))
        tooltipBg.setAttribute('stroke-width', '2')
        tooltipBg.setAttribute('filter', 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))')
        
        const tooltipImage = document.createElementNS('http://www.w3.org/2000/svg', 'image')
        tooltipImage.setAttribute('x', '-55')
        tooltipImage.setAttribute('y', '-115')
        tooltipImage.setAttribute('width', '110')
        tooltipImage.setAttribute('height', '70')
        tooltipImage.setAttribute('href', point.photoUrl)
        tooltipImage.setAttribute('preserveAspectRatio', 'xMidYMid slice')
        tooltipImage.setAttribute('clip-path', 'inset(0 round 4px 4px 0 0)')
        
        const tooltipText = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        tooltipText.setAttribute('x', '0')
        tooltipText.setAttribute('y', '-33')
        tooltipText.setAttribute('text-anchor', 'middle')
        tooltipText.setAttribute('font-size', '10')
        tooltipText.setAttribute('font-weight', '600')
        tooltipText.setAttribute('fill', '#1f2937')
        tooltipText.textContent = point.name.length > 18 ? point.name.substring(0, 16) + '...' : point.name
        
        tooltip.appendChild(tooltipBg)
        tooltip.appendChild(tooltipImage)
        tooltip.appendChild(tooltipText)
        marker.appendChild(tooltip)
        
        marker.addEventListener('mouseenter', () => {
          pin.setAttribute('transform', 'scale(1.2)')
          tooltip.style.opacity = '1'
        })
        
        marker.addEventListener('mouseleave', () => {
          pin.setAttribute('transform', 'scale(1)')
          tooltip.style.opacity = '0'
        })
      } else {
        marker.addEventListener('mouseenter', () => {
          pin.setAttribute('transform', 'scale(1.2)')
        })
        
        marker.addEventListener('mouseleave', () => {
          pin.setAttribute('transform', 'scale(1)')
        })
      }
      
      marker.addEventListener('click', () => {
        setSelectedLibrary(point)
      })
      
      svg.appendChild(marker)
    })
    
    mapRef.current.innerHTML = ''
    mapRef.current.appendChild(svg)
    
  }, [libraries, viewMode])
  
  return (
    <div className="relative">
      <div className="mb-4 flex gap-2">
        <Button
          variant={viewMode === 'map' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setViewMode('map')}
          className="gap-2"
        >
          <MapTrifold size={18} />
          Map View
        </Button>
        <Button
          variant={viewMode === 'photos' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setViewMode('photos')}
          className="gap-2"
        >
          <ImageIcon size={18} />
          Photo Gallery
        </Button>
      </div>

      {viewMode === 'map' ? (
        <>
          <div 
            ref={mapRef} 
            className="w-full h-[600px] rounded-lg border border-border shadow-inner"
          />
          
          {selectedLibrary && (
            <Card className="absolute top-16 left-4 right-4 md:right-auto md:w-96 shadow-xl border-2 border-primary/20 z-10 overflow-hidden">
              {selectedLibrary.photoUrl && (
                <div className="w-full h-48 bg-muted">
                  <img 
                    src={selectedLibrary.photoUrl} 
                    alt={selectedLibrary.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1 text-primary">
                    {getTypeIcon(selectedLibrary.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{selectedLibrary.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">
                        {provinceNames[selectedLibrary.province]}
                      </Badge>
                      <Badge variant="outline">
                        {getTypeLabel(selectedLibrary.type)}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedLibrary(null)}
                    className="h-8 w-8 p-0 -mr-2 -mt-2"
                  >
                    <X size={18} />
                  </Button>
                </div>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPinIcon size={16} className="mt-0.5 flex-shrink-0" />
                    <span>{selectedLibrary.address}, {selectedLibrary.city}, {selectedLibrary.postalCode}</span>
                  </div>
                  
                  {selectedLibrary.phone !== 'N/A' && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone size={16} className="flex-shrink-0" />
                      <a href={`tel:${selectedLibrary.phone}`} className="hover:text-primary transition-colors">
                        {selectedLibrary.phone}
                      </a>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Globe size={16} className="flex-shrink-0" />
                    <a 
                      href={selectedLibrary.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors truncate"
                    >
                      {selectedLibrary.website}
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a 
                      href={getGoogleMapsUrl(selectedLibrary)} 
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
                    className="flex-1"
                  >
                    <a 
                      href={selectedLibrary.website} 
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
            </Card>
          )}
          
          <Card className="absolute bottom-4 right-4 p-4 bg-background/95 backdrop-blur">
            <div className="text-xs font-medium mb-2">{t('directory.legend')}</div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#7C3AED' }} />
                <span className="text-xs">{t('directory.typePublic')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D97706' }} />
                <span className="text-xs">{t('directory.typePrivate')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#059669' }} />
                <span className="text-xs">{t('directory.typeLittle')}</span>
              </div>
            </div>
          </Card>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraries
            .filter(lib => lib.photoUrl)
            .map((lib) => (
              <Card 
                key={lib.id} 
                className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => {
                  setSelectedLibrary(lib)
                  setViewMode('map')
                }}
              >
                <div className="relative h-56 bg-muted overflow-hidden">
                  <img 
                    src={lib.photoUrl} 
                    alt={lib.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                      {provinceNames[lib.province]}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-4">
                  <div className="flex items-start gap-2 mb-3">
                    <div className="mt-1 text-primary flex-shrink-0">
                      {getTypeIcon(lib.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base mb-1 truncate">{lib.name}</h3>
                      <p className="text-sm text-muted-foreground truncate">{lib.city}, {lib.province}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                      className="flex-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a 
                        href={getGoogleMapsUrl(lib)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <MapPinIcon size={14} />
                        Directions
                      </a>
                    </Button>
                    
                    <Button 
                      variant="default" 
                      size="sm"
                      asChild
                      className="flex-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a 
                        href={lib.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <Globe size={14} />
                        Visit
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          
          {libraries.filter(lib => lib.photoUrl).length === 0 && (
            <div className="col-span-full">
              <Card className="p-12 text-center">
                <ImageIcon size={48} className="mx-auto mb-4 opacity-50 text-muted-foreground" />
                <p className="text-lg font-medium mb-2">No photos available</p>
                <p className="text-sm text-muted-foreground">Photos not found for libraries in current filter</p>
              </Card>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
