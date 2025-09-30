/**
 * Experience Section Widget - Types
 * Widgets Layer - Experience section component type definitions
 */

export interface ExperienceSectionProps {
	class?: string;
	id?: string;
	showTitle?: boolean;
	maxItems?: number;
}

export interface ExperienceDisplayItem {
	id: string;
	date: string;
	title: string;
	description: string;
	company: string;
	link?: string;
}
