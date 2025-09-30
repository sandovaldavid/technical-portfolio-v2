# GitHub Copilot Instructions for Technical Portfolio V2

Este proyecto utiliza un sistema completo de instrucciones personalizadas para GitHub Copilot que implementa la arquitectura **Feature-Sliced Design (FSD)**. Las instrucciones están organizadas en diferentes niveles para proporcionar contexto específico según el área de trabajo.

## 📜 Estructura de Instrucciones

### 1. Instrucciones Generales del Proyecto

**Archivo**: [`.github/copilot-instructions.md`](.github/copilot-instructions.md)

**Propósito**: Instrucciones principales que cubren:
- Descripción general del proyecto
- Stack tecnológico (Astro, TypeScript, Tailwind CSS)
- Principios de arquitectura FSD
- Estándares de código y convenciones
- Comandos de desarrollo y deployment
- Directrices de UI/UX y rendimiento

### 2. Instrucciones por Capas FSD

Cada capa de FSD tiene su propio archivo `.instructions.md` con reglas específicas:

#### **App Layer** - [`src/app/.instructions.md`](.github/instructions/app.instructions.md)
- Configuración global de la aplicación
- Providers y contexto global
- Estilos globales y temas
- Inicialización de la aplicación

#### **Pages Layer** - [`src/pages/.instructions.md`](.github/instructions/pages.instructions.md)
- Páginas de Astro y rutas
- Composición de widgets en páginas completas
- Gestión de datos específicos de página
- SEO y meta tags

#### **Widgets Layer** - [`src/widgets/.instructions.md`](.github/instructions/widgets.instructions.md)
- Bloques de UI grandes y autónomos
- Secciones principales de página (Header, Footer, Hero)
- Combinación de features y entities
- Componentes reutilizables complejos

#### **Features Layer** - [`src/features/.instructions.md`](.github/instructions/features.instructions.md)
- Funcionalidades de negocio reutilizables
- Interacciones y acciones del usuario
- Componentes con lógica de negocio
- Gestión de estado específico de features

#### **Entities Layer** - [`src/entities/.instructions.md`](.github/instructions/entities.instructions.md)
- Modelos de dominio y entidades de negocio
- Tipos de datos y interfaces principales
- Lógica de negocio central
- Operaciones específicas de entidades

#### **Shared Layer** - [`src/shared/.instructions.md`](.github/instructions/shared.instructions.md)
- Sistema de diseño y componentes UI básicos
- Utilidades y funciones helper
- Configuración y constantes
- Assets estáticos y recursos compartidos

### 3. Instrucciones por Segmentos

Instrucciones específicas para los segmentos transversales de FSD:

#### **UI Segment** - [`.github/instructions/ui-segment.instructions.md`](.github/instructions/ui-segment.instructions.md)
- Componentes Astro y estructura
- Patrones de diseño responsive
- Accesibilidad y semántica HTML
- Estilos con Tailwind CSS
- Manejo de interactividad client-side

#### **Model Segment** - [`.github/instructions/model-segment.instructions.md`](.github/instructions/model-segment.instructions.md)
- Tipos e interfaces TypeScript
- Lógica de negocio y validaciones
- Gestión de estado y stores
- Operaciones de datos y transformaciones
- Constantes y configuración de dominio

## 🎡 Arquitectura FSD Implementada

### Jerarquía de Capas (de arriba hacia abajo)

```
src/
├── app/           # 🎯 App - Configuración global
├── pages/         # 📟 Pages - Páginas de Astro
├── widgets/       # 🧩 Widgets - Bloques UI grandes + case de uso
├── features/      # ✨ Features - Funcionalidades reutilizables
├── entities/      # 📊 Entities - Modelos de dominio
└── shared/        # 🔧 Shared - Utilidades y componentes básicos
```

### Reglas Fundamentales de FSD

1. **⬇️ Import Rule**: Las capas solo pueden importar de capas inferiores
2. **🚫 Slice Independence**: Los slices del mismo nivel no pueden depender entre sí
3. **📦 Public API**: Cada slice expone una API pública a través de `index.ts`

### Segmentos Estándar

- **`ui/`**: Componentes visuales y UI
- **`model/`**: Lógica de negocio y tipos
- **`api/`**: Integraciones y llamadas externas
- **`lib/`**: Utilidades específicas del slice
- **`config/`**: Configuración y constantes

## 🚀 Cómo Usar las Instrucciones

### Para GitHub Copilot Chat

1. **Contexto General**: Copilot lee automáticamente `.github/copilot-instructions.md`
2. **Contexto de Capa**: Al trabajar en `src/{layer}/`, lee `src/{layer}/.instructions.md`
3. **Contexto de Segmento**: Al trabajar con UI o Model, considera las instrucciones específicas

### Para Desarrollo Manual

1. **Antes de crear nuevos componentes**: Revisa las instrucciones de la capa correspondiente
2. **Al refactorizar**: Usa las reglas FSD para determinar la ubicación correcta
3. **Para mantener consistencia**: Sigue los patrones establecidos en las instrucciones

## 📅 Ejemplos de Aplicación

### Crear un Nuevo Widget

```bash
# 1. Ubicación correcta según FSD
src/widgets/contact-section/
├── ui/
│   └── ContactSection.astro
├── model/
│   └── types.ts
└── index.ts
```

### Crear una Nueva Feature

```bash
# 2. Feature para cambio de idioma
src/features/language-toggle/
├── ui/
│   └── LanguageToggle.astro
├── model/
│   ├── store.ts
│   └── types.ts
├── lib/
│   └── i18n-utils.ts
└── index.ts
```

### Crear una Entity

```bash
# 3. Entity para proyectos
src/entities/project/
├── ui/
│   ├── ProjectCard.astro
│   └── ProjectDetail.astro
├── model/
│   ├── types.ts
│   └── validation.ts
├── api/
│   └── projects-api.ts
└── index.ts
```

## 👥 Colaboración

### Para Nuevos Colaboradores

1. Lee las instrucciones generales en [`.github/copilot-instructions.md`](.github/copilot-instructions.md)
2. Familiarízate con la arquitectura FSD
3. Revisa las instrucciones específicas de la capa donde trabajarás
4. Usa GitHub Copilot Chat con el contexto de estas instrucciones

### Para Mantener Consistencia

- **✅ Siempre** revisa las reglas de importación antes de agregar dependencias
- **✅ Siempre** coloca nuevos componentes en la capa correcta según su propósito
- **✅ Siempre** sigue los patrones de naming y estructura establecidos
- **❌ Nunca** violes las reglas de importación entre capas
- **❌ Nunca** crees dependencias cruzadas entre slices del mismo nivel

## 🔄 Migración Actual

El proyecto está en proceso de migración de una estructura tradicional a FSD:

### Estado Actual
- ✅ Instrucciones FSD completadas
- ✅ Estructura base definida
- 🚧 Migración de componentes existentes en progreso
- 🚧 Refactoring de imports y dependencias

### Próximos Pasos
1. Migrar componentes de `src/components/` a las capas FSD apropiadas
2. Establecer APIs públicas para cada slice
3. Resolver violaciones de importación
4. Implementar pruebas para validar la arquitectura

## 📚 Recursos Adicionales

- [Documentación Oficial de FSD](https://feature-sliced.github.io/documentation/)
- [GitHub Copilot Custom Instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions)
- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

💡 **Tip**: GitHub Copilot leerá automáticamente estas instrucciones según el contexto de tu trabajo, proporcionando sugerencias más precisas y consistentes con la arquitectura del proyecto.