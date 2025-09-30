/**
 * Technology Entity - Model
 * Entities Layer - Business domain: Technology and tools
 */

import type { TechnologyTag } from '../../project/model/project';

export interface TechnologyConfig {
	name: string;
	class: string;
	icon: any; // Astro component type
}

export type TechnologyRegistry = Record<TechnologyTag, TechnologyConfig>;

export interface TechnologyCategory {
	name: string;
	technologies: TechnologyTag[];
}

export interface TechnologyEntityState {
	technologies: TechnologyRegistry;
	categories: TechnologyCategory[];
}
