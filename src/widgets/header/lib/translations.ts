/**
 * Header Widget - Translation helpers
 * Widgets Layer - Header widget translation utilities
 */

import { useEntityTranslations } from '../../../shared/lib/i18n';
import { navigationI18n, type NavigationTranslationKey } from '../../../entities/navigation';
import type { SupportedLanguage, TranslationFunction } from '../../../app/types/i18n';

export function useHeaderTranslations(url: URL) {
	return useEntityTranslations(url, navigationI18n);
}

export function createNavigationItems(
	t: TranslationFunction<Record<NavigationTranslationKey, string>>,
	currentLanguage: SupportedLanguage
) {
	const langPrefix = currentLanguage === 'es' ? '' : `/${currentLanguage}`;

	return [
		{
			title: t('experience'),
			label: 'experience',
			url: `${langPrefix}/#experience`,
		},
		{
			title: t('badges'),
			label: 'badges',
			url: `${langPrefix}/#badges`,
		},
		{
			title: t('projects'),
			label: 'projects',
			url: `${langPrefix}/#projects`,
		},
		{
			title: t('about'),
			label: 'about-me',
			url: `${langPrefix}/#about-me`,
		},
		{
			title: t('contact'),
			label: 'contact',
			url: 'mailto:sandovaldavid2201@gmail.com',
		},
	];
}
