/**
 * Badge item representing a certification or achievement
 */
export interface BadgeItem {
	/** Badge display label/title */
	label: string;
	/** Badge image URL or path */
	image: string;
	/** Optional link to credential verification */
	link?: string;
}
