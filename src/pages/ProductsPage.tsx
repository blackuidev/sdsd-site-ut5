import React from 'react';
import { ProductCard } from '@/components/ecommerce/ProductCard';
import { products } from '@/data/products'; // Import mock products

export function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-gray-50">
        Our Products
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}