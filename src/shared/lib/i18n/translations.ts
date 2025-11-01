import type { Language } from '@shared/config/i18n';
import { translations, type TranslationKey } from '@shared/config/i18n';

/**
 * Retorna una función para obtener traducciones en el idioma especificado.
 *
 * @param locale Idioma/localización actual.
 * @returns Función que recibe una clave y retorna la traducción correspondiente.
 */
export function useTranslations(locale: Language) {
	/**
	 * Obtiene la traducción para una clave dada en el idioma actual.
	 *
	 * @param key Clave de traducción.
	 * @returns Traducción correspondiente o la clave si no existe traducción.
	 */
	return function t(key: TranslationKey): string {
		const translation = translations[locale]?.[key];

		if (!translation) {
			console.warn(`Missing translation: ${key} for locale: ${locale}`);
			return key;
		}

		return translation;
	};
}
