import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-background py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Built with ❤️ by Lightswind AI.
          </p>
        </div>
        <nav className="flex space-x-4">
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
