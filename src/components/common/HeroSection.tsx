import React from 'react';
import { Button } from '@/components/ui/button';
import { BeamGridBackground } from '@/components/ui/BeamGridBackground'; // Using an existing UI component

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <BeamGridBackground className="absolute inset-0 z-0 opacity-50" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
          Elevate Your Digital Presence
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Crafting exceptional web experiences with cutting-edge design and robust functionality for modern businesses.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
            Explore Our Work
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-semibold border-2 border-gray-400 text-gray-200 hover:bg-gray-700 hover:border-gray-300 transition-colors">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
