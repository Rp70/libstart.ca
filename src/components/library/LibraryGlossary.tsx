import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useTranslation } from '@/hooks/use-translation'

type GlossaryTerm = {
  term: string
  simple: string
  explanation: string
  example?: string
  audienceType: 'newcomer' | 'local' | 'both'
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Hold',
    simple: 'Reserve a book',
    explanation: 'When you "place a hold," you\'re asking the library to reserve a book for you. If someone else has it, you get in line. When it\'s ready, the library will notify you.',
    example: 'The book I want is checked out. I\'ll place a hold and pick it up when it\'s my turn.',
    audienceType: 'both'
  },
  {
    term: 'Circulation Desk',
    simple: 'The Help Desk',
    explanation: 'This is the main desk where you check out books, return items, get your library card, and ask for help. Think of it as customer service.',
    example: 'Go to the circulation desk to pick up your hold or ask questions.',
    audienceType: 'both'
  },
  {
    term: 'Interlibrary Loan',
    simple: 'Book delivery from other cities',
    explanation: 'If your library doesn\'t have a book, they can request it from another library in a different city for free. It takes a few days but costs nothing.',
    example: 'The book is only available in Vancouver. I can request an interlibrary loan to get it here.',
    audienceType: 'both'
  },
  {
    term: 'Reference',
    simple: 'Books you can\'t borrow',
    explanation: 'Reference books stay in the library because many people need them (like encyclopedias or local history). You can read them there but can\'t take them home.',
    example: 'The citizenship study guide is a reference book - I can photocopy pages but not borrow it.',
    audienceType: 'newcomer'
  },
  {
    term: 'Renew',
    simple: 'Extend your borrowing time',
    explanation: 'If you\'re not done with a book, you can renew it to keep it longer - usually online or by phone. Free unless someone else has placed a hold on it.',
    example: 'My books are due tomorrow but I\'m not finished. I\'ll renew them for another 3 weeks.',
    audienceType: 'both'
  },
  {
    term: 'Overdue',
    simple: 'Late return',
    explanation: 'When you keep a book past the due date. Many libraries no longer charge late fees, but you can\'t borrow new items until you return overdue ones.',
    example: 'I forgot to return my DVDs on time. They\'re overdue but there\'s no fee - I just need to return them.',
    audienceType: 'newcomer'
  },
  {
    term: 'Digital Collection',
    simple: 'Books and movies you download',
    explanation: 'E-books, audiobooks, magazines, and movies you can borrow online and download to your phone or tablet. They automatically "return" when time is up.',
    example: 'I borrowed an audiobook from the digital collection using the Libby app on my phone.',
    audienceType: 'both'
  },
  {
    term: 'Study Room',
    simple: 'Private room you can book',
    explanation: 'Small rooms you can reserve for studying, group work, or video calls. Usually free and bookable online for 1-2 hour blocks.',
    example: 'I have a job interview video call. I booked a study room so I have privacy and quiet.',
    audienceType: 'newcomer'
  },
  {
    term: 'Stacks',
    simple: 'The bookshelves',
    explanation: 'The area where books are shelved. "In the stacks" just means browsing the shelves. You can freely walk through and pull books.',
    example: 'I couldn\'t find the book in the catalogue, so I looked in the stacks where cookbooks are.',
    audienceType: 'both'
  },
  {
    term: 'Call Number',
    simple: 'Book\'s address on the shelf',
    explanation: 'The numbers/letters on a book\'s spine that tell you where to find it. Like an address. Libraries are organized by these numbers.',
    example: 'The call number is 641.5 - that means it\'s in the cooking section.',
    audienceType: 'newcomer'
  },
  {
    term: 'Periodicals',
    simple: 'Magazines and newspapers',
    explanation: 'Publications that come out regularly (daily, weekly, monthly). Usually in a separate section. Recent issues often can\'t be borrowed.',
    example: 'I want to read today\'s newspaper. I\'ll check the periodicals section.',
    audienceType: 'both'
  },
  {
    term: 'Card Catalog',
    simple: 'Book search system',
    explanation: 'The computer system (or app) where you search for books, movies, and other items. Shows if something is available and where to find it.',
    example: 'I searched the card catalog for books about Canadian history and found 50 results.',
    audienceType: 'newcomer'
  },
  {
    term: 'Branch',
    simple: 'Different library locations',
    explanation: 'Multiple library buildings in different neighborhoods that are all part of the same system. Your card works at any branch.',
    example: 'I can return a book from the Abbotsford branch at the Chilliwack branch.',
    audienceType: 'newcomer'
  },
  {
    term: 'Librarian',
    simple: 'Information expert',
    explanation: 'Not just someone who checks out books! Librarians have degrees and can help with research, finding information, using databases, and learning new skills.',
    example: 'The librarian helped me find government forms and showed me how to fill them out online.',
    audienceType: 'newcomer'
  },
  {
    term: 'Settlement Collection',
    simple: 'Resources for new Canadians',
    explanation: 'Special section with books and materials to help newcomers settle in Canada - citizenship prep, English learning, job search, understanding Canadian systems.',
    example: 'The settlement collection has books about finding a job in Canada in my language.',
    audienceType: 'newcomer'
  },
  {
    term: 'ESL Programs',
    simple: 'English learning classes',
    explanation: 'Free English as a Second Language classes and conversation groups offered at many libraries. Great way to practice speaking with others.',
    example: 'I go to the ESL conversation circle every Thursday to practice my English.',
    audienceType: 'newcomer'
  },
  {
    term: 'Multilingual Collection',
    simple: 'Books in many languages',
    explanation: 'Libraries have books, magazines, and movies in dozens of languages - not just English and French. Ask staff about materials in your language.',
    example: 'The multilingual collection has novels in Punjabi, Chinese, Arabic, and many other languages.',
    audienceType: 'newcomer'
  },
  {
    term: 'Makerspace',
    simple: 'Creative workshop area',
    explanation: 'A space with tools and equipment for creating things - 3D printers, laser cutters, sewing machines, recording studios. Usually free with training.',
    example: 'I used the makerspace to 3D print a replacement part for my broken appliance.',
    audienceType: 'local'
  },
  {
    term: 'Library of Things',
    simple: 'Borrow tools, not just books',
    explanation: 'Many libraries now lend non-book items like tools, kitchen gadgets, camping gear, musical instruments, and technology.',
    example: 'I borrowed a telescope from the Library of Things to watch the meteor shower.',
    audienceType: 'local'
  },
  {
    term: 'Seed Library',
    simple: 'Free seeds for gardening',
    explanation: 'A collection of seeds you can "borrow" for free to plant in your garden. The idea is to save seeds from your harvest and donate them back.',
    example: 'I got tomato and lettuce seeds from the seed library for my vegetable garden.',
    audienceType: 'local'
  },
  {
    term: 'Museum Pass',
    simple: 'Free entry to attractions',
    explanation: 'Many libraries offer passes you can borrow for free or discounted entry to local museums, zoos, science centers, and attractions.',
    example: 'I borrowed a museum pass and took my family to the science center for free.',
    audienceType: 'local'
  },
  {
    term: 'Digital Branch',
    simple: 'Online library services',
    explanation: 'Access library services from home - e-books, audiobooks, streaming movies, online courses, and databases. Works 24/7 with your library card.',
    example: 'I used the digital branch to download an audiobook at midnight when the library was closed.',
    audienceType: 'local'
  },
  {
    term: 'Curbside Pickup',
    simple: 'Drive-through book pickup',
    explanation: 'Order books online and pick them up without going inside. Staff brings your items to your car. Many libraries still offer this service.',
    example: 'I scheduled curbside pickup and grabbed my books in 2 minutes without parking.',
    audienceType: 'local'
  },
  {
    term: 'Local History Collection',
    simple: 'Community archives',
    explanation: 'Historical documents, photos, newspapers, and records about your local area. Great for genealogy research or learning about your neighborhood\'s past.',
    example: 'I found old photos of my street from the 1950s in the local history collection.',
    audienceType: 'local'
  },
  {
    term: 'Genealogy Databases',
    simple: 'Family tree research tools',
    explanation: 'Free access to subscription services like Ancestry.com and Newspapers.com at the library. Research your family history at no cost.',
    example: 'I discovered my great-grandparents\' immigration records using the genealogy databases.',
    audienceType: 'local'
  },
  {
    term: 'Community Room',
    simple: 'Free meeting space',
    explanation: 'Rooms available for community groups, clubs, and organizations to meet for free. Often bookable online with projectors and whiteboards.',
    example: 'Our book club meets in the library community room every month.',
    audienceType: 'local'
  },
  {
    term: 'Holds Shelf',
    simple: 'Where reserved books wait',
    explanation: 'A designated area where books you\'ve reserved are placed for pickup. Usually organized by last name. Self-service at most libraries.',
    example: 'My hold is ready. I\'ll check the holds shelf under "S" for Smith.',
    audienceType: 'both'
  },
  {
    term: 'Fine-Free',
    simple: 'No late fees',
    explanation: 'Many Canadian libraries have eliminated overdue fines. You still need to return items, but you won\'t be charged for returning them late.',
    example: 'Don\'t worry about being a day late - our library is fine-free!',
    audienceType: 'both'
  }
]

export function LibraryGlossary() {
  const [searchTerm, setSearchTerm] = useState('')
  const { t } = useTranslation()

  const filteredTerms = glossaryTerms.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.simple.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.explanation.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const newcomerTerms = filteredTerms.filter(term => term.audienceType === 'newcomer' || term.audienceType === 'both')
  const localTerms = filteredTerms.filter(term => term.audienceType === 'local' || term.audienceType === 'both')
  const newcomerOnlyTerms = filteredTerms.filter(term => term.audienceType === 'newcomer')
  const localOnlyTerms = filteredTerms.filter(term => term.audienceType === 'local')
  const sharedTerms = filteredTerms.filter(term => term.audienceType === 'both')

  const renderTermItem = (item: GlossaryTerm, index: number, prefix: string) => (
    <AccordionItem 
      key={`${prefix}-${index}`} 
      value={`${prefix}-item-${index}`}
      className="border rounded-lg px-4 sm:px-6 bg-card hover:shadow-md transition-shadow"
    >
      <AccordionTrigger className="hover:no-underline py-3 sm:py-4">
        <div className="flex flex-col items-start gap-1 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-base sm:text-lg font-semibold">{item.term}</span>
            {item.audienceType === 'newcomer' && (
              <Badge variant="outline" className="text-[10px] sm:text-xs">Newcomer</Badge>
            )}
            {item.audienceType === 'local' && (
              <Badge variant="secondary" className="text-[10px] sm:text-xs">Local</Badge>
            )}
          </div>
          <span className="text-xs sm:text-sm text-primary font-medium">
            = {item.simple}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-4 pt-2">
        <div className="space-y-2 sm:space-y-3">
          <p className="text-sm sm:text-base text-muted-foreground">
            {item.explanation}
          </p>
          {item.example && (
            <div className="p-3 bg-accent/10 border-l-4 border-accent rounded">
              <p className="text-xs sm:text-sm">
                <span className="font-semibold">Example: </span>
                {item.example}
              </p>
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  )

  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">{t('glossary.title')}</h2>
        <p className="text-muted-foreground text-base sm:text-lg">
          {t('glossary.subtitle')}
        </p>
      </div>

      <Card className="p-4 sm:p-6">
        <div className="relative">
          <MagnifyingGlass 
            size={20} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
          />
          <Input
            type="text"
            placeholder={t('glossary.search')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {filteredTerms.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">
            {t('glossary.noResults')}
          </p>
        </Card>
      ) : (
        <div className="space-y-10 sm:space-y-12">
          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="h-1 w-6 sm:w-8 bg-primary rounded-full" />
              <h3 className="text-lg sm:text-xl font-semibold text-primary">Essential Terms for Newcomers</h3>
              <Badge variant="outline" className="text-xs sm:text-sm">{newcomerOnlyTerms.length + sharedTerms.length} terms</Badge>
            </div>
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {newcomerTerms.map((item, index) => renderTermItem(item, index, 'newcomer'))}
            </Accordion>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="h-1 w-6 sm:w-8 bg-sage rounded-full" />
              <h3 className="text-lg sm:text-xl font-semibold text-sage-foreground">Advanced Terms for Long-Time Residents</h3>
              <Badge variant="secondary" className="text-xs sm:text-sm">{localOnlyTerms.length} terms</Badge>
            </div>
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {localOnlyTerms.map((item, index) => renderTermItem(item, index, 'local'))}
            </Accordion>
          </div>
        </div>
      )}

      <Card className="p-4 sm:p-6 bg-muted/50">
        <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">💬 Don't See a Term?</h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Library staff are happy to explain any confusing words or procedures. 
          Don't hesitate to ask - there are no "stupid questions" at the library!
        </p>
      </Card>
    </div>
  )
}
