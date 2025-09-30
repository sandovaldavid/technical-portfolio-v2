/**
 * Technology Entity - Configuration
 * Entities Layer - Technology definitions and visual configuration
 */

import type { TechnologyRegistry } from '../model/technology';

// Icons
import PythonIcon from '../../../assets/icons/Python.astro';
import DjangoIcon from '../../../assets/icons/Django.astro';
import MarkdownIcon from '../../../assets/icons/Markdown.astro';
import BootstrapIcon from '../../../assets/icons/Bootstrap.astro';
import JavaScriptIcon from '../../../assets/icons/JavaScript.astro';
import CSSIcon from '../../../assets/icons/CSS.astro';
import HTMLIcon from '../../../assets/icons/HTML.astro';
import TailwindIcon from '../../../assets/icons/Tailwind.astro';
import ReactIcon from '../../../assets/icons/React.astro';
import NextJSIcon from '../../../assets/icons/NextJS.astro';
import MySQLIcon from '../../../assets/icons/MySQL.astro';
import MaterialUIIcon from '../../../assets/icons/MaterialUI.astro';
import PostgreSQLIcon from '../../../assets/icons/PostgreSQL.astro';
import ExpressIcon from '../../../assets/icons/Express.astro';
import CloudinaryIcon from '../../../assets/icons/Cloudinary.astro';
import SQLiteIcon from '../../../assets/icons/SQLite.astro';
import SanityIcon from '../../../assets/icons/Sanity.astro';
import ChartJsIcon from '../../../assets/icons/ChartJs.astro';
import AstroIcon from '../../../assets/icons/AstroIcon.astro';

/**
 * Technology registry with visual configuration
 * Contains all supported technologies with their display properties
 */
export const TECHNOLOGY_REGISTRY: TechnologyRegistry = {
	PYTHON: {
		name: 'Python',
		class: 'bg-blue-500 text-white',
		icon: PythonIcon,
	},
	DJANGO: {
		name: 'Django',
		class: 'bg-green-500 text-white',
		icon: DjangoIcon,
	},
	MARKDOWN: {
		name: 'Markdown',
		class: 'bg-gray-500 text-white',
		icon: MarkdownIcon,
	},
	BOOTSTRAP: {
		name: 'Bootstrap',
		class: 'bg-purple-500 text-white',
		icon: BootstrapIcon,
	},
	JAVASCRIPT: {
		name: 'JavaScript',
		class: 'bg-yellow-500 text-white',
		icon: JavaScriptIcon,
	},
	CSS: {
		name: 'CSS',
		class: 'bg-blue-500 text-white',
		icon: CSSIcon,
	},
	HTML: {
		name: 'HTML',
		class: 'bg-red-500 text-white',
		icon: HTMLIcon,
	},
	TAILWIND: {
		name: 'Tailwind',
		class: 'bg-blue-500 text-white',
		icon: TailwindIcon,
	},
	REACT: {
		name: 'React',
		class: 'bg-blue-500 text-white',
		icon: ReactIcon,
	},
	NEXTJS: {
		name: 'Next.js',
		class: 'bg-black text-white',
		icon: NextJSIcon,
	},
	MYSQL: {
		name: 'MySQL',
		class: 'bg-blue-500 text-white',
		icon: MySQLIcon,
	},
	MATERIALUI: {
		name: 'Material-UI',
		class: 'bg-white text-blue-600',
		icon: MaterialUIIcon,
	},
	POSTGRESQL: {
		name: 'PostgreSQL',
		class: 'bg-blue-500 text-white',
		icon: PostgreSQLIcon,
	},
	EXPRESS: {
		name: 'Express',
		class: 'bg-black text-white border border-white',
		icon: ExpressIcon,
	},
	CLOUDINARY: {
		name: 'Cloudinary',
		class: 'bg-white text-blue-900',
		icon: CloudinaryIcon,
	},
	SQLITE: {
		name: 'SQLite',
		class: 'bg-blue-500 text-white',
		icon: SQLiteIcon,
	},
	SANITY: {
		name: 'Sanity',
		class: 'bg-black text-white',
		icon: SanityIcon,
	},
	CHARTJS: {
		name: 'Chart.js',
		class: 'bg-blue-500 text-white',
		icon: ChartJsIcon,
	},
	ASTRO: {
		name: 'Astro',
		class: 'bg-black text-white',
		icon: AstroIcon,
	},
} as const;
