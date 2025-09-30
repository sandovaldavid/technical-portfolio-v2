/**
 * Shared i18n public API
 * All i18n utilities exported from shared layer
 */

// Core utilities
export {
	detectLanguageFromUrl,
	detectLanguageFromBrowser,
	detectLanguageFromStorage,
	detectLanguage,
	persistLanguagePreference,
	createTranslationFunction,
	validateTranslations,
	formatTranslationKey,
	interpolate,
	pluralize,
} from './utils';

// Validation utilities
export {
	validateTranslationNamespace,
	validateRequiredKeys,
	createValidationReport,
} from './validation';
export type { ValidationResult, ValidationError, ValidationWarning } from './validation';

// Hooks and composables
export {
	useI18n,
	useEntityTranslations,
	useFeatureTranslations,
	useWidgetTranslations,
	useCommonTranslations,
	useA11yTranslations,
	useMetaTranslations,
	useFormatters,
	useTranslationValidation,
	createTranslationHook,
} from './hooks';

// Constants
export {
	TRANSLATION_PATTERNS,
	DATE_FORMAT_OPTIONS,
	NUMBER_FORMAT_OPTIONS,
	TEXT_DIRECTION,
	DEFAULT_META,
	COMMON_UI,
	A11Y_LABELS,
	ERROR_MESSAGES,
	BROWSER_MESSAGES,
} from './constants';
