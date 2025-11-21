import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/ecommerce';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CartContext } from '@/context/CartContext';
import { toast } from '@/components/ui/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, 1); // Add one quantity by default
    toast({
      title: "Added to cart!",
      description: `${product.name} added to your cart.`,
    });
  };

  return (
    <Card className="flex flex-col overflow-hidden">
      <Link to={`/products/${product.id}`} className="block relative h-48 w-full overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <CardHeader className="p-4 pb-2 flex-grow">
        <CardTitle className="text-lg font-semibold line-clamp-2">
          <Link to={`/products/${product.id}`} className="hover:underline">
            {product.name}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm">${product.price.toFixed(2)}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        {/* Optional: short description or categories */}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
