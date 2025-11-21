import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { CartIcon } from './CartIcon'; // Import CartIcon

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
            <span className="font-bold">Lightswind</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link to="/projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <CartIcon /> {/* Add CartIcon here */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
