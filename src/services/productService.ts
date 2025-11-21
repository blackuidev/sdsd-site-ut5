import { Product } from '@/types/ecommerce';
import { products } from '@/data/products';

export const getAllProducts = async (): Promise<Product[]> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = async (id: string): Promise<Product | null> => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      resolve(product || null);
    }, 300);
  });
};
