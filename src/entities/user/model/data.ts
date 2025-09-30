/**
 * User Entity - Data model
 * Entities Layer - Business domain: User profile and contact information
 */

import type { UserData } from './types.ts';

export const userData: UserData = {
	personal: {
		name: 'Juan David Sandoval Salvador',
		title: 'Computer Engineer & Web Developer',
		location: 'Piura, Peru',
		avatar: '/perfil.webp',
	},
	contact: {
		email: 'juandavidsandoval@outlook.com',
		github: 'https://github.com/DevJuanCode',
		linkedin: 'https://linkedin.com/in/devjuancode',
	},
	social: {
		email: 'mailto:juandavidsandoval@outlook.com',
		github: 'https://github.com/DevJuanCode',
		linkedin: 'https://linkedin.com/in/devjuancode',
	},
};