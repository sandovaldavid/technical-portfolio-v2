# Avatar Component

## Description

A reusable avatar component for displaying user profile images. Part of the Shared UI layer in the FSD architecture. Optimized for performance with automatic image optimization for local assets.

## Location

`src/shared/ui/avatar/avatar.astro`

## Props

| Prop    | Type                                   | Default | Required | Description                               |
| ------- | -------------------------------------- | ------- | -------- | ----------------------------------------- |
| `src`   | `string`                               | -       | ✅       | Path to the image (local or external URL) |
| `alt`   | `string`                               | -       | ✅       | Alternative text for accessibility        |
| `size`  | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`  | ❌       | Predefined size of the avatar             |
| `class` | `string`                               | -       | ❌       | Additional CSS classes to apply           |

## Size Reference

| Size | Dimensions | Tailwind Class | Use Case                   |
| ---- | ---------- | -------------- | -------------------------- |
| `xs` | 32x32px    | `size-8`       | Small lists, chips         |
| `sm` | 48x48px    | `size-12`      | Compact UI, comments       |
| `md` | 96x96px    | `size-24`      | Default, profile cards     |
| `lg` | 192x192px  | `size-48`      | Hero sections, about pages |
| `xl` | 256x256px  | `size-64`      | Full profile views         |

## Features

- ✅ **Automatic optimization**: Uses `astro:assets` for local images
- ✅ **External URL support**: Falls back to `<img>` for external sources
- ✅ **Consistent sizing**: Predefined size tokens for design consistency
- ✅ **Accessible**: Requires alt text for screen readers
- ✅ **Circular design**: Rounded-full by default
- ✅ **Aspect ratio locked**: Maintains 1:1 ratio
- ✅ **Responsive**: Works with Tailwind's responsive modifiers via class prop

## Usage

### Basic Example

```astro
---
import { Avatar } from '@/shared/ui';
---

<Avatar src="/profile/user.webp" alt="John Doe - Software Engineer" />
```

### Different Sizes

```astro
<!-- Extra small -->
<Avatar src="/profile/user.webp" alt="User avatar" size="xs" />

<!-- Small -->
<Avatar src="/profile/user.webp" alt="User avatar" size="sm" />

<!-- Medium (default) -->
<Avatar src="/profile/user.webp" alt="User avatar" size="md" />

<!-- Large -->
<Avatar src="/profile/user.webp" alt="User avatar" size="lg" />

<!-- Extra large -->
<Avatar src="/profile/user.webp" alt="User avatar" size="xl" />
```

### External Image

```astro
<Avatar src="https://avatars.githubusercontent.com/u/12345" alt="GitHub User" size="md" />
```

### With Custom Classes

```astro
<Avatar
	src="/profile/user.webp"
	alt="User avatar"
	size="lg"
	class="ring-2 ring-blue-500 ring-offset-2"
/>
```

### With Translations (in upper layers)

```astro
---
// In a feature or widget layer
import { Avatar } from '@/shared/ui';
import { useTranslations, interpolate } from '@/shared/lib/i18n';

const lang = Astro.currentLocale as Language;
const t = useTranslations(lang);
const altText = interpolate(t('avatar.alt'), {
	name: 'Juan David Sandoval Salvador',
});
---

<Avatar src="/profile/perfil.webp" alt={altText} size="lg" />
```

## Image Optimization

The component automatically detects if the image is local or external:

- **Local images** (`/`, `./`, `../`): Uses Astro's `<Image>` component for automatic optimization
- **External URLs** (`https://`, `http://`): Uses standard `<img>` tag

Benefits of local image optimization:

- Automatic format conversion (WebP, AVIF)
- Responsive image generation
- Lazy loading
- Better performance

## Styling

The component uses Tailwind CSS with the following base classes:

- **Shape**: `rounded-full` (circular)
- **Object fit**: `object-cover` (fills container while maintaining aspect ratio)
- **Aspect ratio**: `aspect-square` (1:1 ratio)
- **Sizing**: Dynamic based on `size` prop

## Accessibility

- ✅ **Required alt text**: Ensures screen reader support
- ✅ **Semantic HTML**: Uses `<img>` element
- ✅ **Proper dimensions**: Width and height attributes prevent layout shift

## FSD Compliance

- ✅ **Layer**: Shared (UI)
- ✅ **No business logic**: Pure presentational component
- ✅ **No layer violations**: Only imports from `astro:assets`
- ✅ **Generic and reusable**: Not tied to specific users or domains
- ✅ **Proper separation**: i18n logic should be in upper layers
- ✅ **Exported via Public API**: Available through `src/shared/ui/index.ts`

## Anti-patterns to Avoid

❌ **Don't hardcode user data in shared components:**

```astro
<!-- Bad: Business logic in shared layer -->const userName = 'Juan David Sandoval Salvador';
```

✅ **Do pass data as props from upper layers:**

```astro
<!-- Good: Props from features/widgets -->
<Avatar src={userImage} alt={userName} />
```

❌ **Don't add i18n directly in shared components:**

```astro
<!-- Bad: Translation logic in UI component -->const t = useTranslations(lang); const alt =
t('avatar.alt');
```

✅ **Do handle i18n in features/widgets:**

```astro
<!-- Good: Translation in feature layer --><!-- Feature component handles translations and passes to Avatar -->
```

## Related Components

- `Badge` - For profile badges and status indicators
- `SocialPill` - For social media links
- `Card` - For profile card containers

## Migration Notes

This component was refactored from `src/shared/ui/avatar.astro` to follow FSD principles:

### Changes Made:

1. ✅ Removed hardcoded business logic (user name)
2. ✅ Removed direct i18n imports (moved to upper layers)
3. ✅ Made component fully generic and reusable
4. ✅ Improved size system with semantic tokens
5. ✅ Added support for external images
6. ✅ Used `class:list` for better class composition
7. ✅ Created proper folder structure with Public API
8. ✅ Added comprehensive documentation

### Migration Path for Consumers:

```astro
<!-- Before -->
<Avatar size="large" class="custom-class" />

<!-- After -->
<Avatar
	src="/profile/perfil.webp"
	alt="Juan David Sandoval Salvador - Web Developer"
	size="lg"
	class="custom-class"
/>
```

Note: Consumers now need to provide `src` and `alt` explicitly, which improves reusability and accessibility.
