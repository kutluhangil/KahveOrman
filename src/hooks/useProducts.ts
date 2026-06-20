import { useEffect, useState } from 'react';
import type { Product } from '../Interfaces/product';
import { seedProducts } from '../data/seedProducts';

const STORAGE_KEY = 'kahveorman:products';

// İlk açılışta LocalStorage'ı oku; boşsa seedProducts ile doldur.
function loadProducts(): Product[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw) as Product[];
    }
  } catch {
    // Bozuk veri varsa seed'e dön
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seedProducts));
  return seedProducts;
}

// LocalStorage tabanlı basit CRUD hook'u.
export function useProducts() {
  const [products, setProducts] = useState<Product[]>(loadProducts);

  // products her değiştiğinde LocalStorage'a yaz.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  // Ekle
  function addProduct(data: Omit<Product, 'id'>) {
    const newProduct: Product = { ...data, id: crypto.randomUUID() };
    setProducts((prev) => [newProduct, ...prev]);
  }

  // Güncelle
  function updateProduct(id: string, data: Omit<Product, 'id'>) {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...data, id } : p))
    );
  }

  // Sil
  function deleteProduct(id: string) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  return { products, addProduct, updateProduct, deleteProduct };
}
