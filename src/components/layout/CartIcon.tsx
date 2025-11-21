import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CartIcon: React.FC = () => {
  // In a real app, you'd get cart item count from context/store
  const itemCount = 0; // Placeholder

  return (
    <Link to="/cart">
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
            {itemCount}
          </span>
        )}
        <span className="sr-only">Shopping Cart</span>
      </Button>
    </Link>
  );
};
