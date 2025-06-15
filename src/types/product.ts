
export interface ProductData {
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  features: string[];
  productDescription: string[];
  detailedFeatures: string[];
  specifications: Record<string, string>;
  benefits: string[];
}
