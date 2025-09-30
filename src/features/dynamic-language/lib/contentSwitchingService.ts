/**
 * Dynamic Language Feature - Content Switching Service
 * Features Layer - Handles dynamic content updates when language changes
 */

import type { SupportedLanguage } from '../../../app/types/i18n';

export interface ContentElement {
	element: HTMLElement;
	translationKey: string;
	namespace?: string;
}

export interface MetaUpdate {
	title?: string;
	description?: string;
	lang?: string;
}

/**
 * Registry for trackable content elements
 */
class ContentRegistry {
	private elements = new Map<string, ContentElement>();
	private translations = new Map<string, Record<SupportedLanguage, any>>();

	/**
	 * Register an element for dynamic translation updates
	 */
	register(id: string, element: HTMLElement, translationKey: string, namespace?: string): void {
		this.elements.set(id, {
			element,
			translationKey,
			namespace
		});
	}

	/**
	 * Unregister an element
	 */
	unregister(id: string): void {
		this.elements.delete(id);
	}

	/**
	 * Register translation data for a namespace
	 */
	registerTranslations(namespace: string, translations: Record<SupportedLanguage, any>): void {
		this.translations.set(namespace, translations);
	}

	/**
	 * Get translation for a specific key and language
	 */
	getTranslation(namespace: string, key: string, language: SupportedLanguage): string | null {
		const namespaceTranslations = this.translations.get(namespace);
		if (!namespaceTranslations) return null;

		const langTranslations = namespaceTranslations[language];
		if (!langTranslations) return null;

		// Support nested keys like 'nav.home'
		const keys = key.split('.');
		let current = langTranslations;

		for (const k of keys) {
			if (current && typeof current === 'object' && k in current) {
				current = current[k];
			} else {
				return null;
			}
		}

		return typeof current === 'string' ? current : null;
	}

	/**
	 * Update all registered elements for a new language
	 */
	updateAll(language: SupportedLanguage): void {
		for (const [, { element, translationKey, namespace }] of this.elements) {
			if (namespace) {
				const translation = this.getTranslation(namespace, translationKey, language);
				if (translation) {
					this.updateElement(element, translation);
				}
			}
		}
	}

	/**
	 * Update a specific element's content
	 */
	private updateElement(element: HTMLElement, text: string): void {
		// Handle different types of elements
		if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
			(element as HTMLInputElement).placeholder = text;
		} else if (element.tagName === 'INPUT' && element.getAttribute('type') === 'submit') {
			(element as HTMLInputElement).value = text;
		} else if (element.hasAttribute('aria-label')) {
			element.setAttribute('aria-label', text);
		} else if (element.hasAttribute('title')) {
			element.setAttribute('title', text);
		} else if (
			element.hasAttribute('data-supports-html') || 
			element.classList.contains('about-me__text') || 
			element.classList.contains('hero__bio') ||
			element.closest('.about-me__text') ||
			element.closest('.hero__bio')
		) {
			// Support HTML content for rich text elements
			element.innerHTML = text;
		} else {
			// For most text content
			element.textContent = text;
		}
	}

	/**
	 * Clear all registrations
	 */
	clear(): void {
		this.elements.clear();
		this.translations.clear();
	}
}

// Global content registry instance
const contentRegistry = new ContentRegistry();

/**
 * Initialize the content switching system
 */
export function initializeContentSwitching(): void {
	if (typeof window === 'undefined') return;

	// Listen for language change events
	window.addEventListener('languageChanged', (event: Event) => {
		const customEvent = event as CustomEvent;
		const { language } = customEvent.detail;
		updatePageContent(language);
	});
}

/**
 * Register an element for automatic translation updates
 */
export function registerTranslatableElement(
	id: string,
	element: HTMLElement,
	translationKey: string,
	namespace: string = 'common'
): void {
	contentRegistry.register(id, element, translationKey, namespace);
}

/**
 * Register translation data for a namespace
 */
export function registerTranslationData(
	namespace: string,
	translations: Record<SupportedLanguage, any>
): void {
	contentRegistry.registerTranslations(namespace, translations);
}

/**
 * Update page title dynamically
 */
export function updatePageTitle(title: string): void {
	if (typeof document !== 'undefined') {
		document.title = title;
	}
}

/**
 * Update meta description
 */
export function updateMetaDescription(description: string): void {
	if (typeof document !== 'undefined') {
		const meta = document.querySelector('meta[name="description"]');
		if (meta) {
			meta.setAttribute('content', description);
		}
	}
}

/**
 * Update document language attribute
 */
export function updateDocumentLanguage(language: SupportedLanguage): void {
	if (typeof document !== 'undefined') {
		document.documentElement.lang = language;
		
		// Update language class for CSS targeting
		document.documentElement.className = document.documentElement.className
			.replace(/lang-\w+/g, '')
			.trim();
		document.documentElement.classList.add(`lang-${language}`);
	}
}

/**
 * Update all page content for a new language
 */
export function updatePageContent(language: SupportedLanguage): void {
	// Update registered elements
	contentRegistry.updateAll(language);

	// Update document language
	updateDocumentLanguage(language);

	// Add transition class for smooth changes
	if (typeof document !== 'undefined') {
		document.documentElement.classList.add('lang-transition');
		setTimeout(() => {
			document.documentElement.classList.remove('lang-transition');
		}, 300);
	}
}

/**
 * Auto-detect and register translatable elements with data attributes
 */
export function autoRegisterTranslatableElements(): void {
	if (typeof document === 'undefined') return;

	const elements = document.querySelectorAll('[data-i18n]');
	elements.forEach((element, index) => {
		const translationKey = element.getAttribute('data-i18n');
		const namespace = element.getAttribute('data-i18n-namespace') || 'common';
		
		if (translationKey) {
			registerTranslatableElement(
				`auto-${index}`,
				element as HTMLElement,
				translationKey,
				namespace
			);
		}
	});
}

/**
 * Clean up content switching system
 */
export function destroyContentSwitching(): void {
	contentRegistry.clear();
	
	if (typeof window !== 'undefined') {
		window.removeEventListener('languageChanged', updatePageContent as any);
	}
}

// Export the registry for advanced usage
export { contentRegistry };