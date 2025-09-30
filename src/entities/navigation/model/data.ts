/**
 * Navigation Entity - Data Model
 * Entities Layer - Navigation structure and links
 */

import type { NavigationData } from './types.ts';

export const navigationData: NavigationData = {
	main: [
		{
			id: 'experience',
			label: 'Experience',
			url: '#experience',
		},
		{
			id: 'projects',
			label: 'Projects', 
			url: '#projects',
		},
		{
			id: 'badges',
			label: 'Badges',
			url: '#badges',
		},
		{
			id: 'about-me',
			label: 'About Me',
			url: '#about-me',
		},
	],
	footer: [
		{
			id: 'experience',
			label: 'Experience',
			url: '#experience',
		},
		{
			id: 'projects',
			label: 'Projects',
			url: '#projects',
		},
		{
			id: 'badges',
			label: 'Badges',
			url: '#badges',
		},
		{
			id: 'about-me',
			label: 'About Me',
			url: '#about-me',
		},
	],
};