/**
 * User Entity - Types and interfaces
 * Entities Layer - Business domain: User profile data structures
 */

export interface UserContactData {
	email: string;
	github: string;
	linkedin: string;
}

export interface UserPersonalData {
	name: string;
	title: string;
	location: string;
	avatar: string;
}

export interface UserSocialLinks {
	email: string;
	github: string;
	linkedin: string;
}

export interface UserData {
	personal: UserPersonalData;
	contact: UserContactData;
	social: UserSocialLinks;
}