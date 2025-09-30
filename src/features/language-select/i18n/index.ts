/**
 * Language Select Feature - i18n namespace
 * Features Layer - Language select translations aggregator
 */

import type { SupportedLanguage } from '../../../app/types/i18n';
import { languageSelectTranslations as en, type LanguageSelectTranslationKey } from './en';
import { languageSelectTranslations as es } from './es';

export const languageSelectI18n: Record<
	SupportedLanguage,
	Record<LanguageSelectTranslationKey, string>
> = {
	en,
	es,
};

export type { LanguageSelectTranslationKey };
