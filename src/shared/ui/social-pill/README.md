# SocialPill Component

## Description

A reusable pill-shaped button component designed for social media links and external actions. Part of the Shared UI layer in the FSD architecture.

## Location

`src/shared/ui/social-pill/social-pill.astro`

## Props

| Prop     | Type                  | Default    | Required | Description                                 |
| -------- | --------------------- | ---------- | -------- | ------------------------------------------- |
| `href`   | `string`              | -          | ✅       | URL destination for the link                |
| `target` | `'_blank' \| '_self'` | `'_blank'` | ❌       | Specifies where to open the linked document |
| `class`  | `string`              | -          | ❌       | Additional CSS classes to apply             |

## Features

- ✅ **Responsive**: Adapts padding and font size on mobile/desktop
- ✅ **Accessible**: Includes proper ARIA attributes and focus states
- ✅ **Theme-aware**: Works with both light and dark modes
- ✅ **Interactive**: Smooth hover and focus effects
- ✅ **Secure**: Automatically adds `rel="noopener noreferrer"` for external links
- ✅ **Flexible**: Accepts slotted content (icons + text)

## Usage

### Basic Example

```astro
---
import { SocialPill } from '@/shared/ui';
import MailIcon from '@/assets/icons/Mail.astro';
---

<SocialPill href="mailto:contact@example.com">
	<MailIcon class="size-4" />
	<span>Email</span>
</SocialPill>
```

### With Custom Target

```astro
<SocialPill href="/about" target="_self">
	<span>About Me</span>
</SocialPill>
```

### With Additional Classes

```astro
<SocialPill href="https://github.com/username" class="font-bold">
	<GitHubIcon class="size-5" />
	<span>GitHub</span>
</SocialPill>
```

## Styling

The component uses Tailwind CSS utility classes with the following design tokens:

- **Background**: `bg-white/5` (semi-transparent)
- **Border**: `border-white/10` with rounded-full shape
- **Hover**: Enhanced background `bg-white/10` and border `border-white/20`
- **Focus**: Ring effect with `ring-white/50`
- **Transition**: Smooth 200ms duration

## Design Patterns

- Uses `class:list` for better class composition
- Follows BEM-inspired utility pattern
- Implements progressive enhancement
- Mobile-first responsive design

## Accessibility

- ✅ Semantic `<a>` element with proper `role="link"`
- ✅ Focus-visible ring for keyboard navigation
- ✅ Sufficient color contrast
- ✅ Touch-friendly target sizes on mobile (py-1 px-2)

## FSD Compliance

- ✅ **Layer**: Shared (UI)
- ✅ **No business logic**: Pure presentational component
- ✅ **No layer violations**: Doesn't import from upper layers
- ✅ **Reusable**: Generic and configurable
- ✅ **Exported via Public API**: Available through `src/shared/ui/index.ts`

## Related Components

- `LinkButton` - For primary action buttons
- `LinkInline` - For inline text links
- `Badge` - For status indicators

## Migration Notes

This component was migrated from `src/components/SocialPill.astro` to follow FSD architecture. Key improvements:

1. Added proper TypeScript interface for props
2. Made `href` required (previously missing)
3. Fixed typo in hover class (`hover:bg-white/110` → `hover:bg-white/10`)
4. Added accessibility attributes (`role`, proper `rel`)
5. Improved class organization with `class:list`
6. Added focus-visible states
7. Exported through public API
