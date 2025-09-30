/**
 * Hero Widget - Translation Helper
 * Widgets Layer - Hero section translation utilities
 */

import { createTranslationHook } from '../../../shared/lib/i18n';

// Create translations for the hero widget
const heroTranslations = {
	en: {
		greeting: 'Hi, I am',
		description:
			'With <strong>+5 years of experience</strong> as a full-stack developer, I build modern and scalable web applications. I have worked with diverse technologies and love taking on new challenges.',
		available: 'Available for work',
		profile: {
			alt: 'Juan David profile photo',
		},
		social: {
			email: 'Contact me',
			linkedin: 'LinkedIn',
			github: 'GitHub',
		},
	},
	es: {
		greeting: 'Hola, soy',
		description:
			'Con <strong>+5 años de experiencia</strong> como desarrollador full-stack, construyo aplicaciones web modernas y escalables. He trabajado con diversas tecnologías y me encanta asumir nuevos desafíos.',
		available: 'Disponible para trabajar',
		profile: {
			alt: 'Foto de perfil de Juan David',
		},
		social: {
			email: 'Contáctame',
			linkedin: 'LinkedIn',
			github: 'GitHub',
		},
	},
};

// Create the custom hook
export const useHeroTranslations = createTranslationHook(heroTranslations);

/**
 * Create social links with translations
 */
export function createSocialLinks(
	translationFunction: ReturnType<typeof useHeroTranslations>['t']
) {
	// Extract social object from translation function
	const socialData = translationFunction('social');

	// Type guard to ensure it's an object
	if (typeof socialData !== 'object' || socialData === null) {
		throw new Error('Social translations not found or invalid');
	}

	const social = socialData as { email: string; linkedin: string; github: string };

	return [
		{
			id: 'email',
			label: social.email,
			href: 'mailto:devsandoval.me@gmail.com',
			icon: 'Mail',
			external: false,
		},
		{
			id: 'linkedin',
			label: social.linkedin,
			href: 'https://www.linkedin.com/in/devsandoval/',
			icon: 'LinkedIn',
			external: true,
		},
		{
			id: 'github',
			label: social.github,
			href: 'https://github.com/sandovaldavid',
			icon: 'GitHub',
			external: true,
		},
	];
}

/**
 * Get profile data with translations
 */
export function getProfileData(translationFunction: ReturnType<typeof useHeroTranslations>['t']) {
	// Extract profile object from translation function
	const profileData = translationFunction('profile');

	// Type guard to ensure it's an object
	if (typeof profileData !== 'object' || profileData === null) {
		throw new Error('Profile translations not found or invalid');
	}

	const profile = profileData as { alt: string };

	return {
		image: {
			src: '/perfil.webp',
			alt: profile.alt,
		},
		greeting: translationFunction('greeting') as string,
		name: 'Juan David',
		description: translationFunction('description') as string,
		available: translationFunction('available') as string,
	};
}
