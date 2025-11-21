import React from 'react';
import { Link } from 'react-router-dom';
import { CartDrawer } from '../ecommerce/CartDrawer';
import { CartIcon } from './CartIcon';
import { Logo } from '../ui/Logo'; // Assuming Logo is a simple component
import { Button } from '../ui/button'; // Assuming button is available

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 mr-6">
            <Logo className="h-6 w-6" />
            <span className="font-bold text-lg">E-commerce Site</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
              Products
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <CartDrawer>
            <Button variant="ghost" size="icon">
              <CartIcon />
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </CartDrawer>
          {/* Add Auth buttons here later */}
          {/* <Button variant="outline">Sign In</Button> */}
        </div>
      </div>
    </header>
  );
};
