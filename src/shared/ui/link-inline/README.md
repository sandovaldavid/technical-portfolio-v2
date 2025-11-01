# LinkInline Component

## Description

An inline text link component with brand color styling for use within paragraphs or text content.

## Location

`@shared/ui/link-inline`

## Usage

```astro
---
import { LinkInline } from '@shared/ui';
---

<p>
	Check out my <LinkInline href="https://github.com/username">GitHub profile</LinkInline>
</p>
```

## Props

| Prop   | Type     | Default  | Description        |
| ------ | -------- | -------- | ------------------ |
| `href` | `string` | Required | The URL to link to |

## Features

- Brand color (yellow) styling
- Hover states for light and dark modes
- Inline text integration
- Accessible link semantics
