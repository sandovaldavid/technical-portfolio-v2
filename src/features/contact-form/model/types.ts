/**
 * Contact Form Feature - Types
 * Features Layer - Contact form component types
 */

export interface ContactFormProps {
	class?: string;
	id?: string;
	action?: string;
	method?: 'POST' | 'GET';
}

export interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

export interface FormValidationResult {
	isValid: boolean;
	errors: Record<string, string>;
}

export type FormState = 'idle' | 'submitting' | 'success' | 'error';
