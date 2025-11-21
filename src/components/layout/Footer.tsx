import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import { Logo } from '@/components/ui/logo'; // Assuming Logo component exists, or adjust if not.

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link to="/" className="flex items-center space-x-2">
            <Logo /> {/* Assuming Logo component exists and is imported */}
            <span className="font-bold">blackuidev</span>
          </Link>
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{' '}
            <a
              href="https://blackuidev.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              blackuidev
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <a
            href="https://github.com/blackuidev"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          {/* Add more social links or other footer content here if needed */}
        </div>
      </div>
    </footer>
  );
}
