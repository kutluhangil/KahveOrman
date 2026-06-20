// Ürün veri modeli ve kategori tanımları

export type Category =
  | 'Single Origin'
  | 'Blend'
  | 'Cold Brew'
  | 'Equipment'
  | 'Accessories';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string; // görsel URL
  tagline: string; // tek satır kısa açıklama
  description: string;
  roast: string; // Kavrum (ör. "Açık")
  origin: string; // Menşe (ör. "Etiyopya")
  weight: string; // ör. "250g"
}

// Kategori filtresi ve form select'i için ortak liste
export const CATEGORIES: Category[] = [
  'Single Origin',
  'Blend',
  'Cold Brew',
  'Equipment',
  'Accessories',
];
