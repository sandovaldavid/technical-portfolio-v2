/**
 * Badge Entity - English translations
 * Entities Layer - Business domain: Certifications and badges
 */

export const badgeTranslations = {
	title: 'Badges',
	githubFoundations: 'GitHub Foundations',
	dataModeling: 'Data Modeling with Python | ONE - G8',
	etl: 'ETL | ONE - G8',
	statisticsML: 'Statistics and Machine Learning | ONE - G8',
} as const;

export type BadgeTranslationKey = keyof typeof badgeTranslations;
