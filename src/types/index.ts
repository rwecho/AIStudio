export interface News {
  id: number;
  timestamp: string;
  title: string;
  category?: string;
  author?: string;
  summary?: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  price?: number;
  rating?: number;
  reviewCount?: number;
}

export interface NavItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
  }[];
}
