/**
 * Hero Widget - Types
 * Widgets Layer - Hero component type definitions
 */

export interface HeroProps {
	class?: string;
	id?: string;
}

export interface SocialLink {
	id: string;
	label: string;
	href: string;
	icon: string;
	external: boolean;
}

export interface ProfileData {
	image: {
		src: string;
		alt: string;
	};
	greeting: string;
	name: string;
	description: string;
	available: string;
}
