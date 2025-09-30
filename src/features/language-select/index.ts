/**
 * Language Select Feature - Public API
 * Features Layer - Language select functionality exports
 */

export { default as LanguageSelect } from './ui/LanguageSelect.astro';
export { useLanguageSelectTranslations } from './lib/translations';
export type { LanguageSelectTranslationKey } from './i18n';
export type { LanguageSelectProps, LanguageOption } from './model/types';
