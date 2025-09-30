/**
 * Contact Form Feature - Translation helpers
 * Features Layer - Contact form translation utilities
 */

import { createTranslationFunction } from '@shared/lib/i18n';
import { contactFormI18n } from '../i18n';
import type { SupportedLanguage } from '@app/types/i18n';

export function useContactFormTranslations(language: SupportedLanguage) {
	return createTranslationFunction(contactFormI18n, language);
}
