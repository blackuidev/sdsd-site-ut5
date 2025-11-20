import React from 'react';
import CartDisplay from '@/components/common/CartDisplay';

const CartPage: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-white">Your Shopping Cart</h1>
        <CartDisplay showCheckoutButton={true} />
      </div>
    </div>
  );
};

export default CartPage;