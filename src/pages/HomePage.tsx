import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/common/HeroSection';
import { ProductCard } from '../components/ecommerce/ProductCard';
import { Product } from '../types/ecommerce';
import { getProducts } from '../services/productService';
import { Button } from '../components/ui/button';
import { Skeleton } from '../components/ui/skeleton'; // Assuming skeleton is available

export const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const allProducts = await getProducts();
      // Take the first 3 products as featured
      setFeaturedProducts(allProducts.slice(0, 3));
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Discover the Future of Tech"
        subtitle="Explore cutting-edge gadgets and innovative solutions for your modern lifestyle."
        ctaText="Shop Now"
        ctaLink="/products"
        imageUrl="https://images.unsplash.com/photo-1510511459019-5fda7724fd8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="container py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-[400px] w-full rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* Add more sections like testimonials, categories, etc. */}
    </div>
  );
};
