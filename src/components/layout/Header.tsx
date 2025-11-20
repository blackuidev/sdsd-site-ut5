import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartDisplay } from '@/components/common/CartDisplay'; // Assuming CartDisplay exists

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          MyStore
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
            Products
          </Link>
          <Link to="/portfolio" className="text-sm font-medium transition-colors hover:text-primary">
            Portfolio
          </Link>
          <Link to="/cart" className="relative text-sm font-medium transition-colors hover:text-primary">
            <ShoppingCart className="h-5 w-5" />
            <CartDisplay /> { /* This component should show cart item count */}
          </Link>
          <Link to="/login">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Login</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
