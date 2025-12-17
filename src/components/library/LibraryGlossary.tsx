import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { MagnifyingGlass } from '@phosphor-icons/react'

type GlossaryTerm = {
  term: string
  simple: string
  explanation: string
  example?: string
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Hold',
    simple: 'Reserve a book',
    explanation: 'When you "place a hold," you\'re asking the library to reserve a book for you. If someone else has it, you get in line. When it\'s ready, the library will notify you.',
    example: 'The book I want is checked out. I\'ll place a hold and pick it up when it\'s my turn.'
  },
  {
    term: 'Circulation Desk',
    simple: 'The Help Desk',
    explanation: 'This is the main desk where you check out books, return items, get your library card, and ask for help. Think of it as customer service.',
    example: 'Go to the circulation desk to pick up your hold or ask questions.'
  },
  {
    term: 'Interlibrary Loan',
    simple: 'Book delivery from other cities',
    explanation: 'If your library doesn\'t have a book, they can request it from another library in a different city for free. It takes a few days but costs nothing.',
    example: 'The book is only available in Vancouver. I can request an interlibrary loan to get it here.'
  },
  {
    term: 'Reference',
    simple: 'Books you can\'t borrow',
    explanation: 'Reference books stay in the library because many people need them (like encyclopedias or local history). You can read them there but can\'t take them home.',
    example: 'The citizenship study guide is a reference book - I can photocopy pages but not borrow it.'
  },
  {
    term: 'Renew',
    simple: 'Extend your borrowing time',
    explanation: 'If you\'re not done with a book, you can renew it to keep it longer - usually online or by phone. Free unless someone else has placed a hold on it.',
    example: 'My books are due tomorrow but I\'m not finished. I\'ll renew them for another 3 weeks.'
  },
  {
    term: 'Overdue',
    simple: 'Late return',
    explanation: 'When you keep a book past the due date. Many libraries no longer charge late fees, but you can\'t borrow new items until you return overdue ones.',
    example: 'I forgot to return my DVDs on time. They\'re overdue but there\'s no fee - I just need to return them.'
  },
  {
    term: 'Digital Collection',
    simple: 'Books and movies you download',
    explanation: 'E-books, audiobooks, magazines, and movies you can borrow online and download to your phone or tablet. They automatically "return" when time is up.',
    example: 'I borrowed an audiobook from the digital collection using the Libby app on my phone.'
  },
  {
    term: 'Study Room',
    simple: 'Private room you can book',
    explanation: 'Small rooms you can reserve for studying, group work, or video calls. Usually free and bookable online for 1-2 hour blocks.',
    example: 'I have a job interview video call. I booked a study room so I have privacy and quiet.'
  },
  {
    term: 'Stacks',
    simple: 'The bookshelves',
    explanation: 'The area where books are shelved. "In the stacks" just means browsing the shelves. You can freely walk through and pull books.',
    example: 'I couldn\'t find the book in the catalogue, so I looked in the stacks where cookbooks are.'
  },
  {
    term: 'Call Number',
    simple: 'Book\'s address on the shelf',
    explanation: 'The numbers/letters on a book\'s spine that tell you where to find it. Like an address. Libraries are organized by these numbers.',
    example: 'The call number is 641.5 - that means it\'s in the cooking section.'
  },
  {
    term: 'Periodicals',
    simple: 'Magazines and newspapers',
    explanation: 'Publications that come out regularly (daily, weekly, monthly). Usually in a separate section. Recent issues often can\'t be borrowed.',
    example: 'I want to read today\'s newspaper. I\'ll check the periodicals section.'
  },
  {
    term: 'Card Catalog',
    simple: 'Book search system',
    explanation: 'The computer system (or app) where you search for books, movies, and other items. Shows if something is available and where to find it.',
    example: 'I searched the card catalog for books about Canadian history and found 50 results.'
  },
  {
    term: 'Branch',
    simple: 'Different library locations',
    explanation: 'Multiple library buildings in different neighborhoods that are all part of the same system. Your card works at any branch.',
    example: 'I can return a book from the Abbotsford branch at the Chilliwack branch.'
  },
  {
    term: 'Librarian',
    simple: 'Information expert',
    explanation: 'Not just someone who checks out books! Librarians have degrees and can help with research, finding information, using databases, and learning new skills.',
    example: 'The librarian helped me find government forms and showed me how to fill them out online.'
  }
]

export function LibraryGlossary() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTerms = glossaryTerms.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.simple.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.explanation.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-3">Library Glossary</h2>
        <p className="text-muted-foreground text-lg">
          Library terms translated into plain language
        </p>
      </div>

      <Card className="p-4">
        <div className="relative">
          <MagnifyingGlass 
            size={20} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
          />
          <Input
            type="text"
            placeholder="Search for a term..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {filteredTerms.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">
            No terms found matching "{searchTerm}"
          </p>
        </Card>
      ) : (
        <Accordion type="single" collapsible className="space-y-3">
          {filteredTerms.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-card hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex flex-col items-start gap-1 text-left">
                  <span className="text-lg font-semibold">{item.term}</span>
                  <span className="text-sm text-primary font-medium">
                    = {item.simple}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2">
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    {item.explanation}
                  </p>
                  {item.example && (
                    <div className="p-3 bg-accent/10 border-l-4 border-accent rounded">
                      <p className="text-sm">
                        <span className="font-semibold">Example: </span>
                        {item.example}
                      </p>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      <Card className="p-6 bg-muted/50">
        <h3 className="font-semibold mb-3">💬 Don't See a Term?</h3>
        <p className="text-sm text-muted-foreground">
          Library staff are happy to explain any confusing words or procedures. 
          Don't hesitate to ask - there are no "stupid questions" at the library!
        </p>
      </Card>
    </div>
  )
}
