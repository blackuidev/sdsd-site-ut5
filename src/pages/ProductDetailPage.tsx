import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products'; // Import mock products
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Minus, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card'; // Assuming Card component exists
import { useToast } from '@/components/hooks/use-toast';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-500">Product Not Found</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          The product you are looking for does not exist.
        </p>
        <Button onClick={() => navigate('/products')} className="mt-6">
          Back to Products
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (quantity > product.stock) {
        toast({
            title: 'Out of Stock!',
            description: `Cannot add more than ${product.stock} of ${product.name} to cart.`,
            variant: 'destructive',
        });
        return;
    }
    addToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {/* Product Image Gallery */}
        <div className="flex justify-center items-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={600}
            className="max-h-[600px] w-full max-w-md rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">{product.name}</h1>
          <p className="mt-4 text-2xl font-semibold text-primary dark:text-primary-400">
            ${product.price.toFixed(2)}
          </p>
          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center rounded-md border border-gray-300 dark:border-gray-700">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                <Minus className="h-5 w-5" />
              </Button>
              <span className="w-10 text-center text-lg font-medium text-gray-900 dark:text-gray-50">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                onClick={() => setQuantity((prev) => Math.min(product.stock, prev + 1))}
                disabled={quantity >= product.stock}
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
            <Button
              onClick={handleAddToCart}
              className="flex-grow bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:scale-[1.02]"
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
          {product.stock <= 5 && product.stock > 0 && (
            <p className="mt-2 text-sm text-orange-500">Only {product.stock} left in stock!</p>
          )}
          {product.stock === 0 && (
            <p className="mt-2 text-sm text-red-500">This product is currently out of stock.</p>
          )}

          {/* Product Specifications/Features */}
          <Card className="mt-10 bg-gray-50 dark:bg-gray-800">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-50">Specifications</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold">Category:</span> {product.category}</li>
                <li><span className="font-semibold">Availability:</span> {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</li>
                {/* Add more specs here */}
              </ul>
            </CardContent>
          </Card>

          {/* Related Products (Optional, could be another component) */}
          {/* <div className="mt-12">
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-50">Related Products</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3).map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}