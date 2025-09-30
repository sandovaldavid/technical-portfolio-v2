/**
 * User Entity - i18n namespace
 * Entities Layer - User profile translations aggregator
 */

import type { SupportedLanguage } from '../../../app/types/i18n';
import { userTranslations as en, type UserTranslationKey } from './en';
import { userTranslations as es } from './es';

export const userI18n: Record<SupportedLanguage, any> = {
	en,
	es,
};

export type { UserTranslationKey };
