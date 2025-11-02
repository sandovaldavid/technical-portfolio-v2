# Button Component

Generic button component for non-link actions. Shares the same visual appearance as LinkButton for consistency.

## Usage

```astro
import {Button} from '@shared/ui';

<Button variant="primary" onclick="handleClick()">
	<Icon />
	Click me
</Button>

<Button variant="secondary" type="submit"> Submit </Button>
```

## Props

- `variant`: 'primary' | 'secondary' (default: 'primary')
- `type`: 'button' | 'submit' | 'reset' (default: 'button')
- `onclick`: Optional click handler
- `class`: Additional CSS classes

## Variants

- **primary**: Gray background with dark hover (brand style) - matches LinkButton default
- **secondary**: Muted background with brand accent on hover

## Design Notes

Button and LinkButton share **identical CSS styles** via `button.css` using Tailwind's `@apply` directive.
This ensures perfect visual consistency - any style change in `button.css` automatically affects both components.

The only difference is the underlying HTML element (`<button>` vs `<a>`).
