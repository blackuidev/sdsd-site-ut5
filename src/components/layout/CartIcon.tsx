import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import { CartDrawer } from '../ecommerce/CartDrawer';
import { getCartItemCount, getCartItems } from '../../services/cartService';
import { CartItem } from '../../types/ecommerce';

export const CartIcon: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const updateCartState = () => {
    setItemCount(getCartItemCount());
    setCartItems(getCartItems());
  };

  useEffect(() => {
    updateCartState(); // Initial load
    // Listen for changes in local storage (e.g., from other tabs or direct manipulation)
    const handleStorageChange = () => updateCartState();
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Update cart state when drawer is opened/closed or any cart action
  useEffect(() => {
    if (cartOpen) {
      updateCartState();
    }
  }, [cartOpen]);

  // This effect runs whenever cartItems changes from within the drawer,
  // ensuring the icon count updates immediately.
  useEffect(() => {
    setItemCount(cartItems.reduce((count, item) => count + item.quantity, 0));
  }, [cartItems]);


  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setCartOpen(true)} className="relative">
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
            {itemCount}
          </span>
        )}
        <span className="sr-only">View cart</span>
      </Button>
      <CartDrawer
        isOpen={cartOpen}
        onOpenChange={setCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
};
