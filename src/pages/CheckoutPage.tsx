import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCartItems, getCartTotal, clearCart } from '../services/cartService';
import { createOrder } from '../services/orderService';
import { CartItem } from '../types/ecommerce';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { useToast } from '../components/hooks/use-toast';
import { CheckCircle, Loader2, ShoppingCart } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const items = getCartItems();
    if (items.length === 0) {
      toast({
        title: "Cart Empty",
        description: "Your cart is empty. Please add items before checking out.",
        variant: "destructive",
      });
      navigate('/products');
      return;
    }
    setCartItems(items);
    setTotal(getCartTotal());
  }, [navigate, toast]);

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    try {
      const order = await createOrder(cartItems, total);
      clearCart();
      window.dispatchEvent(new Event('storage')); // Update cart icon
      toast({
        title: "Order Placed!",
        description: `Your order #${order.id?.substring(0, 8)} has been successfully placed.`, // Shorten ID for display
        variant: "default",
        action: <Button onClick={() => navigate('/')}>Continue Shopping</Button>
      });
      navigate('/order-confirmation', { state: { orderId: order.id } }); // Redirect to a confirmation page
    } catch (error) {
      console.error("Failed to place order:", error);
      toast({
        title: "Order Failed",
        description: "There was an error placing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0 && !isProcessing) {
    return null; // Redirect already handled in useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6" /> Checkout
          </CardTitle>
          <CardDescription>Review your order before completing the purchase.</CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-semibold mb-4">Your Items</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden flex-shrink-0">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-gray-400">
                        <ShoppingCart className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <Separator className="my-6" />
          <div className="flex justify-between items-center font-bold text-xl">
            <span>Order Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handlePlaceOrder}
            className="w-full"
            disabled={isProcessing || cartItems.length === 0}
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Place Order
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
