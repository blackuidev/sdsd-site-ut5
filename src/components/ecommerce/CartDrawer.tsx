import React from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, XCircle, Minus, Plus } from 'lucide-react'; // Assuming lucide-react is installed

interface CartDrawerProps {
  children: React.ReactNode;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ children }) => {
  const { cart, removeItem, updateQuantity } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader className="pb-4 border-b">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="w-6 h-6" /> Your Cart ({cart.totalItems})
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-4">
          {cart.items.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-8">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cart.items.map((item) => (
                <li key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-base line-clamp-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                    <div className="flex items-center mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="mx-2 text-sm font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <XCircle className="h-5 w-5" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between items-center text-lg font-semibold mb-4">
            <span>Subtotal:</span>
            <span>${cart.subtotal.toFixed(2)}</span>
          </div>
          <Button asChild className="w-full">
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
          <Button asChild variant="outline" className="w-full mt-2">
            <Link to="/cart">View Full Cart</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
