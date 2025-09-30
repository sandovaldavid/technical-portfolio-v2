# App Layer Instructions

## Purpose
The App layer is the highest level in FSD architecture. It contains global application setup, configuration, and initialization logic.

## What belongs here:
- Global providers and context
- Root-level application configuration
- Global styles and themes
- Application initialization logic
- Routing configuration (if centralized)
- Error boundaries
- App-wide state management setup

## Structure:
```
src/app/
├── providers/     # Global providers, contexts
├── styles/        # Global CSS, theme variables
├── config/        # App configuration
└── index.ts       # App entry point and setup
```

## Rules for this layer:
- ✅ Can import from: pages, widgets, features, entities, shared
- ❌ Cannot import from: other app slices
- ✅ Should contain global, app-wide functionality only
- ❌ Should not contain business logic or UI components

## Examples of components that belong here:
- Theme provider
- I18n provider
- Global error boundary
- App routing setup
- Global CSS variables
- Analytics setup

## Code examples:

### App Provider Setup
```typescript
// src/app/providers/ThemeProvider.astro
---
// Global theme provider logic
---
<script>
  // Theme switching logic
</script>
```

### Global Configuration
```typescript
// src/app/config/constants.ts
export const APP_CONFIG = {
  SITE_URL: 'https://devsandoval.me',
  SITE_NAME: 'David Sandoval Portfolio',
  DEFAULT_LOCALE: 'en',
  SUPPORTED_LOCALES: ['en', 'es']
} as const;
```

Remember: Keep this layer minimal and focused on app-wide concerns only.