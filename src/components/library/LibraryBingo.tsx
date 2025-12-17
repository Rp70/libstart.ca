import { useKV } from '@github/spark/hooks'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Check, DownloadSimple, Trophy } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

type BingoSquare = {
  id: string
  text: string
}

const bingoSquares: BingoSquare[] = [
  { id: 'resume', text: 'Printed a resume for free' },
  { id: 'first-language', text: 'Found a book in my first language' },
  { id: 'asked-librarian', text: 'Asked a librarian a question' },
  { id: '3d-printer', text: 'Used the 3D printer' },
  { id: 'wifi', text: 'Connected to free Wi-Fi' },
  { id: 'study-room', text: 'Booked a study room' },
  { id: 'dvd', text: 'Borrowed a movie' },
  { id: 'ebook', text: 'Downloaded an ebook' },
  { id: 'program', text: 'Attended a free program' },
  { id: 'playground', text: 'Borrowed a FVRL Playground item' },
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

export function LibraryBingo() {
  const [completedSquares, setCompletedSquares] = useKV<string[]>('bingo-completed', [])

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

    ctx.fillStyle = '#5E4BA1'
    ctx.fillRect(0, 0, 800, 80)
    ctx.fillStyle = 'white'
    ctx.font = 'bold 32px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('Newcomer Library Bingo', 400, 50)

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
    link.download = 'library-bingo.png'
    link.href = canvas.toDataURL()
    link.click()
  }

  const progress = ((completedSquares || []).length / 25) * 100
  const hasWon = (completedSquares || []).length >= 25

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-3">Newcomer Library Bingo</h2>
        <p className="text-muted-foreground text-lg">
          Try these activities and mark off your progress!
        </p>
      </div>

      <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Your Progress</h3>
              <p className="text-sm text-muted-foreground">
                {(completedSquares || []).length} of 25 activities completed
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
              <h3 className="text-2xl font-bold">🎉 Congratulations! 🎉</h3>
              <p className="text-lg">
                You've completed all 25 activities! You're a library expert now.
              </p>
              <p className="text-sm text-muted-foreground">
                Share your achievement with other newcomers and help them discover the library!
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
          Download Bingo Card
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
