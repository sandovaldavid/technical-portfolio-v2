import type { Technology } from '@entities/technology';

/**
 * Project represents a portfolio project with details and metadata
 */
export interface ProjectItem {
	/** Project title */
	title: string;
	/** Detailed project description */
	description: string;
	/** Live demo URL (optional) */
	link?: string;
	/** GitHub repository URL (optional) */
	github?: string;
	/** Project preview image path */
	image: string;
	/** Technologies used in the project */
	tags: Technology[];
}
