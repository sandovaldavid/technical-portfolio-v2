/**
 * Navigation Entity - i18n namespace
 * Entities Layer - Navigation translations aggregator
 */

import type { SupportedLanguage } from '../../../app/types/i18n';
import { navigationTranslations as en, type NavigationTranslationKey } from './en';
import { navigationTranslations as es } from './es';

export const navigationI18n: Record<SupportedLanguage, Record<NavigationTranslationKey, string>> = {
	en,
	es,
};

export type { NavigationTranslationKey };
