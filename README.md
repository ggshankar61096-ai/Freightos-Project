# Quick Start Guide

## 🚀 Getting Started

### 1. Start Development Server
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates optimized build in `/dist` folder.

### 3. Preview Production Build
```bash
npm run preview
```

### 4. Lint Your Code
```bash
npm run lint
```

## 📁 Project Structure Quick Reference

```
src/
├── components/        → Reusable UI components
├── layouts/           → Layout wrappers (MainLayout)
├── services/          → API client functions
├── hooks/             → Custom React hooks (useDebounce)
├── constants/         → App configuration
├── utils/             → Helper functions
├── types/             → TypeScript interfaces
├── App.tsx            → Main application component
├── main.tsx           → App entry point
└── index.css          → Global styles + Tailwind
```

## 🎨 Using Tailwind CSS

No need to write CSS! Use Tailwind classes directly:

```tsx
// Instead of custom CSS
<div className="flex items-center gap-4 p-6 bg-gray-800 rounded-lg">
  <h2 className="text-lg font-bold text-white">Title</h2>
  <p className="text-gray-300 text-sm">Description</p>
</div>
```

### Common Utilities
- **Spacing**: `p-4`, `m-2`, `gap-3`
- **Colors**: `bg-white`, `text-gray-700`, `border-red-500`
- **Layout**: `flex`, `grid`, `gap-4`
- **Sizing**: `w-full`, `h-12`, `min-h-[180px]`
- **Responsive**: `md:grid-cols-2`, `lg:grid-cols-3`
- **Hover/States**: `hover:bg-blue-500`, `disabled:opacity-50`

## 🔗 Path Aliases

Use these shortcuts for imports:

```typescript
// ❌ Old way
import { api } from "../../../services/api";

// ✅ New way
import { api } from "@/services/api";
```

### Available Aliases
- `@/` → `src/`
- `@/components` → `src/components`
- `@/services` → `src/services`
- `@/hooks` → `src/hooks`
- `@/constants` → `src/constants`
- `@/types` → `src/types`
- `@/utils` → `src/utils`
- `@/styles` → `src/styles`

## 🛠️ Adding Features

### Create a New Component
```typescript
// src/components/NewComponent.tsx
import React from "react";

/**
 * NewComponent - Brief description
 * @param props - Component props
 */
export const NewComponent: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="flex items-center gap-4 p-4">
      {/* Your JSX */}
    </div>
  );
};

export default NewComponent;
```

### Use Existing Services
```typescript
import { fetchCharacters } from "@/services/api";

const data = await fetchCharacters({
  page: 1,
  name: "",
  status: "alive",
});
```

### Use Custom Hooks
```typescript
import { useDebounce } from "@/hooks";

function SearchComponent() {
  const [input, setInput] = useState("");
  const debouncedValue = useDebounce(input, 500);
  
  // Use debouncedValue
}
```

### Access Constants
```typescript
import { QUERY_DELAYS, CHARACTER_STATUS } from "@/constants";

setTimeout(() => {
  // ...
}, QUERY_DELAYS.SEARCH_DEBOUNCE);
```

## 📚 Documentation Files

- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Detailed structure guide

## ✅ Best Practices

### DO ✅
- Use path aliases for imports
- Define constants instead of magic values
- Create reusable components
- Add JSDoc comments
- Use TypeScript types
- Follow folder structure
- Use Tailwind utilities

### DON'T ❌
- Mix relative imports with aliases
- Hardcode configuration values
- Create single-use components
- Skip TypeScript types
- Create custom CSS (use Tailwind)
- Deviate from folder structure

## 🐛 Troubleshooting

### Build fails with CSS errors?
```bash
# Clear cache and reinstall
rm -r node_modules
npm install
npm run build
```

### Dev server not starting?
```bash
# Check if port 5173 is in use
# Try explicitly setting port
npm run dev -- --port 3000
```

### TypeScript errors?
```bash
# Make sure types are exported in /types/index.ts
export interface YourType { ... }
```

### Path aliases not working?
```bash
# Verify in vite.config.js:
# - Config has correct paths
# - Spelling matches import statements
# - File extensions are correct
```

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^19.2",
    "react-dom": "^19.2",
    "axios": "^1.16"
  },
  "devDependencies": {
    "vite": "^8.0",
    "tailwindcss": "^4.2",
    "@tailwindcss/postcss": "^4.2",
    "typescript": "^6.0",
    "eslint": "^10.2"
  }
}
```

## 🔄 Next Steps

1. **Development**: `npm run dev`
2. **Learn Tailwind**: Visit [tailwindcss.com](https://tailwindcss.com)
3. **Add Features**: Follow the patterns in existing components
4. **Build**: `npm run build` when ready for production

## 📞 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Check code quality

# Package Management
npm install          # Install dependencies
npm update           # Update packages
npm list             # List installed packages
```

---

**Your project is ready to grow!** 🎉

Start building amazing features with the clean, organized structure and
powerful Tailwind CSS styling system.
