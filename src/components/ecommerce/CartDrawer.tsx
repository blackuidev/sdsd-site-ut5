import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCart } from '@/context/CartContext'; // Import useCart
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC = () => { // Removed isOpen, onClose props, will be managed by SheetTrigger
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartItemCount } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="relative">
          <ShoppingCart className="h-6 w-6" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {cartItemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Your Cart ({cartItemCount})</SheetTitle>
        </SheetHeader>
        <div className="flex-grow">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-8">Your cart is empty.</p>
          ) : (
            <ScrollArea className="h-[calc(100vh-200px)]"> {/* Adjust height dynamically */}
              <div className="space-y-4 pr-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 rounded-lg border p-3 shadow-sm dark:border-gray-700">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div className="flex-grow">
                      <h4 className="font-medium text-gray-900 dark:text-gray-50">{item.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="mx-2 text-gray-900 dark:text-gray-50">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= item.stock} // Disable if at max stock
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-semibold text-gray-900 dark:text-gray-50">${(item.price * item.quantity).toFixed(2)}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
        <div className="border-t pt-4 dark:border-gray-700">
          <div className="flex justify-between font-bold text-lg text-gray-900 dark:text-gray-50">
            <span>Subtotal:</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <Button asChild className="mt-4 w-full bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 transition-all duration-300">
            <Link to="/cart">View Cart & Checkout</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};