/**
 * Experience Entity - English translations
 * Entities Layer - Business domain: Professional work experience
 */

export const experienceTranslations = {
	technicalSupport: {
		date: 'Jun 2024 - Oct 2024',
		title: 'Technical Support',
		description:
			'I provided technical support for maintenance and configuration of technological infrastructure, ensuring the operation of systems and equipment in an institutional environment. I developed skills in diagnosing and resolving incidents, optimization of technological processes, and attention to requirements, contributing to operational efficiency.',
		company: 'Provincial Municipality of Piura',
	},
	chirasoft: {
		date: 'May 2025 – Jul 2025',
		title: 'Fullstack Developer Freelance',
		description:
			'I migrated an educational institutional site from WordPress to Angular, improving its performance, maintainability, and user experience. I contributed to the comprehensive development of an e-commerce platform, from frontend to backend business logic.',
		company: 'Chirasoft',
	},
	harvardx: {
		date: 'May 2024 – May 2025',
		title: 'Full Stack Developer (CS50W)',
		description:
			'I implemented complete projects using Django, JavaScript, and Bootstrap, including an auction platform and an AJAX-based email system. Focused on responsive design, user authentication, and dynamic navigation.',
		company: 'HarvardX',
	},
	alura: {
		date: 'Apr. 2022 – Dec. 2022',
		title: 'Junior Web Developer',
		description:
			'I built interactive web applications, including games, online stores, and landing pages using HTML5, CSS3, and JavaScript. Participated in coding challenges applying good UI/UX practices.',
		company: 'Alura Latam (ONE Program)',
	},
	dataScience: {
		date: 'Feb 2024 – Jun 2024',
		title: 'Data Science Trainee',
		description:
			'I participated in an intensive Data Science training program focused on real-world projects and the application of modern analysis and visualization tools. Developed skills in statistics, exploratory data analysis, data cleaning, and transformation with Python.',
		company: 'Alura LATAM / Oracle Next Education',
	},
} as const;

export type ExperienceTranslationKey = keyof typeof experienceTranslations;
export type ExperienceItemKey = keyof (typeof experienceTranslations)[ExperienceTranslationKey];
