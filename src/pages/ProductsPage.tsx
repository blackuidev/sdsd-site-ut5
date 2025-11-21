import React, { useEffect, useState } from 'react';
import { ProductCard } from '../components/ecommerce/ProductCard';
import { Product } from '../types/ecommerce';
import { getProducts } from '../services/productService';
import { Skeleton } from '../components/ui/skeleton'; // Assuming skeleton is available

export const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container py-16 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12">Our Products</h1>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="h-[400px] w-full rounded-lg" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      {products.length === 0 && !loading && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-16 text-lg">No products found.</p>
      )}
    </div>
  );
};
