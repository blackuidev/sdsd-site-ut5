import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '@/types/ecommerce';
import { useToast } from '@/components/hooks/use-toast'; // Assuming this hook exists

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartItemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > product.stock) {
            toast({
                title: 'Out of Stock!',
                description: `Cannot add more than ${product.stock} of ${product.name} to cart.`,
                variant: 'destructive',
            });
            return prevItems;
        }
        toast({
            title: 'Item Updated',
            description: `${product.name} quantity updated in cart.`,
        });
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      } else {
        if (quantity > product.stock) {
            toast({
                title: 'Out of Stock!',
                description: `Cannot add more than ${product.stock} of ${product.name} to cart.`,
                variant: 'destructive',
            });
            return prevItems;
        }
        toast({
            title: 'Item Added',
            description: `${product.name} added to cart.`,
        });
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => {
      const item = prevItems.find(i => i.id === productId);
      if (item) {
        toast({
            title: 'Item Removed',
            description: `${item.name} removed from cart.`,
        });
      }
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) => {
      const itemToUpdate = prevItems.find(item => item.id === productId);
      if (itemToUpdate && quantity > itemToUpdate.stock) {
          toast({
              title: 'Out of Stock!',
              description: `Cannot add more than ${itemToUpdate.stock} of ${itemToUpdate.name} to cart.`,
              variant: 'destructive',
          });
          return prevItems;
      }
      if (quantity <= 0) {
        return prevItems.filter((item) => item.id !== productId);
      }
      toast({
          title: 'Quantity Updated',
          description: `Quantity for ${itemToUpdate?.name || 'item'} updated.`,
      });
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
        title: 'Cart Cleared',
        description: 'All items removed from your cart.',
    });
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};