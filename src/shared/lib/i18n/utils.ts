/**
 * Shared i18n utilities
 * Shared Layer - Reusable language detection and formatting utilities
 */

import type {
	SupportedLanguage,
	LanguageDetectionResult,
	TranslationFunction,
} from '../../../app/types/i18n';
import { LanguageSource } from '../../../app/types/i18n';
import {
	I18N_CONFIG,
	isSupportedLanguage,
	getLanguageFromPath,
	I18N_STORAGE_KEYS,
} from '../../../app/config/i18n';

/**
 * Detects language from URL pathname
 */
export function detectLanguageFromUrl(url: URL): LanguageDetectionResult {
	const detectedLang = getLanguageFromPath(url.pathname);

	if (detectedLang) {
		return {
			language: detectedLang,
			source: LanguageSource.URL,
			confidence: 1.0,
		};
	}

	return {
		language: I18N_CONFIG.defaultLanguage,
		source: LanguageSource.DEFAULT,
		confidence: 0.5,
	};
}

/**
 * Detects language from browser preferences
 */
export function detectLanguageFromBrowser(): LanguageDetectionResult {
	if (typeof navigator === 'undefined') {
		return {
			language: I18N_CONFIG.defaultLanguage,
			source: LanguageSource.DEFAULT,
			confidence: 0.0,
		};
	}

	// Check primary language
	const primaryLang = navigator.language.split('-')[0];
	if (isSupportedLanguage(primaryLang)) {
		return {
			language: primaryLang,
			source: LanguageSource.BROWSER,
			confidence: 0.8,
		};
	}

	// Check language list
	for (const lang of navigator.languages) {
		const langCode = lang.split('-')[0];
		if (isSupportedLanguage(langCode)) {
			return {
				language: langCode,
				source: LanguageSource.BROWSER,
				confidence: 0.6,
			};
		}
	}

	return {
		language: I18N_CONFIG.defaultLanguage,
		source: LanguageSource.DEFAULT,
		confidence: 0.3,
	};
}

/**
 * Detects language from localStorage
 */
export function detectLanguageFromStorage(): LanguageDetectionResult {
	if (typeof localStorage === 'undefined') {
		return {
			language: I18N_CONFIG.defaultLanguage,
			source: LanguageSource.DEFAULT,
			confidence: 0.0,
		};
	}

	try {
		const stored = localStorage.getItem(I18N_STORAGE_KEYS.PREFERRED_LANGUAGE);
		if (stored && isSupportedLanguage(stored)) {
			return {
				language: stored,
				source: LanguageSource.STORAGE,
				confidence: 0.9,
			};
		}
	} catch (error) {
		console.warn('Error reading language from storage:', error);
	}

	return {
		language: I18N_CONFIG.defaultLanguage,
		source: LanguageSource.DEFAULT,
		confidence: 0.0,
	};
}

/**
 * Comprehensive language detection with fallback strategy
 */
export function detectLanguage(url?: URL): LanguageDetectionResult {
	const detectionMethods = [
		() => (url ? detectLanguageFromUrl(url) : null),
		() => detectLanguageFromStorage(),
		() => detectLanguageFromBrowser(),
	].filter(Boolean);

	let bestResult: LanguageDetectionResult = {
		language: I18N_CONFIG.defaultLanguage,
		source: LanguageSource.DEFAULT,
		confidence: 0.0,
	};

	for (const method of detectionMethods) {
		if (!method) continue;

		const result = method();
		if (result && result.confidence > bestResult.confidence) {
			bestResult = result;
		}

		// If we have high confidence, stop looking
		if (result && result.confidence >= 0.9) {
			break;
		}
	}

	return bestResult;
}

/**
 * Persists language preference to storage
 */
export function persistLanguagePreference(language: SupportedLanguage): void {
	if (typeof localStorage === 'undefined') {
		return;
	}

	try {
		localStorage.setItem(I18N_STORAGE_KEYS.PREFERRED_LANGUAGE, language);
	} catch (error) {
		console.warn('Error persisting language preference:', error);
	}
}

/**
 * Creates a typed translation function for a specific translation namespace
 */
export function createTranslationFunction<T extends Record<string, any>>(
	translations: Record<SupportedLanguage, T>,
	language: SupportedLanguage
): TranslationFunction<T> {
	return function t(key: keyof T): string {
		// Try current language first
		let translation = translations[language]?.[key];

		// Fallback to default language
		if (translation === undefined) {
			translation = translations[I18N_CONFIG.fallbackLanguage]?.[key];
		}

		// Final fallback to key itself
		if (translation === undefined) {
			console.warn(`Translation missing for key "${String(key)}" in language "${language}"`);
			return String(key);
		}

		// Ensure we return a string
		if (typeof translation !== 'string') {
			console.warn(`Translation for key "${String(key)}" is not a string:`, translation);
			return String(key);
		}

		return translation;
	};
}

/**
 * Validates that all required translation keys exist
 */
export function validateTranslations<T extends Record<string, any>>(
	translations: Record<SupportedLanguage, T>,
	requiredKeys: (keyof T)[]
): { isValid: boolean; missingKeys: string[]; errors: string[] } {
	const errors: string[] = [];
	const missingKeys: string[] = [];

	for (const language of I18N_CONFIG.supportedLanguages) {
		const langTranslations = translations[language];

		if (!langTranslations) {
			errors.push(`Missing translations for language: ${language}`);
			continue;
		}

		for (const key of requiredKeys) {
			if (!(key in langTranslations)) {
				const missingKey = `${language}.${String(key)}`;
				missingKeys.push(missingKey);
				errors.push(`Missing translation key: ${missingKey}`);
			}
		}
	}

	return {
		isValid: errors.length === 0,
		missingKeys,
		errors,
	};
}

/**
 * Formats a translation key for error reporting
 */
export function formatTranslationKey(namespace: string, key: string): string {
	return `${namespace}.${key}`;
}

/**
 * Interpolates variables in translation strings
 * Example: interpolate("Hello {{name}}!", { name: "World" }) => "Hello World!"
 */
export function interpolate(template: string, variables: Record<string, string | number>): string {
	return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
		const value = variables[key];
		return value !== undefined ? String(value) : match;
	});
}

/**
 * Pluralization helper for different languages
 */
export function pluralize(
	count: number,
	translations: { zero?: string; one: string; few?: string; many: string },
	language: SupportedLanguage
): string {
	if (count === 0 && translations.zero) {
		return translations.zero;
	}

	if (count === 1) {
		return translations.one;
	}

	// Simple pluralization rules for ES/EN
	if (language === 'es' || language === 'en') {
		return translations.many;
	}

	return translations.many;
}
