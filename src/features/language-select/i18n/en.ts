/**
 * Language Select Feature - English translations
 * Features Layer - Language switching functionality
 */

export const languageSelectTranslations = {
	select: 'Choose language',
	english: 'English',
	spanish: 'Español',
	currentLanguage: 'Current language',
} as const;

export type LanguageSelectTranslationKey = keyof typeof languageSelectTranslations;
