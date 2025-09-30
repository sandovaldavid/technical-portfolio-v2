/**
 * Contact Form Feature - Validation utilities
 * Features Layer - Form validation helpers
 */

import type { ContactFormData, FormValidationResult } from '../model/types';

export function validateEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export function validateContactForm(
	data: ContactFormData,
	t: (key: string) => string
): FormValidationResult {
	const errors: Record<string, string> = {};

	// Validate name
	if (!data.name.trim()) {
		errors.name = t('requiredField');
	}

	// Validate email
	if (!data.email.trim()) {
		errors.email = t('requiredField');
	} else if (!validateEmail(data.email)) {
		errors.email = t('invalidEmail');
	}

	// Validate message
	if (!data.message.trim()) {
		errors.message = t('requiredField');
	}

	return {
		isValid: Object.keys(errors).length === 0,
		errors,
	};
}
