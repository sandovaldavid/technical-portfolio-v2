# Guía de Migración: Features Layer

## ✨ Features Layer - Funcionalidades Interactivas

El Features layer contiene componentes con **lógica de negocio** e **interactividad client-side**. Son reutilizables y proporcionan valor al usuario.

## 🎯 Features a Migrar

```
src/components/
├── ThemeToggle.astro      → src/features/theme-toggle/
└── LanguagePicker.astro   → src/features/language-picker/
```

## 📝 Migración

### 1. Feature: Theme Toggle

**Código actual:** `src/components/ThemeToggle.astro` (121 líneas)

**Características:**
- Script client-side (~70 líneas)
- localStorage management
- System preference detection
- Event handling
- Multiple instances support

**Nueva estructura:**
```
src/features/theme-toggle/
├── ui/
│   └── ThemeToggle.astro
├── model/
│   └── types.ts
└── index.ts
```

**Pasos:**

1. **Crear estructura:**
```bash
mkdir -p src/features/theme-toggle/ui
mkdir -p src/features/theme-toggle/model
```

2. **Migrar tipos:**

`src/features/theme-toggle/model/types.ts`:
```typescript
export type Theme = 'light' | 'dark' | 'system';

export interface ThemeOption {
	id: Theme;
	name: string;
}
```

3. **Migrar componente:**

`src/features/theme-toggle/ui/ThemeToggle.astro`:
```astro
---
import SunIcon from '@assets/icons/Sun.astro';
import MoonIcon from '@assets/icons/Moon.astro';
import SystemIcon from '@assets/icons/System.astro';
import { getLangFromUrl, useTranslations } from '@shared/lib/i18n';
import type { ThemeOption } from '../model/types';

const lang = getLangFromUrl(new URL(Astro.request.url));
const t = useTranslations(lang);

const THEMES: ThemeOption[] = [
	{ id: 'light', name: t('theme.light') },
	{ id: 'dark', name: t('theme.dark') },
	{ id: 'system', name: t('theme.system') },
];
---

<div class="theme-toggle relative ml-1 mr-1">
	<!-- ... resto del HTML igual ... -->
</div>

<script>
	// ... mantener script client-side igual ...
	// Tip Astro: Scripts con client directives se ejecutan en el navegador
</script>

<style>
	/* ... estilos iguales ... */
</style>
```

4. **Public API:**

`src/features/theme-toggle/index.ts`:
```typescript
export { default as ThemeToggle } from './ui/ThemeToggle.astro';
export type { Theme, ThemeOption } from './model/types';
```

**Tip Astro - Scripts Client-Side:**
```astro
<!-- Scripts sin is:inline se bundlean y optimizan automáticamente -->
<script>
	// Este código se ejecuta en el cliente
	// Astro lo bundlea automáticamente
</script>

<!-- Scripts con is:inline NO se procesan -->
<script is:inline>
	// Se inyecta tal cual al HTML
	// Útil para código que debe ejecutar ANTES que el bundle
</script>
```

---

### 2. Feature: Language Picker

**Código actual:** `src/components/LanguagePicker.astro`

**Nueva estructura:**
```
src/features/language-picker/
├── ui/
│   └── LanguagePicker.astro
├── model/
│   └── types.ts
└── index.ts
```

**Migración rápida:**

1. **Tipos:**

`src/features/language-picker/model/types.ts`:
```typescript
import type { Language } from '@shared/config/i18n';

export interface LanguagePickerProps {
	currentLang: Language;
	class?: string;
}
```

2. **Componente:**

`src/features/language-picker/ui/LanguagePicker.astro`:
```astro
---
import { languages } from '@shared/config/i18n';
import type { LanguagePickerProps } from '../model/types';

const { currentLang, class: className } = Astro.props;

const pathname = new URL(Astro.request.url).pathname;
const alternativeLang = currentLang === 'es' ? 'en' : 'es';
---

<!-- HTML igual al original -->
```

3. **Public API:**

`src/features/language-picker/index.ts`:
```typescript
export { default as LanguagePicker } from './ui/LanguagePicker.astro';
export type { LanguagePickerProps } from './model/types';
```

---

## 🎨 Tips Astro para Features

### 1. **Client Directives**

```astro
<!-- Componente se hidrata al cargar la página -->
<ThemeToggle client:load />

<!-- Se hidrata cuando es visible en viewport -->
<LanguagePicker client:visible />

<!-- Se hidrata cuando navegador está idle -->
<Component client:idle />

<!-- Solo renderiza en servidor, NO envía JS -->
<Component />
```

### 2. **Event Handlers**

```astro
<script>
	document.addEventListener('DOMContentLoaded', () => {
		// Código que se ejecuta cuando DOM está listo
	});

	// Usar event delegation para mejor performance
	document.addEventListener('click', (e) => {
		if (e.target.matches('.my-button')) {
			// Handle click
		}
	});
</script>
```

### 3. **localStorage**

```astro
<script>
	// Siempre verificar que existe (SSR-safe)
	if (typeof localStorage !== 'undefined') {
		const theme = localStorage.getItem('theme');
	}
</script>
```

### 4. **Multiple Instances**

```astro
<script>
	// Usar querySelectorAll para soportar múltiples instancias
	document.querySelectorAll('.theme-toggle').forEach(toggle => {
		// Inicializar cada instancia por separado
	});
</script>
```

---

## ✅ Checklist

- [ ] ThemeToggle migrado a `src/features/theme-toggle/`
- [ ] LanguagePicker migrado a `src/features/language-picker/`
- [ ] Types creados en `model/types.ts`
- [ ] Public APIs creadas
- [ ] Scripts client-side funcionando
- [ ] localStorage working
- [ ] Build exitoso

## 🧪 Testing

```bash
# Build debe pasar sin errores
bun run build

# Dev server debe mostrar theme toggle funcionando
bun run dev
```

## 🚀 Siguiente Paso

**[04-widgets-layer.md](./04-widgets-layer.md)** - Migración de Widgets (Secciones)

---

**Tiempo estimado:** 1-2 horas
