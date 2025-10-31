# Checklist Completo de Migración FSD

## 📋 Guía Paso a Paso

Usa este checklist para rastrear tu progreso durante la migración a Feature-Sliced Design.

---

## ✅ Fase 1: Shared Layer (2-3 horas)

### Componentes UI Básicos

- [ ] **Badge** migrado a `src/shared/ui/badge/`
  - [ ] Interface Props con TypeScript
  - [ ] Soporte para `<Image>` en imágenes locales
  - [ ] `class:list` implementado
  - [ ] Public API creada (`index.ts`)

- [ ] **SectionContainer** migrado a `src/shared/ui/section-container/`
  - [ ] Props tipados
  - [ ] Public API creada

- [ ] **LinkButton** migrado a `src/shared/ui/link-button/`
  - [ ] Props tipados (href, target, class)
  - [ ] `class:list` implementado
  - [ ] Public API creada

- [ ] **LinkInline** migrado a `src/shared/ui/link-inline/`
  - [ ] Props tipados
  - [ ] Public API creada

- [ ] **SocialPill** migrado a `src/shared/ui/social-pill/`
  - [ ] Props tipados
  - [ ] Public API creada

- [ ] **TitleSection** migrado a `src/shared/ui/title-section/`
  - [ ] Props tipados
  - [ ] Public API creada

### Public API Central

- [ ] `src/shared/ui/index.ts` creado
- [ ] Todos los componentes exportados

### Testing Shared Layer

- [ ] Build exitoso: `bun run build`
- [ ] Sin errores TypeScript
- [ ] Imports funcionando: `import { Badge } from '@shared/ui'`

---

## ✅ Fase 2: Entities Layer (1-2 horas)

### Entity: Technology

- [ ] Estructura creada: `src/entities/technology/model/`
- [ ] **types.ts** creado con interfaces
  - [ ] `Technology` interface
  - [ ] `TechnologyKey` type
  - [ ] `TechnologiesMap` type
- [ ] **tags.ts** creado con TECHNOLOGIES data
- [ ] **index.ts** (Public API model)
- [ ] `src/entities/technology/index.ts` (Public API entity)

### Entity: Project

- [ ] Estructura creada: `src/entities/project/model/`
- [ ] **types.ts** creado
  - [ ] `Project` interface
  - [ ] `ProjectsByLanguage` type
- [ ] **data.ts** creado con PROJECTS
- [ ] Imports de TECHNOLOGIES funcionando
- [ ] **index.ts** (Public API model)
- [ ] `src/entities/project/index.ts` (Public API entity)

### Entity: Badge

- [ ] Estructura creada: `src/entities/badge/model/`
- [ ] **types.ts** creado
  - [ ] `Badge` interface
  - [ ] `BadgesByLanguage` type
- [ ] **data.ts** creado con BADGES
- [ ] **index.ts** (Public API model)
- [ ] `src/entities/badge/index.ts` (Public API entity)

### Entity: Experience

- [ ] Estructura creada: `src/entities/experience/model/`
- [ ] **types.ts** creado
  - [ ] `Experience` interface
  - [ ] `ExperienceKey` type
- [ ] **data.ts** creado con función `getExperiences()`
- [ ] **index.ts** (Public API model)
- [ ] `src/entities/experience/index.ts` (Public API entity)

### Testing Entities Layer

- [ ] Build exitoso: `bun run build`
- [ ] TypeScript sin errores
- [ ] Imports funcionando: `import { TECHNOLOGIES } from '@entities/technology'`
- [ ] Data correcta en todas las entities

---

## ✅ Fase 3: Features Layer (1-2 horas)

### Feature: ThemeToggle

- [ ] Estructura creada: `src/features/theme-toggle/`
- [ ] **model/types.ts** creado
  - [ ] `Theme` type
  - [ ] `ThemeOption` interface
- [ ] **ui/ThemeToggle.astro** migrado
  - [ ] Script client-side funcionando
  - [ ] localStorage management
  - [ ] Multiple instances support
- [ ] **index.ts** (Public API)

### Feature: LanguagePicker

- [ ] Estructura creada: `src/features/language-picker/`
- [ ] **model/types.ts** creado
  - [ ] `LanguagePickerProps` interface
- [ ] **ui/LanguagePicker.astro** migrado
  - [ ] Lógica i18n funcionando
- [ ] **index.ts** (Public API)

### Testing Features Layer

- [ ] Build exitoso
- [ ] ThemeToggle funciona en navegador
- [ ] LanguagePicker funciona
- [ ] localStorage persiste tema
- [ ] Sin errores en consola

---

## ✅ Fase 4: Widgets Layer (3-4 horas)

### Widget: Hero

- [ ] Estructura creada: `src/widgets/hero/ui/`
- [ ] **Hero.astro** migrado
  - [ ] Usa `Avatar` de @shared/ui
  - [ ] Usa `SocialPill` de @shared/ui
  - [ ] Usa i18n de @shared/lib
- [ ] **index.ts** (Public API)

### Widget: Header

- [ ] Estructura creada: `src/widgets/header/ui/`
- [ ] **Header.astro** migrado
  - [ ] Usa `ThemeToggle` de @features
  - [ ] Usa `LanguagePicker` de @features
  - [ ] Script IntersectionObserver funcionando
  - [ ] Mobile menu funcionando
- [ ] **index.ts** (Public API)

### Widget: Footer

- [ ] Estructura creada: `src/widgets/footer/ui/`
- [ ] **Footer.astro** migrado
  - [ ] Usa `Avatar` de @shared/ui
  - [ ] i18n funcionando
- [ ] **index.ts** (Public API)

### Widget: AboutMe

- [ ] Estructura creada: `src/widgets/about-me/ui/`
- [ ] **AboutMe.astro** migrado
  - [ ] i18n funcionando
  - [ ] Imagen profile cargando
- [ ] **index.ts** (Public API)

### Widget: Experience

- [ ] Estructura creada: `src/widgets/experience/ui/`
- [ ] **components/ExperienceItem.astro** creado
- [ ] **Experience.astro** migrado
  - [ ] Usa `getExperiences()` de @entities
  - [ ] Renderiza lista de experiencias
- [ ] **index.ts** (Public API)

### Widget: Projects

- [ ] Estructura creada: `src/widgets/projects/ui/`
- [ ] **Projects.astro** migrado
  - [ ] Usa `PROJECTS` de @entities
  - [ ] Usa `LinkButton` de @shared/ui
  - [ ] Tags de TECHNOLOGIES funcionando
  - [ ] Imágenes con `<Image>` component
- [ ] **index.ts** (Public API)

### Widget: Badges

- [ ] Estructura creada: `src/widgets/badges/ui/`
- [ ] **Badges.astro** migrado
  - [ ] Usa `BADGES` de @entities
  - [ ] Usa `Badge` de @shared/ui
- [ ] **index.ts** (Public API)

### Barrel Export Widgets

- [ ] `src/widgets/index.ts` creado
- [ ] Todos los widgets exportados

### Testing Widgets Layer

- [ ] Build exitoso
- [ ] Todas las secciones visibles
- [ ] Interactividad funcionando (hover, click)
- [ ] Responsive design intacto
- [ ] Dark mode funcionando

---

## ✅ Fase 5: Pages (30 minutos)

### Página: es/index.astro

- [ ] Imports actualizados a FSD
  - [ ] Widgets desde @widgets
  - [ ] Shared UI desde @shared/ui
  - [ ] i18n desde @shared/lib
- [ ] Build exitoso
- [ ] Página renderiza correctamente

### Página: en/index.astro

- [ ] Imports actualizados
- [ ] Build exitoso
- [ ] Página renderiza correctamente

### Página: components.astro

- [ ] Imports actualizados
- [ ] Build exitoso

### Testing Pages

- [ ] `bun run build` exitoso
- [ ] `bun run preview` muestra páginas
- [ ] Navegación entre idiomas funciona
- [ ] Sin errores 404

---

## ✅ Cleanup & Final

### Eliminar Legacy Code

- [ ] Borrar `src/components/` (después de confirmar todo funciona)
- [ ] Borrar data hardcodeada de componentes legacy
- [ ] Limpiar imports no usados

### Documentación

- [ ] README actualizado con nueva estructura
- [ ] CLAUDE.md actualizado (si es necesario)
- [ ] Comentarios en código complejos

### Testing Final

- [ ] `bun run build` sin errores
- [ ] `bun run preview` funciona
- [ ] `bun run dev` con hot reload
- [ ] TypeScript 0 errores
- [ ] Lighthouse score (Performance, Accessibility)
- [ ] Navegación completa en español
- [ ] Navegación completa en inglés
- [ ] Theme toggle light/dark/system
- [ ] Language picker es/en
- [ ] Mobile responsive
- [ ] Imágenes cargan correctamente
- [ ] Links externos funcionan
- [ ] Forms (si existen) funcionan

---

## 📊 Métricas de Éxito

### Estructura

- [ ] 0 archivos en `src/components/` (legacy)
- [ ] Todos los componentes en capas FSD correctas
- [ ] Public APIs en cada slice (`index.ts`)
- [ ] Path aliases funcionando (`@shared/`, `@entities/`, etc)

### TypeScript

- [ ] 0 errores `astro check`
- [ ] 0 warnings relevantes
- [ ] IntelliSense funcionando en VSCode
- [ ] Autocompletado de imports

### Build

- [ ] Build time < 5 segundos (pequeño proyecto)
- [ ] Bundle size optimizado
- [ ] Sin archivos duplicados
- [ ] Source maps generados

### Performance

- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s

---

## 🎯 Post-Migración

### Opcional: Optimizaciones Avanzadas

- [ ] Migrar data a Content Collections
- [ ] Implementar View Transitions
- [ ] Agregar tests unitarios
- [ ] Configurar CI/CD
- [ ] Implementar error boundaries
- [ ] Agregar analytics
- [ ] PWA features

### Mantenimiento

- [ ] Documentar nuevos patrones FSD
- [ ] Crear templates para nuevos widgets
- [ ] Establecer code review guidelines
- [ ] Actualizar dependencias

---

## 🎉 Completado!

Si todos los checkboxes están ✅, tu proyecto está completamente migrado a Feature-Sliced Design!

**Beneficios logrados:**

✅ Arquitectura clara y escalable
✅ Mejor DX (Developer Experience)
✅ Type-safety completo
✅ Separación de concerns
✅ Mantenibilidad mejorada
✅ Onboarding más rápido para nuevos devs
✅ Testing más fácil
✅ Menos bugs

---

## 📚 Recursos

- **FSD Docs**: https://feature-sliced.design
- **Astro Docs**: https://docs.astro.build
- **TypeScript**: https://www.typescriptlang.org/docs

**Guías del proyecto:**
- [00-overview.md](./00-overview.md)
- [01-shared-layer.md](./01-shared-layer.md)
- [02-entities-layer.md](./02-entities-layer.md)
- [03-features-layer.md](./03-features-layer.md)
- [04-widgets-layer.md](./04-widgets-layer.md)
- [05-pages-migration.md](./05-pages-migration.md)
- [06-astro-tips.md](./06-astro-tips.md)

---

**Última actualización**: Octubre 2025
