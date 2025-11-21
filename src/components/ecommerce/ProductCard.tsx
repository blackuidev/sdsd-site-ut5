import React from 'react';
import { Product } from '../../types/ecommerce';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Image } from 'lucide-react'; // Using lucide-react for icons
import { useToast } from '../hooks/use-toast';
import { addToCart } from '../../services/cartService';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    onAddToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image className="h-12 w-12 text-gray-400" />
        )}
      </div>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="line-clamp-2">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
        {product.stock <= 5 && product.stock > 0 && (
          <p className="text-sm text-orange-500">Only {product.stock} left in stock!</p>
        )}
        {product.stock === 0 && (
          <p className="text-sm text-red-500">Out of Stock</p>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleAddToCart}
          className="w-full"
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
};
