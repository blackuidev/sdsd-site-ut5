import React from 'react';

export const SparkleNavbar: React.FC = () => {
  return (
    <nav className="relative z-10 w-full bg-background/95 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <span className="text-lg font-bold text-foreground">Sparkle Navbar</span>
        {/* Add your actual navigation content here */}
      </div>
    </nav>
  );
};
