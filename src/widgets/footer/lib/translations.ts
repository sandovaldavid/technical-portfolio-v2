/**
 * Footer Widget - Translations
 * Widgets Layer - Widget-specific translation utilities
 */

import { detectLanguageFromUrl, createTranslationFunction } from '../../../shared/lib/i18n/utils';
import type { SupportedLanguage } from '../../../app/types/i18n';

// Widget-specific translations
const footerTranslations = {
  en: {
    copyright: 'Made with ❤️ by David Sandoval',
    allRightsReserved: 'All rights reserved',
    builtWith: 'Built with',
    and: 'and',
    poweredBy: 'Powered by',
    quickLinks: 'Quick Links',
    social: 'Social',
    contact: 'Contact'
  },
  es: {
    copyright: 'Hecho con ❤️ por David Sandoval', 
    allRightsReserved: 'Todos los derechos reservados',
    builtWith: 'Construido con',
    and: 'y',
    poweredBy: 'Desarrollado con',
    quickLinks: 'Enlaces Rápidos',
    social: 'Social', 
    contact: 'Contacto'
  }
} as const;

export type FooterTranslationKey = keyof typeof footerTranslations.en;

/**
 * Hook for footer widget translations
 */
export function useFooterTranslations(url: URL) {
  const { language } = detectLanguageFromUrl(url);
  const t = createTranslationFunction(
    footerTranslations as Record<SupportedLanguage, Record<string, string>>, 
    language
  );
  
  return {
    language,
    t: t as (key: FooterTranslationKey) => string
  };
}