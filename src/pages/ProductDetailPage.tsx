import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/ecommerce';
import { getProductById } from '../services/productService';
import { Button } from '../components/ui/button';
import { useCart } from '../context/CartContext';
import { Star, Loader2 } from 'lucide-react'; // Assuming lucide-react is installed
import { Skeleton } from '../components/ui/skeleton'; // Assuming skeleton is available

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        if (id) {
          const data = await getProductById(id);
          if (data) {
            setProduct(data);
          } else {
            setError('Product not found.');
          }
        } else {
          setError('Product ID is missing.');
        }
      } catch (err) {
        setError('Failed to fetch product details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
    }
  };

  if (loading) {
    return (
      <div className="container py-16 min-h-screen flex flex-col md:flex-row gap-8">
        <Skeleton className="w-full md:w-1/2 h-[400px] md:h-[500px] rounded-lg" />
        <div className="w-full md:w-1/2 space-y-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-12 w-1/3" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-16 min-h-screen text-center text-red-500 text-xl">
        <p>{error}</p>
        <Button asChild className="mt-4">
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-16 min-h-screen text-center text-gray-500 text-xl">
        <p>Product data could not be loaded.</p>
        <Button asChild className="mt-4">
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-16 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Product Image Gallery */}
        <div className="flex flex-col gap-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg"
          />
          {/* Could add a small gallery of additional images here */}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-extrabold leading-tight">{product.name}</h1>
          <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>

          {product.rating && (
            <div className="flex items-center gap-2 text-lg">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating || 0) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold">{product.rating.toFixed(1)}</span>
              {product.numReviews && (
                <span className="text-muted-foreground">({product.numReviews} reviews)</span>
              )}
            </div>
          )}

          <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>

          <div className="flex items-center gap-4 mt-4">
            <Button onClick={handleAddToCart} size="lg" className="px-8 py-3 text-lg">
              Add to Cart
            </Button>
            {/* Could add quantity selector here */}
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-2xl font-semibold mb-4">Specifications</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Category: {product.category}</li>
              <li>In Stock: {product.stock > 0 ? `${product.stock} units` : 'Out of Stock'}</li>
              {/* Add more detailed specs here */}
              <li>Brand: TechNova</li>
              <li>Material: Premium Alloy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Optional: Related Products Section */}
      {/* <section className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-8">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Render related products here using ProductCard */}
        {/* </div>
      </section> */}
    </div>
  );
};
