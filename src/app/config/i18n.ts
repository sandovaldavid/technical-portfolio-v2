/**
 * Global i18n configuration for the Technical Portfolio
 * App Layer - Contains application-wide i18n settings
 */

import type { I18nConfig, SupportedLanguage } from '../types/i18n';

// Main i18n configuration
export const I18N_CONFIG: Readonly<I18nConfig> = {
	defaultLanguage: 'es',
	supportedLanguages: ['en', 'es'],
	fallbackLanguage: 'es',
} as const;

// Language display labels for UI
export const LANGUAGE_LABELS: Readonly<Record<SupportedLanguage, string>> = {
	en: 'English',
	es: 'Español',
} as const;

// Language flags/icons for UI
export const LANGUAGE_FLAGS: Readonly<Record<SupportedLanguage, string>> = {
	en: '🇺🇸',
	es: '🇪🇸',
} as const;

// Route patterns for language detection
export const LANGUAGE_ROUTE_PATTERNS: Readonly<Record<SupportedLanguage, RegExp>> = {
	en: /^\/en(\/.*)?$/,
	es: /^\/es(\/.*)?$|^\/$/, // Spanish includes root path
} as const;

// Storage keys for persistence
export const I18N_STORAGE_KEYS = {
	PREFERRED_LANGUAGE: 'portfolio_preferred_language',
	LANGUAGE_DETECTION_CACHE: 'portfolio_language_cache',
} as const;

// Default URLs for each language
export const DEFAULT_LANGUAGE_URLS: Readonly<Record<SupportedLanguage, string>> = {
	en: '/en',
	es: '/', // Spanish is default, so root path
} as const;

// Validation helpers
export function isSupportedLanguage(lang: string): lang is SupportedLanguage {
	return I18N_CONFIG.supportedLanguages.includes(lang as SupportedLanguage);
}

export function getLanguageLabel(lang: SupportedLanguage): string {
	return LANGUAGE_LABELS[lang];
}

export function getLanguageFlag(lang: SupportedLanguage): string {
	return LANGUAGE_FLAGS[lang];
}

// URL helpers
export function getLanguageFromPath(path: string): SupportedLanguage | null {
	for (const [lang, pattern] of Object.entries(LANGUAGE_ROUTE_PATTERNS)) {
		if (pattern.test(path)) {
			return lang as SupportedLanguage;
		}
	}
	return null;
}

export function buildLanguageUrl(lang: SupportedLanguage, path: string = ''): string {
	const baseUrl = DEFAULT_LANGUAGE_URLS[lang];

	// Handle root path for default language
	if (lang === I18N_CONFIG.defaultLanguage && path === '/') {
		return baseUrl;
	}

	// Clean and append path
	const cleanPath = path.startsWith('/') ? path : `/${path}`;
	return `${baseUrl}${cleanPath}`.replace(/\/+/g, '/');
}
