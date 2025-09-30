/**
 * Footer Widget - Translations Hook
 * Widgets Layer - Footer internationalization utilities
 */

import { detectLanguageFromUrl } from '@shared/lib/i18n';
import { footerI18nEn, footerI18nEs } from '../i18n';

/**
 * Hook for Footer widget translations with FSD i18n system
 * @param url - Current request URL from Astro
 * @returns Translation object for footer-specific content
 */
export const useFooterTranslations = (url: URL) => {
	const { language } = detectLanguageFromUrl(url);
	
	const translations = {
		en: footerI18nEn,
		es: footerI18nEs,
	};

	return translations[language];
};