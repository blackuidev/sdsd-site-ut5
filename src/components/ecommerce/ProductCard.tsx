import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/ecommerce';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useCart } from '../../context/CartContext';
import { Star } from 'lucide-react'; // Assuming lucide-react is installed

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating if inside a Link
    e.stopPropagation(); // Stop propagation to parent elements
    addItem(product);
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] rounded-lg">
      <Link to={`/products/${product.id}`} className="block h-full">
        <CardHeader className="p-0">
          <div className="relative w-full h-48 overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="text-lg font-semibold mb-2 line-clamp-2">
            {product.name}
          </CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
            {product.description}
          </p>
          <div className="flex items-center mt-2">
            {product.rating && (
              <>
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                <span className="text-sm text-gray-700 dark:text-gray-300 mr-2">{product.rating.toFixed(1)}</span>
                {product.numReviews && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">({product.numReviews} reviews)</span>
                )}
              </>
            )}
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex justify-between items-center p-4 pt-0 mt-auto">
        <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
        <Button onClick={handleAddToCart} className="ml-4">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};