/**
 * Dynamic Language Feature - Language Detection Service
 * Features Layer - Automatic language detection and browser preference handling
 */

import type { SupportedLanguage } from '../../../app/types/i18n';
import { I18N_CONFIG } from '../../../app/config/i18n';

export interface LanguageDetectionResult {
	language: SupportedLanguage;
	source: 'browser' | 'storage' | 'fallback';
	confidence: number;
}

/**
 * Detect user's preferred language from browser settings
 */
export function detectBrowserLanguage(): SupportedLanguage | null {
	if (typeof navigator === 'undefined') return null;

	// Get browser languages in preference order
	const browserLanguages = navigator.languages || [navigator.language];

	for (const browserLang of browserLanguages) {
		// Extract language code (e.g., 'en-US' -> 'en')
		const langCode = browserLang.split('-')[0].toLowerCase();
		
		// Check if it's supported
		if (I18N_CONFIG.supportedLanguages.includes(langCode as SupportedLanguage)) {
			return langCode as SupportedLanguage;
		}
	}

	return null;
}

/**
 * Get stored language preference from localStorage
 */
export function getStoredLanguagePreference(): SupportedLanguage | null {
	if (typeof localStorage === 'undefined') return null;

	try {
		const stored = localStorage.getItem('preferredLanguage');
		if (stored && I18N_CONFIG.supportedLanguages.includes(stored as SupportedLanguage)) {
			return stored as SupportedLanguage;
		}
	} catch (error) {
		console.warn('Failed to read language preference from storage:', error);
	}

	return null;
}

/**
 * Store language preference in localStorage
 */
export function storeLanguagePreference(language: SupportedLanguage): void {
	if (typeof localStorage === 'undefined') return;

	try {
		localStorage.setItem('preferredLanguage', language);
	} catch (error) {
		console.warn('Failed to store language preference:', error);
	}
}

/**
 * Comprehensive language detection with fallback hierarchy
 */
export function detectUserLanguage(): LanguageDetectionResult {
	// 1. Check stored preference first (highest priority)
	const storedLang = getStoredLanguagePreference();
	if (storedLang) {
		return {
			language: storedLang,
			source: 'storage',
			confidence: 0.9
		};
	}

	// 2. Check browser preferences
	const browserLang = detectBrowserLanguage();
	if (browserLang) {
		// Store detected browser language for future use
		storeLanguagePreference(browserLang);
		return {
			language: browserLang,
			source: 'browser',
			confidence: 0.8
		};
	}

	// 3. Fallback to default language (Spanish as requested)
	return {
		language: I18N_CONFIG.defaultLanguage,
		source: 'fallback',
		confidence: 0.5
	};
}

/**
 * Initialize language on page load
 */
export function initializeLanguage(): LanguageDetectionResult {
	const result = detectUserLanguage();
	
	// Log detection result for debugging
	console.log('Language detection result:', {
		language: result.language,
		source: result.source,
		confidence: result.confidence,
		browserLanguages: typeof navigator !== 'undefined' ? navigator.languages : 'N/A'
	});

	return result;
}

/**
 * Change language and persist preference
 */
export function changeLanguage(newLanguage: SupportedLanguage): void {
	if (!I18N_CONFIG.supportedLanguages.includes(newLanguage)) {
		console.warn(`Unsupported language: ${newLanguage}`);
		return;
	}

	// Store new preference
	storeLanguagePreference(newLanguage);

	// Dispatch language change event
	if (typeof window !== 'undefined') {
		const previousLanguage = window.__LANGUAGE__;
		window.__LANGUAGE__ = newLanguage;

		window.dispatchEvent(new CustomEvent('languageChanged', {
			detail: {
				language: newLanguage,
				previousLanguage,
				source: 'user'
			}
		}));
	}
}

/**
 * Get current active language
 */
export function getCurrentLanguage(): SupportedLanguage {
	if (typeof window !== 'undefined' && window.__LANGUAGE__) {
		return window.__LANGUAGE__ as SupportedLanguage;
	}
	
	return detectUserLanguage().language;
}

/**
 * Check if language switching is available
 */
export function isLanguageSwitchingSupported(): boolean {
	return typeof window !== 'undefined' && 
		   typeof localStorage !== 'undefined' && 
		   I18N_CONFIG.supportedLanguages.length > 1;
}