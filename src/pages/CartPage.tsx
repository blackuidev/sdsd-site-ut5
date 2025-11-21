import React from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-gray-50">
        Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <ShoppingCart className="h-24 w-24 text-gray-400 dark:text-gray-600" />
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">Your cart is currently empty.</p>
          <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200">
            <Link to="/products">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items List */}
          <div className="lg:col-span-2">
            <Card className="shadow-md dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Items in your cart</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0 dark:border-gray-700">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-24 w-24 rounded-md object-cover"
                    />
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{item.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="mx-3 text-lg font-medium text-gray-900 dark:text-gray-50">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= item.stock}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-xl font-bold text-gray-900 dark:text-gray-50">${(item.price * item.quantity).toFixed(2)}</span>
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
              </CardContent>
              <CardFooter className="flex justify-end pt-6">
                <Button
                  variant="destructive"
                  onClick={clearCart}
                  disabled={cartItems.length === 0}
                  className="transition-colors duration-200"
                >
                  Clear Cart
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-md dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>Shipping</span>
                  <span>$0.00</span> {/* For now, assume free shipping */}
                </div>
                <Separator className="my-4 dark:bg-gray-700" />
                <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-gray-50">
                  <span>Order Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}