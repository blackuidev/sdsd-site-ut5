import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Product } from '@/types/product';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`
    });
  };

  return (
    <Card className="bg-gray-800 border-gray-700 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link to={`/products/${product.id}`}>
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {!product.inStock && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
              Out of Stock
            </span>
          )}
        </div>
      </Link>
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold truncate">
          <Link to={`/products/${product.id}`} className="hover:text-blue-400 transition-colors duration-200">
            {product.name}
          </Link>
        </CardTitle>
        <CardDescription className="text-gray-400 text-sm h-12 overflow-hidden line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xl font-bold text-blue-400">${product.price.toFixed(2)}</span>
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-current mr-1" />
            <span className="text-sm">{product.rating.toFixed(1)}</span>
            <span className="text-gray-500 text-xs ml-1">({product.reviews})</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
        >
          {product.inStock ? 'Add to Cart' : 'Sold Out'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;