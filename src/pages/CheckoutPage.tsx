import React from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useToast } from '../components/hooks/use-toast'; // Corrected import path

const CheckoutPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    // Simulate checkout process
    toast({
      title: 'Order Placed!',
      description: 'Your order has been successfully placed.',
    });
    clearCart();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <div className="space-y-4">
            <Input placeholder="Full Name" />
            <Input placeholder="Address Line 1" />
            <Input placeholder="Address Line 2 (Optional)" />
            <Input placeholder="City" />
            <Input placeholder="State/Province" />
            <Input placeholder="Zip/Postal Code" />
            <Input placeholder="Country" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t pt-2 flex justify-between font-bold">
                <span>Total:</span>
                <span>${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
              </div>
            </div>
          )}
          <Button onClick={handleCheckout} className="w-full mt-6" disabled={cartItems.length === 0}>
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
