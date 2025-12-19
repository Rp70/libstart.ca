import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { 
  BookBookmark, 
  Users, 
  Clock, 
  MapPin, 
  Calendar,
  MagnifyingGlass
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

interface BookClub {
  id: string
  name: string
  library: string
  genre: string
  meetingTime: string
  frequency: string
  currentBook: string
  capacity: number
  filled: number
  language: string
  level: 'casual' | 'deep-dive' | 'beginner-friendly'
  contact: string
}

const bookClubs: BookClub[] = [
  {
    id: '1',
    name: 'Mystery Lovers Circle',
    library: 'Vancouver Central',
    genre: 'Mystery & Thriller',
    meetingTime: 'First Tuesday, 7:00 PM',
    frequency: 'Monthly',
    currentBook: 'The Thursday Murder Club',
    capacity: 15,
    filled: 12,
    language: 'English',
    level: 'casual',
    contact: 'Ask at circulation desk'
  },
  {
    id: '2',
    name: 'Punjabi Literature Society',
    library: 'Surrey City Centre',
    genre: 'Contemporary Fiction',
    meetingTime: 'Every Saturday, 2:00 PM',
    frequency: 'Weekly',
    currentBook: 'ਪੰਜਾਬ ਦੀਆਂ ਕਹਾਣੀਆਂ',
    capacity: 20,
    filled: 18,
    language: 'Punjabi',
    level: 'beginner-friendly',
    contact: 'community@surreylibrary.ca'
  },
  {
    id: '3',
    name: 'Career Development Reads',
    library: 'Burnaby Public',
    genre: 'Business & Self-Help',
    meetingTime: 'Third Wednesday, 6:30 PM',
    frequency: 'Monthly',
    currentBook: 'Atomic Habits',
    capacity: 12,
    filled: 8,
    language: 'English',
    level: 'deep-dive',
    contact: 'programs@burnabylibrary.ca'
  },
  {
    id: '4',
    name: 'Newcomer Book Exchange',
    library: 'Richmond Public',
    genre: 'Mixed Genres',
    meetingTime: 'Second Friday, 5:00 PM',
    frequency: 'Bi-weekly',
    currentBook: 'Bringing up the Bodies',
    capacity: 10,
    filled: 6,
    language: 'English (ESL-friendly)',
    level: 'beginner-friendly',
    contact: 'newcomer@yourlibrary.ca'
  },
  {
    id: '5',
    name: 'Science Fiction Explorers',
    library: 'North Vancouver District',
    genre: 'Sci-Fi & Fantasy',
    meetingTime: 'Last Thursday, 7:30 PM',
    frequency: 'Monthly',
    currentBook: 'Project Hail Mary',
    capacity: 15,
    filled: 15,
    language: 'English',
    level: 'deep-dive',
    contact: 'scifi@nvdpl.ca'
  },
  {
    id: '6',
    name: '普通话读书会',
    library: 'Vancouver Central',
    genre: 'Chinese Literature',
    meetingTime: 'Every Sunday, 3:00 PM',
    frequency: 'Weekly',
    currentBook: '活着',
    capacity: 18,
    filled: 14,
    language: 'Mandarin',
    level: 'casual',
    contact: 'mandarin@vpl.ca'
  },
  {
    id: '7',
    name: 'Young Parents Book Club',
    library: 'Coquitlam Public',
    genre: 'Parenting & Fiction',
    meetingTime: 'First Saturday, 10:00 AM',
    frequency: 'Monthly',
    currentBook: 'The Whole-Brain Child',
    capacity: 12,
    filled: 9,
    language: 'English',
    level: 'casual',
    contact: 'families@coqlibrary.ca'
  },
  {
    id: '8',
    name: 'Arabic Literature Circle',
    library: 'Surrey Guildford',
    genre: 'Arabic Classics',
    meetingTime: 'Every Friday, 6:00 PM',
    frequency: 'Bi-weekly',
    currentBook: 'البحث عن وليد مسعود',
    capacity: 15,
    filled: 11,
    language: 'Arabic',
    level: 'deep-dive',
    contact: 'arabic@surreylibrary.ca'
  }
]

export function BookClubFinder() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<string>('all')

  const genres = ['all', ...Array.from(new Set(bookClubs.map(club => club.genre)))]

  const filteredClubs = bookClubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.library.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.language.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === 'all' || club.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner-friendly':
        return 'bg-accent/10 text-accent-foreground'
      case 'casual':
        return 'bg-primary/10 text-primary'
      case 'deep-dive':
        return 'bg-secondary/10 text-secondary-foreground'
      default:
        return 'bg-muted text-muted-foreground'
    }
  }

  const getAvailabilityColor = (club: BookClub) => {
    const percentage = club.filled / club.capacity
    if (percentage >= 1) return 'text-destructive'
    if (percentage >= 0.8) return 'text-secondary-foreground'
    return 'text-sage-foreground'
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <BookBookmark size={28} className="text-primary" weight="duotone" />
          <h2 className="text-3xl font-bold">{t('bookClubs.title')}</h2>
        </div>
        <p className="text-muted-foreground text-lg">
          {t('bookClubs.description')}
        </p>
      </div>

      <Card className="p-6 bg-sage/10 border-sage/20">
        <div className="flex items-start gap-3">
          <BookBookmark size={24} className="text-sage-foreground flex-shrink-0 mt-1" />
          <div className="space-y-1">
            <h3 className="font-semibold text-sage-foreground">{t('bookClubs.proTip')}</h3>
            <p className="text-sm text-foreground/80">
              {t('bookClubs.proTipText')}
            </p>
          </div>
        </div>
      </Card>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <MagnifyingGlass 
            size={20} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
          />
          <Input
            type="text"
            placeholder={t('bookClubs.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {genres.map(genre => (
            <Button
              key={genre}
              variant={selectedGenre === genre ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedGenre(genre)}
            >
              {genre === 'all' ? t('bookClubs.allGenres') : genre}
            </Button>
          ))}
        </div>
      </div>

      {filteredClubs.length === 0 ? (
        <Card className="p-12 text-center">
          <BookBookmark size={48} className="mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">{t('bookClubs.noResults')}</h3>
          <p className="text-muted-foreground">{t('bookClubs.tryDifferentSearch')}</p>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredClubs.map(club => (
            <Card key={club.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{club.name}</h3>
                    <p className="text-sm text-muted-foreground">{club.genre}</p>
                  </div>
                  <Badge className={getLevelColor(club.level)}>
                    {club.level.replace('-', ' ')}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} className="flex-shrink-0" />
                    <span>{club.library}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={16} className="flex-shrink-0" />
                    <span>{club.meetingTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} className="flex-shrink-0" />
                    <span>{club.frequency}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className={`flex-shrink-0 ${getAvailabilityColor(club)}`} />
                    <span className={getAvailabilityColor(club)}>
                      {club.filled}/{club.capacity} {t('bookClubs.members')}
                      {club.filled >= club.capacity && (
                        <span className="ml-1 font-semibold">({t('bookClubs.full')})</span>
                      )}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <p className="text-sm font-medium mb-1">{t('bookClubs.currentlyReading')}</p>
                  <p className="text-sm text-foreground/80 italic">{club.currentBook}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Badge variant="outline">{club.language}</Badge>
                  <p className="text-xs text-muted-foreground">{club.contact}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Card className="p-6 bg-primary/5 border-primary/10">
        <h3 className="font-semibold mb-3">{t('bookClubs.startYourOwn')}</h3>
        <p className="text-sm text-foreground/80 mb-4">
          {t('bookClubs.startYourOwnText')}
        </p>
        <Button variant="outline">
          {t('bookClubs.learnMore')}
        </Button>
      </Card>
    </div>
  )
}
