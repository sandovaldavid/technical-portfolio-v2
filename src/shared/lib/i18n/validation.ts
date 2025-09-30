/**
 * i18n validation utilities
 * Shared Layer - Validation helpers for translation integrity
 */

import type { SupportedLanguage, TranslationEntry } from '../../../app/types/i18n';
import { I18N_CONFIG } from '../../../app/config/i18n';

export interface ValidationResult {
	isValid: boolean;
	errors: ValidationError[];
	warnings: ValidationWarning[];
}

export interface ValidationError {
	type: 'missing_key' | 'invalid_type' | 'empty_value' | 'missing_language';
	language?: SupportedLanguage;
	key: string;
	message: string;
}

export interface ValidationWarning {
	type: 'inconsistent_length' | 'special_chars' | 'html_content';
	language?: SupportedLanguage;
	key: string;
	message: string;
}

/**
 * Validates a translation namespace for completeness and consistency
 */
export function validateTranslationNamespace(
	translations: Record<SupportedLanguage, TranslationEntry>,
	namespaceName: string
): ValidationResult {
	const errors: ValidationError[] = [];
	const warnings: ValidationWarning[] = [];

	// Check that all languages are present
	for (const lang of I18N_CONFIG.supportedLanguages) {
		if (!translations[lang]) {
			errors.push({
				type: 'missing_language',
				language: lang,
				key: namespaceName,
				message: `Missing translations for language: ${lang}`,
			});
		}
	}

	// If we're missing languages, skip further validation
	if (errors.length > 0) {
		return { isValid: false, errors, warnings };
	}

	// Get all keys from the fallback language
	const fallbackTranslations = translations[I18N_CONFIG.fallbackLanguage];
	const allKeys = getAllKeys(fallbackTranslations);

	// Validate each key across all languages
	for (const key of allKeys) {
		validateKeyAcrossLanguages(translations, key, errors, warnings);
	}

	return {
		isValid: errors.length === 0,
		errors,
		warnings,
	};
}

/**
 * Recursively gets all keys from a translation object
 */
function getAllKeys(obj: TranslationEntry, prefix = ''): string[] {
	const keys: string[] = [];

	for (const [key, value] of Object.entries(obj)) {
		const fullKey = prefix ? `${prefix}.${key}` : key;

		if (typeof value === 'string') {
			keys.push(fullKey);
		} else if (typeof value === 'object' && value !== null) {
			keys.push(...getAllKeys(value as TranslationEntry, fullKey));
		}
	}

	return keys;
}

/**
 * Gets a nested value from an object using dot notation
 */
function getNestedValue(
	obj: TranslationEntry,
	path: string
): string | TranslationEntry | undefined {
	return path.split('.').reduce(
		(current, key) => {
			if (current && typeof current === 'object' && key in current) {
				return current[key];
			}
			return undefined;
		},
		obj as string | TranslationEntry | undefined
	);
}

/**
 * Validates a specific key across all languages
 */
function validateKeyAcrossLanguages(
	translations: Record<SupportedLanguage, TranslationEntry>,
	key: string,
	errors: ValidationError[],
	warnings: ValidationWarning[]
): void {
	const values: Record<SupportedLanguage, string | TranslationEntry | undefined> = {} as Record<
		SupportedLanguage,
		string | TranslationEntry | undefined
	>;

	// Collect values for this key from all languages
	for (const lang of I18N_CONFIG.supportedLanguages) {
		const langTranslations = translations[lang];
		const value = getNestedValue(langTranslations, key);
		values[lang] = value;

		// Check for missing keys
		if (value === undefined) {
			errors.push({
				type: 'missing_key',
				language: lang,
				key,
				message: `Missing translation for key "${key}" in language "${lang}"`,
			});
			continue;
		}

		// Check for invalid types
		if (typeof value !== 'string') {
			errors.push({
				type: 'invalid_type',
				language: lang,
				key,
				message: `Translation for key "${key}" in language "${lang}" is not a string`,
			});
			continue;
		}

		// Check for empty values
		if (value.trim() === '') {
			errors.push({
				type: 'empty_value',
				language: lang,
				key,
				message: `Translation for key "${key}" in language "${lang}" is empty`,
			});
			continue;
		}

		// Check for HTML content
		if (value.includes('<') && value.includes('>')) {
			warnings.push({
				type: 'html_content',
				language: lang,
				key,
				message: `Translation for key "${key}" in language "${lang}" contains HTML`,
			});
		}

		// Check for special characters that might indicate formatting issues
		if (/[{}[\]\\]/.test(value)) {
			warnings.push({
				type: 'special_chars',
				language: lang,
				key,
				message: `Translation for key "${key}" in language "${lang}" contains special characters`,
			});
		}
	}

	// Check for significant length differences between languages
	const lengths = Object.values(values)
		.filter(v => typeof v === 'string')
		.map(v => v.length);

	if (lengths.length > 1) {
		const maxLength = Math.max(...lengths);
		const minLength = Math.min(...lengths);

		// If one translation is more than 3x longer than another, flag it
		if (maxLength > minLength * 3 && minLength > 10) {
			warnings.push({
				type: 'inconsistent_length',
				key,
				message: `Significant length difference for key "${key}" between languages`,
			});
		}
	}
}

/**
 * Validates that required keys exist in a translation object
 */
export function validateRequiredKeys(
	translations: TranslationEntry,
	requiredKeys: string[],
	language: SupportedLanguage
): ValidationResult {
	const errors: ValidationError[] = [];

	for (const key of requiredKeys) {
		const value = getNestedValue(translations, key);

		if (value === undefined) {
			errors.push({
				type: 'missing_key',
				language,
				key,
				message: `Required key "${key}" is missing in language "${language}"`,
			});
		} else if (typeof value !== 'string') {
			errors.push({
				type: 'invalid_type',
				language,
				key,
				message: `Required key "${key}" is not a string in language "${language}"`,
			});
		} else if (value.trim() === '') {
			errors.push({
				type: 'empty_value',
				language,
				key,
				message: `Required key "${key}" is empty in language "${language}"`,
			});
		}
	}

	return {
		isValid: errors.length === 0,
		errors,
		warnings: [],
	};
}

/**
 * Creates a report from validation results
 */
export function createValidationReport(result: ValidationResult, namespace: string): string {
	const lines: string[] = [];

	lines.push(`Validation Report for "${namespace}"`);
	lines.push('='.repeat(50));

	if (result.isValid) {
		lines.push('✅ All validations passed!');
	} else {
		lines.push(`❌ ${result.errors.length} error(s) found`);
	}

	if (result.warnings.length > 0) {
		lines.push(`⚠️  ${result.warnings.length} warning(s) found`);
	}

	if (result.errors.length > 0) {
		lines.push('\nErrors:');
		for (const error of result.errors) {
			lines.push(`  - ${error.message}`);
		}
	}

	if (result.warnings.length > 0) {
		lines.push('\nWarnings:');
		for (const warning of result.warnings) {
			lines.push(`  - ${warning.message}`);
		}
	}

	return lines.join('\n');
}
