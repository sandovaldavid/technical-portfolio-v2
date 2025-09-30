/**
 * Experience Section Widget - Translation Helper
 * Widgets Layer - Experience section translation utilities
 */

import { createTranslationHook } from '@shared/lib/i18n';
import type { ExperienceTranslationKey, ExperienceItem } from '@entities/experience';

// Create translations for the experience widget
const experienceSectionTranslations = {
	en: {
		title: 'Professional Experience',
		subtitle: 'My journey through different roles and companies',
		learnMore: 'Learn more',
	},
	es: {
		title: 'Experiencia Profesional',
		subtitle: 'Mi trayectoria a través de diferentes roles y empresas',
		learnMore: 'Saber más',
	},
};

// Create the custom hook
export const useExperienceSectionTranslations = createTranslationHook(
	experienceSectionTranslations
);

/**
 * Get formatted experience items with experience entity data
 */
export function getExperienceItems(
	experienceData: Record<ExperienceTranslationKey, ExperienceItem>
) {
	return Object.entries(experienceData).map(([key, item], index) => ({
		id: `experience-${index}`,
		key: key as ExperienceTranslationKey,
		date: item.date,
		title: item.title,
		description: item.description,
		company: item.company,
		link: undefined as string | undefined, // Optional link property
	}));
}
