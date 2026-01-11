import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Check, DownloadSimple, Trophy } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/use-translation'

type BingoSquare = {
  id: string
  text: string
}

const newcomerBingoSquares: BingoSquare[] = [
  { id: 'resume', text: 'Printed a resume for free' },
  { id: 'first-language', text: 'Found a book in my first language' },
  { id: 'asked-librarian', text: 'Asked a librarian a question' },
  { id: '3d-printer', text: 'Used the 3D printer' },
  { id: 'wifi', text: 'Connected to free Wi-Fi' },
  { id: 'study-room', text: 'Booked a study room' },
  { id: 'dvd', text: 'Borrowed a movie' },
  { id: 'ebook', text: 'Downloaded an ebook' },
  { id: 'program', text: 'Attended a free program' },
  { id: 'playground', text: 'Borrowed a library item' },
  { id: 'language-app', text: 'Used Mango Languages' },
  { id: 'printing', text: 'Used printing services' },
  { id: 'meeting', text: 'Met someone new at the library' },
  { id: 'computers', text: 'Used a library computer' },
  { id: 'linkedin', text: 'Accessed LinkedIn Learning' },
  { id: 'kids-area', text: 'Explored the children\'s area' },
  { id: 'magazine', text: 'Read a magazine' },
  { id: 'hold', text: 'Placed a hold on a book' },
  { id: 'event', text: 'Joined a community event' },
  { id: 'help', text: 'Got help with technology' },
  { id: 'multiple-books', text: 'Borrowed 5+ items at once' },
  { id: 'scan', text: 'Scanned documents' },
  { id: 'storytime', text: 'Took kids to storytime' },
  { id: 'music', text: 'Borrowed music or audiobooks' },
  { id: 'recommend', text: 'Recommended the library to a friend' }
]

const localBingoSquares: BingoSquare[] = [
  { id: 'makerspace', text: 'Tried the makerspace tools' },
  { id: 'kanopy', text: 'Streamed a film on Kanopy' },
  { id: 'pressreader', text: 'Read a foreign newspaper on PressReader' },
  { id: 'laser-cutter', text: 'Used the laser cutter' },
  { id: 'ancestry', text: 'Researched family history' },
  { id: 'business-plan', text: 'Got help with business planning' },
  { id: 'recording', text: 'Booked the recording studio' },
  { id: 'tool-borrow', text: 'Borrowed power tools' },
  { id: 'museum-pass', text: 'Got a free museum pass' },
  { id: 'hoopla', text: 'Borrowed digital content on Hoopla' },
  { id: 'seed-library', text: 'Got seeds from the seed library' },
  { id: 'workshop', text: 'Attended a maker workshop' },
  { id: 'instrument', text: 'Borrowed a musical instrument' },
  { id: 'adobe', text: 'Used Adobe Creative Cloud' },
  { id: 'linkedin-cert', text: 'Completed a LinkedIn course' },
  { id: 'job-database', text: 'Searched job databases' },
  { id: 'meeting-room', text: 'Hosted a client meeting' },
  { id: 'creativebug', text: 'Took a craft class online' },
  { id: 'sewing', text: 'Used sewing machines' },
  { id: 'podcast', text: 'Recorded a podcast episode' },
  { id: 'prototype', text: '3D printed a prototype' },
  { id: 'language', text: 'Learned a new language' },
  { id: 'career-help', text: 'Got resume feedback' },
  { id: 'rare-book', text: 'Requested an interlibrary loan' },
  { id: 'teach', text: 'Taught someone about a service' }
]

type BingoCardProps = {
  title: string
  subtitle: string
  bingoSquares: BingoSquare[]
  storageKey: string
  audienceType: 'newcomer' | 'local'
}

function BingoCard({ title, subtitle, bingoSquares, storageKey, audienceType }: BingoCardProps) {
  const [completedSquares, setCompletedSquares] = useKV<string[]>(storageKey, [])
  const { t } = useTranslation()

  const toggleSquare = (id: string) => {
    setCompletedSquares((current) => {
      const squares = current || []
      if (squares.includes(id)) {
        return squares.filter(squareId => squareId !== id)
      } else {
        return [...squares, id]
      }
    })
  }

  const resetBingo = () => {
    setCompletedSquares([])
  }

  const downloadBingo = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 800
    canvas.height = 900
    const ctx = canvas.getContext('2d')
    
    if (!ctx) return

    ctx.fillStyle = '#FBF8F3'
    ctx.fillRect(0, 0, 800, 900)

    ctx.fillStyle = audienceType === 'newcomer' ? '#5E4BA1' : '#70B08A'
    ctx.fillRect(0, 0, 800, 80)
    ctx.fillStyle = 'white'
    ctx.font = 'bold 32px Arial'
    ctx.textAlign = 'center'
    ctx.fillText(title, 400, 50)

    const gridSize = 5
    const cellSize = 140
    const startX = 50
    const startY = 120

    bingoSquares.slice(0, 25).forEach((square, index) => {
      const row = Math.floor(index / gridSize)
      const col = index % gridSize
      const x = startX + col * cellSize
      const y = startY + row * cellSize

      const isCompleted = (completedSquares || []).includes(square.id)

      ctx.fillStyle = isCompleted ? '#B8E986' : 'white'
      ctx.fillRect(x, y, cellSize - 10, cellSize - 10)

      ctx.strokeStyle = '#E5E0D8'
      ctx.lineWidth = 2
      ctx.strokeRect(x, y, cellSize - 10, cellSize - 10)

      if (isCompleted) {
        ctx.fillStyle = '#3D5A1F'
        ctx.font = 'bold 40px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('✓', x + (cellSize - 10) / 2, y + 45)
      }

      ctx.fillStyle = isCompleted ? '#3D5A1F' : '#433964'
      ctx.font = '12px Arial'
      ctx.textAlign = 'center'
      
      const words = square.text.split(' ')
      let line = ''
      let lines: string[] = []
      
      words.forEach(word => {
        const testLine = line + word + ' '
        if (ctx.measureText(testLine).width > cellSize - 30) {
          lines.push(line)
          line = word + ' '
        } else {
          line = testLine
        }
      })
      lines.push(line)

      const startTextY = y + (cellSize - 10) / 2 - (lines.length * 7) + (isCompleted ? 20 : 0)
      lines.forEach((textLine, i) => {
        ctx.fillText(textLine.trim(), x + (cellSize - 10) / 2, startTextY + i * 14)
      })
    })

    const link = document.createElement('a')
    link.download = `library-bingo-${audienceType}.png`
    link.href = canvas.toDataURL()
    link.click()
  }

  const progress = ((completedSquares || []).length / 25) * 100
  const hasWon = (completedSquares || []).length >= 25

  return (
    <div className="space-y-6">
      <Card className={`p-6 ${audienceType === 'newcomer' ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30' : 'bg-gradient-to-br from-sage/10 to-sage/5 border-sage/30'}`}>
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <Badge variant={audienceType === 'newcomer' ? 'default' : 'secondary'}>
            {audienceType === 'newcomer' ? 'Newcomer' : 'Local'}
          </Badge>
        </div>
        <p className="text-muted-foreground">{subtitle}</p>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold">{t('bingo.progress')}</h4>
              <p className="text-sm text-muted-foreground">
                {(completedSquares || []).length} of 25 {t('bingo.completed')}
              </p>
            </div>
            {hasWon && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <Trophy size={48} className="text-accent" weight="duotone" />
              </motion.div>
            )}
          </div>
          <Progress value={progress} className="h-3" />
        </div>
      </Card>

      {hasWon && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-accent/50">
            <div className="text-center space-y-3">
              <h4 className="text-2xl font-bold">🎉 Congratulations! 🎉</h4>
              <p className="text-lg">
                {audienceType === 'newcomer' 
                  ? 'You\'ve completed all 25 activities! You\'re a library expert now.'
                  : 'You\'ve explored all 25 advanced features! You\'re a library power user now.'}
              </p>
            </div>
          </Card>
        </motion.div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {bingoSquares.map((square) => {
          const isCompleted = (completedSquares || []).includes(square.id)
          return (
            <motion.div
              key={square.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                onClick={() => toggleSquare(square.id)}
                className={`
                  p-4 cursor-pointer transition-all min-h-[120px] flex items-center justify-center text-center
                  ${isCompleted 
                    ? 'bg-accent text-accent-foreground border-accent shadow-lg' 
                    : 'hover:shadow-md hover:border-primary/50 bg-card'
                  }
                `}
              >
                <div className="space-y-2">
                  {isCompleted && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Check size={24} weight="bold" className="mx-auto" />
                    </motion.div>
                  )}
                  <p className="text-xs sm:text-sm font-medium leading-tight">
                    {square.text}
                  </p>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          onClick={downloadBingo}
          className="flex-1"
          size="lg"
        >
          <DownloadSimple size={20} className="mr-2" />
          Download Card
        </Button>
        <Button 
          onClick={resetBingo}
          variant="outline"
          className="flex-1"
          size="lg"
        >
          Reset Progress
        </Button>
      </div>
    </div>
  )
}

export function LibraryBingo() {
  const { t } = useTranslation()
  const [activeCard, setActiveCard] = useState<'newcomer' | 'local' | null>(null)

  if (activeCard) {
    return (
      <div className="space-y-8">
        <Button 
          variant="outline" 
          onClick={() => setActiveCard(null)}
          className="mb-4"
        >
          ← Back to Bingo Cards
        </Button>

        <BingoCard
          title={activeCard === 'newcomer' ? 'Newcomer Library Bingo' : 'Library Explorer Bingo'}
          subtitle={activeCard === 'newcomer' 
            ? 'Try new library services and mark them off!'
            : 'Challenge yourself to discover advanced library features'}
          bingoSquares={activeCard === 'newcomer' ? newcomerBingoSquares : localBingoSquares}
          storageKey={`bingo-completed-${activeCard}`}
          audienceType={activeCard}
        />

        <Card className="p-6 bg-muted/50">
          <h3 className="font-semibold mb-3">How to Play</h3>
          <div className="space-y-2 text-sm">
            <p>• Click or tap a square when you complete that activity</p>
            <p>• Activities are saved automatically - you can come back anytime</p>
            <p>• Try to complete all 25 activities to become a library expert!</p>
            <p>• Download your card to share with friends or print it out</p>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">{t('bingo.title')}</h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          Gamify your library experience! Choose a bingo card that matches your journey.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card 
          className="p-6 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary bg-gradient-to-br from-primary/10 to-transparent"
          onClick={() => setActiveCard('newcomer')}
        >
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="default">Newcomer</Badge>
          </div>
          <h3 className="text-2xl font-bold mb-3">Newcomer Library Bingo</h3>
          <p className="text-muted-foreground mb-4">
            Perfect for those new to Canadian libraries. Discover basic services and build confidence exploring the library.
          </p>
          <div className="space-y-2 text-sm">
            <p>✓ Print resumes for free</p>
            <p>✓ Find books in your language</p>
            <p>✓ Connect to free Wi-Fi</p>
            <p>✓ Ask librarians for help</p>
          </div>
          <Button className="w-full mt-6" variant="outline">
            Start Newcomer Bingo →
          </Button>
        </Card>

        <Card 
          className="p-6 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-sage bg-gradient-to-br from-sage/10 to-transparent"
          onClick={() => setActiveCard('local')}
        >
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">Local</Badge>
          </div>
          <h3 className="text-2xl font-bold mb-3">Library Explorer Bingo</h3>
          <p className="text-muted-foreground mb-4">
            For long-time residents ready to discover advanced features. Explore makerspace tools, digital resources, and more.
          </p>
          <div className="space-y-2 text-sm">
            <p>✓ Use makerspace equipment</p>
            <p>✓ Stream films on Kanopy</p>
            <p>✓ Research family history</p>
            <p>✓ Borrow power tools</p>
          </div>
          <Button className="w-full mt-6" variant="outline">
            Start Explorer Bingo →
          </Button>
        </Card>
      </div>

      <Card className="p-6 bg-muted/50">
        <h3 className="font-semibold mb-3">🎯 Why Play Library Bingo?</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-medium">Discover New Services</p>
            <p className="text-muted-foreground">Many people only use 10% of what libraries offer. Bingo helps you find hidden gems!</p>
          </div>
          <div>
            <p className="font-medium">Track Your Progress</p>
            <p className="text-muted-foreground">Your progress is saved automatically. Complete activities over weeks or months.</p>
          </div>
          <div>
            <p className="font-medium">Share With Friends</p>
            <p className="text-muted-foreground">Download your card to share on social media or print for family challenges!</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
