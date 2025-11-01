# CertificationBadge Component

## Description

A specialized component for displaying certification and achievement badges with images. Part of the Entities layer (badges domain) in the FSD architecture. Designed specifically for showcasing professional certifications, course completions, and achievements.

## Location

`src/entities/badges/ui/certification-badge.astro`

## Props

| Prop    | Type     | Default | Required | Description                                             |
| ------- | -------- | ------- | -------- | ------------------------------------------------------- |
| `src`   | `string` | -       | ✅       | Path to the certification image (local or external URL) |
| `alt`   | `string` | `''`    | ❌       | Certification name/description for accessibility        |
| `href`  | `string` | -       | ❌       | Link to certification verification page                 |
| `class` | `string` | -       | ❌       | Additional CSS classes                                  |

## Features

- ✅ **Image optimization**: Auto-optimizes local images with Astro's Image component
- ✅ **External URL support**: Falls back to `<img>` for external certification images
- ✅ **Hover effects**: Smooth scale animation and background transition
- ✅ **Tooltip**: Shows certification name on hover
- ✅ **Circular design**: Consistent badge-like appearance
- ✅ **Accessible**: Proper ARIA attributes and focus states
- ✅ **Clickable**: Links to verification/credential page
- ✅ **Dark mode**: Theme-aware background colors

## Usage

### Basic Example

```astro
---
import { CertificationBadge } from '@/entities/badges';
---

<CertificationBadge
	src="/badges/github-foundations.png"
	alt="GitHub Foundations Certification"
	href="https://www.credly.com/badges/..."
/>
```

### With Local Image

```astro
<CertificationBadge
	src="/badges/aws-certified.png"
	alt="AWS Certified Developer"
	href="https://aws.amazon.com/verification/..."
/>
```

### With External Image

```astro
<CertificationBadge
	src="https://cdn.credly.com/assets/badge.png"
	alt="Professional Scrum Master I"
	href="https://www.credly.com/badges/..."
/>
```

### In a Grid Layout

```astro
---
import { CertificationBadge } from '@/entities/badges';

const certifications = [
	{
		image: '/badges/cert1.png',
		label: 'GitHub Foundations',
		link: 'https://...',
	},
	{
		image: '/badges/cert2.png',
		label: 'AWS Developer',
		link: 'https://...',
	},
];
---

<ul class="flex flex-wrap items-center justify-center gap-4">
	{
		certifications.map(cert => (
			<li>
				<CertificationBadge src={cert.image} alt={cert.label} href={cert.link} />
			</li>
		))
	}
</ul>
```

## Styling

The component uses these design tokens:

- **Size**: `size-28` (112px) container, `size-24` (96px) image
- **Shape**: `rounded-full` (circular)
- **Background**:
    - Light: `bg-gray-200/30` → hover: `bg-gray-200/50`
    - Dark: `bg-gray-500/20` → hover: `bg-gray-500/40`
- **Shadow**: Elevates to `shadow-lg` on hover
- **Transform**: Image scales to 110% on hover
- **Transition**: 300ms ease-in-out

## Tooltip Behavior

- Appears 80px below the badge (`mb-20`)
- Hidden by default, shows on hover
- Black background with white text
- Centered text, max width 208px (`w-52`)
- Smooth opacity transition
- `pointer-events-none` to avoid interaction issues

## Image Optimization

The component automatically detects image type:

```astro
{
	isLocalImage ? (
		<Image src={src} Astro Image component width={96} Optimized sizes height={96} />
	) : (
		<img src={src} Standard img for external URLs width="96" height="96" />
	)
}
```

**Local images** (`/`, `./`, `../`):

- Automatic format conversion (WebP, AVIF)
- Responsive image generation
- Better performance

**External images** (`https://`, `http://`):

- Uses standard `<img>` tag
- No build-time optimization
- Works with CDN URLs

## Accessibility

- ✅ **role="link"**: Explicit link role for screen readers
- ✅ **alt text**: Describes the certification
- ✅ **rel="noopener noreferrer"**: Security for external links
- ✅ **Focus visible**: Ring on keyboard focus
- ✅ **Tooltip aria-hidden**: Doesn't interfere with screen readers

## FSD Compliance

- ✅ **Layer**: Entities (badges domain)
- ✅ **Business-specific**: Represents a certification/achievement entity
- ✅ **No shared imports**: Only uses Astro built-ins
- ✅ **Exported via Public API**: Available through `@entities/badges`
- ✅ **Domain-focused**: Specific to the badges/certifications domain

## Why Entities Layer?

This component is in the **Entities** layer (not Shared) because:

1. **Domain-specific**: Represents a business entity (certification/achievement)
2. **Specific use case**: Not a generic UI component
3. **Business context**: Has meaning in the portfolio domain
4. **Data relationship**: Related to certification data models

**Contrast with Shared/UI Badge:**

- Shared Badge: Generic label/tag component (`<Badge>Label</Badge>`)
- Entity CertificationBadge: Domain-specific certification card with image

## Related Components

- `Badge` (Shared/UI) - For text labels and tags
- `Avatar` (Shared/UI) - For profile pictures
- `Card` (Shared/UI) - For content containers

## Migration from Old Badge

This component replaces the incorrectly named `Badge.astro` that was in `shared/ui`:

### Before (Incorrect):

```astro
---
// src/shared/ui/badge.astro (WRONG - business logic in shared)
import { Image } from 'astro:assets';
// ...certification-specific code
---
```

### After (Correct):

```astro
---
// src/entities/badges/ui/certification-badge.astro (CORRECT)
import { Image } from 'astro:assets';
// ...certification-specific code
---
```

### Usage Update:

```astro
<!-- Before -->import Badge from '@shared/ui/Badge.astro';
<Badge src="..." alt="..." href="..." />

<!-- After -->
import {CertificationBadge} from '@entities/badges';
<CertificationBadge src="..." alt="..." href="..." />
```

## Design Improvements

Compared to the original component, this version adds:

1. ✅ **role="link"** for better accessibility
2. ✅ **focus-visible states** for keyboard navigation
3. ✅ **aria-hidden on tooltip** to avoid screen reader conflicts
4. ✅ **pointer-events-none on tooltip** to prevent interaction issues
5. ✅ **Consistent with FSD architecture**

---

**Migrated:** October 12, 2025  
**Architecture:** Feature-Sliced Design (FSD)  
**Layer:** Entities (badges domain)  
**Purpose:** Display certification and achievement badges
