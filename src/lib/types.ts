export interface Property {
  id: number;
  slug: string;
  title: string;
  price: number;
  currency: string;
  location: string;
  city: string;
  description: string;
  type: 'Apartment' | 'House' | 'Villa' | 'Land' | 'Commercial';
  listingType: 'Buy' | 'Rent' | 'Shortlet';
  status: 'For Sale' | 'For Rent' | 'Sold' | 'Pending';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  amenities: string[];
  images: string[];
  featured: boolean;
  agentId: number;
}

export interface Agent {
  id: number;
  slug: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  phone: string;
  email: string;
  specialization: string;
  languages: string[];
  rating: number;
  reviews: { name: string; text: string }[];
  propertiesCount: number;
}

export interface Testimonial {
  name: string;
  photo: string;
  text: string;
  propertyType: string;
}