import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { SparkleNavbar } from '@/components/ui/sparkle-navbar';

const Header: React.FC = () => {
  const { cartItemCount } = useCart();

  return (
    <SparkleNavbar
      className="fixed top-0 left-0 right-0 z-50 w-full"
      items={[
        { label: 'Home', link: '/' },
        { label: 'Products', link: '/products' },
        { label: 'Login', link: '/login' }
      ]}
      rightContent={
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5 text-white" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Sign Up
            </Button>
          </Link>
        </div>
      }
      logo={<Link to="/" className="text-2xl font-bold text-white">BlackUI Store</Link>}
    />
  );
};

export default Header;