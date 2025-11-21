import React from 'react';
import { Button } from '../ui/button';
import { AnimatedBubbleParticles } from '../ui/animated-bubble-particles'; // Using an existing UI component
import { ArrowDown } from 'lucide-react';

interface PortfolioHeroProps {
  name: string;
  tagline: string;
  description: string;
  ctaText: string;
  onCtaClick: () => void;
}

export const PortfolioHero: React.FC<PortfolioHeroProps> = ({ name, tagline, description, ctaText, onCtaClick }) => {
  return (
    <section className="relative h-[calc(100vh-64px)] flex items-center justify-center text-center overflow-hidden bg-background">
      <AnimatedBubbleParticles className="absolute inset-0 z-0" quantity={100} speed={0.5} />
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">{name}</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          {tagline}
        </p>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Button
          onClick={onCtaClick}
          className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg transition-all duration-300 flex items-center gap-2"
        >
          {ctaText} <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};
