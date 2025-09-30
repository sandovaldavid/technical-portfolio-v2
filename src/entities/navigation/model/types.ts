/**
 * Navigation Entity - Types
 * Entities Layer - Navigation domain types and interfaces
 */

export interface NavigationItem {
	id: string;
	label: string;
	url: string;
	external?: boolean;
}

export interface NavigationSection {
	main: NavigationItem[];
	footer: NavigationItem[];
}

export interface NavigationData {
	main: NavigationItem[];
	footer: NavigationItem[];
}