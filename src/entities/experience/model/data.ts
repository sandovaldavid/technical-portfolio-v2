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
			date: t('experience.harvardx.date'),
			title: t('experience.harvardx.title'),
			description: t('experience.harvardx.description'),
			company: t('experience.harvardx.company'),
		},
		{
			date: t('experience.data-science.date'),
			title: t('experience.data-science.title'),
			description: t('experience.data-science.description'),
			company: t('experience.data-science.company'),
		},
		{
			date: t('experience.technical-support.date'),
			title: t('experience.technical-support.title'),
			description: t('experience.technical-support.description'),
			company: t('experience.technical-support.company'),
		},
		{
			date: t('experience.alura.date'),
			title: t('experience.alura.title'),
			description: t('experience.alura.description'),
			company: t('experience.alura.company'),
		},
	];
}
