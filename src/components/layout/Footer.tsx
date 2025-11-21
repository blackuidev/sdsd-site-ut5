import React from 'react';
import { Logo } from '@/components/ui/Logo'; // Corrected import path

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <Logo />
          <span className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</span>
        </div>
        <nav className="flex space-x-6">
          <a href="/about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a>
          <a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}
