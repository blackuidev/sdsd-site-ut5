import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/types/ecommerce';
import * as cartService from '@/services/cartService';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from local storage on initial mount
  useEffect(() => {
    const storedCart = cartService.getCart();
    setCartItems(storedCart);
  }, []);

  // Save cart to local storage whenever cartItems change
  useEffect(() => {
    cartService.saveCart(cartItems);
  }, [cartItems]);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => cartService.addToCart(prevItems, product, quantity));
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => cartService.removeFromCart(prevItems, productId));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    setCartItems((prevItems) => cartService.updateQuantity(prevItems, productId, newQuantity));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
