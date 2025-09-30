/**
 * Contact Form Feature - English translations
 * Features Layer - Contact form functionality
 */

export const contactFormTranslations = {
	title: 'Contact Me',
	nameLabel: 'Name',
	emailLabel: 'Email',
	messageLabel: 'Message',
	namePlaceholder: 'Your name',
	emailPlaceholder: 'your.email@example.com',
	messagePlaceholder: 'Write your message here...',
	submitButton: 'Send Message',
	submittingButton: 'Sending...',
	successMessage: 'Message sent successfully!',
	errorMessage: 'Error sending message. Please try again.',
	requiredField: 'This field is required',
	invalidEmail: 'Please enter a valid email address',
} as const;

export type ContactFormTranslationKey = keyof typeof contactFormTranslations;
