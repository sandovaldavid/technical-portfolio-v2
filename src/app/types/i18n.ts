/**
 * Global i18n types for the Technical Portfolio application
 * Following Feature-Sliced Design architecture
 */

// Supported languages in the application
export type SupportedLanguage = 'en' | 'es';

// Global i18n configuration interface
export interface I18nConfig {
	/** Default language when no language is specified */
	defaultLanguage: SupportedLanguage;
	/** Array of all supported languages */
	supportedLanguages: SupportedLanguage[];
	/** Fallback language when translation is missing */
	fallbackLanguage: SupportedLanguage;
}

// Basic translation entry - can be nested
export interface TranslationEntry {
	[key: string]: string | TranslationEntry;
}

// Translation namespace for a specific domain/feature
export interface TranslationNamespace {
	[language: string]: TranslationEntry;
}

// Language detection source
export enum LanguageSource {
	URL = 'url',
	BROWSER = 'browser',
	DEFAULT = 'default',
	STORAGE = 'storage',
}

// Language detection result
export interface LanguageDetectionResult {
	language: SupportedLanguage;
	source: LanguageSource;
	confidence: number; // 0-1, how confident we are in this detection
}

// Translation function type
export type TranslationFunction<T extends Record<string, any>> = (key: keyof T) => string;

// Translation context for components
export interface I18nContext {
	currentLanguage: SupportedLanguage;
	isDefaultLanguage: boolean;
	switchLanguage: (language: SupportedLanguage) => void;
	detectLanguage: () => LanguageDetectionResult;
}

// Generic translation hook return type
export interface UseTranslationReturn<T extends Record<string, any>> {
	currentLanguage: SupportedLanguage;
	t: TranslationFunction<T>;
	isLoading?: boolean;
	error?: Error;
}

// Global window extensions for language state
declare global {
	interface Window {
		__LANGUAGE__?: SupportedLanguage;
		__PREVIOUS_LANGUAGE__?: SupportedLanguage;
		__LANGUAGE_INITIALIZED__?: boolean;
	}
}
