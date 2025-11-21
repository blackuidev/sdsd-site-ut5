import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CartContext } from '@/context/CartContext';
import { Trash2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, getCartTotal } = useContext(CartContext);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            {cartItems.length > 0 ? `You have ${cartItems.length} items in your cart.` : 'Your cart is empty.'}
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-grow py-4 pr-4">
          {cartItems.length === 0 ? (
            <div className="text-center text-muted-foreground">
              No items in cart.
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="font-medium">{item.product.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.quantity} x ${item.product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">${(item.quantity * item.product.price).toFixed(2)}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.product.id)}
                      className="h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
        <SheetFooter className="mt-auto pt-4 border-t">
          <div className="flex justify-between items-center w-full mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-lg font-bold">${getCartTotal().toFixed(2)}</span>
          </div>
          <SheetClose asChild>
            <Link to="/cart" className="w-full">
              <Button className="w-full mb-2">View Full Cart</Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link to="/checkout" className="w-full">
              <Button className="w-full">Proceed to Checkout</Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
