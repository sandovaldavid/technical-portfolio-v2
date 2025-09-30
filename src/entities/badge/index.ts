/**
 * Badge Entity - Public API
 * Entities Layer - Certification and badge domain exports
 */

export { badgeI18n, type BadgeTranslationKey } from './i18n';
export { 
  type BadgeItem, 
  type BadgeCategory, 
  type BadgeEntityState,
  type BadgeId 
} from './model/badge';
export { 
  getBadgeData, 
  getBadgeById, 
  getAvailableBadges, 
  getVerifiedBadges 
} from './lib';
