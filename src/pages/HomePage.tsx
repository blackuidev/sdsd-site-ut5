import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '@/components/common/HeroSection'; // Assuming HeroSection exists
import { ProductCard } from '@/components/ecommerce/ProductCard';
import { products } from '@/data/products'; // Import mock products
import { Button } from '@/components/ui/button';
import { ShinyText } from '@/components/ui/shiny-text'; // For animation
import { AuroraBackground } from '@/components/ui/aurora-background'; // For background effect
import { AuroraShader } from '@/components/ui/aurora-shader'; // For background effect

export function HomePage() {
  const featuredProducts = products.slice(0, 3); // Display first 3 products as featured

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <AuroraBackground className="absolute inset-0 z-0">
        <AuroraShader />
        <HeroSection
          title={
            <ShinyText text="Innovate. Create. Elevate." className="text-4xl md:text-6xl lg:text-7xl font-bold" />
          }
          subtitle="Discover the future of technology and design with our exclusive collection."
          primaryCta={
            <Button asChild size="lg" className="relative group overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Link to="/products">
                <span className="relative z-10">Explore Products</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </Link>
            </Button>
          }
          secondaryCta={
            <Button asChild variant="outline" size="lg" className="relative group overflow-hidden border-2 border-primary text-primary shadow-md transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg">
              <Link to="/about">
                <span className="relative z-10">Learn More</span>
                <span className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </Link>
            </Button>
          }
        />
      </AuroraBackground>

      {/* Featured Products Section */}
      <section className="relative z-10 py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-gray-50 md:text-4xl">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="relative group overflow-hidden border-2 border-gray-300 text-gray-700 shadow-md transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 hover:shadow-lg dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50">
              <Link to="/products">
                <span className="relative z-10">View All Products</span>
                <span className="absolute inset-0 bg-gray-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-gray-800"></span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Add more sections as needed, e.g., testimonials, categories, etc. */}
    </div>
  );
}