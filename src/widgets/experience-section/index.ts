/**
 * Experience Section Widget - Public API
 * Widgets Layer - Experience section widget exports
 */

export { default as ExperienceSection } from './ui/ExperienceSection.astro';

export type { ExperienceSectionProps, ExperienceDisplayItem } from './model/types';

export { useExperienceSectionTranslations, getExperienceItems } from './lib/translations';
