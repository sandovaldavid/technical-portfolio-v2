/**
 * Contact Form Feature - i18n namespace
 * Features Layer - Contact form translations aggregator
 */

import type { SupportedLanguage } from '../../../app/types/i18n';
import { contactFormTranslations as en, type ContactFormTranslationKey } from './en';
import { contactFormTranslations as es } from './es';

export const contactFormI18n: Record<
	SupportedLanguage,
	Record<ContactFormTranslationKey, string>
> = {
	en,
	es,
};

export type { ContactFormTranslationKey };
