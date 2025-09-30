/**
 * Project Entity - i18n namespace
 * Entities Layer - Project translations aggregator
 */

import type { SupportedLanguage } from '../../../app/types/i18n';
import { projectTranslations as en, type ProjectTranslationKey } from './en';
import { projectTranslations as es } from './es';
import type { ProjectItem } from '../model/project';

export const projectI18n: Record<SupportedLanguage, Record<ProjectTranslationKey, ProjectItem>> = {
	en,
	es,
};

export type { ProjectTranslationKey };
