import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Briefcase, 
  Users, 
  Clock, 
  GraduationCap, 
  Heart, 
  Books, 
  Leaf,
  Student,
  Armchair,
  Baby,
  Laptop,
  Palette,
  Lightbulb,
  MagnifyingGlass,
  Rocket
} from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

type Tour = {
  id: string
  title: string
  description: string
  persona: string
  icon: any
  color: string
  audienceType: 'newcomer' | 'local'
  steps: {
    time: string
    activity: string
    description: string
    service: string
  }[]
}

const tours: Tour[] = [
  {
    id: 'remote-worker',
    title: 'The Remote Worker Routine',
    description: 'How a newcomer uses the library as a free office space',
    persona: 'Meet Sarah - New to Canada, working remotely',
    icon: Briefcase,
    color: 'primary',
    audienceType: 'newcomer',
    steps: [
      {
        time: '9:00 AM',
        activity: 'Arrive & Connect',
        description: 'Sarah enters the library and connects to the free, fast Wi-Fi on her laptop.',
        service: 'Free Wi-Fi (no password required)'
      },
      {
        time: '9:30 AM',
        activity: 'Book a Study Room',
        description: 'She books a private study room for her video call using the online booking system.',
        service: 'Free study room booking (2-hour slots)'
      },
      {
        time: '11:00 AM',
        activity: 'Print Documents',
        description: 'After her call, Sarah prints her resume and cover letters for 15¢ per page.',
        service: 'Printing, copying, scanning services'
      },
      {
        time: '12:00 PM',
        activity: 'Lunch & Learn',
        description: 'She takes a break, eats her lunch in the common area, and browses job search books.',
        service: 'Career development resources'
      },
      {
        time: '2:00 PM',
        activity: 'Use LinkedIn Learning',
        description: 'Sarah accesses free LinkedIn Learning courses with her library card to build new skills.',
        service: 'Free access to LinkedIn Learning'
      }
    ]
  },
  {
    id: 'family-weekend',
    title: 'The Rainy Weekend Plan',
    description: 'How a newcomer family spends 4 hours at the library for free',
    persona: 'Meet the Ahmed family - Parents with two children (ages 4 and 7)',
    icon: Users,
    color: 'secondary',
    audienceType: 'newcomer',
    steps: [
      {
        time: '10:00 AM',
        activity: 'Storytime Fun',
        description: 'The kids join the Saturday morning storytime program with songs and activities.',
        service: 'Free children\'s programs & storytime'
      },
      {
        time: '11:00 AM',
        activity: 'STEAM Discovery',
        description: 'The family checks out a STEAM kit from FVRL Playground - today it\'s a robotics set!',
        service: 'FVRL Playground STEAM kits'
      },
      {
        time: '11:30 AM',
        activity: 'Books in Every Language',
        description: 'Parents find books in Arabic for the kids, plus English learning materials for themselves.',
        service: 'Multilingual collections'
      },
      {
        time: '12:30 PM',
        activity: 'Movie Time',
        description: 'They borrow 3 DVDs for family movie night, including new releases.',
        service: 'Free DVD & Blu-ray borrowing'
      },
      {
        time: '1:30 PM',
        activity: 'Digital Resources',
        description: 'Mom downloads audiobooks and ebooks to her phone for the week ahead.',
        service: 'Libby app for digital borrowing'
      }
    ]
  },
  {
    id: 'settlement-journey',
    title: 'The Settlement Journey',
    description: 'How newcomers use library resources to settle into Canada',
    persona: 'Meet Chen - Recently arrived from China, navigating life in Canada',
    icon: GraduationCap,
    color: 'accent',
    audienceType: 'newcomer',
    steps: [
      {
        time: '10:00 AM',
        activity: 'Get a Library Card',
        description: 'Chen shows ID and proof of address to get a free library card - no citizenship required!',
        service: 'Free library card for all residents'
      },
      {
        time: '10:30 AM',
        activity: 'English Conversation Circle',
        description: 'Chen joins a weekly conversation circle to practice speaking English with other newcomers.',
        service: 'Free English conversation programs'
      },
      {
        time: '12:00 PM',
        activity: 'Citizenship Study Materials',
        description: 'Chen borrows citizenship test preparation books and accesses online practice tests.',
        service: 'Citizenship resources & study guides'
      },
      {
        time: '1:00 PM',
        activity: 'Settlement Agency Meeting',
        description: 'Chen meets with a settlement worker who holds office hours at the library monthly.',
        service: 'Settlement agency partnerships'
      },
      {
        time: '2:30 PM',
        activity: 'Language Learning Apps',
        description: 'Chen downloads Mango Languages on their phone for self-paced English learning at home.',
        service: 'Free access to Mango Languages'
      }
    ]
  },
  {
    id: 'international-student',
    title: 'The International Student',
    description: 'How international students maximize library resources for success',
    persona: 'Meet Priya - International student from India studying Computer Science',
    icon: Student,
    color: 'primary',
    audienceType: 'newcomer',
    steps: [
      {
        time: '8:30 AM',
        activity: 'Early Morning Study',
        description: 'Priya arrives early to secure her favorite quiet study spot before classes.',
        service: 'Extended study hours & quiet zones'
      },
      {
        time: '10:00 AM',
        activity: 'Academic Research',
        description: 'She accesses academic journals and databases for her research paper through the library portal.',
        service: 'Free academic database access'
      },
      {
        time: '12:30 PM',
        activity: 'Group Project Meeting',
        description: 'Priya books a group study room to work on her team project with classmates.',
        service: 'Collaborative study rooms'
      },
      {
        time: '2:00 PM',
        activity: 'Textbook Savings',
        description: 'She borrows course textbooks on reserve instead of buying expensive new copies.',
        service: 'Course reserves & textbook lending'
      },
      {
        time: '4:00 PM',
        activity: 'Career Prep',
        description: 'Priya uses LinkedIn Learning to take a coding bootcamp course for her job search.',
        service: 'LinkedIn Learning & professional development'
      },
      {
        time: '6:00 PM',
        activity: 'Unwind & Connect',
        description: 'She joins the international students book club to meet friends and practice English.',
        service: 'Student clubs & social programs'
      }
    ]
  },
  {
    id: 'new-parent',
    title: 'The New Parent Journey',
    description: 'How new parents with babies find community and resources',
    persona: 'Meet Maria - First-time mom with 8-month-old baby Sofia',
    icon: Baby,
    color: 'secondary',
    audienceType: 'newcomer',
    steps: [
      {
        time: '10:00 AM',
        activity: 'Baby Rhyme Time',
        description: 'Maria and Sofia join other parents for songs, rhymes, and gentle movement activities.',
        service: 'Free baby programs (0-18 months)'
      },
      {
        time: '11:00 AM',
        activity: 'Parent Connection',
        description: 'She meets other new parents and exchanges numbers while babies play on soft mats.',
        service: 'Parent networking opportunities'
      },
      {
        time: '11:30 AM',
        activity: 'Parenting Resources',
        description: 'Maria borrows board books for Sofia and parenting guides in her native Spanish.',
        service: 'Multilingual parenting collection'
      },
      {
        time: '12:00 PM',
        activity: 'Comfortable Feeding',
        description: 'She uses the family room to nurse Sofia in a private, comfortable space.',
        service: 'Family rooms & nursing spaces'
      },
      {
        time: '12:30 PM',
        activity: 'Settlement Support',
        description: 'Maria speaks with a settlement worker about childcare options and parental benefits.',
        service: 'Newcomer family support services'
      }
    ]
  },
  {
    id: 'lifelong-learner',
    title: 'The Lifelong Learner',
    description: 'How long-time residents rediscover their library',
    persona: 'Meet Margaret - Retired teacher exploring new hobbies',
    icon: Books,
    color: 'sage',
    audienceType: 'local',
    steps: [
      {
        time: '9:30 AM',
        activity: 'Book Club Meeting',
        description: 'Margaret joins the monthly book club in the community room - free coffee provided!',
        service: 'Free book clubs & reading groups'
      },
      {
        time: '11:00 AM',
        activity: 'Digital Help Session',
        description: 'A library volunteer helps Margaret set up the Libby app on her new tablet.',
        service: 'Free one-on-one tech help'
      },
      {
        time: '12:00 PM',
        activity: 'Genealogy Research',
        description: 'Margaret accesses Ancestry.com for free at the library to research her family tree.',
        service: 'Free access to genealogy databases'
      },
      {
        time: '1:30 PM',
        activity: 'Borrow Museum Passes',
        description: 'She borrows free passes to the local art gallery for her and her grandchildren.',
        service: 'Museum & attraction passes'
      },
      {
        time: '2:30 PM',
        activity: 'Seed Library',
        description: 'Margaret picks up heritage tomato seeds from the seed library for her garden.',
        service: 'Seed lending library'
      }
    ]
  },
  {
    id: 'community-connector',
    title: 'The Community Connector',
    description: 'How locals use the library as a community hub',
    persona: 'Meet David - Active community volunteer and parent',
    icon: Heart,
    color: 'primary',
    audienceType: 'local',
    steps: [
      {
        time: '9:00 AM',
        activity: 'Community Room Booking',
        description: 'David uses the free meeting room for his neighborhood association\'s monthly meeting.',
        service: 'Free community room bookings'
      },
      {
        time: '11:00 AM',
        activity: 'Local History Collection',
        description: 'David browses the local history archives for his neighborhood heritage project.',
        service: 'Local history & archives'
      },
      {
        time: '12:30 PM',
        activity: 'Makerspace Workshop',
        description: 'David attends a free workshop on using the laser cutter for his community garden signs.',
        service: 'Free makerspace workshops'
      },
      {
        time: '2:00 PM',
        activity: 'Tool Library Pickup',
        description: 'He picks up a power drill and level he reserved online for a home project.',
        service: 'Library of Things - tool lending'
      },
      {
        time: '3:00 PM',
        activity: 'Kids Pickup from Programs',
        description: 'David picks up his kids from the after-school homework help program.',
        service: 'After-school programs & homework help'
      }
    ]
  },
  {
    id: 'eco-explorer',
    title: 'The Eco Explorer',
    description: 'How environmentally-conscious locals leverage library resources',
    persona: 'Meet Ava - Environmental advocate and nature enthusiast',
    icon: Leaf,
    color: 'secondary',
    audienceType: 'local',
    steps: [
      {
        time: '10:00 AM',
        activity: 'Borrow Nature Kits',
        description: 'Ava checks out a birdwatching kit with binoculars and a field guide for a family hike.',
        service: 'Nature exploration kits'
      },
      {
        time: '11:00 AM',
        activity: 'Environmental Films',
        description: 'She browses the documentary collection and reserves films for her eco-film club.',
        service: 'Documentary & film collections'
      },
      {
        time: '12:00 PM',
        activity: 'Repair Café',
        description: 'Ava brings a broken toaster to the monthly repair café where volunteers fix items for free.',
        service: 'Repair cafés & sustainability programs'
      },
      {
        time: '1:30 PM',
        activity: 'Energy Monitor Loan',
        description: 'She borrows an electricity usage monitor to track which appliances use the most power.',
        service: 'Energy monitors & radon detectors'
      },
      {
        time: '2:30 PM',
        activity: 'Gardening Books & Seeds',
        description: 'Ava picks up organic gardening books and native plant seeds from the seed library.',
        service: 'Gardening resources & seed library'
      }
    ]
  },
  {
    id: 'senior-active',
    title: 'The Active Senior',
    description: 'How seniors stay connected, healthy, and engaged',
    persona: 'Meet Harold - 72-year-old retiree embracing technology',
    icon: Armchair,
    color: 'sage',
    audienceType: 'local',
    steps: [
      {
        time: '9:00 AM',
        activity: 'Morning Newspaper',
        description: 'Harold reads newspapers from around the world on library tablets with large font settings.',
        service: 'Digital newspapers & accessibility features'
      },
      {
        time: '10:00 AM',
        activity: 'Tech Tutoring',
        description: 'A patient volunteer helps Harold set up video calls to connect with his grandchildren overseas.',
        service: 'One-on-one tech help for seniors'
      },
      {
        time: '11:30 AM',
        activity: 'Health & Wellness',
        description: 'Harold attends the weekly gentle chair yoga session offered in the community room.',
        service: 'Free senior wellness programs'
      },
      {
        time: '1:00 PM',
        activity: 'Large Print Books',
        description: 'He browses the large print collection and picks up audiobooks for his daily walks.',
        service: 'Large print & audiobook collections'
      },
      {
        time: '2:30 PM',
        activity: 'Seniors Social Club',
        description: 'Harold joins the weekly coffee & conversation group to meet friends and play cards.',
        service: 'Senior social programs'
      },
      {
        time: '3:30 PM',
        activity: 'Home Delivery Signup',
        description: 'He signs up for home delivery service for weeks when mobility is challenging.',
        service: 'Homebound delivery services'
      }
    ]
  },
  {
    id: 'job-seeker',
    title: 'The Job Seeker Journey',
    description: 'How newcomers use library resources to find employment',
    persona: 'Meet Ahmed - Recently arrived professional looking for work',
    icon: MagnifyingGlass,
    color: 'primary',
    audienceType: 'newcomer',
    steps: [
      {
        time: '9:00 AM',
        activity: 'Career Assessment',
        description: 'Ahmed meets with a career counselor who offers free 1-on-1 sessions at the library.',
        service: 'Free career counseling services'
      },
      {
        time: '10:00 AM',
        activity: 'Resume Workshop',
        description: 'He attends a workshop on creating Canadian-style resumes and cover letters.',
        service: 'Resume & cover letter workshops'
      },
      {
        time: '11:30 AM',
        activity: 'Skills Certification',
        description: 'Ahmed accesses free online courses and certifications through LinkedIn Learning.',
        service: 'Free professional development platforms'
      },
      {
        time: '1:00 PM',
        activity: 'Job Board Access',
        description: 'He uses library computers to search job boards and create profiles on employment websites.',
        service: 'Free computer & internet access'
      },
      {
        time: '2:30 PM',
        activity: 'Interview Preparation',
        description: 'Ahmed practices interview skills with a volunteer in a mock interview session.',
        service: 'Mock interview practice programs'
      },
      {
        time: '3:30 PM',
        activity: 'Professional Documents',
        description: 'He prints his resume, cover letters, and references for upcoming job interviews.',
        service: 'Printing services for job seekers'
      }
    ]
  },
  {
    id: 'entrepreneur-startup',
    title: 'The Aspiring Entrepreneur',
    description: 'How newcomers use library resources to start a business',
    persona: 'Meet Fatima - Dreaming of starting her own catering business',
    icon: Lightbulb,
    color: 'accent',
    audienceType: 'newcomer',
    steps: [
      {
        time: '10:00 AM',
        activity: 'Business Planning Workshop',
        description: 'Fatima attends a free workshop on creating a business plan in Canada.',
        service: 'Small business development programs'
      },
      {
        time: '11:30 AM',
        activity: 'Market Research',
        description: 'She accesses business databases to research the local food service market.',
        service: 'Free business research databases'
      },
      {
        time: '1:00 PM',
        activity: 'Entrepreneurship Mentorship',
        description: 'Fatima meets with a business mentor through the library\'s partnership program.',
        service: 'Business mentorship connections'
      },
      {
        time: '2:00 PM',
        activity: 'Legal Resources',
        description: 'She borrows books on Canadian business law and food safety regulations.',
        service: 'Business & legal resource collections'
      },
      {
        time: '3:00 PM',
        activity: 'Marketing Skills',
        description: 'Fatima takes an online course on social media marketing for small businesses.',
        service: 'Digital marketing courses'
      },
      {
        time: '4:00 PM',
        activity: 'Networking Event',
        description: 'She connects with other entrepreneurs at the monthly small business networking event.',
        service: 'Business networking events'
      }
    ]
  },
  {
    id: 'creative-hobbyist',
    title: 'The Creative Hobbyist',
    description: 'How locals explore creative pursuits through library resources',
    persona: 'Meet Jason - Mid-career professional exploring photography',
    icon: Palette,
    color: 'secondary',
    audienceType: 'local',
    steps: [
      {
        time: '10:00 AM',
        activity: 'Equipment Checkout',
        description: 'Jason borrows a professional DSLR camera and tripod from the library\'s tech lending collection.',
        service: 'Camera & photography equipment lending'
      },
      {
        time: '11:00 AM',
        activity: 'Photography Workshop',
        description: 'He attends a hands-on workshop on composition and lighting techniques.',
        service: 'Creative arts workshops'
      },
      {
        time: '1:00 PM',
        activity: 'Online Courses',
        description: 'Jason accesses Creativelive and LinkedIn Learning for advanced photo editing tutorials.',
        service: 'Free creative software training'
      },
      {
        time: '2:30 PM',
        activity: 'Makerspace Printing',
        description: 'He uses the large format printer in the makerspace to print his best photos for an exhibition.',
        service: 'Makerspace printing services'
      },
      {
        time: '3:30 PM',
        activity: 'Art Books & Magazines',
        description: 'Jason browses photography magazines and books on famous photographers for inspiration.',
        service: 'Arts & hobbies collection'
      },
      {
        time: '4:30 PM',
        activity: 'Creative Community',
        description: 'He joins the monthly photography club meeting to share work and get feedback.',
        service: 'Creative hobby clubs'
      }
    ]
  },
  {
    id: 'digital-creator',
    title: 'The Digital Content Creator',
    description: 'How young locals leverage library tech for content creation',
    persona: 'Meet Taylor - 20-year-old aspiring YouTuber and podcaster',
    icon: Rocket,
    color: 'accent',
    audienceType: 'local',
    steps: [
      {
        time: '11:00 AM',
        activity: 'Studio Booking',
        description: 'Taylor books the library\'s podcast recording studio with professional microphones.',
        service: 'Podcast & recording studio'
      },
      {
        time: '12:00 PM',
        activity: 'Content Creation',
        description: 'Taylor records three podcast episodes with soundproofing and professional equipment.',
        service: 'Professional audio equipment'
      },
      {
        time: '2:00 PM',
        activity: 'Video Editing Workshop',
        description: 'Taylor attends a workshop on video editing using Adobe Premiere.',
        service: 'Digital media workshops'
      },
      {
        time: '3:30 PM',
        activity: 'Equipment Borrowing',
        description: 'Taylor checks out a GoPro and lighting kit for an upcoming outdoor video shoot.',
        service: 'Video equipment lending'
      },
      {
        time: '4:30 PM',
        activity: 'Editing Suite',
        description: 'Taylor uses the library\'s computers with premium editing software to edit content.',
        service: 'High-performance editing computers'
      },
      {
        time: '6:00 PM',
        activity: 'Creator Meetup',
        description: 'Taylor joins the monthly content creator meetup to network and collaborate.',
        service: 'Digital creator community events'
      }
    ]
  },
  {
    id: 'genealogy-researcher',
    title: 'The Family History Detective',
    description: 'How locals uncover their roots through library resources',
    persona: 'Meet Patricia - Researching her Canadian and Indigenous heritage',
    icon: Books,
    color: 'sage',
    audienceType: 'local',
    steps: [
      {
        time: '10:00 AM',
        activity: 'Genealogy Workshop',
        description: 'Patricia attends a workshop on using online genealogy tools and databases.',
        service: 'Genealogy research workshops'
      },
      {
        time: '11:30 AM',
        activity: 'Ancestry Database Access',
        description: 'She accesses Ancestry.com and other premium genealogy sites for free at the library.',
        service: 'Free Ancestry.com & genealogy databases'
      },
      {
        time: '1:00 PM',
        activity: 'Historical Archives',
        description: 'Patricia examines local historical records, census data, and immigration documents.',
        service: 'Historical archives & local records'
      },
      {
        time: '2:30 PM',
        activity: 'Indigenous Resources',
        description: 'She explores the Indigenous history collection and connects with community resources.',
        service: 'Indigenous heritage collections'
      },
      {
        time: '3:30 PM',
        activity: 'Microfilm Research',
        description: 'Patricia reviews old newspaper articles on microfilm about her ancestors.',
        service: 'Microfilm & historical newspaper access'
      },
      {
        time: '4:30 PM',
        activity: 'Research Consultation',
        description: 'She meets with a librarian specializing in genealogy for research guidance.',
        service: 'Specialized research consultations'
      }
    ]
  },
  {
    id: 'high-school-student',
    title: 'The High School Student',
    description: 'How teens use the library for study and social connection',
    persona: 'Meet Emma - Grade 11 student preparing for university',
    icon: Laptop,
    color: 'primary',
    audienceType: 'local',
    steps: [
      {
        time: '3:30 PM',
        activity: 'After-School Arrival',
        description: 'Emma grabs a snack from home and claims a quiet table in the teen zone.',
        service: 'Dedicated teen study spaces'
      },
      {
        time: '4:00 PM',
        activity: 'Homework Help',
        description: 'She gets help with calculus from a volunteer tutor during homework help hours.',
        service: 'Free tutoring & homework help'
      },
      {
        time: '5:00 PM',
        activity: 'Research Project',
        description: 'Emma uses the library databases to find credible sources for her history essay.',
        service: 'Academic databases & research support'
      },
      {
        time: '6:00 PM',
        activity: 'University Prep',
        description: 'She attends a workshop on university applications and scholarship opportunities.',
        service: 'Post-secondary prep workshops'
      },
      {
        time: '7:00 PM',
        activity: 'Teen Advisory Board',
        description: 'Emma participates in the Teen Advisory Board meeting to plan upcoming events.',
        service: 'Teen leadership programs'
      },
      {
        time: '8:00 PM',
        activity: 'Study Group',
        description: 'She meets friends in a study room to prepare for their upcoming biology exam.',
        service: 'Evening study room access'
      }
    ]
  }
]

export function VisualTours() {
  const [selectedTour, setSelectedTour] = useState<string | null>(null)
  const activeTour = tours.find(t => t.id === selectedTour)
  const { t } = useTranslation()

  const newcomerTours = tours.filter(tour => tour.audienceType === 'newcomer')
  const localTours = tours.filter(tour => tour.audienceType === 'local')

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-3">{t('tours.title')}</h2>
        <p className="text-muted-foreground text-lg">
          {t('tours.subtitle')}
        </p>
      </div>

      {!selectedTour ? (
        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <h3 className="text-xl font-semibold text-primary">For Newcomers to Canada</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newcomerTours.map((tour) => {
                const Icon = tour.icon
                return (
                  <Card 
                    key={tour.id}
                    className="p-6 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary bg-gradient-to-br from-primary/5 to-transparent"
                    onClick={() => setSelectedTour(tour.id)}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                        <Icon size={28} weight="duotone" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2 text-xs">Newcomer</Badge>
                        <h4 className="text-xl font-bold mb-2">{tour.title}</h4>
                        <p className="text-muted-foreground text-sm">{tour.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <p className="text-sm font-medium">{tour.persona}</p>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      See the Full Day →
                    </Button>
                  </Card>
                )
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-8 bg-sage rounded-full" />
              <h3 className="text-xl font-semibold text-sage-foreground">For Long-Time Residents</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {localTours.map((tour) => {
                const Icon = tour.icon
                return (
                  <Card 
                    key={tour.id}
                    className="p-6 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-sage bg-gradient-to-br from-sage/10 to-transparent"
                    onClick={() => setSelectedTour(tour.id)}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-sage text-sage-foreground rounded-lg">
                        <Icon size={28} weight="duotone" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2 text-xs">Local</Badge>
                        <h4 className="text-xl font-bold mb-2">{tour.title}</h4>
                        <p className="text-muted-foreground text-sm">{tour.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <p className="text-sm font-medium">{tour.persona}</p>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      See the Full Day →
                    </Button>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <Button 
            variant="outline" 
            onClick={() => setSelectedTour(null)}
            className="mb-4"
          >
            ← Back to Tours
          </Button>

          {activeTour && (
            <>
              <Card className={`p-6 bg-gradient-to-br ${activeTour.audienceType === 'newcomer' ? 'from-primary/10' : 'from-sage/10'} to-transparent`}>
                <div className="flex items-start gap-4">
                  <div className={`p-4 ${activeTour.audienceType === 'newcomer' ? 'bg-primary text-primary-foreground' : 'bg-sage text-sage-foreground'} rounded-lg`}>
                    {<activeTour.icon size={40} weight="duotone" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={activeTour.audienceType === 'newcomer' ? 'default' : 'secondary'}>
                        {activeTour.audienceType === 'newcomer' ? 'Newcomer Tour' : 'Local Tour'}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{activeTour.title}</h3>
                    <p className="text-muted-foreground mb-2">{activeTour.description}</p>
                    <Badge variant="outline" className="mt-2">{activeTour.persona}</Badge>
                  </div>
                </div>
              </Card>

              <div className="space-y-4">
                {activeTour.steps.map((step, index) => (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="p-3 bg-accent text-accent-foreground rounded-full">
                          <Clock size={24} weight="duotone" />
                        </div>
                        {index < activeTour.steps.length - 1 && (
                          <div className="w-0.5 h-full bg-accent/30 mt-2" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="font-mono">{step.time}</Badge>
                          <h4 className="text-lg font-semibold">{step.activity}</h4>
                        </div>
                        <p className="text-muted-foreground mb-3">{step.description}</p>
                        <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                          <p className="text-sm">
                            <span className="font-semibold text-primary">Library Service:</span>{' '}
                            {step.service}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-accent/10 border-accent/30">
                <h4 className="font-semibold mb-3">All Services Used in This Visit:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeTour.steps.map((step, index) => (
                    <Badge key={index} variant="secondary">
                      {step.service}
                    </Badge>
                  ))}
                </div>
              </Card>
            </>
          )}
        </div>
      )}
    </div>
  )
}
