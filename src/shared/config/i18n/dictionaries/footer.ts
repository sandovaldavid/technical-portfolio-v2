import { Language } from '../languages';

export const footerTranslations = {
	[Language.ENGLISH]: {
		'footer.rights': 'All rights reserved',
		'footer.about': 'About me',
		'footer.contact': 'Contact',
	},
	[Language.SPANISH]: {
		'footer.rights': 'Todos los derechos reservados',
		'footer.about': 'Sobre mí',
		'footer.contact': 'Contacto',
	},
} as const;
