import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartDisplayProps {
  showCheckoutButton?: boolean;
}

const CartDisplay: React.FC<CartDisplayProps> = ({ showCheckoutButton = true }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartItemCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-400">Your cart is empty.</p>
        <Link to="/products">
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
            <div>
              <Link to={`/products/${item.id}`} className="text-lg font-semibold hover:text-blue-400">
                {item.name}
              </Link>
              <p className="text-gray-400">${item.price.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-600 rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="h-8 w-8 text-gray-300 hover:bg-gray-700"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 text-center bg-transparent border-none focus:ring-0 focus:outline-none text-white"
                min="1"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="h-8 w-8 text-gray-300 hover:bg-gray-700"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <p className="font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:bg-gray-700"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      ))}

      <div className="border-t border-gray-700 pt-6 mt-6 space-y-4">
        <div className="flex justify-between text-xl font-semibold">
          <span>Total ({cartItemCount} items):</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        {showCheckoutButton && (
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-md">
            Proceed to Checkout
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartDisplay;