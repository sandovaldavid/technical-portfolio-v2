# Copilot Instructions - Technical Portfolio V2

## Project Overview

This is a personal portfolio website built with Astro, TypeScript, and Tailwind CSS. The project showcases development skills, experiences, and projects of Juan David Sandoval Salvador. The site is designed to be modern, clean, and responsive with both light and dark mode support.

**Live site**: https://devsandoval.me

## Architecture Guidelines - Feature-Sliced Design (FSD)

This project follows **Feature-Sliced Design (FSD)** architectural methodology for better code organization, maintainability, and scalability. FSD provides a standardized approach to structuring frontend applications.

### FSD Layer Structure

The project should be organized according to FSD layers (from top to bottom):

1. **App** (`src/app`) - Application initialization, routing, and global providers
2. **Pages** (`src/pages`) - Complete pages and route handlers (Astro pages)
3. **Widgets** (`src/widgets`) - Large UI blocks that compose features and entities
4. **Features** (`src/features`) - Reusable business features and user interactions
5. **Entities** (`src/entities`) - Business entities and domain models
6. **Shared** (`src/shared`) - Reusable utilities detached from business logic

### FSD Rules to Follow

- **Import Rule**: Layers can only import from layers strictly below them
- **Layer Independence**: Slices within the same layer cannot depend on each other
- **Public API**: Each slice must expose a clean public API through index files
- **Cross-Entity References**: Use @x notation (e.g., `entities/song/@x/artist`) when necessary

## Technology Stack

- **Framework**: Astro 5.14.1 (Static Site Generator)
- **Styling**: Tailwind CSS 4.1.13 with @tailwindcss/vite
- **Language**: TypeScript 5.7.2
- **Fonts**: Onest Variable Font (@fontsource-variable/onest)
- **Internationalization**: astro-i18n
- **SEO**: astro-robots-txt
- **Code Formatting**: Prettier with prettier-plugin-astro
- **Runtime**: Bun (package manager and runtime)

## Project Structure

```
src/
├── app/           # App layer - initialization and routing
│   ├── providers/     # Global providers (theme, i18n)
│   ├── styles/        # Global application styles
│   ├── routes/        # Route definitions (framework-specific)
│   └── layouts/       # Application layouts
├── pages/         # Pages layer - Astro pages and route handlers
├── widgets/       # Widgets layer - large UI compositions
├── features/      # Features layer - business features
├── entities/      # Entities layer - business entities
├── shared/        # Shared layer - reusable utilities
│   ├── ui/            # Design system components
│   ├── lib/           # Utility functions
│   ├── config/        # Configuration files
│   └── assets/        # Static assets
├── components/    # LEGACY: Current components (migrating to FSD)
│   ├── Header.astro    # → widgets/header
│   ├── Hero.astro      # → widgets/hero
│   ├── Projects.astro  # → widgets/projects
│   └── ...
├── layouts/       # Astro layouts (legacy, move to app/layouts)
├── styles/        # Global styles (legacy, move to app/styles)
├── i18n/          # Internationalization (move to app or shared)
└── assets/        # Icons and assets (move to shared/assets)
```

## Development Commands

**Always use Bun as the package manager and runtime:**

- `bun install` - Install dependencies
- `bun run dev` - Start development server at localhost:4321
- `bun run build` - Build for production (includes type checking)
- `bun run preview` - Preview production build locally
- `bun run format` - Format code with Prettier
- `bun run format:check` - Check code formatting

## Build and Deployment

1. **Development**: Run `bun run dev` to start the development server
2. **Type Checking**: Always run `astro check` before building
3. **Build Process**: `bun run build` runs type checking and builds the project
4. **Preview**: Use `bun run preview` to test the production build locally
5. **Deployment**: The site deploys automatically to GitHub Pages via GitHub Actions

## Code Standards and Conventions

### TypeScript
- Use strict TypeScript configuration
- Always type function parameters and return types
- Use interface over type for object shapes
- Prefer `const` over `let` where possible

### Astro Components
- Use `.astro` extension for Astro components
- Place component logic in the frontmatter section
- Use TypeScript in component scripts
- Follow Astro's component structure: frontmatter, template, style

### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Implement both light and dark mode support
- Use CSS custom properties for theme switching
- Keep styles scoped to components when possible

### File Naming Conventions
- Use PascalCase for component files (e.g., `Hero.astro`, `ThemeToggle.astro`)
- Use kebab-case for page files (e.g., `about-me.astro`)
- Use camelCase for utility functions and variables
- Use UPPER_SNAKE_CASE for constants

### Code Organization
- Group related functionality into FSD slices
- Keep components small and focused
- Extract reusable logic into shared utilities
- Use meaningful names for variables and functions
- Add JSDoc comments for complex functions

## UI/UX Guidelines

- **Design System**: Modern, clean, and professional
- **Color Scheme**: Support both light and dark modes
- **Typography**: Use Onest variable font for consistency
- **Responsive**: Mobile-first approach, works on all devices
- **Accessibility**: Follow WCAG guidelines, proper semantic HTML
- **Performance**: Optimize images, lazy loading, minimal JavaScript

## Internationalization (i18n)

- Use astro-i18n for internationalization support
- Keep translation keys organized and descriptive
- Support multiple languages as needed
- Implement language switching functionality

## Performance Optimization

- Use Astro's static site generation capabilities
- Optimize images with proper formats and sizes
- Minimize JavaScript bundle size
- Implement lazy loading for non-critical content
- Use Astro's built-in optimizations

## Testing and Quality Assurance

- Run `astro check` for TypeScript errors
- Use `bun run format:check` to verify code formatting
- Test responsive design on different screen sizes
- Verify both light and dark mode functionality
- Check accessibility with screen readers

## Current Architecture Patterns

### Path Aliases
Use configured path aliases for clean imports:
```typescript
import Header from '@/components/Header.astro';        // Legacy
import { Button } from '@/shared/ui';                  // FSD target
import { useTranslations } from '@/i18n/utils';        // Current
```

### Theme System
Theme switching uses CSS custom properties with localStorage persistence:
```astro
---
// Theme toggle with system preference detection
<script is:inline>
  document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
</script>
```

### Internationalization
Custom translation system with language detection:
```astro
---
// Usage in components
import { getLangFromUrl, useTranslations } from '../i18n/utils';
const lang = getLangFromUrl(new URL(Astro.request.url));
const t = useTranslations(lang);
---

<h1>{t('hero.title')}</h1>
```

### Component Props Pattern
Strongly typed component interfaces:
```astro
---
// Example from existing components
interface Props {
  title: string;
  description: string;
  img_preview: string;
}
const { description, title, img_preview } = Astro.props;
---

```

### Color System
Custom OKLCH-based color system with semantic naming:
```css
/* From src/styles/colors.css */
--color-brand: oklch(62.005% 0.18129 259.39);
--color-surface: oklch(100% 0 0); /* light-dark() for theme switching */
```

## Migration to FSD Notes

**Current State**: The project is in the process of migrating to FSD architecture from a traditional component-based structure.

**Migration Strategy**:
1. Start by establishing App layer for routing and global concerns
2. Move existing components to appropriate FSD layers based on their purpose
3. Create proper Public APIs for all slices using index.ts files
4. Gradually resolve import violations and enforce layer rules
5. Extract business logic into Features and Entities layers
6. Compose Widgets from Features and Entities

**Key Migration Principles**:
- **Layer Import Rule**: Higher layers can only import from lower layers
- **Slice Independence**: Components at the same layer cannot import from each other
- **Public API Pattern**: All imports must go through slice index files
- **Composition over Implementation**: Widgets compose, Features implement, Entities model

**Legacy Components**: Current components in `src/components/` should be moved to:
- **Shared/UI**: Simple, reusable UI components without business logic
- **Features**: Interactive components with business logic and user value
- **Widgets**: Large sections that compose multiple features/entities
- **Entities**: Business-focused components tied to domain models

## Important Notes

- Always run type checking before committing code
- Follow FSD import rules strictly - no cross-layer violations
- Use the Public API pattern - all imports go through index files
- Keep the mobile-first, responsive design approach
- Maintain both light and dark mode support
- Use semantic HTML and follow accessibility best practices
- Test changes on multiple screen sizes and browsers
- Keep the design modern, clean, and professional
- Prioritize performance and loading speed
- Document architectural decisions and maintain FSD compliance