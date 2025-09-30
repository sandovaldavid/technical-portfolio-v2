/**
 * Project Entity - Model
 * Entities Layer - Business domain: Project portfolio
 */

export type TechnologyTag =
	| 'PYTHON'
	| 'DJANGO'
	| 'MARKDOWN'
	| 'BOOTSTRAP'
	| 'JAVASCRIPT'
	| 'CSS'
	| 'HTML'
	| 'TAILWIND'
	| 'REACT'
	| 'NEXTJS'
	| 'MYSQL'
	| 'MATERIALUI'
	| 'POSTGRESQL'
	| 'EXPRESS'
	| 'CLOUDINARY'
	| 'SQLITE'
	| 'SANITY'
	| 'CHARTJS'
	| 'ASTRO';

export interface ProjectItem {
	title: string;
	description: string;
	link: string;
	github: string;
	image: string;
	tags: readonly TechnologyTag[];
	featured?: boolean;
}

export interface ProjectTranslation {
	[key: string]: ProjectItem;
}

export interface ProjectData {
	featured: ProjectItem[];
	all: ProjectItem[];
}

export type ProjectId =
	| 'techShop'
	| 'buonaVita'
	| 'nikeDemo'
	| 'doguito'
	| 'mail'
	| 'wiki'
	| 'auctions'
	| 'messageEncoder';

export interface ProjectEntityState {
	projects: ProjectTranslation;
	projectOrder: ProjectId[];
	featuredProjects: ProjectId[];
}
