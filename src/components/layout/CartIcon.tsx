import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartIcon: React.FC = () => {
  const { cart } = useCart();
  return (
    <div className="relative">
      <ShoppingCart className="w-6 h-6" />
      {cart.totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
          {cart.totalItems}
        </span>
      )}
    </div>
  );
};
