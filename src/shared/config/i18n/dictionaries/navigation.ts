import { Language } from '../languages';

export const navigationTranslations = {
	[Language.ENGLISH]: {
		'nav.experience': 'Experience',
		'nav.projects': 'Projects',
		'nav.badges': 'Badges',
		'nav.about': 'About me',
		'nav.contact': 'Contact',
	},
	[Language.SPANISH]: {
		'nav.experience': 'Experiencia',
		'nav.projects': 'Proyectos',
		'nav.badges': 'Insignias',
		'nav.about': 'Sobre mí',
		'nav.contact': 'Contacto',
	},
} as const;
