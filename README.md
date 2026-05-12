# Quick Start Guide

## Getting Started

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

## Project Structure Quick Reference

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



##  Troubleshooting

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

## Dependencies

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


## Common Commands

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
