/**
 * Navigation Entity - English translations
 * Entities Layer - Business domain: Navigation menu items
 */

export const navigationTranslations = {
	experience: 'Experience',
	projects: 'Projects',
	badges: 'Badges',
	about: 'About me',
	contact: 'Contact',
} as const;

export type NavigationTranslationKey = keyof typeof navigationTranslations;
