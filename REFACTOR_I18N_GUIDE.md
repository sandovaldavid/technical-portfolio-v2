# Guía de Refactorización: Sistema i18n con Arquitectura FSD

## 📋 Estado Actual

El sistema de internacionalización actual está ubicado en `src/i18n/` con la siguiente estructura:

```bash
src/i18n/
├── config.ts    # Configuración de idiomas y traducciones
└── utils.ts     # Utilidades para detectar idioma y traducir
```

### Problemas Identificados

1. **Ubicación incorrecta**: Está en el nivel raíz cuando debería estar en capas FSD
2. **Configuración monolítica**: Todas las traducciones en un solo archivo
3. **Acoplamiento**: Componentes importan directamente desde i18n
4. **Falta de escalabilidad**: Difícil de mantener con más idiomas/traducciones

## 🎯 Objetivos de la Refactorización

1. **Seguir FSD**: Mover i18n a las capas apropiadas
2. **Modularidad**: Separar traducciones por dominio/entidad
3. **Escalabilidad**: Facilitar la adición de nuevos idiomas
4. **Mantenibilidad**: Organizar traducciones de forma lógica
5. **Reutilización**: Crear utilities compartidas para i18n

## 🏗️ Nueva Estructura Propuesta

### 1. **App Layer** - Configuración Global i18n

```bash
src/app/
├── providers/
│   └── i18n/
│       ├── I18nProvider.astro     # Provider global de idioma
│       └── index.ts               # Export público
├── config/
│   └── i18n.ts                    # Configuración global i18n
└── types/
    └── i18n.ts                    # Tipos globales de i18n
```

### 2. **Shared Layer** - Utilidades i18n

```bash
src/shared/
├── lib/
│   └── i18n/
│       ├── utils.ts               # Utilidades para detectar idioma, formatear
│       ├── validation.ts          # Validación de claves de traducción
│       ├── constants.ts           # Constantes de idiomas
│       └── index.ts               # Export público
└── types/
    └── i18n.ts                    # Tipos compartidos
```

### 3. **Entities Layer** - Traducciones por Dominio

```bash
src/entities/
├── user/
│   └── i18n/
│       ├── en.ts                  # Traducciones en inglés
│       ├── es.ts                  # Traducciones en español
│       └── index.ts               # Export consolidado
├── project/
│   └── i18n/
│       ├── en.ts
│       ├── es.ts
│       └── index.ts
├── experience/
│   └── i18n/
│       ├── en.ts
│       ├── es.ts
│       └── index.ts
└── navigation/                    # Nueva entidad para navegación
    ├── i18n/
    │   ├── en.ts
    │   ├── es.ts
    │   └── index.ts
    └── index.ts
```

### 4. **Features Layer** - Traducciones de Features

```bash
src/features/
├── theme-toggle/
│   └── i18n/
│       ├── en.ts                  # Traducciones específicas del feature
│       ├── es.ts
│       └── index.ts
├── language-select/
│   └── i18n/
│       ├── en.ts
│       ├── es.ts
│       └── index.ts
└── contact-form/
    └── i18n/
        ├── en.ts
        ├── es.ts
        └── index.ts
```

## 📝 Plan de Migración Paso a Paso

### **Paso 1: Crear la Infraestructura Base**

#### 1.1 Tipos Globales de i18n

```typescript
// src/app/types/i18n.ts
export type SupportedLanguage = 'en' | 'es';

export interface I18nConfig {
  defaultLanguage: SupportedLanguage;
  supportedLanguages: SupportedLanguage[];
  fallbackLanguage: SupportedLanguage;
}

export interface TranslationEntry {
  [key: string]: string | TranslationEntry;
}

export interface TranslationNamespace {
  [language: string]: TranslationEntry;
}
```

#### 1.2 Configuración Global

```typescript
// src/app/config/i18n.ts
import type { I18nConfig } from '../types/i18n';

export const I18N_CONFIG: I18nConfig = {
  defaultLanguage: 'es',
  supportedLanguages: ['en', 'es'],
  fallbackLanguage: 'es'
} as const;

export const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
  en: 'English',
  es: 'Español'
} as const;
```

#### 1.3 Utilidades Compartidas

```typescript
// src/shared/lib/i18n/utils.ts
import type { SupportedLanguage } from '../../../app/types/i18n';
import { I18N_CONFIG } from '../../../app/config/i18n';

export function detectLanguageFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  
  if (I18N_CONFIG.supportedLanguages.includes(lang as SupportedLanguage)) {
    return lang as SupportedLanguage;
  }
  
  return I18N_CONFIG.defaultLanguage;
}

export function detectLanguageFromBrowser(): SupportedLanguage {
  if (typeof navigator === 'undefined') {
    return I18N_CONFIG.defaultLanguage;
  }
  
  const browserLang = navigator.language.split('-')[0] as SupportedLanguage;
  
  return I18N_CONFIG.supportedLanguages.includes(browserLang) 
    ? browserLang 
    : I18N_CONFIG.defaultLanguage;
}

export function createTranslationFunction<T extends Record<string, any>>(
  translations: Record<SupportedLanguage, T>,
  language: SupportedLanguage
) {
  return function t(key: keyof T): string {
    const translation = translations[language]?.[key] ?? translations[I18N_CONFIG.fallbackLanguage]?.[key];
    
    if (typeof translation !== 'string') {
      console.warn(`Translation for key "${String(key)}" not found or is not a string`);
      return String(key);
    }
    
    return translation;
  };
}

export function formatTranslationKey(namespace: string, key: string): string {
  return `${namespace}.${key}`;
}
```

### **Paso 2: Migrar Traducciones por Entidades**

#### 2.1 Entidad Navigation

```typescript
// src/entities/navigation/i18n/en.ts
export const navigationTranslations = {
  experience: 'Experience',
  projects: 'Projects',
  badges: 'Badges',
  about: 'About me',
  contact: 'Contact'
} as const;

// src/entities/navigation/i18n/es.ts
export const navigationTranslations = {
  experience: 'Experiencia',
  projects: 'Proyectos',
  badges: 'Insignias',
  about: 'Sobre mí',
  contact: 'Contacto'
} as const;

// src/entities/navigation/i18n/index.ts
import type { SupportedLanguage } from '../../../app/types/i18n';
import { navigationTranslations as en } from './en';
import { navigationTranslations as es } from './es';

export const navigationI18n: Record<SupportedLanguage, typeof en> = {
  en,
  es
};

export type NavigationTranslationKey = keyof typeof en;
```

#### 2.2 Entidad User (Hero Section)

```typescript
// src/entities/user/i18n/en.ts
export const userTranslations = {
  available: 'Available for work',
  intro: "Hello, I'm David Sandoval",
  description: '<strong>Computer Engineer</strong> graduated from the <strong>National University of Piura</strong> with training in <strong>web development</strong> and <strong>frontend</strong> certification from <strong>Alura Latam</strong> (ONE EDUCATION). I have a solid <strong>portfolio</strong> of projects using technologies like <strong>React</strong>, <strong>Django</strong>, and <strong>PostgreSQL</strong>. Passionate about creating efficient and scalable <strong>web applications</strong>. Currently looking for an opportunity to apply my knowledge and continue learning in a professional environment.',
  aboutParagraph1: 'My name is Juan David, although most people know me as David. I am currently a graduate in Computer Engineering from the National University of Piura. My passion for software development has led me to create <strong>various independent projects</strong> that reflect my skills and dedication.',
  aboutParagraph2: 'Throughout my training, I have worked on projects ranging from web application development to mobile solutions. These projects have been <strong>an opportunity to consolidate my technical knowledge</strong> and explore technologies such as JavaScript, Java, Django, Kotlin, and relational databases like PostgreSQL, MySQL, and SQLServer.',
  aboutParagraph3: 'My focus is on <strong>leveraging technology to solve practical problems</strong> and improve processes through innovation. I aspire to continue learning and contributing to the world of software development, building solutions that positively impact people and businesses.'
} as const;

// src/entities/user/i18n/es.ts
export const userTranslations = {
  available: 'Disponible para trabajar',
  intro: 'Hola, soy David Sandoval',
  description: '<strong>Ingeniero Informático</strong> egresado de la <strong>Universidad Nacional de Piura</strong> con formación en <strong>desarrollo web</strong> y certificación en <strong>frontend</strong> por <strong>Alura Latam</strong> (ONE EDUCATION). Cuento con un sólido <strong>portafolio</strong> de proyectos en tecnologías como <strong>React</strong>, <strong>Django</strong> y <strong>PostgreSQL</strong>. Apasionado por la creación de <strong>aplicaciones web</strong> eficientes y escalables. Actualmente en búsqueda de una oportunidad para aplicar mis conocimientos y seguir aprendiendo en un entorno profesional.',
  aboutParagraph1: 'Me llamo Juan David, aunque la mayoría me conoce como David. Actualmente soy egresado de la carrera de Ingeniería Informática en la Universidad Nacional de Piura. Mi pasión por el desarrollo de software me ha llevado a crear <strong>diversos proyectos independientes</strong> que reflejan mis habilidades y dedicación.',
  aboutParagraph2: 'A lo largo de mi formación, he trabajado en proyectos que abarcan desde el desarrollo de aplicaciones web hasta soluciones móviles. Estos proyectos han sido <strong>una oportunidad para consolidar mis conocimientos técnicos</strong> y explorar tecnologías como JavaScript, Java, Django, Kotlin, y bases de datos relacionales como PostgreSQL, MySQL y SQLServer.',
  aboutParagraph3: 'Mi enfoque está en <strong>aprovechar la tecnología para resolver problemas prácticos</strong> y mejorar procesos mediante la innovación. Aspiro a seguir aprendiendo y aportando al mundo del desarrollo de software, construyendo soluciones que impacten positivamente a las personas y las empresas.'
} as const;

// src/entities/user/i18n/index.ts
import type { SupportedLanguage } from '../../../app/types/i18n';
import { userTranslations as en } from './en';
import { userTranslations as es } from './es';

export const userI18n: Record<SupportedLanguage, typeof en> = {
  en,
  es
};

export type UserTranslationKey = keyof typeof en;
```

#### 2.3 Entidad Experience

```typescript
// src/entities/experience/i18n/en.ts
export const experienceTranslations = {
  technicalSupport: {
    date: 'Jun 2024 - Oct 2024',
    title: 'Technical Support',
    description: 'I provided technical support for maintenance and configuration of technological infrastructure, ensuring the operation of systems and equipment in an institutional environment. I developed skills in diagnosing and resolving incidents, optimization of technological processes, and attention to requirements, contributing to operational efficiency.',
    company: 'Provincial Municipality of Piura'
  },
  chirasoft: {
    date: 'May 2025 – Jul 2025',
    title: 'Fullstack Developer Freelance',
    description: 'I migrated an educational institutional site from WordPress to Angular, improving its performance, maintainability, and user experience. I contributed to the comprehensive development of an e-commerce platform, from frontend to backend business logic.',
    company: 'Chirasoft'
  },
  harvardx: {
    date: 'May 2024 – May 2025',
    title: 'Full Stack Developer (CS50W)',
    description: 'I implemented complete projects using Django, JavaScript, and Bootstrap, including an auction platform and an AJAX-based email system. Focused on responsive design, user authentication, and dynamic navigation.',
    company: 'HarvardX'
  },
  alura: {
    date: 'Apr. 2022 – Dec. 2022',
    title: 'Junior Web Developer',
    description: 'I built interactive web applications, including games, online stores, and landing pages using HTML5, CSS3, and JavaScript. Participated in coding challenges applying good UI/UX practices.',
    company: 'Alura Latam (ONE Program)'
  },
  dataScience: {
    date: 'Feb 2024 – Jun 2024',
    title: 'Data Science Trainee',
    description: 'I participated in an intensive Data Science training program focused on real-world projects and the application of modern analysis and visualization tools. Developed skills in statistics, exploratory data analysis, data cleaning, and transformation with Python.',
    company: 'Alura LATAM / Oracle Next Education'
  }
} as const;

// src/entities/experience/i18n/es.ts
export const experienceTranslations = {
  technicalSupport: {
    date: 'Jun 2024 - Oct 2024',
    title: 'Soporte Técnico',
    description: 'Brindé soporte técnico para mantenimiento y configuración de infraestructura tecnológica, asegurando el funcionamiento de sistemas y equipos en un entorno institucional. Desarrollé habilidades en diagnóstico y resolución de incidentes, optimización de procesos tecnológicos y atención de requerimientos, contribuyendo a la eficiencia operativa.',
    company: 'Municipalidad Provincial de Piura'
  },
  chirasoft: {
    date: 'May 2025 – Jul 2025',
    title: 'Desarrollador Fullstack Freelance',
    description: 'Realicé la migración de un sitio institucional educativo de WordPress a Angular, mejorando su rendimiento, mantenibilidad y experiencia de usuario. Contribuí al desarrollo integral de una plataforma de comercio electrónico, desde el frontend hasta la lógica de negocio en el backend.',
    company: 'Chirasoft'
  },
  harvardx: {
    date: 'May 2024 – May 2025',
    title: 'Desarrollador Full Stack (CS50W)',
    description: 'Implementé proyectos completos utilizando Django, JavaScript y Bootstrap, incluyendo una plataforma de subastas y un sistema de correo electrónico basado en AJAX. Enfocado en diseño responsivo, autenticación de usuarios y navegación dinámica.',
    company: 'HarvardX'
  },
  alura: {
    date: 'Abr. 2022 – Dic. 2022',
    title: 'Desarrollador Web Junior',
    description: 'Construí aplicaciones web interactivas, incluyendo juegos, tiendas en línea y páginas de aterrizaje utilizando HTML5, CSS3 y JavaScript. Participé en desafíos de codificación aplicando buenas prácticas de UI/UX.',
    company: 'Alura Latam (ONE Program)'
  },
  dataScience: {
    date: 'Feb 2024 – Jun 2024',
    title: 'Practicante de Ciencia de Datos',
    description: 'Participé en un intensivo programa de capacitación en Ciencia de Datos enfocado en proyectos del mundo real y la aplicación de herramientas modernas de análisis y visualización. Desarrollé habilidades en estadísticas, análisis exploratorio de datos, limpieza y transformación de datos con Python.',
    company: 'Alura LATAM / Oracle Next Education'
  }
} as const;

// src/entities/experience/i18n/index.ts
import type { SupportedLanguage } from '../../../app/types/i18n';
import { experienceTranslations as en } from './en';
import { experienceTranslations as es } from './es';

export const experienceI18n: Record<SupportedLanguage, typeof en> = {
  en,
  es
};

export type ExperienceTranslationKey = keyof typeof en;
export type ExperienceItemKey = keyof typeof en.technicalSupport;
```

#### 2.4 Entidad Project

```typescript
// src/entities/project/i18n/en.ts
export const projectTranslations = {
  codeButton: 'Code',
  previewButton: 'Preview',
  badgesTitle: 'Badges'
} as const;

// src/entities/project/i18n/es.ts
export const projectTranslations = {
  codeButton: 'Código',
  previewButton: 'Vista previa',
  badgesTitle: 'Insignias'
} as const;

// src/entities/project/i18n/index.ts
import type { SupportedLanguage } from '../../../app/types/i18n';
import { projectTranslations as en } from './en';
import { projectTranslations as es } from './es';

export const projectI18n: Record<SupportedLanguage, typeof en> = {
  en,
  es
};

export type ProjectTranslationKey = keyof typeof en;
```

### **Paso 3: Crear Features con Traducciones**

#### 3.1 Feature Theme Toggle

```typescript
// src/features/theme-toggle/i18n/en.ts
export const themeToggleTranslations = {
  select: 'Choose theme',
  light: 'Light',
  dark: 'Dark',
  system: 'System'
} as const;

// src/features/theme-toggle/i18n/es.ts
export const themeToggleTranslations = {
  select: 'Elige el tema',
  light: 'Claro',
  dark: 'Oscuro',
  system: 'Sistema'
} as const;

// src/features/theme-toggle/i18n/index.ts
import type { SupportedLanguage } from '../../../app/types/i18n';
import { themeToggleTranslations as en } from './en';
import { themeToggleTranslations as es } from './es';

export const themeToggleI18n: Record<SupportedLanguage, typeof en> = {
  en,
  es
};

export type ThemeToggleTranslationKey = keyof typeof en;

// src/features/theme-toggle/model/types.ts
export interface ThemeToggleProps {
  // ... otras props
}

// src/features/theme-toggle/lib/translations.ts
import { createTranslationFunction } from '../../../shared/lib/i18n';
import { themeToggleI18n } from '../i18n';
import type { SupportedLanguage } from '../../../app/types/i18n';

export function useThemeToggleTranslations(language: SupportedLanguage) {
  return createTranslationFunction(themeToggleI18n, language);
}

// src/features/theme-toggle/index.ts
export { default as ThemeToggle } from './ui/ThemeToggle.astro';
export { useThemeToggleTranslations } from './lib/translations';
export type { ThemeToggleTranslationKey } from './i18n';
```

### **Paso 4: Crear Hooks/Composables de Traducción**

#### 4.1 Hook Principal de Traducciones

```typescript
// src/shared/lib/i18n/hooks.ts
import type { SupportedLanguage } from '../../../app/types/i18n';
import { detectLanguageFromUrl } from './utils';

// Para usar en componentes Astro
export function useI18n(url: URL) {
  const currentLanguage = detectLanguageFromUrl(url);
  
  return {
    currentLanguage,
    isDefaultLanguage: currentLanguage === 'es', // based on config
    
    // Utility for creating scoped translation functions
    createScopedTranslations<T extends Record<string, any>>(
      translations: Record<SupportedLanguage, T>
    ) {
      return function t(key: keyof T): string {
        const translation = translations[currentLanguage]?.[key] ?? translations['es']?.[key];
        
        if (typeof translation !== 'string') {
          console.warn(`Translation for key "${String(key)}" not found`);
          return String(key);
        }
        
        return translation;
      };
    }
  };
}

// Para usar con traducciones específicas de entidades/features
export function useEntityTranslations<T extends Record<string, any>>(
  url: URL,
  entityTranslations: Record<SupportedLanguage, T>
) {
  const { currentLanguage, createScopedTranslations } = useI18n(url);
  
  return {
    currentLanguage,
    t: createScopedTranslations(entityTranslations)
  };
}
```

### **Paso 5: Migrar Componentes Existentes**

#### 5.1 Actualizar Header

```astro
---
// src/components/Header.astro (temporal, luego mover a widgets)
import ThemeToggle from './ThemeToggle.astro';
import LanguagePicker from './LanguagePicker.astro';
import MenuIcon from '@assets/icons/MenuIcon.astro';

// Nueva importación siguiendo FSD
import { useEntityTranslations } from '../shared/lib/i18n/hooks';
import { navigationI18n } from '../entities/navigation/i18n';

const { currentLanguage, t } = useEntityTranslations(
  new URL(Astro.request.url), 
  navigationI18n
);

const navItems = [
  {
    title: t('experience'),
    label: 'experiencia',
    url: `/${currentLanguage}/#experience`,
  },
  {
    title: t('badges'),
    label: 'insignias',
    url: `/${currentLanguage}/#badges`,
  },
  {
    title: t('projects'),
    label: 'proyectos',
    url: `/${currentLanguage}/#projects`,
  },
  {
    title: t('about'),
    label: 'sobre-mi',
    url: `/${currentLanguage}/#about-me`,
  },
  {
    title: t('contact'),
    label: 'contacto',
    url: `/${currentLanguage}/#contact`,
  },
];
---

<!-- El resto del template se mantiene igual -->
```

#### 5.2 Actualizar Hero

```astro
---
// src/components/Hero.astro (temporal, luego mover a widgets)
import Badge from './Badge.astro';
import LinkedInIcon from '@assets/icons/LinkedIn.astro';
import SocialPill from './SocialPill.astro';
import GitHubIcon from '@assets/icons/GitHub.astro';
import MailIcon from '@assets/icons/Mail.astro';
import ProfileCheckIcon from '@assets/icons/ProfileCheck.astro';

// Nueva importación siguiendo FSD
import { useEntityTranslations } from '../shared/lib/i18n/hooks';
import { userI18n } from '../entities/user/i18n';

const { currentLanguage, t } = useEntityTranslations(
  new URL(Astro.request.url),
  userI18n
);
---

<div class="max-w-xl">
  <div class="flex gap-4 mb-4">
    <img
      class="rounded-full shadow-lg size-16"
      src="/perfil.webp"
      alt="David Sandoval"
    />
    <a
      href="https://linkedin.com/in/devsandoval"
      target="_blank"
      rel="noopener"
      class="flex items-center transition md:justify-center md:hover:scale-105"
    >
      <Badge>{t('available')}</Badge>
    </a>
  </div>
  <h1
    class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white"
  >
    {t('intro')}
  </h1>
  <p
    class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-600 [&>strong]:font-semibold dark:text-gray-300"
    set:html={t('description')}
  >
  </p>
  <!-- Resto del componente -->
</div>
```

### **Paso 6: Crear Widgets con i18n**

#### 6.1 Widget Header

```typescript
// src/widgets/header/lib/translations.ts
import { useEntityTranslations } from '../../../shared/lib/i18n/hooks';
import { navigationI18n } from '../../../entities/navigation/i18n';

export function useHeaderTranslations(url: URL) {
  return useEntityTranslations(url, navigationI18n);
}

// src/widgets/header/ui/Header.astro
---
import { ThemeToggle } from '../../../features/theme-toggle';
import { LanguageSelect } from '../../../features/language-select';
import { Logo } from '../../../shared/ui';
import { useHeaderTranslations } from '../lib/translations';

const { currentLanguage, t } = useHeaderTranslations(new URL(Astro.request.url));

const navItems = [
  {
    title: t('experience'),
    label: 'experiencia',
    url: `/${currentLanguage}/#experience`,
  },
  {
    title: t('badges'),
    label: 'insignias',
    url: `/${currentLanguage}/#badges`,
  },
  {
    title: t('projects'),
    label: 'proyectos',
    url: `/${currentLanguage}/#projects`,
  },
  {
    title: t('about'),
    label: 'sobre-mi',
    url: `/${currentLanguage}/#about-me`,
  },
  {
    title: t('contact'),
    label: 'contacto',
    url: `/${currentLanguage}/#contact`,
  },
];
---

<header class="header">
  <div class="header__container">
    <Logo />
    <nav class="header__nav">
      {navItems.map(item => (
        <a href={item.url} class="header__nav-link">
          {item.title}
        </a>
      ))}
    </nav>
    <div class="header__actions">
      <LanguageSelect />
      <ThemeToggle />
    </div>
  </div>
</header>

// src/widgets/header/index.ts
export { default as Header } from './ui/Header.astro';
```

### **Paso 7: App Provider para i18n**

#### 7.1 Provider de Idioma Global

```astro
---
// src/app/providers/i18n/I18nProvider.astro
import type { SupportedLanguage } from '../../types/i18n';

interface Props {
  language: SupportedLanguage;
}

const { language } = Astro.props;
---

<script define:vars={{ language }}>
  // Set global language context
  window.__LANGUAGE__ = language;
  document.documentElement.lang = language;
</script>

<slot />

<!-- Global i18n styles/behaviors can go here -->

// src/app/providers/i18n/index.ts
export { default as I18nProvider } from './I18nProvider.astro';
```

## 📋 Lista de Tareas para la Migración

### **Fase 1: Infraestructura (1-2 días)**

- [ ] Crear estructura de directorios FSD para i18n
- [ ] Implementar tipos TypeScript globales
- [ ] Crear configuración global de i18n
- [ ] Desarrollar utilidades compartidas
- [ ] Crear hooks/composables de traducción

### **Fase 2: Migración de Entidades (2-3 días)**

- [ ] Migrar traducciones de navegación
- [ ] Migrar traducciones de usuario (hero/about)
- [ ] Migrar traducciones de experiencia
- [ ] Migrar traducciones de proyectos
- [ ] Crear entidades que falten

### **Fase 3: Features con i18n (1-2 días)**

- [ ] Crear feature theme-toggle con traducciones
- [ ] Crear feature language-select con traducciones
- [ ] Migrar otros features existentes

### **Fase 4: Widgets (2-3 días)**

- [ ] Crear widget Header con composición
- [ ] Crear widget Hero con entidad User
- [ ] Crear widget Experience con entidad Experience
- [ ] Crear widget Projects con entidad Project
- [ ] Crear widget Footer

### **Fase 5: Actualización de Pages (1 día)**

- [ ] Actualizar páginas para usar widgets
- [ ] Implementar provider i18n en app layer
- [ ] Configurar routing multiidioma

### **Fase 6: Limpieza y Testing (1 día)**

- [ ] Eliminar archivos i18n legacy
- [ ] Actualizar imports en todos los componentes
- [ ] Testing de funcionalidad i18n
- [ ] Documentación de la nueva estructura

## 🔄 Consideraciones de Compatibilidad

### **Durante la Migración**

1. **Mantener i18n legacy** hasta completar la migración
2. **Migrar componente por componente** para evitar romper la funcionalidad
3. **Crear aliases temporales** para mantener compatibilidad
4. **Testing continuo** de funcionalidad i18n

### **Beneficios Post-Migración**

1. **Escalabilidad**: Fácil agregar nuevos idiomas
2. **Mantenibilidad**: Traducciones organizadas por dominio
3. **Reutilización**: Utilities i18n compartidas
4. **Type Safety**: TypeScript completo en traducciones
5. **Performance**: Lazy loading de traducciones por feature

## 🚀 Próximos Pasos

1. **Empezar con Fase 1** (Infraestructura)
2. **Validar estructura** con un componente pequeño
3. **Iterar** fase por fase
4. **Documentar** patrones establecidos
5. **Optimizar** según necesidades del proyecto

Esta refactorización seguirá estrictamente los principios FSD y creará una base sólida y escalable para el sistema de internacionalización del portfolio.
