/**
 * i18n hooks and composables
 * Shared Layer - Reusable translation hooks for Astro components
 */

import type {
	SupportedLanguage,
	UseTranslationReturn,
	I18nContext,
	LanguageDetectionResult,
} from '../../../app/types/i18n';
import {
	detectLanguage,
	createTranslationFunction,
	persistLanguagePreference,
	detectLanguageFromUrl,
} from './utils';
import { I18N_CONFIG } from '../../../app/config/i18n';

/**
 * Main i18n hook for Astro components
 * Provides language detection and basic i18n functionality
 */
export function useI18n(url: URL): I18nContext & { detectionResult: LanguageDetectionResult } {
	const detectionResult = detectLanguageFromUrl(url);
	const currentLanguage = detectionResult.language;

	return {
		currentLanguage,
		isDefaultLanguage: currentLanguage === I18N_CONFIG.defaultLanguage,
		detectionResult, // Expose the full detection result

		switchLanguage: (language: SupportedLanguage) => {
			persistLanguagePreference(language);
			// Note: In Astro, actual navigation would need to be handled by the component
			// This hook just persists the preference
		},

		detectLanguage: () => detectLanguage(url),
	};
}

/**
 * Hook for entity-specific translations
 * Use this for entities like user, project, experience, etc.
 */
export function useEntityTranslations<T extends Record<string, any>>(
	url: URL,
	entityTranslations: Record<SupportedLanguage, T>
): UseTranslationReturn<T> & { detectionResult: LanguageDetectionResult } {
	const { currentLanguage, detectionResult } = useI18n(url);

	return {
		currentLanguage,
		detectionResult,
		t: createTranslationFunction(entityTranslations, currentLanguage),
	};
}

/**
 * Hook for feature-specific translations
 * Use this for features like theme-toggle, language-select, etc.
 */
export function useFeatureTranslations<T extends Record<string, any>>(
	url: URL,
	featureTranslations: Record<SupportedLanguage, T>
): UseTranslationReturn<T> & { detectionResult: LanguageDetectionResult } {
	const { currentLanguage, detectionResult } = useI18n(url);

	return {
		currentLanguage,
		detectionResult,
		t: createTranslationFunction(featureTranslations, currentLanguage),
	};
}

/**
 * Hook for widget-specific translations
 * Widgets typically compose multiple entities/features, so this handles multiple namespaces
 */
export function useWidgetTranslations<T extends Record<string, Record<string, any>>>(
	url: URL,
	widgetTranslations: Record<SupportedLanguage, T>
): UseTranslationReturn<T> & {
	detectionResult: LanguageDetectionResult;
	tScoped: <K extends keyof T>(namespace: K) => (key: keyof T[K]) => string;
} {
	const { currentLanguage, detectionResult } = useI18n(url);
	const t = createTranslationFunction(widgetTranslations, currentLanguage);

	return {
		currentLanguage,
		detectionResult,
		t,
		tScoped: <K extends keyof T>(namespace: K) => {
			return (key: keyof T[K]) => {
				const namespaceTranslations = widgetTranslations[currentLanguage]?.[namespace];
				if (!namespaceTranslations) {
					console.warn(`Translation namespace "${String(namespace)}" not found`);
					return String(key);
				}

				const translation = namespaceTranslations[key];
				if (typeof translation !== 'string') {
					console.warn(
						`Translation for "${String(namespace)}.${String(key)}" not found or not a string`
					);
					return String(key);
				}

				return translation;
			};
		},
	};
}

/**
 * Lightweight hook for common UI translations
 * Use this for loading states, errors, common buttons, etc.
 */
export function useCommonTranslations(url: URL) {
	const { currentLanguage, detectionResult } = useI18n(url);

	// Import common translations from constants
	return {
		currentLanguage,
		detectionResult,
		t: (key: keyof (typeof import('./constants').COMMON_UI)['en']) => {
			const { COMMON_UI } = require('./constants');
			const translation = COMMON_UI[currentLanguage]?.[key];
			return translation || String(key);
		},
	};
}

/**
 * Hook for accessibility labels
 * Provides screen reader and accessibility-specific translations
 */
export function useA11yTranslations(url: URL) {
	const { currentLanguage, detectionResult } = useI18n(url);

	return {
		currentLanguage,
		detectionResult,
		t: (key: keyof (typeof import('./constants').A11Y_LABELS)['en']) => {
			const { A11Y_LABELS } = require('./constants');
			const translation = A11Y_LABELS[currentLanguage]?.[key];
			return translation || String(key);
		},
	};
}

/**
 * Helper hook for meta tags and SEO
 * Provides translated meta information for pages
 */
export function useMetaTranslations(url: URL) {
	const { currentLanguage, detectionResult } = useI18n(url);

	return {
		currentLanguage,
		detectionResult,
		getMeta: (overrides?: Partial<(typeof import('./constants').DEFAULT_META)['en']>) => {
			const { DEFAULT_META } = require('./constants');
			const defaultMeta = DEFAULT_META[currentLanguage];

			return {
				...defaultMeta,
				...overrides,
			};
		},
	};
}

/**
 * Utility for creating custom translation hooks
 * Use this when you need a specialized hook for a specific component or use case
 */
export function createTranslationHook<T extends Record<string, any>>(
	translations: Record<SupportedLanguage, T>
) {
	return function useCustomTranslations(
		url: URL
	): UseTranslationReturn<T> & { detectionResult: LanguageDetectionResult } {
		const { currentLanguage, detectionResult } = useI18n(url);

		return {
			currentLanguage,
			detectionResult,
			t: createTranslationFunction(translations, currentLanguage),
		};
	};
}

/**
 * Hook for date and number formatting based on language
 */
export function useFormatters(url: URL) {
	const { currentLanguage, detectionResult } = useI18n(url);

	return {
		currentLanguage,
		detectionResult,

		formatDate: (date: Date, options?: Intl.DateTimeFormatOptions) => {
			const { DATE_FORMAT_OPTIONS } = require('./constants');
			const defaultOptions = DATE_FORMAT_OPTIONS[currentLanguage];
			return new Intl.DateTimeFormat(currentLanguage, {
				...defaultOptions,
				...options,
			}).format(date);
		},

		formatNumber: (number: number, options?: Intl.NumberFormatOptions) => {
			const { NUMBER_FORMAT_OPTIONS } = require('./constants');
			const defaultOptions = NUMBER_FORMAT_OPTIONS[currentLanguage];
			return new Intl.NumberFormat(currentLanguage, { ...defaultOptions, ...options }).format(
				number
			);
		},

		formatCurrency: (amount: number, currency = 'USD') => {
			return new Intl.NumberFormat(currentLanguage, {
				style: 'currency',
				currency,
			}).format(amount);
		},

		formatRelativeTime: (date: Date) => {
			const rtf = new Intl.RelativeTimeFormat(currentLanguage, { numeric: 'auto' });
			const diff = date.getTime() - Date.now();
			const diffInDays = Math.round(diff / (1000 * 60 * 60 * 24));

			if (Math.abs(diffInDays) < 1) {
				const diffInHours = Math.round(diff / (1000 * 60 * 60));
				return rtf.format(diffInHours, 'hour');
			} else if (Math.abs(diffInDays) < 30) {
				return rtf.format(diffInDays, 'day');
			} else {
				const diffInMonths = Math.round(diffInDays / 30);
				return rtf.format(diffInMonths, 'month');
			}
		},
	};
}

/**
 * Hook that provides detailed language detection information
 * Useful for debugging language detection or providing user feedback
 */
export function useLanguageDetection(url: URL): {
	result: LanguageDetectionResult;
	isHighConfidence: boolean;
	sourceDescription: string;
	shouldShowLanguageSelector: boolean;
} {
	const result = detectLanguage(url);

	const sourceDescriptions = {
		url: 'Detected from URL path',
		browser: 'Detected from browser preferences',
		storage: 'Retrieved from stored preference',
		default: 'Using default language',
	};

	return {
		result,
		isHighConfidence: result.confidence > 0.8,
		sourceDescription: sourceDescriptions[result.source],
		shouldShowLanguageSelector: result.confidence < 0.7 || result.source === 'default',
	};
}

/**
 * Development-only hook for translation validation
 * Only available in development mode
 */
export function useTranslationValidation<T extends Record<string, any>>(
	translations: Record<SupportedLanguage, T>,
	namespace: string
) {
	if (process.env.NODE_ENV === 'development') {
		const { validateTranslationNamespace, createValidationReport } = require('./validation');

		const result = validateTranslationNamespace(translations, namespace);

		if (!result.isValid || result.warnings.length > 0) {
			const report = createValidationReport(result, namespace);
			console.group(`🌐 Translation Validation: ${namespace}`);
			console.log(report);
			console.groupEnd();
		}

		return result;
	}

	return { isValid: true, errors: [], warnings: [] };
}
