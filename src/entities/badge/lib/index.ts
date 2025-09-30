/**
 * Badge Entity - Data helpers
 * Entities Layer - Badge data access and utilities
 */

import type { BadgeItem, BadgeId } from '../model/badge';
import { badgeI18n } from '../i18n';

// Badge registry with metadata
const BADGE_REGISTRY: Record<BadgeId, Omit<BadgeItem, 'name'>> = {
  githubFoundations: {
    id: 'githubFoundations',
    issuer: 'GitHub',
    date: '2024',
    image: '/badges/github-foundations.png',
    link: 'https://www.credly.com/badges/your-badge-id', // Replace with actual link
    verified: true
  },
  dataModeling: {
    id: 'dataModeling', 
    issuer: 'Alura - Oracle Next Education',
    date: '2023',
    image: '/badges/data-modeling.png', // Add when available
    verified: true
  },
  etl: {
    id: 'etl',
    issuer: 'Alura - Oracle Next Education', 
    date: '2023',
    image: '/badges/etl.png', // Add when available
    verified: true
  },
  statisticsML: {
    id: 'statisticsML',
    issuer: 'Alura - Oracle Next Education',
    date: '2023', 
    image: '/badges/statistics-ml.png', // Add when available
    verified: true
  }
};

/**
 * Get badge data with translations
 */
export function getBadgeData(language: string): BadgeItem[] {
  const translations = badgeI18n[language as keyof typeof badgeI18n];
  
  if (!translations) {
    throw new Error(`Unsupported language: ${language}`);
  }
  
  return Object.entries(BADGE_REGISTRY).map(([key, badge]) => ({
    ...badge,
    name: translations[key as BadgeId]
  }));
}

/**
 * Get single badge by ID
 */
export function getBadgeById(id: BadgeId, language: string): BadgeItem {
  const badges = getBadgeData(language);
  const badge = badges.find(b => b.id === id);
  
  if (!badge) {
    throw new Error(`Badge not found: ${id}`);
  }
  
  return badge;
}

/**
 * Get available badges (those with images)
 */
export function getAvailableBadges(language: string): BadgeItem[] {
  return getBadgeData(language).filter(badge => badge.image);
}

/**
 * Get verified badges only
 */
export function getVerifiedBadges(language: string): BadgeItem[] {
  return getBadgeData(language).filter(badge => badge.verified);
}