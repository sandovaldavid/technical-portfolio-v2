/**
 * Theme Toggle Feature - i18n namespace
 * Features Layer - Theme toggle translations aggregator
 */

import type { SupportedLanguage } from '../../../app/types/i18n';
import { themeToggleTranslations as en, type ThemeToggleTranslationKey } from './en';
import { themeToggleTranslations as es } from './es';

export const themeToggleI18n: Record<
	SupportedLanguage,
	Record<ThemeToggleTranslationKey, string>
> = {
	en,
	es,
};

export type { ThemeToggleTranslationKey };
