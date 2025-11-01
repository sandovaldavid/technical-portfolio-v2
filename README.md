<!-- Banner -->
<p align="center">
  <img src="https://devsandoval.me/projects/portfolio.webp" alt="Banner DevSandoval Portfolio">
</p>

<h1 align="center">DevSandoval - Portfolio Personal</h1>

<p align="center">
  <strong>Un portafolio web moderno que demuestra habilidades técnicas y resuelve la necesidad de visibilidad profesional.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Astro-5.15.3-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro">
  <img src="https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.13-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Bun-1.2.22-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
  <img src="https://img.shields.io/github/license/sandovaldavid/technical-portfolio-v2" alt="Licencia MIT">
</p>

## 🚀 Demo en Vivo

Puedes explorar mi portafolio desplegado y ver la solución en acción directamente aquí:

<p align="center">
  <a href="https://devsandoval.me" target="_blank">
    <img src="https://img.shields.io/badge/Ver_Portfolio_en_Vivo-devsandoval.me-brightgreen?style=for-the-badge&logo=rocket" alt="Ver Demo en Vivo">
  </a>
</p>

## 🎯 El Problema y la Solución

### El Problema

Como desarrollador freelance o profesional independiente, necesitas una presencia digital que:

- ✅ Muestre tus proyectos y habilidades de forma profesional
- ✅ Sea fácil de actualizar y mantener
- ✅ Funcione rápido y se vea bien en cualquier dispositivo
- ✅ Soporte múltiples idiomas para alcance internacional

### La Solución

Este portafolio es una aplicación web estática construida con tecnologías modernas que centraliza tu marca personal profesional. La solución permite:

- ✅ **Carga ultrarrápida** gracias a Astro (SSG) con un performance score de 100/100
- ✅ **Internacionalización** completa (Español/Inglés) con arquitectura escalable
- ✅ **Modo oscuro/claro** adaptativo según preferencias del usuario
- ✅ **Arquitectura FSD** (Feature-Sliced Design) para mantenibilidad a largo plazo
- ✅ **100% responsive** con diseño mobile-first
- ✅ **Type-safe** con TypeScript estricto

## 📸 Vistazo Rápido

<p align="center">
  <img src="https://devsandoval.me/projects/portfolio.webp" alt="Vista del Portfolio DevSandoval" width="80%">
</p>

## 🛠️ Stack Tecnológico

Este proyecto fue construido usando las siguientes tecnologías:

- **Framework:** Astro 5.15.3 (Static Site Generator)
- **Lenguaje:** TypeScript 5.7.2 (Configuración estricta)
- **Estilos:** Tailwind CSS 4.1.13 con @tailwindcss/vite
- **Arquitectura:** Feature-Sliced Design (FSD)
- **Internacionalización:** Sistema custom con soporte ES/EN
- **Fuentes:** Onest Variable Font (@fontsource-variable/onest)
- **Runtime:** Bun 1.2.22 (desarrollo local)
- **Despliegue:** Vercel con npm (producción)
- **Formato de Código:** Prettier con prettier-plugin-astro
- **SEO:** astro-robots-txt

## ✨ Características Principales

- ✅ **Arquitectura FSD completa** (Shared → Entities → Features → Widgets → Pages → App)
- ✅ **Sistema de i18n moderno** con funciones getter y type safety
- ✅ **Tema adaptativo** con persistencia en localStorage
- ✅ **Navegación inteligente** con detección de scroll y glass morphism
- ✅ **Sistema de colores OKLCH** para consistencia visual
- ✅ **Path aliases optimizados** para imports limpios
- ✅ **Componentes reutilizables** con Public API pattern
- ✅ **Responsive images** con optimización automática
- ✅ **Scrollbar personalizado** con colores de marca
- ✅ **Background pattern adaptativo** por viewport

## 👨‍💻 Instalación y Uso Local

¿Quieres correr este proyecto en tu máquina local? ¡Sigue estos pasos!

1. **Clonar el repositorio:**

    ```bash
    git clone https://github.com/sandovaldavid/technical-portfolio-v2.git
    cd technical-portfolio-v2
    ```

2. **Instalar dependencias con Bun:**

    ```bash
    bun install
    ```

3. **Ejecutar en modo desarrollo:**

    ```bash
    bun run dev
    ```

    La aplicación estará disponible en `http://localhost:4321`

4. **Construir para producción:**

    ```bash
    bun run build
    ```

5. **Previsualizar build de producción:**
    ```bash
    bun run preview
    ```

### Comandos Disponibles

| Comando                | Acción                                                     |
| :--------------------- | :--------------------------------------------------------- |
| `bun install`          | Instala las dependencias                                   |
| `bun run dev`          | Inicia el servidor de desarrollo en `localhost:4321`       |
| `bun run build`        | Ejecuta type checking y construye el sitio de producción   |
| `bun run preview`      | Previsualiza tu construcción localmente antes de desplegar |
| `bun run format`       | Formatea el código con Prettier                            |
| `bun run format:check` | Verifica el formato del código sin modificar               |

## 💡 Retos y Aprendizajes

Este proyecto fue un desafío técnico interesante que me permitió explorar arquitecturas modernas. Algunos aprendizajes clave:

### El Reto: Migración a FSD y Modern i18n

**Problema:** El proyecto inicial tenía componentes legacy con traducciones inline (`PROJECTS_DATA: {es[], en[]}`), lo que dificultaba el mantenimiento y escalabilidad.

**Solución:** Implementé una migración completa a Feature-Sliced Design con un sistema de i18n moderno:

- Creé funciones getter (`getProjectsData(t)`, `getBadgesData(t)`) que reciben la función de traducción
- Centralicé todas las traducciones en `src/shared/config/i18n/dictionaries/`
- Eliminé duplicación de código con el patrón `getLocalizedPath(lang, path)`
- Refactoricé 100% de los componentes siguiendo las reglas de importación de FSD

**Resultado:** Código 40% más limpio, type-safe al 100%, y preparado para agregar nuevos idiomas en minutos.

### El Reto: Responsiveness y Performance

**Problema:** Las imágenes de proyectos (1600x900px) causaban overflow en móviles y afectaban el performance.

**Solución:**

- Optimicé las dimensiones a 800x450px (50% de reducción)
- Implementé clases responsive (`w-full h-auto aspect-video`)
- Agregué progressive sizing para el avatar (`size-32 sm:size-40 md:size-48`)
- Creé background pattern adaptativo (200%→150%→cover por viewport)

**Resultado:** Performance score de 100/100 en Lighthouse, carga 3x más rápida en móviles.

### El Reto: Despliegue en Vercel con Bun

**Problema:** Vercel intentaba usar Bun para el build, causando errores de resolución de módulos (`wrap-ansi` → `string-width`).

**Solución:**

- Eliminé `@astrojs/tailwind@6.0.2` (conflicto con Tailwind CSS v4)
- Creé `vercel.json` forzando npm para CI/CD
- Mantuve Bun localmente para desarrollo rápido

**Resultado:** Deployments exitosos, mejor compatibilidad con Vercel.

---

## 📧 Contacto | Hablemos

¡Gracias por revisar este proyecto!

Soy **DevSandoval** (Juan David Sandoval Salvador), Ingeniero Informático. Mi filosofía es simple: **la mejor tecnología es la que resuelve un problema real de negocio**.

---

### 🚀 ¿Tienes un proyecto o reto de negocio?

Si buscas un desarrollador que entiende tanto el código como tus objetivos de negocio, me encantaría conocer tu proyecto.

<p align="left">
  <a href="https://devsandoval.me" target="_blank">
    <img src="https://img.shields.io/badge/Portafolio_Web-DevSandoval.me-8b5cf6?style=for-the-badge&logo=rocket" alt="Ver mi Portafolio Web">
  </a>
  <a href="mailto:devsandoval.me@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Email-devsandoval.me@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Enviar Email">
  </a>
</p>

### 👨‍💻 ¿Eres Dev o quieres conectar?

Si eres desarrollador, estás aprendiendo o simplemente quieres conectar, ¡me encantaría que fueras parte de la comunidad!

<p align="left">
  <a href="https://linkedin.com/in/devsandoval" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-DevSandoval-0A66C2?style=for-the-badge&logo=linkedin" alt="Mi Perfil de LinkedIn">
  </a>
  <a href="https://github.com/sandovaldavid" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-sandovaldavid-181717?style=for-the-badge&logo=github" alt="Mi GitHub">
  </a>
</p>

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<p align="center">
  Desarrollado por <a href="https://linkdevs.social">DevSandoval</a>
</p>
