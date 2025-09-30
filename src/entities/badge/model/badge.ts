/**
 * Badge Entity - Model
 * Entities Layer - Business domain: Badges and certifications
 */

export interface BadgeItem {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  image: string;
  link?: string;
  description?: string;
  verified: boolean;
}

export interface BadgeCategory {
  name: string;
  badges: BadgeItem[];
}

export interface BadgeEntityState {
  badges: BadgeItem[];
  categories: BadgeCategory[];
}

export type BadgeId = 
  | 'githubFoundations'
  | 'dataModeling'
  | 'etl'
  | 'statisticsML';