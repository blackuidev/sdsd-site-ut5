import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo'; // Corrected import path
import { Button } from '../ui/button';
import { HamburgerMenuOverlay } from '../ui/hamburger-menu-overlay';
import { SparkleNavbar } from '../ui/sparkle-navbar';

const Header: React.FC = () => {
  return (
    <SparkleNavbar>
      <header className="relative z-50 w-full px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Button variant="ghost" size="sm">
            Login
          </Button>
        </nav>
        <div className="md:hidden">
          <HamburgerMenuOverlay />
        </div>
      </header>
    </SparkleNavbar>
  );
};

export default Header;
