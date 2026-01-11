import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  CheckSquare,
  Clock,
  MapPin,
  BookOpen,
  Download,
  Share,
  Printer
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

type Goal = {
  id: string
  label: string
  category: 'work' | 'learn' | 'family' | 'tech' | 'community'
  estimatedTime: number
  services: string[]
  tips: string[]
  bringItems?: string[]
}

const goals: Goal[] = [
  {
    id: 'remote-work',
    label: 'Work remotely for the day',
    category: 'work',
    estimatedTime: 240,
    services: ['Free Wi-Fi', 'Power outlets', 'Quiet study areas', 'Study room booking'],
    tips: [
      'Arrive early to get your preferred spot',
      'Book a study room in advance if you need privacy',
      'Bring headphones for video calls'
    ],
    bringItems: ['Laptop', 'Charger', 'Headphones', 'Water bottle']
  },
  {
    id: 'job-search',
    label: 'Search and apply for jobs',
    category: 'work',
    estimatedTime: 120,
    services: ['Career counseling', 'Resume help', 'Computer access', 'Printing services', 'Job databases'],
    tips: [
      'Book a career counseling session in advance',
      'Bring your resume on a USB drive',
      'Ask about free resume review services'
    ],
    bringItems: ['Government ID', 'Resume (digital)', 'USB drive']
  },
  {
    id: 'learn-english',
    label: 'Practice English language skills',
    category: 'learn',
    estimatedTime: 90,
    services: ['Conversation circles', 'ESL materials', 'Mango Languages', 'Language tutoring'],
    tips: [
      'Check the schedule for conversation circle times',
      'Download Mango Languages app with your library card',
      'Don\'t be shy - everyone is learning!'
    ],
    bringItems: ['Library card', 'Notebook', 'Pen']
  },
  {
    id: 'research-project',
    label: 'Work on a research project',
    category: 'learn',
    estimatedTime: 180,
    services: ['Academic databases', 'Research assistance', 'Printing & copying', 'Quiet study spaces'],
    tips: [
      'Ask a librarian for database training',
      'Bring your citations and research questions',
      'Use library databases from home with your card number'
    ],
    bringItems: ['Library card', 'Laptop or notebook', 'Research topic outline']
  },
  {
    id: 'kids-activities',
    label: 'Spend time with kids',
    category: 'family',
    estimatedTime: 120,
    services: ['Storytime programs', 'Children\'s play areas', 'STEAM kits', 'Family movies'],
    tips: [
      'Check program schedule online before visiting',
      'Children\'s areas can be noisy - that\'s okay!',
      'Ask about take-home activity kits'
    ],
    bringItems: ['Snacks (in covered containers)', 'Library cards for kids', 'Spare diapers']
  },
  {
    id: 'tech-help',
    label: 'Get help with technology',
    category: 'tech',
    estimatedTime: 60,
    services: ['One-on-one tech help', 'Device tutorials', 'App setup assistance', 'Digital literacy programs'],
    tips: [
      'Book a tech help appointment in advance',
      'Bring the device you need help with',
      'Write down your questions beforehand'
    ],
    bringItems: ['Device (phone/tablet/laptop)', 'Passwords written down', 'Charger']
  },
  {
    id: 'makerspace',
    label: 'Use makerspace equipment',
    category: 'tech',
    estimatedTime: 120,
    services: ['3D printing', 'Laser cutting', 'Podcast studio', 'Sewing machines', 'Equipment training'],
    tips: [
      'Complete required training before using equipment',
      'Book makerspace time in advance',
      'Bring your design files on a USB drive'
    ],
    bringItems: ['USB drive with files', 'Project materials (if needed)', 'Safety glasses']
  },
  {
    id: 'genealogy',
    label: 'Research family history',
    category: 'learn',
    estimatedTime: 150,
    services: ['Ancestry.com access', 'Historical archives', 'Microfilm readers', 'Genealogy specialists'],
    tips: [
      'Bring any family documents or photos you have',
      'Start with what you know - names, dates, places',
      'Ask for help from librarians specializing in genealogy'
    ],
    bringItems: ['Notebook', 'Family documents', 'Camera for photos of records']
  },
  {
    id: 'community-event',
    label: 'Attend a community program',
    category: 'community',
    estimatedTime: 90,
    services: ['Workshops', 'Author talks', 'Cultural events', 'Book clubs', 'Hobby groups'],
    tips: [
      'Check the events calendar online',
      'Some events require registration',
      'Arrive 10-15 minutes early for popular events'
    ],
    bringItems: ['Library card', 'Notebook (for workshops)']
  },
  {
    id: 'citizenship-study',
    label: 'Prepare for citizenship test',
    category: 'learn',
    estimatedTime: 120,
    services: ['Citizenship study guides', 'Practice tests', 'Study groups', 'Multilingual resources'],
    tips: [
      'Borrow official study guides',
      'Join a citizenship study group if available',
      'Use online practice tests from library website'
    ],
    bringItems: ['Library card', 'Notebook', 'Study schedule']
  },
  {
    id: 'borrow-equipment',
    label: 'Borrow tools or equipment',
    category: 'tech',
    estimatedTime: 30,
    services: ['Library of Things', 'Tool lending', 'Sports equipment', 'Kitchen gadgets', 'Nature kits'],
    tips: [
      'Reserve items online in advance',
      'Check borrowing periods (usually 1-2 weeks)',
      'Return items clean and in good condition'
    ],
    bringItems: ['Library card', 'Reusable bag for carrying items']
  },
  {
    id: 'quiet-reading',
    label: 'Find a quiet place to read',
    category: 'community',
    estimatedTime: 90,
    services: ['Quiet reading rooms', 'Comfortable seating', 'Natural lighting', 'Book browsing'],
    tips: [
      'Look for designated quiet zones',
      'Weekday mornings are usually quietest',
      'Some libraries have outdoor reading spaces'
    ],
    bringItems: ['Book or e-reader', 'Bookmark', 'Reading glasses if needed']
  }
]

export function VisitPlanner() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [showPlan, setShowPlan] = useState(false)
  const { t } = useTranslation()

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev =>
      prev.includes(goalId)
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    )
  }

  const selectedGoalObjects = goals.filter(g => selectedGoals.includes(g.id))
  const totalTime = selectedGoalObjects.reduce((sum, g) => sum + g.estimatedTime, 0)
  const allServices = [...new Set(selectedGoalObjects.flatMap(g => g.services))]
  const allTips = selectedGoalObjects.flatMap(g => g.tips)
  const allItems = [...new Set(selectedGoalObjects.flatMap(g => g.bringItems || []))]

  const categories = [
    { id: 'work', label: 'Work & Career', icon: '💼' },
    { id: 'learn', label: 'Learning & Education', icon: '📚' },
    { id: 'family', label: 'Family & Kids', icon: '👨‍👩‍👧‍👦' },
    { id: 'tech', label: 'Technology & Making', icon: '🔧' },
    { id: 'community', label: 'Community & Hobbies', icon: '🤝' }
  ]

  const handleCreatePlan = () => {
    if (selectedGoals.length > 0) {
      setShowPlan(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (hours === 0) return `${mins} min`
    if (mins === 0) return `${hours} hr`
    return `${hours} hr ${mins} min`
  }

  if (showPlan && selectedGoals.length > 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Your Library Visit Plan</h2>
          <Button variant="outline" onClick={() => setShowPlan(false)}>
            ← Edit Goals
          </Button>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 print:break-inside-avoid">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent text-accent-foreground rounded-lg">
              <Clock size={32} weight="duotone" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Estimated Visit Time</h3>
              <p className="text-3xl font-bold text-primary">{formatTime(totalTime)}</p>
              <p className="text-sm text-muted-foreground mt-2">
                Based on {selectedGoals.length} selected {selectedGoals.length === 1 ? 'goal' : 'goals'}
              </p>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={24} weight="duotone" className="text-primary" />
              <h3 className="text-xl font-bold">Services You'll Use</h3>
            </div>
            <div className="space-y-2">
              {allServices.map((service, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckSquare size={20} weight="fill" className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 print:break-inside-avoid">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={24} weight="duotone" className="text-accent" />
              <h3 className="text-xl font-bold">What to Bring</h3>
            </div>
            {allItems.length > 0 ? (
              <div className="space-y-2">
                {allItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-4 h-4 border-2 border-muted-foreground rounded mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Just bring your library card!</p>
            )}
          </Card>
        </div>

        <Card className="p-6 print:break-inside-avoid">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Pro Tips for Your Visit
          </h3>
          <div className="space-y-3">
            {allTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <span className="text-primary font-bold flex-shrink-0">{index + 1}.</span>
                <p className="text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 print:break-inside-avoid">
          <h3 className="text-xl font-bold mb-4">Your Selected Goals</h3>
          <div className="space-y-3">
            {selectedGoalObjects.map((goal) => {
              const category = categories.find(c => c.id === goal.category)
              return (
                <div key={goal.id} className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{category?.icon}</span>
                      <h4 className="font-semibold">{goal.label}</h4>
                    </div>
                    <Badge variant="outline">{formatTime(goal.estimatedTime)}</Badge>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        <div className="flex gap-3 print:hidden">
          <Button onClick={handlePrint} variant="outline" className="flex-1">
            <Printer size={20} className="mr-2" />
            Print Plan
          </Button>
          <Button variant="outline" className="flex-1">
            <Download size={20} className="mr-2" />
            Download PDF
          </Button>
          <Button variant="outline" className="flex-1">
            <Share size={20} className="mr-2" />
            Share Plan
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-3">Plan Your Library Visit</h2>
        <p className="text-muted-foreground text-lg">
          Select what you want to do, and we'll create a personalized visit plan with tips and estimated time.
        </p>
      </div>

      {categories.map((category) => {
        const categoryGoals = goals.filter(g => g.category === category.id)
        
        return (
          <Card key={category.id} className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">{category.icon}</span>
              {category.label}
            </h3>
            <div className="space-y-3">
              {categoryGoals.map((goal) => (
                <div
                  key={goal.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedGoals.includes(goal.id)
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50 hover:bg-muted/50'
                  }`}
                  onClick={() => toggleGoal(goal.id)}
                >
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={selectedGoals.includes(goal.id)}
                      onCheckedChange={() => toggleGoal(goal.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{goal.label}</h4>
                        <Badge variant="outline" className="ml-2">
                          <Clock size={14} className="mr-1" />
                          {formatTime(goal.estimatedTime)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {goal.services.slice(0, 3).join(' • ')}
                        {goal.services.length > 3 && ` • +${goal.services.length - 3} more`}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )
      })}

      {selectedGoals.length > 0 && (
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent sticky bottom-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                {selectedGoals.length} {selectedGoals.length === 1 ? 'goal' : 'goals'} selected
              </p>
              <p className="text-2xl font-bold text-primary">
                {formatTime(totalTime)} estimated
              </p>
            </div>
            <Button size="lg" onClick={handleCreatePlan}>
              Create My Visit Plan
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}
