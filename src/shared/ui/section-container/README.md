# SectionContainer Component

## Description

A responsive container component for page sections with consistent max-width and centering.

## Location

`@shared/ui/section-container`

## Usage

```astro
---
import { SectionContainer } from '@shared/ui';
---

<SectionContainer id="about">
	<h2>About Me</h2>
	<p>Content goes here...</p>
</SectionContainer>

<SectionContainer class="py-8"> Content with custom padding </SectionContainer>
```

## Props

| Prop    | Type     | Default     | Description                        |
| ------- | -------- | ----------- | ---------------------------------- |
| `id`    | `string` | `undefined` | Optional section ID for navigation |
| `class` | `string` | `undefined` | Additional CSS classes             |

## Features

- Responsive max-width (4xl on large screens, 2xl on medium)
- Automatic centering
- Full width on mobile
- Customizable with additional classes
