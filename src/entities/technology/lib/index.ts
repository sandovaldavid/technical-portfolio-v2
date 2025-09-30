/**
 * Technology Entity - Helpers
 * Entities Layer - Technology utility functions
 */

import type { TechnologyTag } from '../../project/model/project';
import type { TechnologyConfig } from '../model/technology';
import { TECHNOLOGY_REGISTRY } from './registry';

/**
 * Get technology configuration by tag
 */
export function getTechnologyConfig(tag: TechnologyTag): TechnologyConfig {
	const config = TECHNOLOGY_REGISTRY[tag];

	if (!config) {
		console.warn(`Technology configuration not found for tag: ${tag}`);
		return {
			name: tag,
			class: 'bg-gray-500 text-white',
			icon: null,
		};
	}

	return config;
}

/**
 * Get multiple technology configurations
 */
export function getTechnologiesConfig(tags: readonly TechnologyTag[]): TechnologyConfig[] {
	return tags.map(getTechnologyConfig);
}

/**
 * Check if technology is supported
 */
export function isSupportedTechnology(tag: string): tag is TechnologyTag {
	return tag in TECHNOLOGY_REGISTRY;
}

/**
 * Get all available technologies
 */
export function getAllTechnologies(): TechnologyTag[] {
	return Object.keys(TECHNOLOGY_REGISTRY) as TechnologyTag[];
}

/**
 * Get technology name by tag
 */
export function getTechnologyName(tag: TechnologyTag): string {
	return getTechnologyConfig(tag).name;
}
