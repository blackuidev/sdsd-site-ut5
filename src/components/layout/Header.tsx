import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartDrawer } from '@/components/ecommerce/CartDrawer'; // Import CartDrawer
import { Logo } from '@/components/ui/Logo'; // Assuming Logo component exists
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useMobile } from '@/components/hooks/use-mobile'; // Assuming useMobile hook exists
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // For mobile menu

export const Header: React.FC = () => {
  const isMobile = useMobile(); // Use the mobile hook

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-6 w-6" /> {/* Use your Logo component */}
          <span className="text-lg font-bold">SDSDEcom</span>
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <CartDrawer /> {/* Cart icon for mobile */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] sm:w-[300px] flex flex-col">
                <Link to="/" className="flex items-center gap-2 p-4">
                  <Logo className="h-6 w-6" />
                  <span className="text-lg font-bold">SDSDEcom</span>
                </Link>
                <nav className="flex flex-col gap-2 p-4">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-3 py-2 text-lg font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          isActive ? 'bg-primary text-primary-foreground' : 'text-gray-600 dark:text-gray-300'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <CartDrawer /> {/* Cart icon for desktop */}
          </nav>
        )}
      </div>
    </header>
  );
};