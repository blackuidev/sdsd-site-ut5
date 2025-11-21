import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import { ShoppingCart, XCircle } from 'lucide-react';
import { CartItem } from '../../types/ecommerce';
import { getCartItems, removeFromCart, updateCartItemQuantity, getCartTotal } from '../../services/cartService';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onOpenChange, cartItems, setCartItems }) => {
  const total = getCartTotal();

  const handleRemoveItem = (productId: string) => {
    const updatedCart = removeFromCart(productId);
    setCartItems(updatedCart);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    const updatedCart = updateCartItemQuantity(productId, quantity);
    setCartItems(updatedCart);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" /> Your Cart
          </SheetTitle>
        </SheetHeader>
        <div className="flex-grow overflow-y-auto pr-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-8">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-2">
                  <div className="relative w-16 h-16 flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-gray-400">
                        <ShoppingCart className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                        className="w-16 text-center h-7"
                        min="1"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-500 hover:text-red-500"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <XCircle className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <SheetFooter className="mt-4 flex flex-col gap-2">
            <Separator />
            <div className="flex justify-between font-semibold text-lg py-2">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button asChild className="w-full">
              <Link to="/checkout" onClick={() => onOpenChange(false)}>
                Proceed to Checkout
              </Link>
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
