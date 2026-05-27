export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  isVerified: boolean;
  role?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  hoverActionText: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  gradient: string;
  iconName: string;
}
