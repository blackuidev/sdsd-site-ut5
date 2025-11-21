import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="inline-block font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              [Your Name/Logo]
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Crafting digital experiences.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm mb-4 md:mb-0">
            <Link to="/" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">Home</Link>
            <Link to="/projects" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">Projects</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} [Your Name/Company Name]. All rights reserved.
        </p>
      </div>
    </footer>
  );
}