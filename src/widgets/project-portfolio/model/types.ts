/**
 * Project Portfolio Widget - Types
 * Widgets Layer - Project portfolio component type definitions
 */

export interface ProjectPortfolioProps {
	class?: string;
	id?: string;
	showTitle?: boolean;
	maxItems?: number;
	showFeaturedOnly?: boolean;
	gridCols?: 1 | 2 | 3;
}

export interface ProjectDisplayItem {
	id: string;
	key: string;
	title: string;
	description: string;
	image: string;
	tags: Array<{
		name: string;
		class: string;
		icon: any;
	}>;
	github?: string;
	link?: string;
	featured: boolean;
}

export interface TechTag {
	name: string;
	class: string;
	icon: any;
}
