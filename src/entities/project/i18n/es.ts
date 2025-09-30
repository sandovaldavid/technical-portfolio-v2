/**
 * Project Entity - Spanish translations
 * Entities Layer - Business domain: Project portfolio
 */

/**
 * Project Entity - Spanish translations
 * Entities Layer - Business domain: Project portfolio
 */

export const projectTranslations = {
	techShop: {
		title: 'TechShop',
		description:
			'TechShop E-Commerce ofrece una experiencia de compra ágil y completamente responsiva. Incluye filtros avanzados de productos, carrito dinámico, autenticación segura, lista de deseos, modo oscuro y dashboard intuitivo. El contenido se gestiona mediante Sanity CMS.',
		link: 'https://byte-shop-ecommerce.vercel.app',
		github: 'https://github.com/sandovaldavid/byte-shop-ecommerce',
		image: '/projects/project-15-TechShop.webp',
		tags: ['NEXTJS', 'REACT', 'SANITY', 'TAILWIND'],
		featured: true,
	},
	buonaVita: {
		title: 'Buona Vita Nutrición',
		description:
			'Buona Vita Nutrición es un sistema web para nutricionistas que permite registrar, visualizar y analizar datos clínicos de pacientes. Incluye cálculo automático de IMC, edición de datos y almacenamiento local persistente. Utiliza Chart.js para gráficos interactivos.',
		link: 'https://clinica-alura-demo.devsandoval.me/',
		github: 'https://github.com/sandovaldavid/Pagina_Web_Clinica_Alura',
		image: '/projects/project-16-buona-vita.webp',
		tags: ['HTML', 'CSS', 'JAVASCRIPT', 'CHARTJS'],
		featured: true,
	},
	nikeDemo: {
		title: 'Nike Demo',
		description:
			'Nike Website Demo es una página de aterrizaje construida con Astro, TypeScript y Tailwind CSS que replica fielmente el sitio oficial de Nike, priorizando el rendimiento y un diseño pixel-perfect.',
		link: 'https://nike-website-demo.vercel.app',
		github: 'https://github.com/sandovaldavid/nike-website-demo',
		image: '/projects/project-17-nike-demo.webp',
		tags: ['ASTRO', 'TAILWIND', 'JAVASCRIPT'],
		featured: true,
	},
	doguito: {
		title: 'Doguito',
		description:
			'Doguito Petshop Admin es un sistema administrativo web que permite la gestión completa CRUD de clientes, productos y mascotas, con validación de formularios y notificaciones en tiempo real.',
		link: 'https://doguito.devsandoval.me/',
		github: 'https://github.com/sandovaldavid/CRUD',
		image: '/projects/project-18-doguito.webp',
		tags: ['HTML', 'CSS', 'JAVASCRIPT'],
	},
	mail: {
		title: 'Mail',
		description:
			'Este proyecto implementa un cliente de correo de página única (SPA) usando Django para el backend y JavaScript, HTML y CSS para el frontend. Las características principales incluyen envío, recepción, archivado y respuesta de correos.',
		link: 'https://mail.devsandoval.me',
		github: 'https://github.com/sandovaldavid/project-03-mail',
		image: '/projects/project-14-mail.webp',
		tags: ['DJANGO', 'BOOTSTRAP', 'JAVASCRIPT'],
	},
	wiki: {
		title: 'Wiki',
		description:
			"Este proyecto es un sitio web tipo enciclopedia construido con Django llamado 'wiki', que contiene una sola aplicación llamada 'encyclopedia'",
		link: 'https://wiki.devsandoval.me',
		github: 'https://github.com/sandovaldavid/project-01-wiki',
		image: '/projects/project-01-wiki.webp',
		tags: ['DJANGO', 'PYTHON', 'MARKDOWN', 'BOOTSTRAP'],
	},
	auctions: {
		title: 'Auctions',
		description:
			'El Sitio de Subastas es una aplicación web donde los usuarios pueden crear, pujar y gestionar subastas online. Proporciona una plataforma para que los usuarios listen artículos en venta, hagan ofertas competitivas e interactúen con la comunidad de subastas.',
		link: 'https://auctions.devsandoval.me/',
		github: 'https://github.com/sandovaldavid/project-02-auctions',
		image: '/projects/project-02-auctions.webp',
		tags: ['DJANGO', 'PYTHON', 'BOOTSTRAP', 'JAVASCRIPT', 'CSS', 'HTML'],
	},
	messageEncoder: {
		title: 'Codificador de Mensajes',
		description:
			'Esta página web encripta un texto ingresado por el usuario, y en la misma página, el usuario puede desencriptar el mensaje si lo desea.',
		link: 'https://codificador.devsandoval.me',
		github: 'https://github.com/sandovaldavid/Challenge-01--Codificador',
		image: '/projects/project-03-codificador.webp',
		tags: ['JAVASCRIPT', 'CSS', 'HTML'],
	},
} as const;

export type ProjectTranslationKey = keyof typeof projectTranslations;
