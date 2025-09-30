/**
 * Hero Widget - Public API
 * Widgets Layer - Hero widget exports
 */

export { default as Hero } from './ui/Hero.astro';

export type { HeroProps, SocialLink, ProfileData } from './model/types';

export { useHeroTranslations, createSocialLinks, getProfileData } from './lib/translations';
