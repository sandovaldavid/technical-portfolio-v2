# LinkButton Component

## Description

A reusable link button component with consistent styling, hover states, and focus management. Shares the same visual appearance as the Button component but renders as an anchor tag for navigation.

## Location

`@shared/ui/link-button`

## Usage

```astro
---
import { LinkButton } from '@shared/ui';
---

<!-- Primary variant (default) -->
<LinkButton href="https://example.com"> Click me </LinkButton>

<!-- Secondary variant -->
<LinkButton href="/about" target="_self" variant="secondary"> Internal link </LinkButton>
```

## Props

| Prop      | Type                       | Default     | Description            |
| --------- | -------------------------- | ----------- | ---------------------- |
| `href`    | `string`                   | Required    | The URL to link to     |
| `target`  | `'_blank' \| '_self'`      | `'_blank'`  | Link target attribute  |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style variant   |
| `class`   | `string`                   | `undefined` | Additional CSS classes |

## Variants

- **primary**: Gray background with dark hover (brand style)
- **secondary**: Muted background with brand accent on hover

## Shared Styles

LinkButton and Button components share **the same CSS file** (`button.css`) using Tailwind's `@apply` directive. This ensures:

- Perfect visual consistency between both components
- Single source of truth for button styles
- Easy maintenance - one CSS change affects both components

## Features

- Automatic `noopener noreferrer` for external links
- Identical styling to Button component for consistency
- Hover and focus states with scale animation
- Dark mode support
- Accessible focus indicators
- Full keyboard navigation support
