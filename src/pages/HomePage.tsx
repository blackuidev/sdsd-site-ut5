import HeroSection from '@/components/common/HeroSection';
import FeaturedProducts from '@/components/ecommerce/FeaturedProducts';

const HomePage: React.FC = () => {
  return (
    <div className="container py-8">
      <HeroSection
        title="Discover Your Next Favorite Item"
        description="Explore our curated collection of high-quality products."
        ctaText="Shop Now"
        ctaLink="/products"
      />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
