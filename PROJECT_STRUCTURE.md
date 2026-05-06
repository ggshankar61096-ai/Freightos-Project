# Project Structure Guide

## Overview
This project is now organized following best practices for scalability and maintainability with a standard folder structure and TailwindCSS styling.

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── Character.tsx    # Character card component
│   ├── CharacterList.tsx # Grid of characters
│   ├── Filters.tsx      # Search and filter controls
│   ├── Loader.tsx       # Loading skeleton
│   └── Pagination.tsx   # Pagination controls
│
├── layouts/             # Layout wrapper components
│   └── MainLayout.tsx   # Main app layout
│
├── services/            # API and external services
│   └── api.ts          # Rick & Morty API client
│
├── hooks/               # Custom React hooks
│   ├── useDebounce.ts  # Debounce hook for input
│   └── index.ts        # Hook exports
│
├── constants/           # Application constants
│   ├── api.ts          # API configuration
│   ├── character.ts    # Character-related constants
│   └── index.ts        # Constants exports
│
├── utils/               # Utility functions
│   └── helpers.ts      # General helper functions
│
├── types/               # TypeScript type definitions
│   └── index.ts        # All types exported here
│
├── styles/              # Global and shared styles
│   └── (styles go in index.css)
│
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles with Tailwind
```

## Key Features

### 1. **TailwindCSS Integration**
- All styling uses Tailwind utilities
- Custom colors defined in `tailwind.config.js` for consistency
- Component layer for reusable style classes
- Dark color palette for professional appearance

### 2. **Path Aliases**
No more complex relative imports! Use these aliases:
```typescript
// ❌ Before
import { fetchCharacters } from "../../../services/api";

// ✅ After
import { fetchCharacters } from "@/services/api";
```

Available aliases:
- `@/` → `src/`
- `@/components` → `src/components`
- `@/services` → `src/services`
- `@/hooks` → `src/hooks`
- `@/constants` → `src/constants`
- `@/types` → `src/types`
- `@/utils` → `src/utils`

### 3. **Custom Hooks**
- `useDebounce` - Debounce user input for search optimization

### 4. **Constants & Configuration**
Centralized configuration for:
- API endpoints and URLs
- Character status values
- Query delay times

### 5. **Utility Functions**
Helper functions for common operations:
- Text formatting
- Status display
- Empty value checks

## Styling with TailwindCSS

### Core Colors
```javascript
// Dark theme
dark: {
  50-900: Grey scale from light to dark
}

// Status indicators
status: {
  alive: Green (#10b981)
  dead: Red (#ef4444)
  unknown: Purple (#8b5cf6)
}
```

### Component Classes
Predefined Tailwind component classes in `index.css`:
- `.card` - Character card styling
- `.status` - Status indicator styling
- `.filters` - Filter container
- `.search-box` - Search input styling
- `.pagination` - Pagination controls

## Expanding the Project

### Adding a New Feature
1. **Create components** in `/components`
2. **Add types** to `/types/index.ts`
3. **Create API service** in `/services`
4. **Add constants** to `/constants`
5. **Use custom hooks** from `/hooks`

### Adding a New Page
1. Create page component in `/components`
2. Create a layout wrapper if needed in `/layouts`
3. Update routing configuration
4. Use existing utilities and hooks

### Adding Global Styles
Edit `/src/index.css`:
```css
@layer components {
  .new-component {
    @apply flex items-center gap-4 p-4 rounded-lg;
  }
}
```

## Best Practices

### ✅ Do's
- Use path aliases for imports
- Define constants for magic values
- Create reusable components
- Add JSDoc comments to functions
- Use TypeScript interfaces
- Follow the established folder structure

### ❌ Don'ts
- Avoid relative imports (use path aliases)
- Don't hardcode values (use constants)
- Don't create single-use components
- Don't skip TypeScript types
- Don't mix styling approaches (stick to Tailwind)

## Development

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Lint Code
```bash
npm run lint
```

## Performance Optimizations

1. **Debounced Search** - `useDebounce` hook reduces API calls
2. **Responsive Grid** - Tailwind responsive classes handle mobile/tablet/desktop
3. **Skeleton Loading** - Loading states with animations improve UX
4. **Error Handling** - User-friendly error messages

## Next Steps for Expansion

1. Add authentication/user management
2. Implement location/episode details
3. Add favorites/bookmarks feature
4. Create admin dashboard
5. Add filtering by species/gender
6. Implement caching strategy
7. Add unit tests
8. Setup CI/CD pipeline

## Troubleshooting

### Path alias not working?
- Ensure vite.config.js has the alias configured
- Clear node_modules and reinstall

### Tailwind styles not applying?
- Check if `@tailwind` directives are in index.css
- Verify tailwind.config.js content paths are correct
- Rebuild the project

### Type errors?
- Ensure all types are exported from `/types/index.ts`
- Check import paths use correct file extensions

---

**Happy coding!** 🚀
