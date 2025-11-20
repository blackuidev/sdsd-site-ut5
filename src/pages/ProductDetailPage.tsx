import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import { Star, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/hooks/use-toast';
import { Product } from '@/types/product';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <p className="text-2xl">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`
    });
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <Link to="/products" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-200">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-900 p-8 rounded-lg shadow-xl">
          {/* Image Gallery */}
          <div>
            <ProductImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
              <div className="flex items-center text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current mr-1" />
                <span className="text-lg font-semibold">{product.rating.toFixed(1)}</span>
                <span className="text-gray-500 text-sm ml-2">({product.reviews} reviews)</span>
              </div>
              <p className="text-3xl font-extrabold text-blue-400 mb-6">${product.price.toFixed(2)}</p>
              <p className="text-gray-300 leading-relaxed mb-8">{product.description}</p>

              <div className="flex items-center mb-8">
                <span className="text-lg font-semibold mr-4">Availability:</span>
                {product.inStock ? (
                  <span className="text-green-500 font-medium">In Stock</span>
                ) : (
                  <span className="text-red-500 font-medium">Out of Stock</span>
                )}
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-xl rounded-lg transition-colors duration-300"
            >
              {product.inStock ? 'Add to Cart' : 'Sold Out'}
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;