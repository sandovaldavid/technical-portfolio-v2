/**
 * Supported language codes
 */
export type Language = 'es' | 'en';

/**
 * Language picker props
 */
export interface LanguagePickerProps {
	/** Current language */
	currentLang?: Language;
}
