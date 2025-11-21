import { CartItem, Product } from '../types/ecommerce';

const CART_STORAGE_KEY = 'lightswind_cart';

const getCartFromLocalStorage = (): CartItem[] => {
  const cartJson = localStorage.getItem(CART_STORAGE_KEY);
  return cartJson ? JSON.parse(cartJson) : [];
};

const saveCartToLocalStorage = (cart: CartItem[]) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

export const getCartItems = (): CartItem[] => {
  return getCartFromLocalStorage();
};

export const addToCart = (product: Product, quantity: number = 1): CartItem[] => {
  const cart = getCartFromLocalStorage();
  const existingItemIndex = cart.findIndex(item => item.id === product.id);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  saveCartToLocalStorage(cart);
  return cart;
};

export const updateCartItemQuantity = (productId: string, quantity: number): CartItem[] => {
  let cart = getCartFromLocalStorage();
  const itemIndex = cart.findIndex(item => item.id === productId);

  if (itemIndex > -1) {
    if (quantity <= 0) {
      cart.splice(itemIndex, 1); // Remove if quantity is 0 or less
    } else {
      cart[itemIndex].quantity = quantity;
    }
  }
  saveCartToLocalStorage(cart);
  return cart;
};

export const removeFromCart = (productId: string): CartItem[] => {
  const cart = getCartFromLocalStorage();
  const updatedCart = cart.filter(item => item.id !== productId);
  saveCartToLocalStorage(updatedCart);
  return updatedCart;
};

export const clearCart = (): CartItem[] => {
  saveCartToLocalStorage([]);
  return [];
};

export const getCartTotal = (): number => {
  const cart = getCartFromLocalStorage();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const getCartItemCount = (): number => {
  const cart = getCartFromLocalStorage();
  return cart.reduce((count, item) => count + item.quantity, 0);
};
