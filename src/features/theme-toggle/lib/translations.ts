/**
 * Theme Toggle Feature - Translation helpers
 * Features Layer - Theme toggle translation utilities
 */

import { createTranslationFunction } from '../../../shared/lib/i18n';
import { themeToggleI18n } from '../i18n';
import type { SupportedLanguage } from '../../../app/types/i18n';

export function useThemeToggleTranslations(language: SupportedLanguage) {
	return createTranslationFunction(themeToggleI18n, language);
}
