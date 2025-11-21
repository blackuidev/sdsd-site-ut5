import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react'; // Assuming lucide-react is installed

export const CheckoutPage: React.FC = () => {
  return (
    <div className="container py-16 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl bg-card p-10 rounded-lg shadow-lg">
        <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
        <h1 className="text-5xl font-extrabold mb-4">Checkout Complete!</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been placed successfully.
          You will receive an email confirmation shortly.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
