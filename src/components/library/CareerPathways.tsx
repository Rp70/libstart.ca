import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Briefcase,
  GraduationCap,
  Certificate,
  TrendUp,
  Laptop,
  BookOpen,
  Users,
  Lightbulb,
  CheckCircle,
  Path
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

interface CareerResource {
  category: string
  title: string
  description: string
  resources: string[]
  careerPaths: string[]
  timeCommitment: string
  cost: string
  certification?: string
  proTip: string
}

const careerPathways: CareerResource[] = [
  {
    category: 'Tech Skills',
    title: 'Software Development & IT Careers',
    description: 'Build job-ready tech skills using free library resources - from coding bootcamps to certifications',
    resources: [
      'LinkedIn Learning (free courses in Python, JavaScript, Web Development)',
      'O\'Reilly for Higher Education (coding books & video tutorials)',
      'Gale Courses (6-week instructor-led courses)',
      'Treehouse (web & mobile development)',
      'Free computer access with development software pre-installed'
    ],
    careerPaths: ['Web Developer', 'Data Analyst', 'IT Support Specialist', 'Software Tester'],
    timeCommitment: '3-12 months for entry-level readiness',
    cost: 'Free with library card (saves $2,000-$10,000 in course fees)',
    certification: 'Many courses offer completion certificates',
    proTip: 'Combine LinkedIn Learning with project-based practice at library makerspaces. Many branches have coding clubs for peer support.'
  },
  {
    category: 'Business & Entrepreneurship',
    title: 'Start or Grow Your Own Business',
    description: 'Access business planning tools, market research, and mentorship resources',
    resources: [
      'Reference USA (business & consumer database for market research)',
      'Gale Business Insights (company profiles & industry reports)',
      'LinkedIn Learning business courses',
      'Small business workshops & one-on-one mentoring',
      'Free meeting rooms for client consultations'
    ],
    careerPaths: ['Freelancer', 'Small Business Owner', 'Consultant', 'E-commerce Entrepreneur'],
    timeCommitment: 'Ongoing - start while employed',
    cost: 'Free market research (saves $500-$3,000 per report)',
    proTip: 'Use the library\'s meeting rooms to meet clients professionally. Many branches offer free business card printing and marketing material creation.'
  },
  {
    category: 'Healthcare',
    title: 'Allied Health & Care Professions',
    description: 'Prepare for certifications and upgrading in healthcare fields',
    resources: [
      'Nursing & medical databases (CINAHL, PubMed)',
      'Test prep for medical exams (Peterson\'s Test Prep)',
      'LinkedIn Learning for healthcare admin skills',
      'Mango Languages for medical terminology',
      'Career counseling services'
    ],
    careerPaths: ['Personal Support Worker', 'Medical Office Admin', 'Health Care Aide', 'Pharmacy Technician'],
    timeCommitment: '6-18 months including certification',
    cost: 'Free study materials (saves $500-$1,500 in prep costs)',
    certification: 'Supports preparation for provincial certifications',
    proTip: 'Many libraries partner with local colleges - ask about pathways programs that combine library learning with college credits.'
  },
  {
    category: 'Trades & Skilled Labor',
    title: 'Apprenticeship & Trade Certification Prep',
    description: 'Study for Red Seal exams and build fundamental trade knowledge',
    resources: [
      'Trade exam prep books (electrical, plumbing, carpentry)',
      'Math & science resources for trades',
      'Safety certification study materials',
      'Technical drawing & blueprint reading guides',
      '3D printers & makerspaces for prototyping'
    ],
    careerPaths: ['Electrician', 'Plumber', 'Carpenter', 'HVAC Technician', 'Welder'],
    timeCommitment: '2-4 years apprenticeship + exam prep',
    cost: 'Free study materials (saves $300-$800)',
    certification: 'Supports Red Seal exam preparation',
    proTip: 'Use library makerspaces to practice tool skills. Some branches offer weekend workshops on basic home repair - great for building confidence.'
  },
  {
    category: 'Creative Industries',
    title: 'Design, Media & Content Creation',
    description: 'Build a portfolio and learn industry-standard creative software',
    resources: [
      'Adobe Creative Cloud tutorials (LinkedIn Learning)',
      'Creativebug for craft & design skills',
      'Universal Class for photography & video editing',
      'High-quality scanners & equipment for digitizing work',
      'Studio spaces with lighting for photography'
    ],
    careerPaths: ['Graphic Designer', 'Content Creator', 'Photographer', 'Video Editor', 'UX Designer'],
    timeCommitment: '6-12 months to build portfolio',
    cost: 'Free software tutorials (saves $1,000-$5,000)',
    proTip: 'Many libraries have Adobe Creative Cloud on public computers. Create your portfolio during free computer time, then use library scanning equipment to digitize physical artwork.'
  },
  {
    category: 'Language & Translation',
    title: 'ESL Teaching & Translation Services',
    description: 'Develop language skills and teaching credentials for growing multilingual markets',
    resources: [
      'Mango Languages (70+ languages)',
      'Rosetta Stone (language learning)',
      'TESL/TESOL exam prep materials',
      'LinkedIn Learning for teaching skills',
      'Pronunciation tools & conversation groups'
    ],
    careerPaths: ['ESL Instructor', 'Translator', 'Interpreter', 'Language Tutor'],
    timeCommitment: '6-12 months for certification prep',
    cost: 'Free language learning (saves $500-$2,000)',
    certification: 'Supports TESL/TESOL exam preparation',
    proTip: 'Practice teaching at library conversation circles. Many libraries need volunteers for English conversation programs - great for building your resume.'
  },
  {
    category: 'Office & Administration',
    title: 'Professional Office Skills & Project Management',
    description: 'Master Microsoft Office, project management tools, and administrative competencies',
    resources: [
      'LinkedIn Learning (Excel, Word, PowerPoint, Project)',
      'GCF Learn Free (computer basics to advanced)',
      'Typing.com (improve typing speed)',
      'Business writing & communication courses',
      'Free resume clinics & interview prep'
    ],
    careerPaths: ['Administrative Assistant', 'Project Coordinator', 'Executive Assistant', 'Office Manager'],
    timeCommitment: '2-6 months for intermediate proficiency',
    cost: 'Free skills training (saves $800-$2,000)',
    certification: 'Many courses offer completion certificates',
    proTip: 'Librarians offer one-on-one tech help - book a session to troubleshoot specific software questions. Use library computers to practice without risking your home setup.'
  },
  {
    category: 'Education & Childcare',
    title: 'Early Childhood Education & Teaching Assistant',
    description: 'Prepare for ECE certification and teaching assistant roles',
    resources: [
      'Child development & education databases',
      'Early learning activity books & curricula',
      'LinkedIn Learning for classroom management',
      'Storytime observation (learn from professionals)',
      'Children\'s program volunteer opportunities'
    ],
    careerPaths: ['ECE Worker', 'Teaching Assistant', 'Childcare Provider', 'Youth Program Coordinator'],
    timeCommitment: '12-24 months including certification',
    cost: 'Free study & observation (saves $400-$1,000)',
    certification: 'Supports provincial ECE exam preparation',
    proTip: 'Volunteer at library children\'s programs to gain practical experience. Many hiring managers value library volunteer experience highly.'
  }
]

export function CareerPathways() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const categories = ['all', ...Array.from(new Set(careerPathways.map(p => p.category)))]

  const filteredPathways = selectedCategory === 'all' 
    ? careerPathways 
    : careerPathways.filter(p => p.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, typeof Briefcase> = {
      'Tech Skills': Laptop,
      'Business & Entrepreneurship': Briefcase,
      'Healthcare': Users,
      'Trades & Skilled Labor': Certificate,
      'Creative Industries': Lightbulb,
      'Language & Translation': BookOpen,
      'Office & Administration': Briefcase,
      'Education & Childcare': GraduationCap
    }
    return icons[category] || Path
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center gap-2">
          <TrendUp size={24} className="sm:w-7 sm:h-7 text-primary" weight="duotone" />
          <h2 className="text-2xl sm:text-3xl font-bold">{t('careerPathways.title')}</h2>
        </div>
        <p className="text-muted-foreground text-base sm:text-lg">
          {t('careerPathways.description')}
        </p>
      </div>

      <Card className="p-4 sm:p-6 bg-accent/10 border-accent/20">
        <div className="flex items-start gap-3">
          <Lightbulb size={24} className="text-accent-foreground flex-shrink-0 mt-1" />
          <div className="space-y-1">
            <h3 className="font-semibold text-accent-foreground">{t('careerPathways.moneyTip')}</h3>
            <p className="text-sm text-foreground/80">
              {t('careerPathways.moneyTipText')}
            </p>
          </div>
        </div>
      </Card>

      <div>
        <label className="text-sm font-medium mb-3 block">{t('careerPathways.filterByIndustry')}</label>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              size="sm"
            >
              {category === 'all' ? t('careerPathways.allIndustries') : category}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredPathways.map((pathway, index) => {
          const Icon = getCategoryIcon(pathway.category)
          const isExpanded = expandedCard === pathway.title

          return (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Icon size={24} className="text-primary" weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2">{pathway.category}</Badge>
                    <h3 className="text-xl font-bold mb-2">{pathway.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{pathway.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Certificate size={16} className="text-primary" />
                        <span className="text-foreground/80">{pathway.timeCommitment}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendUp size={16} className="text-sage-foreground" />
                        <span className="font-semibold text-sage-foreground">{pathway.cost}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedCard(isExpanded ? null : pathway.title)}
                  className="w-full"
                >
                  {isExpanded ? t('careerPathways.showLess') : t('careerPathways.showDetails')}
                </Button>

                {isExpanded && (
                  <div className="space-y-4 pt-4 border-t border-border animate-in fade-in duration-200">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <BookOpen size={18} className="text-primary" />
                        {t('careerPathways.libraryResources')}
                      </h4>
                      <ul className="space-y-1.5 ml-7">
                        {pathway.resources.map((resource, idx) => (
                          <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                            <CheckCircle size={16} className="text-sage-foreground flex-shrink-0 mt-0.5" />
                            <span>{resource}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Path size={18} className="text-primary" />
                        {t('careerPathways.possibleCareers')}
                      </h4>
                      <div className="flex flex-wrap gap-2 ml-7">
                        {pathway.careerPaths.map((career, idx) => (
                          <Badge key={idx} variant="outline">{career}</Badge>
                        ))}
                      </div>
                    </div>

                    {pathway.certification && (
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Certificate size={18} className="text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium mb-1">{t('careerPathways.certification')}</p>
                            <p className="text-sm text-foreground/80">{pathway.certification}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="p-4 bg-accent/10 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Lightbulb size={20} className="text-accent-foreground flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-accent-foreground mb-1">
                            {t('careerPathways.proTip')}
                          </p>
                          <p className="text-sm text-foreground/80">{pathway.proTip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          )
        })}
      </div>

      <Card className="p-6 bg-primary/5 border-primary/10">
        <h3 className="font-semibold mb-3">{t('careerPathways.needGuidance')}</h3>
        <p className="text-sm text-foreground/80 mb-4">
          {t('careerPathways.needGuidanceText')}
        </p>
        <Button variant="default">
          {t('careerPathways.bookAppointment')}
        </Button>
      </Card>
    </div>
  )
}
