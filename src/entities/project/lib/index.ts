/**
 * Project Entity - Data helpers
 * Entities Layer - Business domain: Project portfolio utilities
 */

import type { ProjectId, ProjectItem, ProjectData } from '../model/project';
import { projectI18n } from '../i18n';

export const PROJECT_ORDER: ProjectId[] = [
	'techShop',
	'buonaVita',
	'nikeDemo',
	'doguito',
	'mail',
	'wiki',
	'auctions',
	'messageEncoder',
];

export const FEATURED_PROJECTS: ProjectId[] = ['techShop', 'buonaVita', 'nikeDemo'];

export function getProjectData(lang: string): ProjectData {
	const translations = projectI18n[lang as keyof typeof projectI18n];

	if (!translations) {
		throw new Error(`Unsupported language: ${lang}`);
	}

	const allProjects = PROJECT_ORDER.map(id => translations[id]);
	const featuredProjects = FEATURED_PROJECTS.map(id => translations[id]);

	return {
		all: allProjects,
		featured: featuredProjects,
	};
}

export function getProjectById(id: ProjectId, lang: string): ProjectItem {
	const translations = projectI18n[lang as keyof typeof projectI18n];

	if (!translations) {
		throw new Error(`Unsupported language: ${lang}`);
	}

	const project = translations[id];
	if (!project) {
		throw new Error(`Project not found: ${id}`);
	}

	return project;
}
