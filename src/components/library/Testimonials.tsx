import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Quotes,
  Star,
  GraduationCap,
  Baby,
  Briefcase,
  Heart,
  Globe,
  Books,
  Armchair,
  Student
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

type Testimonial = {
  id: string
  name: string
  role: string
  library: string
  audienceType: 'newcomer' | 'local'
  category: 'student' | 'senior' | 'parent' | 'professional' | 'newcomer' | 'general'
  quote: string
  highlight: string
  icon: any
  stars: number
}

const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Priya S.',
    role: 'International Student from India',
    library: 'University of British Columbia Library',
    audienceType: 'newcomer',
    category: 'student',
    quote: 'When I first arrived in Canada, I didn\'t know anyone and couldn\'t afford expensive textbooks. The library became my second home. I saved over $2,000 on textbooks, found a quiet place to study, and even made friends through the international student book club.',
    highlight: 'Saved over $2,000 on textbooks',
    icon: Student,
    stars: 5
  },
  {
    id: 'test-2',
    name: 'Ahmed K.',
    role: 'Newcomer from Syria',
    library: 'Vancouver Public Library',
    audienceType: 'newcomer',
    category: 'newcomer',
    quote: 'The library helped my family so much when we first arrived. We practiced English at conversation circles, my kids found books in Arabic, and the settlement worker at the library helped us find housing. I never expected so much support for free.',
    highlight: 'Found housing through library settlement services',
    icon: Globe,
    stars: 5
  },
  {
    id: 'test-3',
    name: 'Maria L.',
    role: 'New Mom',
    library: 'Toronto Reference Library',
    audienceType: 'newcomer',
    category: 'parent',
    quote: 'As a new immigrant and first-time mom, I felt isolated. The baby rhyme time programs changed everything. I met other moms, learned Canadian nursery rhymes with my daughter, and found parenting resources in Spanish. The library staff always made us feel welcome.',
    highlight: 'Built a community of parent friends',
    icon: Baby,
    stars: 5
  },
  {
    id: 'test-4',
    name: 'Wei C.',
    role: 'Job Seeker from China',
    library: 'Calgary Central Library',
    audienceType: 'newcomer',
    category: 'professional',
    quote: 'I came to Canada with 15 years of engineering experience but couldn\'t get interviews. The library\'s career resources and resume workshops taught me how to write a Canadian-style resume. Within a month, I had three interviews. Now I work as a project manager.',
    highlight: 'Got a job after learning Canadian resume style',
    icon: Briefcase,
    stars: 5
  },
  {
    id: 'test-5',
    name: 'Margaret T.',
    role: 'Retired Teacher',
    library: 'Halifax Central Library',
    audienceType: 'local',
    category: 'senior',
    quote: 'At 75, I was scared of technology. The wonderful volunteers at the library taught me to video call my grandchildren in Australia. Now I use the library app to borrow audiobooks for my daily walks. It\'s like having a personal librarian in my pocket!',
    highlight: 'Learned to video call family across the world',
    icon: Armchair,
    stars: 5
  },
  {
    id: 'test-6',
    name: 'Harold M.',
    role: 'Retired Engineer',
    library: 'Edmonton Public Library',
    audienceType: 'local',
    category: 'senior',
    quote: 'After my wife passed, I needed a reason to leave the house. The senior coffee mornings at the library gave me that. I\'ve made real friends, learned to use a tablet, and even joined the genealogy group. The library kept me connected to my community.',
    highlight: 'Found community and purpose after loss',
    icon: Heart,
    stars: 5
  },
  {
    id: 'test-7',
    name: 'Emma J.',
    role: 'High School Student',
    library: 'Ottawa Public Library',
    audienceType: 'local',
    category: 'student',
    quote: 'The free tutoring at the library saved my grades! The volunteers helped me with calculus and chemistry when I was struggling. I also love the teen advisory board - we actually get to plan events and have a voice. It\'s way better than studying at home.',
    highlight: 'Improved grades with free tutoring',
    icon: GraduationCap,
    stars: 5
  },
  {
    id: 'test-8',
    name: 'David R.',
    role: 'Parent and Community Volunteer',
    library: 'Winnipeg Millennium Library',
    audienceType: 'local',
    category: 'parent',
    quote: 'My kids practically grew up at the library. From baby storytime to LEGO club to homework help, the library was always there. Now I volunteer at the repair café to give back. We\'ve borrowed thousands of books over the years - all for free!',
    highlight: 'Raised kids at the library from babies to teens',
    icon: Books,
    stars: 5
  },
  {
    id: 'test-9',
    name: 'Jaspreet P.',
    role: 'College Student',
    library: 'Abbotsford Library (FVRL)',
    audienceType: 'newcomer',
    category: 'student',
    quote: 'As a first-generation college student, I didn\'t know how to navigate the system. The library\'s free LinkedIn Learning helped me build job skills, and I could print my assignments for cheap. The quiet study rooms were essential during exams.',
    highlight: 'Built job skills through free LinkedIn Learning',
    icon: Student,
    stars: 5
  },
  {
    id: 'test-10',
    name: 'Sandra K.',
    role: 'Small Business Owner',
    library: 'Montreal BAnQ',
    audienceType: 'local',
    category: 'professional',
    quote: 'Starting my bakery was overwhelming, but the library had business planning resources, market research databases, and even workshops for entrepreneurs. I printed my business plan there and used the meeting rooms to meet clients. All for free with my library card!',
    highlight: 'Launched a bakery using library business resources',
    icon: Briefcase,
    stars: 5
  },
  {
    id: 'test-11',
    name: 'Fatima A.',
    role: 'Parent and ESL Learner',
    library: 'Toronto Public Library',
    audienceType: 'newcomer',
    category: 'parent',
    quote: 'The library was my English classroom. While my children attended storytime, I practiced with Mango Languages on the library computer. Now I can help them with homework and talk to their teachers. The library gave me confidence.',
    highlight: 'Learned English while kids attended storytime',
    icon: Globe,
    stars: 5
  },
  {
    id: 'test-12',
    name: 'Robert G.',
    role: 'Retiree and Genealogy Enthusiast',
    library: 'Regina Public Library',
    audienceType: 'local',
    category: 'senior',
    quote: 'I discovered my great-grandmother came from Ireland using the library\'s free Ancestry.com access. The genealogy club members helped me break through brick walls in my research. I\'ve traced my family back 8 generations - all for free at the library.',
    highlight: 'Traced family history back 8 generations',
    icon: Heart,
    stars: 5
  }
]

const categoryLabels = {
  'student': 'Student',
  'senior': 'Senior',
  'parent': 'Parent',
  'professional': 'Professional',
  'newcomer': 'Newcomer',
  'general': 'General'
}

export function Testimonials() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<'all' | 'newcomer' | 'local'>('all')

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.audienceType === filter)

  const newcomerTestimonials = testimonials.filter(t => t.audienceType === 'newcomer')
  const localTestimonials = testimonials.filter(t => t.audienceType === 'local')

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">Real Stories from Library Users</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Hear how Canadian libraries have made a real difference in people's lives - from newcomers finding their footing to lifelong residents discovering new possibilities.
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-8">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
        >
          All Stories
        </Button>
        <Button
          variant={filter === 'newcomer' ? 'default' : 'outline'}
          onClick={() => setFilter('newcomer')}
          className="gap-2"
        >
          <Globe size={18} />
          Newcomer Stories
        </Button>
        <Button
          variant={filter === 'local' ? 'default' : 'outline'}
          onClick={() => setFilter('local')}
          className="gap-2"
        >
          <Heart size={18} />
          Local Stories
        </Button>
      </div>

      {filter === 'all' && (
        <>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <h3 className="text-xl font-semibold text-primary">Newcomer Experiences</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newcomerTestimonials.map(testimonial => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 bg-sage rounded-full" />
              <h3 className="text-xl font-semibold text-sage-foreground">Long-Time Resident Experiences</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {localTestimonials.map(testimonial => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </>
      )}

      {filter !== 'all' && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      )}

      <Card className="bg-gradient-to-br from-accent/20 to-primary/10 p-8 text-center mt-12">
        <Quotes size={48} weight="duotone" className="mx-auto mb-4 text-primary" />
        <h3 className="text-2xl font-bold mb-3">Share Your Story</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Has your library made a difference in your life? We'd love to hear about it! 
          Your story could inspire others to discover the amazing resources available at their local library.
        </p>
        <Button size="lg" className="gap-2">
          <Heart size={20} />
          Submit Your Story
        </Button>
      </Card>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const Icon = testimonial.icon
  
  return (
    <Card className={`p-6 hover:shadow-lg transition-shadow h-full flex flex-col ${
      testimonial.audienceType === 'newcomer' 
        ? 'border-l-4 border-l-primary' 
        : 'border-l-4 border-l-sage'
    }`}>
      <div className="flex items-start gap-3 mb-4">
        <div className={`p-3 rounded-full ${
          testimonial.audienceType === 'newcomer' 
            ? 'bg-primary/10 text-primary' 
            : 'bg-sage/20 text-sage-foreground'
        }`}>
          <Icon size={24} weight="duotone" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-3">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Star key={i} size={16} weight="fill" className="text-amber-400" />
        ))}
      </div>

      <div className="relative flex-1">
        <Quotes size={24} weight="duotone" className="absolute -top-1 -left-1 text-muted-foreground/20" />
        <p className="text-sm text-muted-foreground leading-relaxed pl-4">
          {testimonial.quote}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <Badge variant="secondary" className="text-xs">
            {testimonial.library}
          </Badge>
          <Badge variant={testimonial.audienceType === 'newcomer' ? 'default' : 'outline'} className="text-xs">
            {categoryLabels[testimonial.category]}
          </Badge>
        </div>
        <div className="mt-3 p-2 bg-accent/10 rounded text-xs font-medium text-accent-foreground">
          ✨ {testimonial.highlight}
        </div>
      </div>
    </Card>
  )
}
