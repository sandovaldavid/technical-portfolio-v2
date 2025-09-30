/**
 * Technology Entity - Public API
 * Entities Layer - Technology domain exports
 */

export {
	type TechnologyConfig,
	type TechnologyRegistry,
	type TechnologyCategory,
	type TechnologyEntityState,
} from './model/technology';

export { TECHNOLOGY_REGISTRY } from './lib/registry';

export {
	getTechnologyConfig,
	getTechnologiesConfig,
	isSupportedTechnology,
	getAllTechnologies,
	getTechnologyName,
} from './lib';
