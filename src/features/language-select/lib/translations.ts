/**
 * Language Select Feature - Translation helpers
 * Features Layer - Language select translation utilities
 */

import { createTranslationFunction } from '../../../shared/lib/i18n';
import { languageSelectI18n } from '../i18n';
import type { SupportedLanguage } from '../../../app/types/i18n';

export function useLanguageSelectTranslations(language: SupportedLanguage) {
	return createTranslationFunction(languageSelectI18n, language);
}
