export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category?: string;
  brand?: string;
  images?: [string];
  rating?: number;
  stock?: number;
  thumbnail?: string;
}
