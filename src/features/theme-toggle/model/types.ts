/**
 * Theme type definition
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * Theme option for UI display
 */
export interface ThemeOption {
	/** Theme identifier */
	id: Theme;
	/** Display name (localized) */
	name: string;
}
