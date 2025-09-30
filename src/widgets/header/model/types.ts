/**
 * Header Widget - Types
 * Widgets Layer - Header widget component types
 */

export interface HeaderProps {
	class?: string;
	id?: string;
}

export interface NavigationItem {
	title: string;
	label: string;
	url: string;
}
