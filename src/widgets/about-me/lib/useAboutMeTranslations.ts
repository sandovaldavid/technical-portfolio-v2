/**
 * About Me Widget - Translations Hook
 * Widgets Layer - About me internationalization utilities
 */

import { detectLanguageFromUrl } from '@shared/lib/i18n';
import { aboutMeI18nEn, aboutMeI18nEs } from '../i18n';

/**
 * Hook for About Me widget translations with FSD i18n system
 * @param url - Current request URL from Astro
 * @returns Translation object for about me content
 */
export const useAboutMeTranslations = (url: URL) => {
	const { language } = detectLanguageFromUrl(url);
	
	const translations = {
		en: aboutMeI18nEn,
		es: aboutMeI18nEs,
	};

	return translations[language];
};