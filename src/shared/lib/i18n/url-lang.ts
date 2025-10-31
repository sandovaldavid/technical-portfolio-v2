import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE, Language } from '@shared/config/i18n';

/**
 * Extracts the language code from a URL pathname
 * @param url - The URL to extract the language from
 * @returns The language code (Language enum value)
 */
export function getLangFromUrl(url: URL): Language {
	const [, lang] = url.pathname.split('/');
	if (AVAILABLE_LANGUAGES.includes(lang as Language)) return lang as Language;
	return DEFAULT_LANGUAGE;
}
