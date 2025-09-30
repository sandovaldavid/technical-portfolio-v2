/**
 * Dynamic Language Feature - Type definitions
 */

import type { SupportedLanguage } from '../../../app/types/i18n';

export interface DynamicLanguageProps {
	/** CSS class name for styling */
	class?: string;
	/** Unique identifier */
	id?: string;
	/** Whether to show language labels or just codes */
	showLabels?: boolean;
	/** Whether to show flags/icons */
	showFlags?: boolean;
	/** Initial language (overrides detection) */
	initialLanguage?: SupportedLanguage;
	/** Callback when language changes */
	onLanguageChange?: (language: SupportedLanguage) => void;
}

export interface LanguageDetectionConfig {
	/** Whether to detect from browser preferences */
	enableBrowserDetection?: boolean;
	/** Whether to use localStorage for persistence */
	enableStorage?: boolean;
	/** Custom fallback language */
	fallbackLanguage?: SupportedLanguage;
}

export interface LanguageSwitchEvent {
	language: SupportedLanguage;
	previousLanguage?: SupportedLanguage;
	source: 'user' | 'detection' | 'storage' | 'fallback';
	timestamp: number;
}

export interface TranslatableElementConfig {
	/** Translation key to use */
	key: string;
	/** Translation namespace */
	namespace?: string;
	/** HTML attribute to update (default: textContent) */
	attribute?: 'textContent' | 'placeholder' | 'title' | 'aria-label' | 'value';
	/** Whether to parse HTML in the translation */
	allowHtml?: boolean;
}

export interface ContentSwitchingOptions {
	/** Duration of transition animation in ms */
	transitionDuration?: number;
	/** Whether to update meta tags */
	updateMeta?: boolean;
	/** Whether to update page title */
	updateTitle?: boolean;
	/** Custom page title template */
	titleTemplate?: (language: SupportedLanguage, content: string) => string;
}