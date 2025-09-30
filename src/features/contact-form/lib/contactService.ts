/**
 * Contact Form Feature - Service Layer
 * Features Layer - Business logic for contact form processing
 */

export interface ContactData {
	name: string;
	email: string;
	message: string;
	timestamp: string;
	userAgent: string;
	language: string;
}

export interface ContactRequestPayload extends ContactData {
	source: string;
	version: string;
}

/**
 * Process and structure form data for submission
 */
export function processContactFormData(formData: FormData): ContactData {
	return {
		name: formData.get('name')?.toString().trim() || '',
		email: formData.get('email')?.toString().trim() || '',
		message: formData.get('message')?.toString().trim() || '',
		timestamp: new Date().toISOString(),
		userAgent: navigator.userAgent,
		language: document.documentElement.lang || 'en'
	};
}

/**
 * Prepare contact data for backend submission
 */
export function createContactPayload(contactData: ContactData): ContactRequestPayload {
	return {
		...contactData,
		source: 'portfolio-contact-form',
		version: '1.0'
	};
}

/**
 * Store contact data locally for development/analytics
 */
export function storeContactLocally(contactData: ContactData): void {
	try {
		const existingContacts = JSON.parse(localStorage.getItem('portfolio-contacts') || '[]');
		existingContacts.push(contactData);
		
		// Keep only last 10 contacts to avoid storage bloat
		if (existingContacts.length > 10) {
			existingContacts.splice(0, existingContacts.length - 10);
		}
		
		localStorage.setItem('portfolio-contacts', JSON.stringify(existingContacts));
	} catch (error) {
		console.warn('Could not store contact data locally:', error);
	}
}

/**
 * Log contact attempt for development/analytics
 */
export function logContactAttempt(contactData: ContactData): void {
	console.log('Contact form submission:', {
		...contactData,
		userAgent: contactData.userAgent.substring(0, 50) + '...' // Truncate for logging
	});
}

/**
 * Submit contact data to backend (future implementation)
 */
export async function submitContactData(payload: ContactRequestPayload): Promise<void> {
	// Future backend integration point
	// const response = await fetch('/api/contact', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// 	body: JSON.stringify(payload)
	// });
	// 
	// if (!response.ok) {
	// 	throw new Error(`Contact submission failed: ${response.statusText}`);
	// }

	// Log payload for development (remove in production)
	console.log('Contact payload prepared for submission:', payload);

	// Simulate backend response time for realistic UX
	await new Promise(resolve => setTimeout(resolve, 1000));
}