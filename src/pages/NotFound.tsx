import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export const NotFound: React.FC = () => {
  return (
    <div className="container py-16 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-xl">
        <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Button asChild size="lg">
          <Link to="/">Go to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};
