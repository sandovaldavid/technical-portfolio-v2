/**
 * Header Widget - Public API
 * Widgets Layer - Header widget exports
 */

export { default as Header } from './ui/Header.astro';

export type { HeaderProps, NavigationItem } from './model/types';

export { useHeaderTranslations, createNavigationItems } from './lib/translations';
