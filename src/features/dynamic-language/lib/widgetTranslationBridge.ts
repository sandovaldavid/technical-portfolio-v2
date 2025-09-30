/**
 * Dynamic Language Feature - Widget Translation Bridge
 * Features Layer - Bridges existing widget translations with dynamic content switching
 */

import { registerTranslationData, registerTranslatableElement } from './contentSwitchingService';

/**
 * Load existing translations from entities and widgets
 */
const loadExistingTranslations = async () => {
	try {
		// Import user entity translations (used by Hero and AboutMe widgets)
		const { userI18n } = await import('../../../entities/user/index.js');
		
		// Import experience entity translations
		const { experienceI18n } = await import('../../../entities/experience/index.js');
		
		// Import project entity translations  
		const { projectI18n } = await import('../../../entities/project/index.js');
		
		// Define widget-specific translations
		const experienceWidgetTranslations = {
			en: {
				title: 'Professional Experience',
				subtitle: 'My journey through different roles and companies',
				learnMore: 'Learn more',
			},
			es: {
				title: 'Experiencia Profesional',
				subtitle: 'Mi trayectoria a través de diferentes roles y empresas',
				learnMore: 'Saber más',
			},
		};
		
		const projectWidgetTranslations = {
			en: {
				sectionTitle: 'Projects',
				codeButton: 'Code',
				previewButton: 'Preview',
				projectAlt: 'project screenshot',
			},
			es: {
				sectionTitle: 'Proyectos',
				codeButton: 'Código',
				previewButton: 'Vista previa',
				projectAlt: 'captura de pantalla del proyecto',
			},
		};
		
		return {
			user: userI18n,
			experience: experienceI18n,
			project: projectI18n,
			'experience-widget': experienceWidgetTranslations,
			'project-widget': projectWidgetTranslations,
		};
	} catch (error) {
		console.warn('Failed to load existing translations:', error);
		return {};
	}
};

/**
 * Register all existing widget/entity translations with the content switching system
 */
export async function registerAllWidgetTranslations() {
	try {
		// Load existing translations
		const translations = await loadExistingTranslations();
		
		// Register each translation namespace
		Object.entries(translations).forEach(([namespace, translationData]) => {
			if (translationData) {
				registerTranslationData(namespace, translationData);
				console.log(`✅ Registered ${namespace} translations for dynamic switching`);
			}
		});
		
		return translations;
	} catch (error) {
		console.error('Failed to register widget translations:', error);
		return {};
	}
}

/**
 * Auto-scan the DOM and register elements for translation
 */
export function autoRegisterWidgetElements() {
	// Register Hero widget elements
	registerHeroElements();
	
	// Register About Me widget elements  
	registerAboutMeElements();
	
	// Register Experience Section widget elements
	registerExperienceElements();
	
	// Register Project Portfolio widget elements
	registerProjectElements();
	
	console.log('✅ Auto-registered widget elements for dynamic translation');
}

/**
 * Register Hero widget elements for dynamic translation
 */
function registerHeroElements() {
	try {
		// Hero title
		const heroTitle = document.querySelector('.hero__title');
		if (heroTitle) {
			registerTranslatableElement('hero-title', heroTitle as HTMLElement, 'intro', 'user');
		}

		// Hero description/bio
		const heroDescription = document.querySelector('.hero__bio');
		if (heroDescription) {
			registerTranslatableElement('hero-description', heroDescription as HTMLElement, 'description', 'user');
		}
	} catch (error) {
		console.warn('Failed to register hero elements:', error);
	}
}

/**
 * Register About Me widget elements for dynamic translation
 */
function registerAboutMeElements() {
	try {
		// About me paragraphs - using the exact structure from AboutMe.astro
		const aboutParagraphs = document.querySelectorAll('.about-me__text p');
		aboutParagraphs.forEach((paragraph, index) => {
			const key = `aboutParagraph${index + 1}`;
			registerTranslatableElement(`about-p${index + 1}`, paragraph as HTMLElement, key, 'user');
		});
	} catch (error) {
		console.warn('Failed to register about me elements:', error);
	}
}

/**
 * Register Experience Section widget elements for dynamic translation
 */
function registerExperienceElements() {
	try {
		// Experience item titles
		const experienceTitles = document.querySelectorAll('.experience-item__title');
		experienceTitles.forEach((title, index) => {
			// Get the parent experience item to find the corresponding data
			const experienceItem = title.closest('.experience-item');
			if (experienceItem) {
				// Try to match with experience keys - we'll use the order
				const experienceKeys = ['technicalSupport', 'chirasoft', 'harvardx', 'alura', 'dataScience'];
				const key = experienceKeys[index];
				if (key) {
					registerTranslatableElement(`exp-title-${index}`, title as HTMLElement, `${key}.title`, 'experience');
				}
			}
		});

		// Experience item descriptions
		const experienceDescriptions = document.querySelectorAll('.experience-item__description');
		experienceDescriptions.forEach((description, index) => {
			const experienceKeys = ['technicalSupport', 'chirasoft', 'harvardx', 'alura', 'dataScience'];
			const key = experienceKeys[index];
			if (key) {
				registerTranslatableElement(`exp-desc-${index}`, description as HTMLElement, `${key}.description`, 'experience');
			}
		});

		// Experience item companies
		const experienceCompanies = document.querySelectorAll('.experience-item__company');
		experienceCompanies.forEach((company, index) => {
			const experienceKeys = ['technicalSupport', 'chirasoft', 'harvardx', 'alura', 'dataScience'];
			const key = experienceKeys[index];
			if (key) {
				registerTranslatableElement(`exp-company-${index}`, company as HTMLElement, `${key}.company`, 'experience');
			}
		});

		// Experience "Learn more" links
		const learnMoreLinks = document.querySelectorAll('.experience-item__link a');
		learnMoreLinks.forEach((link, index) => {
			registerTranslatableElement(`exp-learn-more-${index}`, link as HTMLElement, 'learnMore', 'experience-widget');
		});

	} catch (error) {
		console.warn('Failed to register experience elements:', error);
	}
}

/**
 * Register Project Portfolio widget elements for dynamic translation
 */
function registerProjectElements() {
	try {
		// Project titles
		const projectTitles = document.querySelectorAll('article h3');
		projectTitles.forEach((title, index) => {
			// Project titles come from the project entity data, so they need special handling
			// We'll register them but note that their translation comes from project data
			registerTranslatableElement(`project-title-${index}`, title as HTMLElement, `title`, 'project');
		});

		// Project descriptions
		const projectDescriptions = document.querySelectorAll('article .text-gray-700.dark\\:text-gray-400');
		projectDescriptions.forEach((description, index) => {
			registerTranslatableElement(`project-desc-${index}`, description as HTMLElement, `description`, 'project');
		});

		// Code buttons
		const codeButtons = document.querySelectorAll('footer a[href*="github"]');
		codeButtons.forEach((button, index) => {
			const buttonText = button.querySelector(':not(svg)');
			if (buttonText) {
				registerTranslatableElement(`project-code-btn-${index}`, buttonText as HTMLElement, 'codeButton', 'project-widget');
			}
		});

		// Preview buttons  
		const previewButtons = document.querySelectorAll('footer a:not([href*="github"])');
		previewButtons.forEach((button, index) => {
			const buttonText = button.querySelector(':not(svg)');
			if (buttonText) {
				registerTranslatableElement(`project-preview-btn-${index}`, buttonText as HTMLElement, 'previewButton', 'project-widget');
			}
		});

	} catch (error) {
		console.warn('Failed to register project elements:', error);
	}
}