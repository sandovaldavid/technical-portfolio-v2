# Widgets Layer Instructions

## Purpose
Widgets are large, self-contained UI blocks that deliver complete use cases. They represent major page sections or complex UI components that combine multiple features and entities.

## What belongs here:
- Large page sections (Header, Footer, Hero, About, Projects)
- Complex UI blocks with multiple responsibilities
- Components that combine features and entities
- Self-contained functional blocks
- Major user interface sections

## Structure:
```
src/widgets/
├── header/
│   ├── ui/
│   │   └── Header.astro
│   ├── lib/
│   │   └── navigation.ts
│   └── index.ts
├── hero/
│   ├── ui/
│   │   └── Hero.astro
│   ├── model/
│   │   └── types.ts
│   └── index.ts
├── projects/
│   ├── ui/
│   │   ├── ProjectsSection.astro
│   │   └── ProjectGrid.astro
│   ├── model/
│   │   └── types.ts
│   ├── lib/
│   │   └── filtering.ts
│   └── index.ts
└── contact/
    ├── ui/
    │   └── ContactForm.astro
    ├── model/
    │   └── validation.ts
    ├── api/
    │   └── submit.ts
    └── index.ts
```

## Rules for this layer:
- ✅ Can import from: features, entities, shared
- ❌ Cannot import from: app, pages, other widgets
- ✅ Should combine features and entities into complete UI blocks
- ❌ Should not contain low-level utility functions

## Widget Examples:

### Header Widget
```astro
---
// src/widgets/header/ui/Header.astro
import { ThemeToggle } from '../../../features/theme-toggle';
import { LanguageSelect } from '../../../features/language-select';
import { Navigation } from '../lib/navigation';
import { Logo } from '../../../shared/ui';

interface Props {
  currentPath?: string;
}

const { currentPath } = Astro.props;
---

<header class="header">
  <div class="header__container">
    <Logo />
    <Navigation currentPath={currentPath} />
    <div class="header__actions">
      <LanguageSelect />
      <ThemeToggle />
    </div>
  </div>
</header>

<style>
  .header {
    /* Header-specific styles */
  }
</style>
```

### Projects Widget
```astro
---
// src/widgets/projects/ui/ProjectsSection.astro
import { ProjectCard } from '../../../entities/project';
import { ProjectFilter } from '../../../features/project-filter';
import type { Project } from '../../../entities/project';

interface Props {
  projects: Project[];
  showFilter?: boolean;
}

const { projects, showFilter = true } = Astro.props;
---

<section class="projects">
  <div class="projects__header">
    <h2>My Projects</h2>
    {showFilter && <ProjectFilter />}
  </div>
  
  <div class="projects__grid">
    {projects.map(project => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
</section>
```

### Public API Export
```typescript
// src/widgets/header/index.ts
export { default as Header } from './ui/Header.astro';
export type { HeaderProps } from './model/types';
```

## Widget Characteristics:
1. **Self-contained**: Can work independently on any page
2. **Feature-rich**: Combines multiple features and entities
3. **Reusable**: Can be used across different pages
4. **Complete**: Provides a complete user experience block
5. **Composed**: Built from smaller features and entities

## Examples of widgets for this portfolio:
- **Header**: Navigation, theme toggle, language selector
- **Hero**: Main introduction section with avatar and title
- **About**: Personal information and skills section
- **Experience**: Work history and timeline
- **Projects**: Project showcase with filtering
- **Skills**: Technical skills with categories
- **Contact**: Contact form and social links
- **Footer**: Site links and copyright information

## Best Practices:
1. Keep widgets focused on a single major use case
2. Make widgets configurable through props
3. Compose widgets from features and entities
4. Ensure widgets are responsive and accessible
5. Provide clear public APIs through index files
6. Handle internal state and logic within the widget
7. Use proper TypeScript interfaces for props

## What should NOT be widgets:
- Simple UI components (use shared/ui)
- Business logic only (use features or entities)
- Utility functions (use shared/lib)
- Single-purpose components (use features)

Remember: Widgets are the main building blocks that pages compose to create complete user experiences.