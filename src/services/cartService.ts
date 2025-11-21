import { Product } from '@/types/ecommerce';
import { CartItem } from '@/context/CartContext';

const CART_STORAGE_KEY = 'ecommerce_cart';

// Helper to get cart from local storage
export const getCart = (): CartItem[] => {
  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error('Failed to parse cart from local storage', error);
    return [];
  }
};

// Helper to save cart to local storage
export const saveCart = (cart: CartItem[]): void => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Failed to save cart to local storage', error);
  }
};

export const addToCart = (currentCart: CartItem[], product: Product, quantity: number): CartItem[] => {
  const existingItemIndex = currentCart.findIndex((item) => item.product.id === product.id);

  if (existingItemIndex > -1) {
    // If item exists, update quantity
    const updatedCart = [...currentCart];
    updatedCart[existingItemIndex].quantity += quantity;
    return updatedCart;
  } else {
    // If item doesn't exist, add new item
    return [...currentCart, { product, quantity }];
  }
};

export const removeFromCart = (currentCart: CartItem[], productId: string): CartItem[] => {
  return currentCart.filter((item) => item.product.id !== productId);
};

export const updateQuantity = (currentCart: CartItem[], productId: string, newQuantity: number): CartItem[] => {
  if (newQuantity <= 0) {
    return removeFromCart(currentCart, productId);
  }

  return currentCart.map((item) =>
    item.product.id === productId ? { ...item, quantity: newQuantity } : item
  );
};
