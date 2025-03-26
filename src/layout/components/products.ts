export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number | null;
  rating: number;
  image: string;
  brand: string;
  isNew: boolean;
  discount: string | null;
  description: string;
  category: string;
  subcategory: string;
  variants: { id: number; name: string; price: number }[];
}
