/**
 * Global type declarations for dynamic language feature
 */

interface DynamicLanguageAPI {
	contentSwitching?: {
		registerTranslationData?: any;
		updatePageContent?: any;
		registerTranslatableElement?: any;
	};
	detection?: {
		initializeLanguage?: any;
		changeLanguage?: any;
	};
}

declare global {
	interface Window {
		DynamicLanguage?: DynamicLanguageAPI;
		__LANGUAGE_INITIALIZED__?: boolean;
	}
}

export {};