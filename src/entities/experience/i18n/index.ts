/**
 * Experience Entity - i18n namespace
 * Entities Layer - Experience translations aggregator
 */

import type { SupportedLanguage } from '../../../app/types/i18n';
import {
	experienceTranslations as en,
	type ExperienceTranslationKey,
	type ExperienceItemKey,
} from './en';
import { experienceTranslations as es } from './es';

// Define the experience item structure
export type ExperienceItem = {
	date: string;
	title: string;
	description: string;
	company: string;
};

export const experienceI18n: Record<
	SupportedLanguage,
	Record<ExperienceTranslationKey, ExperienceItem>
> = {
	en,
	es,
};

export type { ExperienceTranslationKey, ExperienceItemKey };
