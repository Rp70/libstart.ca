# Planning Guide

A welcoming digital companion for newcomers to Canada that demystifies library culture and services through relatable stories, visual guides, and gamified experiences.

**Experience Qualities**: 
1. **Friendly** - Uses warm, approachable language that makes newcomers feel welcomed rather than lectured, with clear explanations that respect their experiences
2. **Discoverable** - Reveals hidden library services through curated lists, visual tours, and interactive games that encourage exploration rather than overwhelming with information
3. **Empowering** - Transforms cultural confusion into confidence by addressing real fears (privacy, noise, unspoken rules) and connecting users to practical community resources

**Complexity Level**: Light Application (multiple features with basic state)
  - This app has multiple distinct sections (culture guide, visual tours, curated lists, bingo, glossary, volunteer profiles) with interactive elements and state management for the bingo game, volunteer profiles, and tracking, but doesn't require complex routing or heavy data processing.

## Essential Features

**Culture Shock Guide**
- Functionality: Educational content sections explaining Canadian library culture differences
- Purpose: Reduces anxiety and cultural confusion for newcomers by addressing unspoken rules and common misconceptions
- Trigger: User navigates to "Culture Guide" section from main navigation
- Progression: Browse sections → Select topic (Noise Reality/Trust & Privacy/What You Can Do) → Read explanatory content with real-world context
- Success criteria: Content is presented in scannable cards with relatable scenarios; users can quickly understand key cultural differences

**Visual Day-in-the-Life Tours**
- Functionality: Photo diary-style walkthroughs showing how different users utilize library services
- Purpose: Makes abstract service lists concrete through relatable user stories
- Trigger: User selects a persona tour (Remote Worker/Family Weekend)
- Progression: Select tour → View sequential photo cards with time stamps and activities → See list of services used
- Success criteria: Each tour shows 4-6 timestamped activities with visual representation; users can envision themselves in the scenario

**Hidden Menu Curated Lists**
- Functionality: Top 5 lists highlighting unexpected library resources for specific needs
- Purpose: Surfaces valuable but overlooked services that newcomers wouldn't know to search for
- Trigger: User browses curated list categories
- Progression: View category cards → Select list (Things to Borrow/Free Learning Tools) → Read detailed item descriptions with newcomer-specific advice
- Success criteria: Each list item has practical context for newcomers; highlights FVRL-specific resources

**Interactive Newcomer Bingo**
- Functionality: Gamified checklist encouraging users to try library services
- Purpose: Transforms passive reading into active engagement with the library
- Trigger: User accesses Bingo card from navigation
- Progression: View bingo grid → Mark completed activities → Track progress → Download/share completed card
- Success criteria: Grid persists user progress; celebrates completion milestones; provides shareable output

**Neighborhood Hacks**
- Functionality: Hyper-local tips connecting library to surrounding area
- Purpose: Helps newcomers navigate the physical neighborhood and plan visits
- Trigger: User explores local tips section
- Progression: Browse categories → View transit routes, nearby cafes, parking tips → Get practical visiting information
- Success criteria: Information is specific to local branches; includes actionable details like bus numbers and walking times

**Library Glossary**
- Functionality: Plain-language dictionary translating library jargon
- Purpose: Removes vocabulary barriers that prevent newcomers from using services
- Trigger: User searches or browses glossary terms
- Progression: Search/scroll term list → Select term → Read simple explanation with example
- Success criteria: Terms are explained using everyday language; includes visual examples where helpful

**Volunteer Champion Profiles**
- Functionality: Profile creation system allowing library volunteers to generate shareable QR codes and tracking links
- Purpose: Enables volunteers to promote library services and track their outreach impact
- Trigger: Volunteer clicks "Create Profile" button
- Progression: Upload photo → Enter name and message → Generate profile → Get QR code and shareable link → View visit tracking stats
- Success criteria: Profile generation is simple (3 inputs max); QR codes are downloadable; tracking shows view counts without personal data

## Edge Case Handling
- **Empty Bingo State**: Show encouraging message with suggestions for first activities to try
- **No Volunteer Photo**: Display friendly placeholder avatar with initials or library icon
- **Broken QR Code Link**: Redirect to main app homepage with welcome message
- **Long Volunteer Names**: Truncate gracefully in profile cards with full name in tooltip
- **Missing Tour Images**: Use colorful placeholder graphics that maintain visual rhythm

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
