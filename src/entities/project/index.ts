/**
 * Project Entity - Public API
 * Entities Layer - Project portfolio domain exports
 */

export { projectI18n, type ProjectTranslationKey } from './i18n';
export {
	type ProjectItem,
	type ProjectData,
	type ProjectId,
	type ProjectEntityState,
	type TechnologyTag,
} from './model/project';
export { getProjectData, getProjectById, PROJECT_ORDER, FEATURED_PROJECTS } from './lib';
