/**
 * Date Utilities
 * Shared Layer - Common date manipulation functions
 */

/**
 * Gets the current year
 * @returns Current year as number
 */
export const getCurrentYear = (): number => {
	return new Date().getFullYear();
};

/**
 * Formats a date to a readable string
 * @param date - Date to format
 * @param locale - Locale for formatting (default: 'en-US')
 * @returns Formatted date string
 */
export const formatDate = (date: Date, locale: string = 'en-US'): string => {
	return date.toLocaleDateString(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};

/**
 * Gets the current date formatted
 * @param locale - Locale for formatting (default: 'en-US')
 * @returns Current date formatted as string
 */
export const getCurrentDate = (locale: string = 'en-US'): string => {
	return formatDate(new Date(), locale);
};