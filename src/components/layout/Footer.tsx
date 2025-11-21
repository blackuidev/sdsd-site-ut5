import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { Logo } from '@/components/ui/Logo'; // Assuming Logo component exists

export const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link to="/" className="mb-4 flex items-center gap-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-50">SDSDEcom</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Innovating the future, one product at a time. Discover cutting-edge tech and unparalleled quality.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200 dark:text-gray-400 dark:hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200 dark:text-gray-400 dark:hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200 dark:text-gray-400 dark:hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200 dark:text-gray-400 dark:hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-200 dark:text-gray-400 dark:hover:text-primary">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-50">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors duration-200 dark:text-gray-400 dark:hover:text-primary">About Us</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-primary transition-colors duration-200 dark:text-gray-400 dark:hover:text-primary">Shop Now</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors duration-200 dark:text-gray-400 dark:hover:text-primary">Contact</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-primary transition-colors duration-200 dark:text-gray-400 dark:hover:text-primary">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-50">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-600 hover:text-primary transition-colors duration-200 dark:text-gray-400 dark:hover:text-primary">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-primary transition-colors duration-200 dark:text-gray-400 dark:hover:text-primary">Shipping & Returns</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors duration-200 dark:text-gray-400 dark:hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary transition-colors duration-200 dark:text-gray-400 dark:hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-50">Contact Us</h3>
            <address className="not-italic text-gray-600 dark:text-gray-400">
              123 Tech Avenue, Suite 400<br />
              Innovation City, IC 90210<br />
              <a href="tel:+1234567890" className="hover:text-primary transition-colors duration-200">+1 (234) 567-890</a><br />
              <a href="mailto:info@sdsdecom.com" className="hover:text-primary transition-colors duration-200">info@sdsdecom.com</a>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
          © {new Date().getFullYear()} SDSDEcom. All rights reserved.
        </div>
      </div>
    </footer>
  );
};