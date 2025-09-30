/**
 * Project Entity - English translations
 * Entities Layer - Business domain: Project portfolio
 */

export const projectTranslations = {
	techShop: {
		title: 'TechShop',
		description:
			'TechShop E-Commerce offers an agile and fully responsive shopping experience. Features advanced product filters, dynamic shopping cart, secure authentication, wishlist, dark mode and intuitive user dashboard. Content is managed via Sanity CMS.',
		link: 'https://byte-shop-ecommerce.vercel.app',
		github: 'https://github.com/sandovaldavid/byte-shop-ecommerce',
		image: '/projects/project-15-TechShop.webp',
		tags: ['NEXTJS', 'REACT', 'SANITY', 'TAILWIND'],
		featured: true,
	},
	buonaVita: {
		title: 'Buona Vita Nutrición',
		description:
			"Buona Vita Nutrition is a web-based system for nutritionists to record, view, and analyze patients' clinical data. It features automatic BMI calculation, data editing, and persistent local storage. Leveraging Chart.js for interactive charts.",
		link: 'https://clinica-alura-demo.devsandoval.me/',
		github: 'https://github.com/sandovaldavid/Pagina_Web_Clinica_Alura',
		image: '/projects/project-16-buona-vita.webp',
		tags: ['HTML', 'CSS', 'JAVASCRIPT', 'CHARTJS'],
		featured: true,
	},
	nikeDemo: {
		title: 'Nike Demo',
		description:
			"Nike Website Demo is a landing page built with Astro, TypeScript and Tailwind CSS that faithfully replicates Nike's official site, prioritizing performance and pixel-perfect design.",
		link: 'https://nike-website-demo.vercel.app',
		github: 'https://github.com/sandovaldavid/nike-website-demo',
		image: '/projects/project-17-nike-demo.webp',
		tags: ['ASTRO', 'TAILWIND', 'JAVASCRIPT'],
		featured: true,
	},
	doguito: {
		title: 'Doguito',
		description:
			'Doguito Petshop Admin is a web-based administrative system that enables full CRUD management of clients, products, and pets, featuring form validation and real-time notifications.',
		link: 'https://doguito.devsandoval.me/',
		github: 'https://github.com/sandovaldavid/CRUD',
		image: '/projects/project-18-doguito.webp',
		tags: ['HTML', 'CSS', 'JAVASCRIPT'],
	},
	mail: {
		title: 'Mail',
		description:
			'This project implements a single-page email client (SPA) using Django for the backend and JavaScript, HTML, and CSS for the frontend. Key features include sending, receiving, archiving, and replying to emails.',
		link: 'https://mail.devsandoval.me',
		github: 'https://github.com/sandovaldavid/project-03-mail',
		image: '/projects/project-14-mail.webp',
		tags: ['DJANGO', 'BOOTSTRAP', 'JAVASCRIPT'],
	},
	wiki: {
		title: 'Wiki',
		description:
			"This project is a Django-built encyclopedia-type website called 'wiki', which contains a single application called 'encyclopedia'",
		link: 'https://wiki.devsandoval.me',
		github: 'https://github.com/sandovaldavid/project-01-wiki',
		image: '/projects/project-01-wiki.webp',
		tags: ['DJANGO', 'PYTHON', 'MARKDOWN', 'BOOTSTRAP'],
	},
	auctions: {
		title: 'Auctions',
		description:
			'The Auction Site is a web application where users can create, bid, and manage online auctions. It provides a platform for users to list items for sale, make competitive bids, and interact with the auction community.',
		link: 'https://auctions.devsandoval.me/',
		github: 'https://github.com/sandovaldavid/project-02-auctions',
		image: '/projects/project-02-auctions.webp',
		tags: ['DJANGO', 'PYTHON', 'BOOTSTRAP', 'JAVASCRIPT', 'CSS', 'HTML'],
	},
	messageEncoder: {
		title: 'Message Encoder',
		description:
			'This web page encrypts a text entered by the user, and on the same page, the user can decrypt the message if desired.',
		link: 'https://codificador.devsandoval.me',
		github: 'https://github.com/sandovaldavid/Challenge-01--Codificador',
		image: '/projects/project-03-codificador.webp',
		tags: ['JAVASCRIPT', 'CSS', 'HTML'],
	},
} as const;

export type ProjectTranslationKey = keyof typeof projectTranslations;
