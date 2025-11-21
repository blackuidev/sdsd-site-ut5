import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { XCircle, Minus, Plus, ShoppingCart } from 'lucide-react'; // Assuming lucide-react is installed

export const CartPage: React.FC = () => {
  const { cart, removeItem, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    } else {
      removeItem(id); // Remove item if quantity goes to 0
    }
  };

  return (
    <div className="container py-16 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12">Your Shopping Cart</h1>

      {cart.items.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 text-xl mt-8">Your cart is currently empty.</p>
          <Button asChild className="mt-6">
            <Link to="/products">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center bg-card p-4 rounded-lg shadow-sm gap-4"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md flex-shrink-0"
                />
                <div className="flex-grow text-center sm:text-left">
                  <h2 className="text-xl font-semibold line-clamp-2">{item.name}</h2>
                  <p className="text-lg font-bold text-primary mt-1">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="w-16 text-center"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-600 flex-shrink-0"
                >
                  <XCircle className="h-5 w-5" />
                  <span className="sr-only">Remove item</span>
                </Button>
              </div>
            ))}
            <Button variant="outline" onClick={clearCart} className="w-full sm:w-auto mt-4">
              Clear Cart
            </Button>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1 bg-card p-6 rounded-lg shadow-md sticky top-24">
            <h2 className="text-3xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-lg">
                <span>Items ({cart.totalItems}):</span>
                <span>${cart.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Shipping:</span>
                <span>$0.00</span> {/* For now */}
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-4">
                <span>Order Total:</span>
                <span>${cart.subtotal.toFixed(2)}</span>
              </div>
            </div>
            <Button asChild size="lg" className="w-full mt-8">
              <Link to="/checkout">Proceed to Checkout</Link>
            </Button>
            <Button asChild variant="outline" className="w-full mt-4">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
