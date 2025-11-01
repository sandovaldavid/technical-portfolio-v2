# LinkButton Component

## Description

A reusable link button component with consistent styling, hover states, and focus management.

## Location

`@shared/ui/link-button`

## Usage

```astro
---
import { LinkButton } from '@shared/ui';
---

<LinkButton href="https://example.com"> Click me </LinkButton>

<LinkButton href="/about" target="_self"> Internal link </LinkButton>
```

## Props

| Prop     | Type                  | Default     | Description            |
| -------- | --------------------- | ----------- | ---------------------- |
| `href`   | `string`              | Required    | The URL to link to     |
| `target` | `'_blank' \| '_self'` | `'_blank'`  | Link target attribute  |
| `class`  | `string`              | `undefined` | Additional CSS classes |

## Features

- Automatic `noopener noreferrer` for external links
- Hover and focus states
- Dark mode support
- Accessible focus indicators
- Full keyboard navigation support
