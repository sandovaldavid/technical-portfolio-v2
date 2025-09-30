/**
 * Language Select Feature - Types
 * Features Layer - Language select component types
 */

import type { SupportedLanguage } from '../../../app/types/i18n';

export interface LanguageSelectProps {
	class?: string;
	id?: string;
	showLabels?: boolean;
}

export interface LanguageOption {
	code: SupportedLanguage;
	name: string;
	flag: string;
}
