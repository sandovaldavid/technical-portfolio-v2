/**
 * Dynamic Language Feature - i18n exports
 */

import { dynamicLanguageEn } from './en';
import { dynamicLanguageEs } from './es';
import type { SupportedLanguage } from '../../../app/types/i18n';

export const dynamicLanguageI18n: Record<SupportedLanguage, Record<string, string>> = {
	en: dynamicLanguageEn,
	es: dynamicLanguageEs,
};

export type DynamicLanguageTranslationKey = keyof typeof dynamicLanguageEn;