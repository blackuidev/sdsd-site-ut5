import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMobile } from '@/components/hooks/use-mobile';
import { Logo } from '@/components/ui/logo'; // Assuming Logo component exists, or adjust if not.

export function Header() {
  const { isMobile, toggleMobileMenu, isMobileMenuOpen } = useMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Logo /> {/* Assuming Logo component exists and is imported */}
            <span className="font-bold sm:inline-block">blackuidev</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/portfolio" className="transition-colors hover:text-foreground/80">
              Portfolio
            </Link>
            <Link to="/about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link to="/contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
        </div>

        {isMobile && (
          <Button
            variant="ghost"
            className="ml-auto md:hidden"
            size="icon"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
        )}

        {isMobileMenuOpen && isMobile && (
          <div className="absolute inset-x-0 top-14 z-40 origin-top-right transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-background shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center space-x-2">
                    <Logo />
                    <span className="font-bold">blackuidev</span>
                  </Link>
                  <div className="-mr-2">
                    <Button
                      variant="ghost"
                      className="ml-auto md:hidden"
                      size="icon"
                      onClick={toggleMobileMenu}
                    >
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link
                      to="/portfolio"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      onClick={toggleMobileMenu}
                    >
                      <span className="ml-3 text-base font-medium text-foreground">Portfolio</span>
                    </Link>
                    <Link
                      to="/about"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      onClick={toggleMobileMenu}
                    >
                      <span className="ml-3 text-base font-medium text-foreground">About</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      onClick={toggleMobileMenu}
                    >
                      <span className="ml-3 text-base font-medium text-foreground">Contact</span>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
