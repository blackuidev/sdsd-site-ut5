import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-bold text-white mb-4">BlackUI Store</h3>
          <p className="text-sm leading-relaxed">
            Your destination for cutting-edge products and seamless shopping experiences.
            Discover innovation, quality, and style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors duration-200">Shop All</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
          <ul className="space-y-2">
            <li><Link to="/faq" className="hover:text-white transition-colors duration-200">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition-colors duration-200">Shipping & Returns</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
          <p className="text-sm mb-4">Email: support@blackuistore.com</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors duration-200">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors duration-200">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors duration-200">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors duration-200">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} BlackUI Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;