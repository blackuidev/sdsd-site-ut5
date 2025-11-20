import React from 'react';
import HeroSection from '@/components/common/HeroSection';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const HomePage: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Ready to Explore?</h3>
        <p className="text-lg text-gray-300 mb-8">
          Dive into our full catalog and find exactly what you're looking for.
        </p>
        <a href="/products" className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold py-3 px-8 rounded-full transition-colors duration-300">
          View All Products
        </a>
      </section>
    </div>
  );
};

export default HomePage;