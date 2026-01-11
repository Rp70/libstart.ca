import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  CheckCircle, 
  XCircle, 
  Lightbulb,
  Trophy,
  ArrowRight
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

type QuizQuestion = {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  service: string
  audienceType: 'newcomer' | 'local' | 'both'
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Can you borrow tools like drills and lawn mowers from the library?',
    options: ['No, only books', 'Yes, many libraries have a "Library of Things"', 'Only with a special membership', 'Only if you\'re a homeowner'],
    correctAnswer: 1,
    explanation: 'Many Canadian libraries now have a "Library of Things" where you can borrow tools, kitchen appliances, sports equipment, and even musical instruments - completely free with your library card!',
    service: 'Library of Things - Tool & Equipment Lending',
    audienceType: 'both'
  },
  {
    id: 'q2',
    question: 'Do you need Canadian citizenship to get a library card?',
    options: ['Yes, you must be a citizen', 'No, just proof of address', 'Yes, or permanent residency', 'Only in some provinces'],
    correctAnswer: 1,
    explanation: 'You do NOT need to be a Canadian citizen! Most libraries only require proof that you live in the area. Students, newcomers with study or work permits, and even visitors can often get library cards.',
    service: 'Free Library Cards for All Residents',
    audienceType: 'newcomer'
  },
  {
    id: 'q3',
    question: 'Can the library report what books you borrow to the government?',
    options: ['Yes, they must by law', 'No, reading history is completely private', 'Only for suspicious books', 'Yes, if requested'],
    correctAnswer: 1,
    explanation: 'Your reading history is COMPLETELY PRIVATE in Canada. Libraries will never report what you read to the government or anyone else. This is a protected right and a core library value.',
    service: 'Privacy Protection for Borrowing Records',
    audienceType: 'newcomer'
  },
  {
    id: 'q4',
    question: 'Which of these can you access for FREE at the library?',
    options: ['LinkedIn Learning courses', 'Museum and attraction passes', 'Ancestry.com genealogy research', 'All of the above'],
    correctAnswer: 3,
    explanation: 'ALL of these premium services are available for FREE with your library card! This can save you hundreds or even thousands of dollars per year.',
    service: 'Premium Digital Resources & Museum Passes',
    audienceType: 'both'
  },
  {
    id: 'q5',
    question: 'Are Canadian libraries always completely silent?',
    options: ['Yes, silence is strictly enforced', 'No, many have community zones and kids areas', 'Only during certain hours', 'It depends on the book section'],
    correctAnswer: 1,
    explanation: 'Modern Canadian libraries are community hubs! While there are quiet study zones, many libraries have areas where talking, kids playing, and community activities are encouraged. Libraries are for everyone!',
    service: 'Varied Quiet & Community Zones',
    audienceType: 'newcomer'
  },
  {
    id: 'q6',
    question: 'Can you use the library as a free workspace with Wi-Fi all day?',
    options: ['No, maximum 2 hours', 'Yes, during open hours', 'Only if you\'re a student', 'Only if you borrow a book'],
    correctAnswer: 1,
    explanation: 'Yes! Libraries offer fast, free Wi-Fi and comfortable workspaces during all open hours. Many remote workers, students, and job seekers use the library as their daily office.',
    service: 'Free All-Day Wi-Fi & Workspace',
    audienceType: 'both'
  },
  {
    id: 'q7',
    question: 'Does the library offer free programs to help you learn English?',
    options: ['No, you must pay for classes', 'Yes, conversation circles and online tools', 'Only group classes', 'Only children\'s programs'],
    correctAnswer: 1,
    explanation: 'Libraries offer FREE English conversation circles, access to Mango Languages, literacy programs, and connections to ESL resources. These programs welcome all skill levels!',
    service: 'Free English Learning Programs & Resources',
    audienceType: 'newcomer'
  },
  {
    id: 'q8',
    question: 'Can you use professional recording studios and 3D printers at the library?',
    options: ['No, those require expensive memberships', 'Yes, many libraries have makerspaces', 'Only at university libraries', 'Yes, but you must buy materials'],
    correctAnswer: 1,
    explanation: 'Many public libraries now have makerspaces with 3D printers, laser cutters, podcast recording studios, sewing machines, and more - all FREE to use with training!',
    service: 'Makerspace Equipment & Studios',
    audienceType: 'local'
  },
  {
    id: 'q9',
    question: 'What if you can\'t physically get to the library?',
    options: ['You can\'t use library services', 'Homebound delivery is available', 'Family members can pick up for you', 'Only digital resources available'],
    correctAnswer: 1,
    explanation: 'Libraries offer FREE homebound delivery services for seniors, people with disabilities, or anyone with mobility challenges. Volunteers will deliver books and materials right to your door!',
    service: 'Homebound Delivery Services',
    audienceType: 'both'
  },
  {
    id: 'q10',
    question: 'Can newcomers get help with citizenship test preparation at the library?',
    options: ['No, you must pay for classes', 'Yes, free study materials and practice tests', 'Only English-language materials', 'Only during special events'],
    correctAnswer: 1,
    explanation: 'Libraries provide FREE citizenship test preparation books, online practice tests, study groups, and sometimes tutoring. Many also have multilingual resources to help you prepare.',
    service: 'Citizenship Test Preparation Resources',
    audienceType: 'newcomer'
  }
]

export function LibraryQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean[]>([])
  const [quizComplete, setQuizComplete] = useState(false)
  const { t } = useTranslation()

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  const handleAnswer = (answerIndex: number) => {
    if (showExplanation) return
    
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    
    const isCorrect = answerIndex === question.correctAnswer
    setAnsweredCorrectly([...answeredCorrectly, isCorrect])
    
    if (isCorrect) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnsweredCorrectly([])
    setQuizComplete(false)
  }

  if (quizComplete) {
    const percentage = Math.round((score / quizQuestions.length) * 100)
    
    return (
      <div className="space-y-6">
        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-accent text-accent-foreground rounded-full">
                <Trophy size={64} weight="duotone" />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-2">Quiz Complete! 🎉</h2>
              <p className="text-muted-foreground text-lg">
                You discovered {score} out of {quizQuestions.length} library services!
              </p>
            </div>

            <div className="bg-background/60 backdrop-blur-sm rounded-lg p-6">
              <div className="text-5xl font-bold text-primary mb-2">{percentage}%</div>
              <p className="text-sm text-muted-foreground">
                {percentage >= 80 ? 'Library Expert! 🌟' : 
                 percentage >= 60 ? 'Library Explorer! 📚' : 
                 percentage >= 40 ? 'Library Learner! 💡' : 
                 'Library Beginner! 🎓'}
              </p>
            </div>

            <div className="text-left bg-background/60 backdrop-blur-sm rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg mb-4">Services You Discovered:</h3>
              {quizQuestions.map((q, index) => (
                <div key={q.id} className="flex items-start gap-3">
                  {answeredCorrectly[index] ? (
                    <CheckCircle size={20} weight="fill" className="text-green-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle size={20} weight="fill" className="text-destructive mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium">{q.service}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 justify-center">
              <Button onClick={handleRestart} size="lg">
                Take Quiz Again
              </Button>
              <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} variant="outline" size="lg">
                Explore More Services
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold">Library Services Discovery Quiz</h2>
          <Badge variant="outline" className="text-base px-4 py-2">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </Badge>
        </div>
        <p className="text-muted-foreground text-lg mb-6">
          Test your knowledge and discover amazing library services you might not know about!
        </p>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-8">
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-4">
              {question.audienceType === 'newcomer' ? '🌍 Newcomer Focus' : 
               question.audienceType === 'local' ? '🏠 Local Focus' : 
               '🤝 Everyone'}
            </Badge>
            <h3 className="text-2xl font-bold mb-6">{question.question}</h3>
          </div>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === question.correctAnswer
              const showResult = showExplanation && isSelected

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showResult && isCorrect
                      ? 'border-green-600 bg-green-50 dark:bg-green-950'
                      : showResult && !isCorrect
                      ? 'border-destructive bg-destructive/5'
                      : isSelected
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50 hover:bg-muted/50'
                  } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      showResult && isCorrect
                        ? 'border-green-600 bg-green-600'
                        : showResult && !isCorrect
                        ? 'border-destructive bg-destructive'
                        : isSelected
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}>
                      {showResult && isCorrect && (
                        <CheckCircle size={24} weight="fill" className="text-white" />
                      )}
                      {showResult && !isCorrect && (
                        <XCircle size={24} weight="fill" className="text-white" />
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {showExplanation && (
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/30">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Lightbulb size={32} weight="duotone" className="text-accent-foreground" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      {selectedAnswer === question.correctAnswer ? '✨ Correct!' : '💡 Good Try!'}
                    </h4>
                    <p className="text-muted-foreground mb-3">{question.explanation}</p>
                  </div>
                  <div className="bg-background/60 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-sm">
                      <span className="font-semibold text-primary">Library Service:</span>{' '}
                      {question.service}
                    </p>
                  </div>
                  <Button onClick={handleNext} className="w-full mt-4">
                    {currentQuestion < quizQuestions.length - 1 ? (
                      <>Next Question <ArrowRight size={20} className="ml-2" /></>
                    ) : (
                      'See Results'
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </Card>

      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <div>Score: {score} / {currentQuestion + (showExplanation ? 1 : 0)}</div>
        <div>Progress: {Math.round(progress)}%</div>
      </div>
    </div>
  )
}
