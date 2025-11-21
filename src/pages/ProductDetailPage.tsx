import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '@/services/productService';
import { Product } from '@/types/ecommerce';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/hooks/use-toast';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const fetchedProduct = await getProductById(id);
          setProduct(fetchedProduct);
        } catch (error) {
          toast({
            title: "Error",
            description: "Failed to load product details.",
            variant: "destructive",
          });
          console.error("Failed to fetch product:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProduct();
  }, [id, toast]);

  if (loading) {
    return <div className="p-4 text-center">Loading product...</div>;
  }

  if (!product) {
    return <div className="p-4 text-center">Product not found.</div>;
  }

  const handleAddToCart = () => {
    // Logic to add product to cart
    toast({
      title: "Success",
      description: `${product.name} added to cart!`,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-md" />
        </div>
        <div>
          <p className="text-xl font-semibold mb-2">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
