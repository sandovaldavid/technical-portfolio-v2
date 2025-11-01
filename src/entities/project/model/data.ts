import { TAGS } from '@entities/technology';
import type { ProjectItem } from './types';

/**
 * Project database
 */
export function getProjectsData(t: (key: string) => string): ProjectItem[] {
	return [
		{
			title: t('projects.techshop.title'),
			description: t('projects.techshop.description'),
			link: 'https://byte-shop-ecommerce.vercel.app',
			github: 'https://github.com/sandovaldavid/byte-shop-ecommerce',
			image: '/projects/project-15-TechShop.webp',
			tags: [TAGS.NEXTJS, TAGS.REACT, TAGS.SANITY, TAGS.TAILWIND],
		},
		{
			title: t('projects.buona-vita.title'),
			description: t('projects.buona-vita.description'),
			link: 'https://clinica-alura-demo.devsandoval.me',
			github: 'https://github.com/sandovaldavid/Pagina_Web_Clinica_Alura',
			image: '/projects/project-16-buona-vita.webp',
			tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.CHARTJS],
		},
		{
			title: t('projects.nike-demo.title'),
			description: t('projects.nike-demo.description'),
			link: 'https://nike-website-demo.vercel.app',
			github: 'https://github.com/sandovaldavid/nike-website-demo',
			image: '/projects/project-17-nike-demo.webp',
			tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.JAVASCRIPT],
		},
		{
			title: t('projects.doguito.title'),
			description: t('projects.doguito.description'),
			link: 'https://doguito.devsandoval.me',
			github: 'https://github.com/sandovaldavid/CRUD',
			image: '/projects/project-18-doguito.webp',
			tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
		},
		{
			title: t('projects.mail.title'),
			description: t('projects.mail.description'),
			link: 'https://mail.devsandoval.me',
			github: 'https://github.com/sandovaldavid/project-03-mail',
			image: '/projects/project-14-mail.webp',
			tags: [TAGS.DJANGO, TAGS.BOOTSTRAP, TAGS.JAVASCRIPT],
		},
		{
			title: t('projects.wiki.title'),
			description: t('projects.wiki.description'),
			link: 'https://wiki.devsandoval.me',
			github: 'https://github.com/sandovaldavid/project-01-wiki',
			image: '/projects/project-01-wiki.webp',
			tags: [TAGS.DJANGO, TAGS.PYTHON, TAGS.MARKDOWN, TAGS.BOOTSTRAP],
		},
		{
			title: t('projects.auctions.title'),
			description: t('projects.auctions.description'),
			link: 'https://auctions.devsandoval.me',
			github: 'https://github.com/sandovaldavid/project-02-auctions',
			image: '/projects/project-02-auctions.webp',
			tags: [TAGS.DJANGO, TAGS.PYTHON, TAGS.BOOTSTRAP, TAGS.JAVASCRIPT, TAGS.CSS, TAGS.HTML],
		},
		{
			title: t('projects.message-encoder.title'),
			description: t('projects.message-encoder.description'),
			link: 'https://codificador.devsandoval.me',
			github: 'https://github.com/sandovaldavid/Challenge-01--Codificador',
			image: '/projects/project-03-codificador.webp',
			tags: [TAGS.JAVASCRIPT, TAGS.CSS, TAGS.HTML],
		},
		{
			title: t('projects.dental-clinic.title'),
			description: t('projects.dental-clinic.description'),
			link: 'https://dental-clinic.devsandoval.me',
			github: 'https://github.com/sandovaldavid/Dental-Clinic',
			image: '/projects/project-06-clinica-dental.webp',
			tags: [TAGS.CSS, TAGS.HTML],
		},
		{
			title: t('projects.lectures-management.title'),
			description: t('projects.lectures-management.description'),
			link: 'https://lectures-management.devsandoval.me',
			github: 'https://github.com/sandovaldavid/Lectures-Management',
			image: '/projects/project-07-lectures-management.webp',
			tags: [TAGS.CSS, TAGS.HTML, TAGS.SQLITE, TAGS.EXPRESS],
		},
		{
			title: t('projects.faculty-list.title'),
			description: t('projects.faculty-list.description'),
			link: 'https://facultades-unp.devsandoval.me',
			github: 'https://github.com/sandovaldavid/list-faculties-unp',
			image: '/projects/project-08-lista-facultades.webp',
			tags: [TAGS.TAILWIND, TAGS.CLOUDINARY, TAGS.NEXTJS, TAGS.MYSQL],
		},
		{
			title: t('projects.notes-app.title'),
			description: t('projects.notes-app.description'),
			link: 'https://app-notes-dev.devsandoval.me/',
			github: 'https://github.com/sandovaldavid/app-notes-dev',
			image: '/projects/project-09-app-notes.webp',
			tags: [TAGS.REACT, TAGS.MATERIALUI, TAGS.POSTGRESQL, TAGS.EXPRESS],
		},
		{
			title: t('projects.hangman-game.title'),
			description: t('projects.hangman-game.description'),
			link: 'https://juego-ahorcados.devsandoval.me/',
			github: 'https://github.com/sandovaldavid/Challenge-02--Juego-Ahorcados',
			image: '/projects/project-10-juego-ahorcados.webp',
			tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
		},
		{
			title: t('projects.aesthetic-dentistry.title'),
			description: t('projects.aesthetic-dentistry.description'),
			link: 'https://odontologia-estetica.devsandoval.me',
			github: 'https://github.com/sandovaldavid/Odontologia-Estetica',
			image: '/projects/project-11-odontologia-estetica.webp',
			tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
		},
	];
}
