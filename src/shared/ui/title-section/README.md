# TitleSection Component

## Description

A styled heading component for section titles with consistent typography and spacing.

## Location

`@shared/ui/title-section`

## Usage

```astro
---
import { TitleSection } from '@shared/ui';
import Icon from '@assets/icons/Star.astro';
---

<TitleSection>
	<Icon class="size-7" />
	Projects
</TitleSection>

<TitleSection className="mb-8"> Custom margin bottom </TitleSection>
```

## Props

| Prop        | Type     | Default     | Description            |
| ----------- | -------- | ----------- | ---------------------- |
| `className` | `string` | `undefined` | Additional CSS classes |

## Features

- Flexbox layout for icon + text combinations
- Consistent typography (3xl, semibold)
- Dark mode support
- Default bottom margin (mb-6)
- Icon alignment support
