import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/ecommerce';
import { getAllProducts } from '@/services/productService';
import ProductCard from '@/components/ecommerce/ProductCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getAllProducts();
        // Select a limited number of products, e.g., 4 to 6
        setProducts(allProducts.slice(0, 6));
      } catch (err) {
        setError('Failed to fetch featured products.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading featured products...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="text-primary hover:underline font-medium">
            View All Products &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
