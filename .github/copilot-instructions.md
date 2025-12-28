# GitHub Copilot Instructions for Library Navigator

## Project Overview
This is a multilingual library companion app designed to help newcomers to Canada discover and utilize library services. The app supports English, Punjabi, Chinese (Mandarin), Arabic, and Spanish.

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives + custom components
- **Icons**: Phosphor Icons
- **State Management**: React Context API + GitHub Spark KV store
- **Testing**: Playwright for E2E and responsive testing
- **Animations**: Framer Motion

## Code Style & Conventions

### TypeScript
- Use TypeScript for all new files
- Prefer `interface` over `type` for object shapes
- Use proper typing - avoid `any` unless absolutely necessary
- Export types/interfaces that are used across multiple files

### React Components
- Use functional components with hooks
- Prefer named exports for components
- Component file structure:
  ```typescript
  // 1. Imports
  // 2. Type definitions
  // 3. Component definition
  // 4. Exports
  ```

### Naming Conventions
- Components: PascalCase (e.g., `LibraryServices.tsx`)
- Hooks: camelCase with `use` prefix (e.g., `useTranslation.ts`)
- Utilities: camelCase (e.g., `libraryData.ts`)
- Constants: SCREAMING_SNAKE_CASE
- CSS classes: Use Tailwind utility classes

### File Organization
```
src/
├── components/
│   ├── library/      # Feature components
│   └── ui/          # Reusable UI primitives
├── contexts/        # React contexts
├── hooks/          # Custom hooks
├── lib/            # Utilities, data, helpers
└── styles/         # Global styles
```

## Responsive Design Guidelines

### Mobile-First Approach
Always design for mobile first, then enhance for larger screens:
- Mobile: 320px - 639px
- Tablet: 640px - 1023px
- Desktop: 1024px+

### Breakpoint Usage
```typescript
// Tailwind breakpoints
sm: 640px   // Small tablets
md: 768px   // Tablets
lg: 1024px  // Laptops
xl: 1280px  // Desktops
2xl: 1536px // Large screens
```

### Spacing Scale
Use consistent spacing:
- `gap-2 sm:gap-3 md:gap-4` for grids
- `p-4 sm:p-6 md:p-8` for cards
- `mb-4 sm:mb-6 md:mb-8` for sections

### Typography Scale
```typescript
// Headings
h1: text-2xl sm:text-3xl md:text-4xl
h2: text-xl sm:text-2xl md:text-3xl
h3: text-lg sm:text-xl md:text-2xl

// Body text
body: text-sm sm:text-base
small: text-xs sm:text-sm
```

### Touch Targets
- Minimum touch target: 44x44px
- Use padding to expand clickable areas
- Example: `py-2.5 px-3` for buttons on mobile

### Horizontal Scrolling
For navigation on mobile:
```tsx
<div className="flex overflow-x-auto scrollbar-hide">
  <button className="shrink-0 whitespace-nowrap">...</button>
</div>
```

## Internationalization (i18n)

### Adding Translations
1. Add keys to `src/lib/translations.ts` in ALL languages:
   ```typescript
   en: { key: 'English text' },
   pa: { key: 'ਪੰਜਾਬੀ ਟੈਕਸਟ' },
   zh: { key: '中文文本' },
   ar: { key: 'النص العربي' },
   es: { key: 'Texto en español' }
   ```

2. Use in components:
   ```typescript
   const { t } = useTranslation()
   <p>{t('section.key')}</p>
   ```

### RTL Support
- Arabic requires RTL layout
- Use logical properties: `ms-4` instead of `ml-4`
- Test all features in both LTR and RTL

## Accessibility Requirements

### ARIA Labels
- Use semantic HTML elements
- Add aria-labels for icon-only buttons
- Maintain proper heading hierarchy

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Tab order should be logical
- Add focus indicators

### Color Contrast
- Maintain WCAG AA standards (4.5:1 for normal text)
- Use the design system colors which are pre-validated
- Test with axe DevTools or similar

## Design System

### Colors
```typescript
// Primary colors from theme
--primary: Brand color
--secondary: Secondary accent
--accent: Interactive elements
--sage: Nature/calm tone
--muted: Backgrounds
```

### Components
Use existing UI components from `src/components/ui/`:
- Button, Card, Badge, Dialog
- Tabs, Accordion, Dropdown
- Form components with Radix UI

### Custom Patterns
```tsx
// Card with gradient
<Card className="bg-gradient-to-br from-primary/10 to-accent/10">

// Icon with text
<div className="flex items-center gap-2">
  <Icon className="w-5 h-5" />
  <span>Text</span>
</div>

// Responsive grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
```

## Performance Best Practices

### Image Optimization
- Use appropriate image formats (WebP preferred)
- Implement lazy loading for images
- Provide responsive image sizes

### Code Splitting
- Use dynamic imports for large components
- Keep bundle sizes small
- Monitor with `npm run build`

### Memoization
```typescript
// For expensive computations
const result = useMemo(() => expensiveFunction(), [deps])

// For callbacks
const handler = useCallback(() => {}, [deps])
```

## Testing Guidelines

### Playwright Tests
- Test critical user journeys
- Test all breakpoints (mobile, tablet, desktop)
- Include accessibility tests
- Run tests: `npm test`

### Test Structure
```typescript
test.describe('Feature Name', () => {
  test('should do something on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    // Test code
  })
})
```

## Git Workflow

### Commit Messages
Follow conventional commits:
```
feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add tests
chore: maintenance tasks
```

### Branch Strategy
- `main`: Production-ready code
- Feature branches: `feat/feature-name`
- Bug fixes: `fix/bug-description`

## Common Patterns

### Loading States
```tsx
const [loading, setLoading] = useState(false)
if (loading) return <Skeleton />
```

### Error Handling
```tsx
try {
  // Operation
} catch (error) {
  console.error('Context:', error)
  // Show user-friendly message
}
```

### Data Fetching
```tsx
useEffect(() => {
  const fetchData = async () => {
    // Fetch logic
  }
  fetchData()
}, [dependencies])
```

## Don'ts

❌ Don't use inline styles - use Tailwind classes
❌ Don't hardcode text - use translations
❌ Don't ignore TypeScript errors
❌ Don't skip responsive breakpoints
❌ Don't commit console.logs
❌ Don't use deprecated APIs
❌ Don't break accessibility

## Do's

✅ Use semantic HTML
✅ Add proper TypeScript types
✅ Test on multiple screen sizes
✅ Follow mobile-first approach
✅ Maintain translation consistency
✅ Write self-documenting code
✅ Keep components focused and small
✅ Use existing UI components
✅ Consider RTL languages
✅ Test accessibility

## Resources

- [Radix UI Documentation](https://www.radix-ui.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [React Documentation](https://react.dev/)
- [Playwright Testing](https://playwright.dev/)

## Questions?

When uncertain:
1. Check existing components for patterns
2. Maintain consistency with current codebase
3. Prioritize user experience and accessibility
4. Test across all supported languages
5. Verify responsive behavior

## Special Considerations

### For Newcomers
- Use simple, clear language in the UI
- Provide helpful tooltips and explanations
- Consider cultural differences in iconography
- Make features discoverable

### For Libraries
- Respect user privacy
- Clearly indicate free services
- Provide multiple ways to accomplish tasks
- Support diverse literacy levels

---

Last Updated: December 28, 2025
