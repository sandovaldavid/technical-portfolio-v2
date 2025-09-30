/**
 * i18n constants
 * Shared Layer - Common constants for internationalization
 */

import type { SupportedLanguage } from '../../../app/types/i18n';

// Common translation patterns
export const TRANSLATION_PATTERNS = {
	INTERPOLATION: /\{\{(\w+)\}\}/g,
	HTML_TAGS: /<[^>]*>/g,
	WHITESPACE_ONLY: /^\s*$/,
	SPECIAL_CHARS: /[{}[\]\\]/g,
} as const;

// Date and time formatting options by language
export const DATE_FORMAT_OPTIONS: Record<SupportedLanguage, Intl.DateTimeFormatOptions> = {
	en: {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	},
	es: {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	},
} as const;

// Number formatting options by language
export const NUMBER_FORMAT_OPTIONS: Record<SupportedLanguage, Intl.NumberFormatOptions> = {
	en: {
		notation: 'standard',
		maximumFractionDigits: 2,
	},
	es: {
		notation: 'standard',
		maximumFractionDigits: 2,
	},
} as const;

// RTL/LTR direction by language
export const TEXT_DIRECTION: Record<SupportedLanguage, 'ltr' | 'rtl'> = {
	en: 'ltr',
	es: 'ltr',
} as const;

// Default meta information by language
export const DEFAULT_META: Record<
	SupportedLanguage,
	{
		title: string;
		description: string;
		keywords: string[];
	}
> = {
	en: {
		title: 'David Sandoval - Portfolio',
		description:
			'Computer Engineer passionate about web development and creating efficient applications',
		keywords: ['developer', 'portfolio', 'web development', 'React', 'Django', 'PostgreSQL'],
	},
	es: {
		title: 'David Sandoval - Portafolio',
		description:
			'Ingeniero Informático apasionado por el desarrollo web y la creación de aplicaciones eficientes',
		keywords: [
			'desarrollador',
			'portafolio',
			'desarrollo web',
			'React',
			'Django',
			'PostgreSQL',
		],
	},
} as const;

// Common UI text that appears across multiple components
export const COMMON_UI: Record<
	SupportedLanguage,
	{
		loading: string;
		error: string;
		retry: string;
		close: string;
		open: string;
		more: string;
		less: string;
		readMore: string;
		readLess: string;
	}
> = {
	en: {
		loading: 'Loading...',
		error: 'An error occurred',
		retry: 'Retry',
		close: 'Close',
		open: 'Open',
		more: 'More',
		less: 'Less',
		readMore: 'Read more',
		readLess: 'Read less',
	},
	es: {
		loading: 'Cargando...',
		error: 'Ocurrió un error',
		retry: 'Reintentar',
		close: 'Cerrar',
		open: 'Abrir',
		more: 'Más',
		less: 'Menos',
		readMore: 'Leer más',
		readLess: 'Leer menos',
	},
} as const;

// Accessibility labels by language
export const A11Y_LABELS: Record<
	SupportedLanguage,
	{
		skipToContent: string;
		mainNavigation: string;
		openMenu: string;
		closeMenu: string;
		toggleTheme: string;
		changeLanguage: string;
		externalLink: string;
	}
> = {
	en: {
		skipToContent: 'Skip to main content',
		mainNavigation: 'Main navigation',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		toggleTheme: 'Toggle theme',
		changeLanguage: 'Change language',
		externalLink: 'External link',
	},
	es: {
		skipToContent: 'Ir al contenido principal',
		mainNavigation: 'Navegación principal',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
		toggleTheme: 'Cambiar tema',
		changeLanguage: 'Cambiar idioma',
		externalLink: 'Enlace externo',
	},
} as const;

// Error messages by language
export const ERROR_MESSAGES: Record<
	SupportedLanguage,
	{
		translationMissing: string;
		languageNotSupported: string;
		invalidTranslationKey: string;
		translationLoadFailed: string;
	}
> = {
	en: {
		translationMissing: 'Translation missing',
		languageNotSupported: 'Language not supported',
		invalidTranslationKey: 'Invalid translation key',
		translationLoadFailed: 'Failed to load translations',
	},
	es: {
		translationMissing: 'Traducción faltante',
		languageNotSupported: 'Idioma no soportado',
		invalidTranslationKey: 'Clave de traducción inválida',
		translationLoadFailed: 'Error al cargar traducciones',
	},
} as const;

// Browser compatibility messages
export const BROWSER_MESSAGES: Record<
	SupportedLanguage,
	{
		unsupportedBrowser: string;
		pleaseUpdate: string;
		continueAnyway: string;
	}
> = {
	en: {
		unsupportedBrowser: 'Your browser is not supported',
		pleaseUpdate: 'Please update your browser for the best experience',
		continueAnyway: 'Continue anyway',
	},
	es: {
		unsupportedBrowser: 'Tu navegador no es compatible',
		pleaseUpdate: 'Por favor actualiza tu navegador para la mejor experiencia',
		continueAnyway: 'Continuar de todos modos',
	},
} as const;
