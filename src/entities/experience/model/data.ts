import type { ExperienceList } from './types';

/**
 * Experience entries
--
 */
export function getExperienceData(t: (key: string) => string): ExperienceList {
	return [
		{
			date: t('experience.chirasoft.date'),
			title: t('experience.chirasoft.title'),
			description: t('experience.chirasoft.description'),
			company: t('experience.chirasoft.company'),
		},
		{
			date: t('experience.technical-support.date'),
			title: t('experience.technical-support.title'),
			description: t('experience.technical-support.description'),
			company: t('experience.technical-support.company'),
		},
	];
}
