import React, { useEffect, useState } from 'react';
import { Product } from '../types/ecommerce';
import { getProducts } from '../services/productService';
import { ProductCard } from '../components/ecommerce/ProductCard';
import { addToCart } from '../services/cartService';
import { useToast } from '../components/hooks/use-toast';
import { Skeleton } from '../components/ui/skeleton'; // Assuming a Skeleton component exists
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert'; // Assuming Alert exists
import { ShoppingBag } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Please try again later.");
        toast({
          title: "Error",
          description: "Failed to load products.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [toast]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    // Optionally, trigger a global cart update if other components need to react
    window.dispatchEvent(new Event('storage')); // Simulate storage event to update CartIcon
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="h-[400px] w-full rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive">
          <ShoppingBag className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      {products.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-16">No products available yet. Check back soon!</p>
      )}
    </div>
  );
};
