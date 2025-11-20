import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { useMobile } from '@/components/hooks/use-mobile';
import { CartDisplay } from '@/components/common/CartDisplay';

export function Header() {
  const isMobile = useMobile();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        {/* Brand Logo/Name */}
        <div className="mr-6 flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2 text-lg font-bold">
            <span className="sr-only">Home</span>
            <span className="text-xl font-extrabold tracking-tight">BLACKUIDEV</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-grow justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 ml-auto">
          <CartDisplay />
          {!isMobile && (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">
                  Sign Up
                </Button>
              </Link>
            </>
          )}

          {/* Mobile Navigation Trigger */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetClose asChild>
                  <Link to="/" className="flex items-center space-x-2 text-lg font-bold mb-6">
                    <span className="text-xl font-extrabold tracking-tight">BLACKUIDEV</span>
                  </Link>
                </SheetClose>
                <nav className="flex flex-col gap-4 text-sm font-medium">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        to={link.path}
                        className="transition-colors hover:text-foreground/80 text-foreground/60 py-2"
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                  <Separator className="my-2" />
                  <SheetClose asChild>
                    <Link to="/login" className="flex items-center gap-2 py-2 text-foreground/60 hover:text-foreground/80">
                      <User className="h-4 w-4" /> Login
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/signup" className="flex items-center gap-2 py-2 text-foreground/60 hover:text-foreground/80">
                      <User className="h-4 w-4" /> Sign Up
                    </Link>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}