/**
 * Contact Form Feature - Public API
 * Features Layer - Contact form functionality exports
 */

export { default as ContactForm } from './ui/ContactForm.astro';
export { useContactFormTranslations } from './lib/translations';
export { validateContactForm, validateEmail } from './lib/validation';
export {
	processContactFormData,
	createContactPayload,
	storeContactLocally,
	logContactAttempt,
	submitContactData,
} from './lib/contactService';
export type { ContactFormTranslationKey } from './i18n';
export type {
	ContactFormProps,
	ContactFormData,
	FormValidationResult,
	FormState,
} from './model/types';
export type {
	ContactData,
	ContactRequestPayload,
} from './lib/contactService';
