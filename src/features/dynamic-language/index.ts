/**
 * Dynamic Language Feature - Public API
 * Features Layer - Dynamic language switching exports
 */

export { default as DynamicLanguageSelect } from './ui/DynamicLanguageSelect.astro';

export {
	detectUserLanguage,
	detectBrowserLanguage,
	getStoredLanguagePreference,
	storeLanguagePreference,
	initializeLanguage,
	changeLanguage,
	getCurrentLanguage,
	isLanguageSwitchingSupported,
} from './lib/languageDetectionService';

export {
	initializeContentSwitching,
	registerTranslatableElement,
	registerTranslationData,
	updatePageTitle,
	updateMetaDescription,
	updateDocumentLanguage,
	updatePageContent,
	autoRegisterTranslatableElements,
	destroyContentSwitching,
	contentRegistry,
} from './lib/contentSwitchingService';

export type { DynamicLanguageTranslationKey } from './i18n';

export type {
	DynamicLanguageProps,
	LanguageDetectionConfig,
	LanguageSwitchEvent,
	TranslatableElementConfig,
	ContentSwitchingOptions,
} from './model/types';