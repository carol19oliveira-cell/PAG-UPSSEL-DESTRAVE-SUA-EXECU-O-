export interface ModuleCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badgeText?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface RecentBuyer {
  id: string;
  name: string;
  location: string;
  timeAgo: string;
}
