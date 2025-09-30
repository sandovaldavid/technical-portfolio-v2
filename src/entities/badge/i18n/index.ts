/**
 * Badge Entity - i18n namespace
 * Entities Layer - Badge translations aggregator
 */

import type { SupportedLanguage } from '../../../app/types/i18n';
import { badgeTranslations as en, type BadgeTranslationKey } from './en';
import { badgeTranslations as es } from './es';

export const badgeI18n: Record<SupportedLanguage, Record<BadgeTranslationKey, string>> = {
	en,
	es,
};

export type { BadgeTranslationKey };
