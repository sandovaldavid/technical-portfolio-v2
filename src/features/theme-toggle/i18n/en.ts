/**
 * Theme Toggle Feature - English translations
 * Features Layer - Theme switching functionality
 */

export const themeToggleTranslations = {
	select: 'Choose theme',
	light: 'Light',
	dark: 'Dark',
	system: 'System',
} as const;

export type ThemeToggleTranslationKey = keyof typeof themeToggleTranslations;
