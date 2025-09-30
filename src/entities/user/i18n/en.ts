/**
 * User Entity - English translations
 * Entities Layer - Business domain: User profile and about information
 */

export const userTranslations = {
	available: 'Available for work',
	intro: "Hello, I'm David Sandoval",
	description:
		'<strong>Computer Engineer</strong> graduated from the <strong>National University of Piura</strong> with training in <strong>web development</strong> and <strong>frontend</strong> certification from <strong>Alura Latam</strong> (ONE EDUCATION). I have a solid <strong>portfolio</strong> of projects using technologies like <strong>React</strong>, <strong>Django</strong>, and <strong>PostgreSQL</strong>. Passionate about creating efficient and scalable <strong>web applications</strong>. Currently looking for an opportunity to apply my knowledge and continue learning in a professional environment.',
	aboutParagraph1:
		'My name is Juan David, although most people know me as David. I am currently a graduate in Computer Engineering from the National University of Piura. My passion for software development has led me to create <strong>various independent projects</strong> that reflect my skills and dedication.',
	aboutParagraph2:
		'Throughout my training, I have worked on projects ranging from web application development to mobile solutions. These projects have been <strong>an opportunity to consolidate my technical knowledge</strong> and explore technologies such as JavaScript, Java, Django, Kotlin, and relational databases like PostgreSQL, MySQL, and SQLServer.',
	aboutParagraph3:
		'My focus is on <strong>leveraging technology to solve practical problems</strong> and improve processes through innovation. I aspire to continue learning and contributing to the world of software development, building solutions that positively impact people and businesses.',
	contact: {
		email: 'Email',
		github: 'GitHub',
		linkedin: 'LinkedIn',
	},
} as const;

export type UserTranslationKey = keyof typeof userTranslations;
