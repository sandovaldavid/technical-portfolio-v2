import { Language } from '../languages';

export const themeTranslations = {
	[Language.ENGLISH]: {
		'theme.select': 'Choose theme',
		'theme.light': 'Light',
		'theme.dark': 'Dark',
		'theme.system': 'System',
	},
	[Language.SPANISH]: {
		'theme.select': 'Elige el tema',
		'theme.light': 'Claro',
		'theme.dark': 'Oscuro',
		'theme.system': 'Sistema',
	},
} as const;
