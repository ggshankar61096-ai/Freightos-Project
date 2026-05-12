# 🚀 Interview Guide - Rick & Morty Character Browser App

## 📋 Quick Summary
**Project Name:** Freightos Project / Rick & Morty Character Browser  
**Type:** Full Stack React Application  
**Purpose:** Display and filter characters from the Rick & Morty API with search, filtering, and pagination  
**Status:** Production-Ready Web App  

---

## 🎯 Project Overview

### What Does This App Do?
This is a **React-based character browser application** that:
- Fetches character data from the **Rick & Morty API**
- Displays characters in a grid layout with images and basic info
- Allows users to **search by name**, **filter by status** (Alive/Dead/Unknown)
- Implements **pagination** to navigate through 800+ characters
- Shows **detailed character information** on a separate detail page
- Uses **debounced search** to optimize API calls
- Provides a **dark theme UI** with Tailwind CSS

### Real-World Application
In a real scenario, this pattern can be used for:
- Product browsing (e-commerce)
- Employee directories
- Customer management systems
- Content discovery platforms
- Any paginated list view with filters

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.5** - UI library for building components
- **TypeScript 6.0.3** - Adds type safety and better IDE support
- **React Router 7.15.0** - Client-side routing for navigation

### Build & Development
- **Vite 8.0.10** - Lightning-fast build tool and dev server
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes

### Styling
- **Tailwind CSS 4.2.4** - Utility-first CSS framework
- **Custom CSS** - Global styles in `index.css`

### HTTP Client
- **Axios 1.16.0** - Promise-based HTTP library for API calls

### Linting & Code Quality
- **ESLint 10.2.1** - Code quality and style enforcement
- **ESLint React Plugins** - React-specific linting rules

### External API
- **Rick & Morty API** (https://rickandmortyapi.com) - Free public API with 800+ characters

---

## 📁 Detailed Folder Structure

```
📦 src/
├── 📄 App.tsx                 # Main app component with routing
├── 📄 main.tsx               # Entry point, renders React app
├── 📄 index.css              # Global styles + Tailwind imports
│
├── 📂 components/            # Reusable UI components
│   ├── 📄 Character.tsx      # Single character card
│   ├── 📄 CharacterList.tsx  # Grid of character cards
│   ├── 📄 Filters.tsx        # Search & filter controls
│   ├── 📄 Pagination.tsx     # Page navigation
│   ├── 📄 Loader.tsx         # Loading skeleton
│   ├── 📄 ErrorAlert.tsx     # Error message display
│   └── 📄 EmptyState.tsx     # No results message
│
├── 📂 pages/                 # Page components (full screens)
│   ├── 📄 HomePage.tsx       # Main character list page
│   └── 📄 CharacterDetail.tsx # Single character detail page
│
├── 📂 layouts/               # Layout wrapper components
│   └── 📄 MainLayout.tsx     # Shared layout structure
│
├── 📂 services/              # API calls & external services
│   └── 📄 api.ts             # Axios API client & functions
│
├── 📂 hooks/                 # Custom React hooks
│   ├── 📄 useDebounce.ts     # Debounce hook for search
│   └── 📄 index.ts           # Hook exports
│
├── 📂 constants/             # Configuration & constants
│   ├── 📄 api.ts             # API URLs and endpoints
│   ├── 📄 character.ts       # Character-related constants
│   └── 📄 index.ts           # Main exports
│
├── 📂 types/                 # TypeScript interfaces
│   └── 📄 index.ts           # All type definitions
│
└── 📂 utils/                 # Helper functions
    └── 📄 helpers.ts         # Utility functions
```

---

## 🏗️ Component Architecture

### Component Hierarchy
```
App (with Router)
  ├── HomePage (/)
  │   └── MainLayout
  │       ├── Filters
  │       ├── ErrorAlert
  │       ├── CharacterList
  │       │   └── Character (multiple)
  │       ├── Loader
  │       └── Pagination
  │
  └── CharacterDetail (/character/:id)
      └── MainLayout
          └── [Character Details]
```

### Component Descriptions

#### **App.tsx** - Main App Router
- Sets up React Router with two routes
- Route `/` → HomePage
- Route `/character/:id` → CharacterDetail
- **Interview Point:** Explain how routing works, when you'd use React Router

#### **HomePage.tsx** - Main Page Component
- Manages state: characters, page, filters, loading, error
- Calls `fetchCharacters()` whenever page/name/status changes
- Renders Filters, CharacterList, and Pagination
- Handles loading and error states
- **Interview Point:** Discuss state management, useEffect dependencies, data fetching patterns

#### **Character.tsx** - Character Card
- Displays individual character in a card format
- Shows: image, name, status (with color indicator), species, location
- Clickable link to detail page
- **Interview Point:** Explain component reusability, how to pass props

#### **CharacterList.tsx** - Grid Container
- Maps characters array to Character components
- Handles layout using Tailwind CSS grid
- **Interview Point:** Explain why you'd extract this into separate component

#### **Filters.tsx** - Search & Filter Controls
- Search input for character name (with debounce)
- Dropdown filter for character status
- Updates parent state through setters
- **Interview Point:** Explain controlled components, form handling, debouncing

#### **Pagination.tsx** - Page Navigation
- Shows current page and total pages
- Previous/Next buttons to navigate
- Disabled when at first/last page
- **Interview Point:** Discuss pagination logic, conditional rendering

#### **Loader.tsx** - Loading State
- Shows skeleton/placeholder while data loads
- Improves UX with loading feedback
- **Interview Point:** Discuss loading states and shimmer effects

#### **ErrorAlert.tsx** - Error Display
- Shows error message in red alert
- Has close button to dismiss
- **Interview Point:** Explain error handling and user feedback

#### **EmptyState.tsx** - No Results
- Displays when no characters match filters
- Provides helpful message
- **Interview Point:** Discuss UX and edge cases

#### **MainLayout.tsx** - Layout Wrapper
- Wraps all pages with consistent layout
- Contains header, nav, or common structure
- **Interview Point:** Explain layout components and why they're useful

#### **CharacterDetail.tsx** - Detail Page
- Shows full information for single character
- Fetches character on component mount
- Has loading and error states
- Back button to return to list
- **Interview Point:** Discuss URL parameters, useParams hook, routing

---

## 🔌 Services & API Layer

### api.ts - API Client

#### Key Functions:

**1. fetchCharacters(params)** - Get paginated character list
```typescript
// Query parameters:
{
  page: 1,          // Which page
  name: "rick",     // Filter by name (optional)
  status: "Alive"   // Filter by status (optional)
}
// Returns: Character[], pagination info
```

**2. fetchCharacterById(id)** - Get single character
```typescript
// Used on detail page
// Returns: Single Character object
```

**3. fetchCharactersByIds(ids)** - Get multiple specific characters
```typescript
// Not used yet but available for future use
// Returns: Array of Character objects
```

#### API Configuration
- **Base URL:** https://rickandmortyapi.com/api
- **Endpoint:** /character
- **Timeout:** 10 seconds
- **Error Handling:** Try/catch with console logging

**Interview Point:** Explain API integration, axios interceptors, error handling strategies

---

## 📊 TypeScript Types

### Character Interface
```typescript
interface Character {
  id: number;              // Unique identifier
  name: string;            // Character name
  status: string;          // "Alive", "Dead", or "Unknown"
  species: string;         // "Human", "Alien", etc.
  type?: string;           // Sub-type (optional)
  gender?: string;         // "Male", "Female", etc. (optional)
  image: string;           // Image URL
  origin: {
    name: string;          // Where from (e.g., "Earth C-137")
    url?: string;          // Link to location (optional)
  };
  location: {
    name: string;          // Last known location
    url?: string;          // Link to location (optional)
  };
  url?: string;            // API endpoint URL (optional)
  created?: string;        // Timestamp (optional)
}
```

### PaginationInfo Interface
```typescript
interface PaginationInfo {
  count: number;     // Total characters in API (e.g., 826)
  pages: number;     // Total pages
  next: string|null; // URL to next page
  prev: string|null; // URL to previous page
}
```

### ApiResponse Interface
```typescript
interface ApiResponse {
  info: PaginationInfo;  // Pagination metadata
  results: Character[];  // Array of characters
}
```

### FetchParams Interface
```typescript
interface FetchParams {
  page: number;    // Page number (1-indexed)
  name: string;    // Search query
  status: string;  // Status filter
}
```

**Interview Point:** Explain why TypeScript is important, benefits of interfaces, type safety

---

## 🎣 Custom Hooks

### useDebounce Hook
```typescript
export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debouncedValue;
};
```

**Purpose:** 
- Delays state updates by specified time (500ms default)
- Prevents too many API calls while user types
- Only triggers API call after user stops typing

**Usage in App:**
```typescript
const debouncedName = useDebounce(name, 500); // Wait 500ms after typing stops
// Then use debouncedName in API call
```

**Interview Point:** Explain why debouncing matters, performance optimization, custom hooks

---

## ⚙️ Constants & Configuration

### api.ts Constants
```typescript
const API_BASE_URL = "https://rickandmortyapi.com/api";
const API_ENDPOINTS = {
  CHARACTERS: `${API_BASE_URL}/character`
};
const QUERY_DELAYS = {
  SEARCH_DEBOUNCE: 500  // milliseconds
};
```

**Interview Point:** Discuss centralization of config, environment variables, why constants matter

---

## 🎨 Styling with Tailwind CSS

### Tailwind Features Used
- **Utility Classes:** `flex`, `items-center`, `gap-4`, `p-6`, etc.
- **Responsive Design:** `grid`, `grid-cols-1`, `md:grid-cols-2`, etc.
- **Dark Theme:** `dark:bg-gray-800`, `bg-gray-700`
- **Status Colors:** `bg-status-alive` (green), `bg-status-dead` (red)
- **Hover Effects:** `hover:shadow-2xl`, `hover:scale-105`
- **Animations:** `animate-pulse` for loading skeletons

### Custom Component Classes (in tailwind.config.js)
```css
@layer components {
  .card { /* Card styling */ }
  .card-content { /* Card content spacing */ }
  .status { /* Status indicator styling */ }
  .label { /* Label text styling */ }
}
```

**Interview Point:** Explain benefits of Tailwind CSS vs traditional CSS, utility-first approach

---

## 🔄 Data Flow Explanation

### Page Load Flow (HomePage)
```
1. User lands on HomePage
   ↓
2. useEffect hook triggers (dependencies: [page, name, status])
   ↓
3. loadCharacters() function called
   ↓
4. Loading state set to true (shows Loader component)
   ↓
5. API call: fetchCharacters({ page, name, status })
   ↓
6. API Response received
   ↓
7. State updated: setCharacters(results), setInfo(pagination)
   ↓
8. Loading state set to false (shows CharacterList & Pagination)
```

### Search Flow
```
1. User types in search input → name state updates
   ↓
2. useDebounce hook waits 500ms
   ↓
3. If user stopped typing, debouncedName updates
   ↓
4. useEffect dependency triggers
   ↓
5. API call with new search query
   ↓
6. Results update on screen
```

### Filter Flow
```
1. User selects status dropdown → status state updates
   ↓
2. useEffect dependency triggers immediately (no debounce)
   ↓
3. Page reset to 1
   ↓
4. API call with new filter
   ↓
5. Results update, pagination reset
```

### Detail Page Flow
```
1. User clicks character card
   ↓
2. React Router navigates to /character/:id
   ↓
3. CharacterDetail component mounts
   ↓
4. useParams extracts id from URL
   ↓
5. useEffect runs, calls fetchCharacterById(id)
   ↓
6. Detailed character info displayed
```

**Interview Point:** Explain component lifecycle, state management flow, how hooks manage side effects

---

## 🚀 How to Run the App

### Development Mode
```bash
npm run dev
# Opens http://localhost:5173
# Hot reloading enabled
# Instant updates while developing
```

### Build for Production
```bash
npm run build
# Creates optimized /dist folder
# Minified and bundled code
# Ready to deploy
```

### Preview Production Build
```bash
npm run preview
# Test production build locally
# Simulates real deployment
```

### Lint Code
```bash
npm run lint
# Checks for code style issues
# Enforces ESLint rules
```

---

## 🎯 Key Features to Explain

### 1. **Search with Debounce**
- Why: Prevents excessive API calls
- How: Wait 500ms after user stops typing
- Benefit: Better performance, fewer API requests

### 2. **Pagination**
- Why: Can't load all 800+ characters at once
- How: API returns page-by-page data
- Benefit: Faster initial load, infinite scrolling capability

### 3. **Status Filtering**
- Why: Users want to find specific types of characters
- How: Query parameter sent to API
- Benefit: Better user experience, faster searching

### 4. **Error Handling**
- Why: API might fail or network might be down
- How: Try/catch blocks, error state management
- Benefit: Users see meaningful error messages

### 5. **Loading States**
- Why: Don't show blank screen while loading
- How: Loader component with skeleton
- Benefit: Better UX, clearer app state

### 6. **Type Safety with TypeScript**
- Why: Prevent runtime errors
- How: Interfaces define data structure
- Benefit: Better IDE support, fewer bugs

### 7. **Component Reusability**
- Why: DRY principle (Don't Repeat Yourself)
- How: Extract common UI patterns
- Benefit: Easier maintenance, consistent styling

### 8. **Path Aliases**
- Why: Cleaner imports, easier refactoring
- How: `@/` aliases map to `src/`
- Benefit: No more `../../../` relative paths

---

## 💡 Interview Talking Points

### General Questions

**Q: Tell us about this project**
A: "This is a React app that displays characters from Rick & Morty API. Users can search, filter by status, and navigate through paginated results. Built with TypeScript for type safety, Tailwind CSS for styling, and React Router for navigation. The app demonstrates modern React patterns like hooks, state management, and API integration."

**Q: What problems does this solve?**
A: "It demonstrates practical web development: handling large datasets with pagination, implementing search with optimization (debouncing), managing complex UI state, error handling, and loading states. These are real problems in production apps."

**Q: Why use React here?**
A: "React provides component reusability, declarative UI, and efficient re-rendering. Makes code maintainable as the app grows. Virtual DOM optimizes performance."

**Q: Explain the folder structure**
A: "Organized by feature/function: components (UI), pages (full screens), services (API), hooks (reusable logic), constants (config), types (TypeScript), utils (helpers). This structure scales well and keeps code organized."

### Technical Questions

**Q: How does pagination work?**
A: "The API returns 20 characters per page with metadata (total pages, next/prev URLs). When user clicks next/previous, the page state updates, triggering useEffect, which fetches new page data."

**Q: Why debounce the search?**
A: "Without debounce, API call fires on every keystroke (e.g., 'rick' = 4 API calls). With 500ms debounce, we wait after user stops typing, reducing API calls from hundreds to just 1-2 per search session."

**Q: How do you handle errors?**
A: "Try/catch in api.ts catches errors, logs them, and re-throws. In components, we catch and set error state. Display error message to user with option to close/retry."

**Q: What's the flow when user searches?**
A: "User types → name state updates → useDebounce waits 500ms → debouncedName changes → useEffect runs → API call → results update → screen re-renders."

**Q: Why use TypeScript?**
A: "Catches type errors at compile time, not runtime. Better IDE autocomplete. Self-documenting interfaces. Reduces bugs significantly."

**Q: How does routing work?**
A: "React Router wraps App with <Router>. <Routes> define paths. `/` shows HomePage, `/character/:id` shows detail. useParams() extracts URL parameters."

**Q: Explain the custom hook**
A: "useDebounce delays value updates using setTimeout. Useful for search, resize listeners, etc. Returns debounced value. Takes generic type parameter for flexibility."

### Behavioral Questions

**Q: Describe a challenging part**
A: "Handling multiple dependent state updates (page, search, filter) without causing excessive re-renders. Solved with useEffect dependency arrays and debouncing."

**Q: How would you add a feature?**
A: "Example: Add favoriting. I'd add favorites state (array of IDs), persist to localStorage, add heart icon to cards, update filtering. Follow existing patterns."

**Q: How would you improve performance?**
A: "Implement pagination instead of infinite scroll, use React.memo() for components, add image lazy loading, cache API responses, code splitting with React.lazy()."

**Q: Describe your development process**
A: "Start with understanding requirements, design component structure, create reusable components, handle API integration, add error handling, test thoroughly, optimize."

---

## 🔍 Code Examples to Know

### Example 1: Controlled Component (Search Input)
```typescript
function Filters({ setName }) {
  const [inputValue, setInputValue] = useState("");
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setName(e.target.value);  // Update parent state
  };
  
  return <input value={inputValue} onChange={handleChange} />;
}
```

### Example 2: useEffect Dependencies
```typescript
useEffect(() => {
  loadCharacters();  // Runs when page, name, or status changes
}, [page, name, status]);

// Without dependency array: runs every render
// With empty array []: runs once on mount
// With values: runs when values change
```

### Example 3: Conditional Rendering
```typescript
{loading ? (
  <Loader />
) : characters.length > 0 ? (
  <CharacterList data={characters} />
) : (
  <EmptyState message="No results" />
)}
```

### Example 4: Error Handling
```typescript
try {
  const data = await fetchCharacters({ page, name, status });
  setCharacters(data.results);
} catch (err) {
  const message = err instanceof Error ? err.message : "Failed";
  setError(message);
  setCharacters([]);
}
```

---

## 📚 Important Concepts to Explain

### React Concepts
- **Components:** Reusable UI pieces
- **Props:** Data passed to components
- **State:** Component's internal data that can change
- **Hooks:** Functions to use React features in functional components
- **useEffect:** Side effects management (data fetching, subscriptions)
- **useState:** State management
- **Conditional Rendering:** Show/hide UI based on conditions

### State Management Flow
- User action → setState → component re-renders → show new data

### API Integration
- Call API when component mounts or data changes
- Handle loading/error/success states
- Display results or error message

### Performance Optimization
- Debouncing for input
- Pagination for large datasets
- Component memoization for expensive renders

### CSS & Styling
- Tailwind utility classes for rapid development
- Dark theme for professional appearance
- Responsive design with Tailwind breakpoints

---

## 🎓 Summary - What Makes This Project Good

✅ **Clean Architecture** - Organized folder structure  
✅ **Type Safety** - TypeScript interfaces  
✅ **Performance Optimization** - Debouncing, pagination  
✅ **Error Handling** - Try/catch, error states  
✅ **UX Considerations** - Loading states, empty states  
✅ **Reusable Components** - DRY principle  
✅ **API Integration** - Proper service layer  
✅ **Scalable** - Easy to add features  
✅ **Modern Stack** - React, TypeScript, Vite, Tailwind  
✅ **Best Practices** - Hooks, functional components, separation of concerns  

---

## 🎬 Final Interview Tips

1. **Know the data flow** - From API to UI
2. **Explain trade-offs** - Why these technologies?
3. **Think about edge cases** - What if API fails? No results?
4. **Show ownership** - "I would..." not just "it does..."
5. **Connect to real-world** - How would this apply to production?
6. **Ask questions** - Shows engagement
7. **Be honest** - "I don't know but I'd research..." is okay
8. **Practice explaining** - Know your code inside-out

---

**Good luck with your interview! 🚀**
