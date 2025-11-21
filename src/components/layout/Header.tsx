import React from 'react';
import { Link } from 'react-router-dom';
import { User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartIcon } from './CartIcon';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          YourBrand
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
            Products
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <UserIcon className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
          <CartIcon />
        </nav>
      </div>
    </header>
  );
};

export default Header;
