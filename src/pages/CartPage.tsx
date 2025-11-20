import React from 'react';
import { CartDisplay } from "@/components/common/CartDisplay";
import RootLayout from '@/layouts/RootLayout';

const CartPage: React.FC = () => {
  return (
    <RootLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
        <CartDisplay />
      </div>
    </RootLayout>
  );
};

export default CartPage;
