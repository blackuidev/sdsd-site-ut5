import React from 'react';
import { Zap } from 'lucide-react'; // Example icon

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Zap className={className} /> // Replace with your actual logo SVG or component
  );
};