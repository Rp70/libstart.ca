# Planning Guide

A welcoming digital companion for library users that demystifies library culture and services through relatable stories, visual guides, and gamified experiences. Supporting both newcomers to Canada and long-time residents with content organized by audience (newcomers first, then locals), available in multiple languages to serve diverse communities.

**Experience Qualities**: 
1. **Friendly** - Uses warm, approachable language that makes users feel welcomed rather than lectured, with clear explanations that respect their experiences
2. **Discoverable** - Reveals hidden library services through curated lists, visual tours, and interactive games that encourage exploration rather than overwhelming with information
3. **Empowering** - Transforms confusion into confidence by addressing real concerns (for newcomers: privacy, cultural differences; for locals: discovering modern features) and connecting users to practical community resources

**Complexity Level**: Light Application (multiple features with basic state)
  - This app has multiple distinct sections (culture guide, visual tours, curated lists, bingo, glossary, volunteer profiles) with interactive elements and state management for the bingo game, volunteer profiles, tracking, and multilingual support, but doesn't require complex routing or heavy data processing.

## Essential Features

**Unified Audience Content**
- Functionality: All sections display content for both newcomers AND long-time residents, with newcomer content presented first followed by local content
- Purpose: Ensures all users can find relevant information without needing to switch modes; respects that users may benefit from content targeting either audience
- Trigger: User navigates to any content section
- Progression: View section → See newcomer-focused content first → Scroll to see local-focused content → Both audiences clearly labeled with badges
- Success criteria: Clear visual separation between audience sections using headers and badges; newcomer content always appears first; no audience switching required

**Culture Shock Guide (Newcomer Section)**
- Functionality: Educational content sections explaining Canadian library culture differences
- Purpose: Reduces anxiety and cultural confusion for newcomers by addressing unspoken rules and common misconceptions
- Trigger: User navigates to "Culture Guide" section from main navigation
- Progression: Browse sections → Select topic (Noise Reality/Trust & Privacy/What You Can Do) → Read explanatory content with real-world context
- Success criteria: Content is presented in scannable cards with relatable scenarios; users can quickly understand key cultural differences

**Modern Library Features (Local Section)**
- Functionality: Educational content highlighting new and advanced library services that go beyond traditional book lending
- Purpose: Helps long-time residents discover makerspace tools, digital resources, and community services they might not know exist
- Trigger: User scrolls to local section within "Culture Guide"
- Progression: Browse sections → Learn about makerspaces, digital-first services, community hubs → Discover unexpected resources
- Success criteria: Content showcases modern library evolution; highlights practical value and cost savings of premium services

**Visual Day-in-the-Life Tours**
- Functionality: Photo diary-style walkthroughs showing how different users utilize library services, with tours for both newcomers and locals across multiple personas
- Purpose: Makes abstract service lists concrete through relatable user stories for different audiences and life stages
- Trigger: User selects a persona tour from the Tours section
- Progression: View tour categories (newcomer tours first, then local tours) → Select tour → View sequential cards with time stamps and activities → See list of services used
- Success criteria: Each tour shows 4-6 timestamped activities; newcomer tours include settlement journeys, students, and parents; local tours include seniors, teens, and lifelong learners
- Personas covered:
  - **Newcomers**: Remote Worker, Family Weekend, Settlement Journey, International Student, New Parent
  - **Locals**: Lifelong Learner, Community Connector, Eco Explorer, Active Senior, High School Student

**Library Event Calendar**
- Functionality: Filterable calendar of events across library branches, organized by audience category (children, teens, adults, seniors, newcomers, all-ages)
- Purpose: Helps users discover free programs happening at their local library and plan visits around events
- Trigger: User navigates to "Events" section from main navigation
- Progression: View all events → Filter by library or audience category → Browse event cards → See event details including time, location, and registration requirements
- Success criteria: Events are categorized by audience with color-coded badges; filters update results in real-time; recurring events display their schedule patterns

**User Testimonials**
- Functionality: Collection of real user stories showing how Canadian libraries have impacted lives, organized by audience type (newcomers first, then locals)
- Purpose: Builds trust and inspires users by showing authentic examples of library impact
- Trigger: User navigates to "Stories" section from main navigation
- Progression: View all testimonials → Filter by newcomer/local stories → Read detailed testimonials with highlighted outcomes → See submit story CTA
- Success criteria: Testimonials include diverse personas (students, seniors, parents, professionals); each story highlights a specific positive outcome; clear visual separation between newcomer and local stories

**Hidden Menu Curated Lists**
- Functionality: Top 5 lists highlighting library resources, organized by audience with newcomer lists first followed by local lists
- Purpose: Surfaces valuable but overlooked services that users wouldn't know to search for
- Trigger: User browses curated list categories
- Progression: View newcomer-focused lists (ESL tools, settlement services) → Scroll to local-focused lists (makerspaces, premium digital resources) → Read detailed item descriptions
- Success criteria: Each list item has practical context for the audience; showcases concrete value and cost savings

**Interactive Library Bingo**
- Functionality: Gamified checklist with two separate bingo cards - one for newcomers and one for locals
- Purpose: Transforms passive reading into active engagement with audience-appropriate challenges
- Trigger: User accesses Bingo card from navigation
- Progression: Choose between Newcomer Bingo or Explorer Bingo → Mark completed activities → Track progress → Download/share completed card
- Success criteria: Two distinct bingo cards; progress tracked separately; Newcomers get basics like "found book in first language" while locals get advanced tasks like "used laser cutter"

**Neighborhood Hacks**
- Functionality: Hyper-local tips connecting library to surrounding area, organized by newcomer needs first then local tips
- Purpose: Helps newcomers navigate the physical neighborhood and locals discover hidden gems
- Trigger: User explores local tips section
- Progression: Browse newcomer tips (transit, settlement resources) → View local tips (events, community connections) → Get practical visiting information
- Success criteria: Clear audience labels on tip categories; includes actionable details

**Library Glossary**
- Functionality: Plain-language dictionary with terms relevant to newcomers first, followed by advanced terms for locals
- Purpose: Removes vocabulary barriers and helps all users understand library terminology
- Trigger: User searches or browses glossary terms
- Progression: Search/scroll term list → Terms organized by audience with badges → Read simple explanation with example
- Success criteria: Terms labeled as "Newcomer" or "Local" or shared; explained using everyday language

**Library Directory & Statistics**
- Functionality: Searchable directory of all libraries across Canada with interactive map and list views, comprehensive filtering, and statistical overview
- Purpose: Helps newcomers find libraries near them and understand the library landscape across provinces
- Trigger: User navigates to "Directory" section from main navigation
- Progression: View statistics dashboard → Apply filters (province, type, search) → Toggle between map/list view → Select library → View details and get directions
- Success criteria: All libraries display with accurate contact info and addresses; filters work correctly; map shows geographic distribution; statistics update based on filters; Google Maps integration works for directions

**Volunteer Champion Profiles**
- Functionality: Profile creation system allowing library volunteers to generate shareable QR codes and tracking links
- Purpose: Enables volunteers to promote library services and track their outreach impact
- Trigger: Volunteer clicks "Create Profile" button
- Progression: Upload photo → Enter name and message → Generate profile → Get QR code and shareable link → View visit tracking stats
- Success criteria: Profile generation is simple (3 inputs max); QR codes are downloadable; tracking shows view counts without personal data

**Multilingual Support**
- Functionality: Complete interface translation system supporting English, Punjabi, Mandarin, Arabic, and Spanish with automatic browser language detection
- Purpose: Makes the library guide accessible to top newcomer language communities in Canada, automatically presenting content in their preferred language
- Trigger: App loads for the first time (automatic detection) OR user manually selects language from dropdown in header
- Progression: First visit → Detect browser language → Set app language automatically → User can override via language selector → Language preference persists between sessions
- Success criteria: All UI text translates properly; RTL support works for Arabic; fonts display correctly for all scripts; language preference saves to user's device; browser language is detected on first visit and set automatically

**Book Club Finder**
- Functionality: Searchable directory of library-hosted book clubs across Canada with filtering by genre, language, and availability
- Purpose: Helps users find community connections through reading groups, especially valuable for language learners and newcomers seeking social integration
- Trigger: User navigates to "Book Clubs" section from main navigation
- Progression: View all book clubs → Filter by genre/language/library → See meeting times and availability → Access contact information → Learn about starting own club
- Success criteria: Clubs displayed with meeting frequency, language, capacity, and current book; filters work in real-time; includes beginner-friendly and ESL options

**Accessibility Services Guide**
- Functionality: Comprehensive expandable guide to accessibility features available at library branches with specific branch availability
- Purpose: Ensures users with disabilities know exactly what accommodations exist and how to access them - information often buried on official websites
- Trigger: User navigates to "Accessibility" section from main navigation
- Progression: Browse service categories → Expand service for details → See which branches offer it → Learn how to access and request → Get pro tips for using service
- Success criteria: Services organized by type (visual, hearing, mobility, cognitive); appointment requirements clearly marked; branch-specific availability shown; includes hidden services like home delivery

**Quiet Hours Tracker**
- Functionality: Time-based guide showing noise levels and crowd patterns at different library branches throughout the week
- Purpose: Helps users plan visits based on their noise tolerance and work needs - crucial info not available on official sites
- Trigger: User navigates to "Quiet Hours" section from main navigation
- Progression: Select library → Filter by noise level preference → View day/time slots with activity descriptions → See what activities are best suited for each time → Learn community patterns
- Success criteria: Time slots labeled as quiet/moderate/busy; includes typical activities and crowd levels; filterable by both library and noise preference; shows best use cases for each period

**Career Pathways Guide**
- Functionality: Comprehensive guide to building job-ready skills using free library resources, organized by industry with specific resource lists
- Purpose: Reveals how libraries can replace expensive professional development courses - information scattered across multiple official pages
- Trigger: User navigates to "Career Paths" section from main navigation
- Progression: View career categories → Select industry → Expand pathway for full details → See specific library resources → Review possible careers → Read implementation tips → Book career counseling
- Success criteria: 8+ career pathways covering diverse industries; each lists specific free library resources; shows cost savings vs paid alternatives; includes certification info and pro tips

**Special Collections & Archives**
- Functionality: Directory of hidden archival collections and special materials at library branches with access instructions
- Purpose: Showcases rare historical resources and archives that most library users don't know exist - usually hidden in library back rooms
- Trigger: User navigates to "Archives" section from main navigation
- Progression: Browse collection types → Read collection descriptions and highlights → Learn access requirements → See digital availability → Understand unique value → Request research assistance
- Success criteria: Collections organized by type and library; includes appointment requirements; shows digital access options; explains why each matters to specific user groups; highlights materials for family history research

## Edge Case Handling
- **Empty Bingo State**: Show encouraging message with suggestions for first activities to try
- **No Volunteer Photo**: Display friendly placeholder avatar with initials or library icon
- **Broken QR Code Link**: Redirect to main app homepage with welcome message
- **Long Volunteer Names**: Truncate gracefully in profile cards with full name in tooltip
- **Missing Tour Images**: Use colorful placeholder graphics that maintain visual rhythm
- **Unsupported Browser Language**: Default to English if detected browser language not in supported list
- **Multiple Browser Languages**: Check navigator.languages array in order of preference to find best match
- **RTL Layout Issues**: Properly reverse flex directions and text alignment for Arabic
- **Font Loading Failures**: Fallback to system fonts that support multilingual characters

## Design Direction
The design should evoke warmth, accessibility, and cultural bridge-building. It should feel like a friendly guide written by someone who understands the newcomer experience—not institutional or bureaucratic. Visual elements should celebrate multiculturalism while maintaining clarity and simplicity.

## Color Selection
The palette draws inspiration from library book spines, creating a welcoming literary atmosphere with pops of color that feel inviting rather than corporate.

- **Primary Color**: `oklch(0.55 0.15 260)` Deep Purple - Represents knowledge and dignity; sophisticated but approachable
- **Secondary Colors**: 
  - Warm Terracotta `oklch(0.65 0.12 45)` for culture/community sections - evokes warmth and human connection
  - Sage Green `oklch(0.70 0.08 150)` for practical guides - calm and reassuring
- **Accent Color**: `oklch(0.70 0.20 85)` Bright Yellow-Green - Energetic highlight for CTAs and gamified elements; optimistic and encouraging
- **Foreground/Background Pairings**: 
  - Primary (Deep Purple `oklch(0.55 0.15 260)`): White text `oklch(1 0 0)` - Ratio 6.8:1 ✓
  - Background (Cream `oklch(0.98 0.01 90)`): Dark text `oklch(0.25 0.02 260)` - Ratio 13.2:1 ✓
  - Accent (Yellow-Green `oklch(0.70 0.20 85)`): Dark text `oklch(0.20 0.02 260)` - Ratio 8.5:1 ✓

## Font Selection
Typography should feel contemporary and highly readable for non-native English speakers while maintaining personality that distinguishes this from official institutional sites.

- **Primary Font**: Bricolage Grotesque - Distinctive geometric sans with warmth; excellent for headings and navigation
- **Body Font**: Public Sans - Designed for government accessibility but friendly; exceptional readability for ESL audiences

- **Typographic Hierarchy**:
  - H1 (Section Titles): Bricolage Grotesque Bold / 36px / tight (-0.02em) letter spacing
  - H2 (Subsection): Bricolage Grotesque SemiBold / 24px / normal spacing
  - H3 (Card Headers): Bricolage Grotesque Medium / 18px / normal spacing
  - Body (Content): Public Sans Regular / 16px / 1.6 line-height for easy scanning
  - Labels (UI Elements): Public Sans Medium / 14px / uppercase with wide (0.05em) spacing
  - Captions (Metadata): Public Sans Regular / 14px / muted color

## Animations
Animations should feel welcoming and guide attention—subtle page transitions that maintain context, gentle hover states that encourage interaction, and celebratory moments when users complete bingo squares or create profiles.

Key moments: Card hover lifts with soft shadow, bingo square completion with satisfying pop animation, smooth section transitions that slide vertically, QR code generation with gentle fade-in and scale, progress indicators that fill with easing curves.

## Component Selection

- **Components**:
  - **Tabs**: Main navigation between major sections (Culture Guide, Tours, Hidden Menu, etc.) - sticky on scroll
  - **Card**: Primary container for all content blocks, culture sections, tour steps, list items
  - **Accordion**: Used in glossary for expandable term definitions
  - **Dialog**: Profile creation flow for volunteers, bingo completion celebration
  - **Badge**: Category tags, progress indicators, "New" flags on features
  - **Button**: Primary CTAs (Create Profile, Download Bingo), secondary actions (Learn More, Share)
  - **Input**: Profile creation form (name, message), glossary search
  - **Avatar**: Volunteer profile photos with fallback initials
  - **Progress**: Visual bingo completion percentage
  - **Separator**: Section dividers in long content areas

- **Customizations**:
  - Custom Bingo grid component (5x5 grid with tap-to-toggle interaction)
  - QR code generator integration (using existing library)
  - Image upload component with preview for volunteer photos
  - Shareable link component with copy-to-clipboard feedback

- **States**:
  - Buttons: Default with subtle shadow, hover with lift and color shift, active with press down effect, disabled with reduced opacity
  - Bingo squares: Unchecked (border only), hover (shadow glow), checked (filled with accent color + checkmark icon)
  - Cards: Default flat, hover with subtle lift and shadow expansion
  - Inputs: Focus with primary color ring, error with red border and message, success with green checkmark

- **Icon Selection**:
  - Books / BookOpen: Library and reading content
  - GlobeHemisphereWest: Cultural differences
  - Camera: Visual tours
  - Lightbulb: Hidden tips
  - CheckSquare: Bingo and task completion
  - MapPin: Neighborhood hacks
  - ChatCircleDots: Glossary
  - UserCircle: Volunteer profiles
  - QrCode: Profile sharing
  - ShareNetwork: Social sharing
  - DownloadSimple: Download actions
  - MagnifyingGlass: Search functionality

- **Spacing**:
  - Page padding: px-6 md:px-8 (24px mobile, 32px desktop)
  - Card padding: p-6 (24px all sides)
  - Card gaps in grid: gap-4 md:gap-6 (16px mobile, 24px desktop)
  - Section spacing: space-y-8 md:space-y-12
  - Button padding: px-6 py-3 (comfortable tap targets)

- **Mobile**:
  - Tabs convert to dropdown select on mobile (<640px)
  - Bingo grid scales from 5x5 to maintain touch targets (min 44px)
  - Tour cards stack vertically with full-width images
  - Profile creation dialog becomes full-screen modal
  - Two-column layouts collapse to single column
  - Navigation becomes bottom-fixed tab bar on mobile
