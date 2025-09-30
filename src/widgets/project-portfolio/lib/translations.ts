/**
 * Project Portfolio Widget - Translation Helper
 * Widgets Layer - Project portfolio widget translation utilities
 */

import { detectLanguageFromUrl, createTranslationFunction } from '../../../shared/lib/i18n/utils';
import type { SupportedLanguage } from '../../../app/types/i18n';

// Widget-specific translations
const projectPortfolioTranslations = {
	en: {
		sectionTitle: 'Projects',
		codeButton: 'Code',
		previewButton: 'Preview',
		projectAlt: 'project screenshot',
	},
	es: {
		sectionTitle: 'Proyectos',
		codeButton: 'Código',
		previewButton: 'Vista previa',
		projectAlt: 'captura de pantalla del proyecto',
	},
} as const;

export type ProjectPortfolioTranslationKey = keyof typeof projectPortfolioTranslations.en;

/**
 * Hook for project portfolio widget translations
 */
export function useProjectPortfolioTranslations(url: URL) {
	const { language } = detectLanguageFromUrl(url);
	const t = createTranslationFunction(
		projectPortfolioTranslations as Record<SupportedLanguage, Record<string, string>>,
		language
	);

	return {
		language,
		t: t as (key: ProjectPortfolioTranslationKey) => string,
	};
}
