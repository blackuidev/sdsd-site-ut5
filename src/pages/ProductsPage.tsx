import React from 'react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-white">Our Catalog</h1>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Explore our extensive collection of high-quality products. From cutting-edge electronics to essential home goods, find what you need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;