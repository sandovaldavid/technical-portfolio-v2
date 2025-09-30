/**
 * Badges Display Widget - Translations
 * Widgets Layer - Widget-specific translation utilities
 */

import { detectLanguageFromUrl, createTranslationFunction } from '../../../shared/lib/i18n/utils';
import type { SupportedLanguage } from '../../../app/types/i18n';

// Widget-specific translations
const badgesDisplayTranslations = {
  en: {
    sectionTitle: 'Badges',
    sectionSubtitle: 'Certifications and achievements',
    viewBadge: 'View badge',
    noBadges: 'No badges available'
  },
  es: {
    sectionTitle: 'Insignias',
    sectionSubtitle: 'Certificaciones y logros',
    viewBadge: 'Ver insignia',
    noBadges: 'No hay insignias disponibles'
  }
} as const;

export type BadgesDisplayTranslationKey = keyof typeof badgesDisplayTranslations.en;

/**
 * Hook for badges display widget translations
 */
export function useBadgesDisplayTranslations(url: URL) {
  const { language } = detectLanguageFromUrl(url);
  const t = createTranslationFunction(
    badgesDisplayTranslations as Record<SupportedLanguage, Record<string, string>>, 
    language
  );
  
  return {
    language,
    t: t as (key: BadgesDisplayTranslationKey) => string
  };
}