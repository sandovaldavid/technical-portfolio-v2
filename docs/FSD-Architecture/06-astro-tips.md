# Tips de Astro para Evitar Duplicación

## 🎯 Funcionalidades Nativas de Astro

Astro tiene muchas features built-in que evitan crear código duplicado. Aquí están las más relevantes para tu portfolio.

## 📚 Content Collections (Alternativa a Data Hardcodeada)

### ❌ Evitar: Data hardcodeada en componentes

```astro
---
// BAD: Data mezclada con UI
const PROJECTS = {
	es: [{ title: '...', description: '...' }],
	en: [...]
};
---
```

### ✅ Usar: Content Collections

**1. Configurar collection:**

`src/content/config.ts`:
```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		link: z.string().url(),
		github: z.string().url(),
		image: z.string(),
		tags: z.array(z.string()),
		lang: z.enum(['es', 'en']),
	}),
});

export const collections = { projects: projectsCollection };
```

**2. Crear archivos:**

```markdown
---
// src/content/projects/es/techshop.md
title: TechShop
description: E-Commerce con Next.js...
link: https://...
github: https://...
image: /projects/techshop.webp
tags: [nextjs, react, sanity]
lang: es
---

Contenido detallado del proyecto (opcional)
```

**3. Query en componente:**

```astro
---
import { getCollection } from 'astro:content';

const lang = 'es';
const projects = await getCollection('projects', ({ data }) => data.lang === lang);
---

{projects.map(project => (
	<div>
		<h2>{project.data.title}</h2>
		<p>{project.data.description}</p>
	</div>
))}
```

**Ventajas:**
- ✅ Type-safety automático con Zod
- ✅ IntelliSense en VSCode
- ✅ Validación de datos
- ✅ Hot reload en dev
- ✅ Separación de concerns

---

## 🖼️ Image Optimization

### ❌ Evitar: `<img>` para imágenes locales

```astro
<img src="/profile.jpg" alt="..." />
```

### ✅ Usar: `<Image>` component

```astro
---
import { Image } from 'astro:assets';
---

<Image
	src="/profile.jpg"
	alt="Profile picture"
	width={200}
	height={200}
	loading="lazy"
	decoding="async"
/>
```

**Beneficios automáticos:**
- ✅ Optimización de tamaño
- ✅ Formatos modernos (WebP, AVIF)
- ✅ Responsive images
- ✅ Lazy loading
- ✅ No CLS (Cumulative Layout Shift)

---

## 🔄 import.meta.glob() (Importar Múltiples Archivos)

### ❌ Evitar: Imports individuales

```astro
---
import Icon1 from './icons/Icon1.astro';
import Icon2 from './icons/Icon2.astro';
import Icon3 from './icons/Icon3.astro';
// ... 30 iconos más
---
```

### ✅ Usar: import.meta.glob()

```astro
---
const icons = import.meta.glob('../assets/icons/*.astro', { eager: true });

// Usar dinámicamente
const iconName = 'Python';
const IconComponent = icons[`../assets/icons/${iconName}.astro`].default;
---

<IconComponent class="size-6" />
```

**O para cargar datos:**

```typescript
const translations = import.meta.glob('./i18n/**/*.json', { eager: true });
const esTranslations = Object.entries(translations)
	.filter(([path]) => path.includes('/es/'))
	.reduce((acc, [_, module]) => ({ ...acc, ...module }), {});
```

---

## 🎨 class:list (Clases Dinámicas)

### ❌ Evitar: Template literals

```astro
<div class={`base-class ${condition ? 'active' : ''} ${props.className}`}>
```

### ✅ Usar: class:list

```astro
<div class:list={[
	'base-class',
	condition && 'active',
	{ 'is-active': isActive },
	props.className
]}>
```

**Ventajas:**
- ✅ Más legible
- ✅ Filtra valores falsy automáticamente
- ✅ Soporta objetos, arrays, strings

---

## 🔌 Slots (Composición)

### ❌ Evitar: Props para HTML

```astro
---
interface Props {
	content: string; // HTML as string
}
---
<div set:html={content} />
```

### ✅ Usar: Slots

```astro
---
// Component
---
<div class="container">
	<slot /> <!-- Default slot -->
	<slot name="footer" /> <!-- Named slot -->
</div>

---
// Usage
---
<MyComponent>
	<p>This goes to default slot</p>
	<footer slot="footer">Footer content</footer>
</MyComponent>
```

**Named Slots:**

```astro
<slot name="title" />
<slot /> <!-- default -->
<slot name="footer" />
```

---

## 📦 Astro.props Type-Safety

### ❌ Evitar: Props sin tipos

```astro
---
const { title, description } = Astro.props;
---
```

### ✅ Usar: Interface Props

```astro
---
interface Props {
	title: string;
	description?: string;
	count: number;
}

const { title, description = 'Default', count } = Astro.props;
---
```

**TypeScript te da:**
- ✅ Autocompletado
- ✅ Errores en tiempo de desarrollo
- ✅ Refactoring seguro

---

## 🎭 CSS Scoped (Estilos Aislados)

### ❌ Evitar: Clases globales con nombres largos

```astro
<div class="homepage-hero-section-container-wrapper">
	<h1 class="homepage-hero-section-title-large">...</h1>
</div>

<style is:global>
	.homepage-hero-section-container-wrapper { ... }
	.homepage-hero-section-title-large { ... }
</style>
```

### ✅ Usar: CSS Scoped

```astro
<div class="container">
	<h1 class="title">...</h1>
</div>

<style>
	/* Estos estilos SOLO aplican a este componente */
	.container {
		padding: 2rem;
	}
	.title {
		font-size: 2rem;
	}
</style>
```

**Astro automáticamente:**
- ✅ Genera class names únicos
- ✅ Previene colisiones CSS
- ✅ No necesitas BEM, CSS Modules, etc

---

## 🌐 i18n Built-in (Astro 4.0+)

Tu proyecto ya usa `astro-i18n`, pero Astro tiene i18n nativo:

### Configuración en astro.config.mjs

```javascript
export default defineConfig({
	i18n: {
		locales: ['es', 'en'],
		defaultLocale: 'es',
		routing: {
			prefixDefaultLocale: false,
			fallbackType: 'rewrite',
		},
		fallback: {
			en: 'es',
		},
	},
});
```

**Ya lo tienes configurado!** ✅

### Usar en componentes:

```astro
---
const currentLocale = Astro.currentLocale; // 'es' | 'en'
---
```

---

## 🔧 Utility Types de Astro

### ComponentProps (Get props type)

```typescript
import type { ComponentProps } from 'astro/types';
import { Badge } from '@shared/ui';

// Extraer tipo de props de Badge sin exportarlo
type BadgeProps = ComponentProps<typeof Badge>;

function useBadge(props: BadgeProps) {
	// ...
}
```

### AstroComponentFactory

```typescript
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

interface Technology {
	name: string;
	icon: AstroComponentFactory; // Tipo para componentes Astro
}
```

---

## ⚡ View Transitions (Navegación SPA-like)

```astro
---
// Layout.astro
import { ViewTransitions } from 'astro:transitions';
---
<html>
	<head>
		<ViewTransitions />
	</head>
	<body>
		<slot />
	</body>
</html>
```

**Beneficios:**
- ✅ Navegación instantánea
- ✅ Animaciones de transición
- ✅ Mantiene JavaScript state
- ✅ Prefetching automático

---

## 📊 Comparison: Data Management

| Método | Pros | Cons | Usar cuando |
|--------|------|------|-------------|
| **Hardcoded Data** | Simple, rápido | No escalable | <5 items |
| **Content Collections** | Type-safe, IntelliSense | Setup inicial | Datos estructurados |
| **JSON Files + import** | Fácil edición | Sin validación | Datos simples |
| **API/CMS** | Dinámico | Complejidad | Datos externos |

---

## ✅ Checklist de Optimización

- [ ] Usar `<Image>` para imágenes locales
- [ ] `class:list` en vez de template literals
- [ ] Props con TypeScript interfaces
- [ ] CSS scoped cuando sea posible
- [ ] Slots para composición
- [ ] Content Collections para datos estructurados
- [ ] `import.meta.glob()` para imports masivos
- [ ] ViewTransitions para mejor UX

---

**Siguiente:** **[07-checklist.md](./07-checklist.md)** - Checklist Final de Migración
