import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { ShinyText } from '@/components/ui/shiny-text';

const HeroSection: React.FC = () => {
  return (
    <AuroraBackground>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 py-20">
        <ShinyText
          text="Discover Innovation. Elevate Your Lifestyle."
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 max-w-4xl"
        />
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
          Explore a curated collection of modern tech, stylish accessories, and essential home goods.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/products">
            <Button className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-lg">
              Shop Now
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" className="px-8 py-3 text-lg border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default HeroSection;