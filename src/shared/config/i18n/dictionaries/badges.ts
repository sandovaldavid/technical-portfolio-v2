import { Language } from '../languages';

export const badgesTranslations = {
	[Language.ENGLISH]: {
		'badges.title': 'Badges',
		'badges.github-foundations.label': 'GitHub Foundations',
		'badges.data-modeling.label': 'Data Modeling with Python | ONE - G8',
		'badges.etl.label': 'ETL | ONE - G8',
		'badges.statistics-ml.label': 'Statistics and Machine Learning | ONE - G8',
	},
	[Language.SPANISH]: {
		'badges.title': 'Insignias',
		'badges.github-foundations.label': 'GitHub Foundations | GitHub',
		'badges.data-modeling.label': 'Modelado de Datos con Python | ONE - G8',
		'badges.etl.label': 'ETL | ONE - G8',
		'badges.statistics-ml.label': 'Estadisticas y Machine Learning | ONE - G8',
	},
} as const;
