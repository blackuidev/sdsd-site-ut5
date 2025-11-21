import React from 'react';
import { Product } from '@/types/ecommerce';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext'; // Import useCart

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
      <Link to={`/products/${product.id}`} className="block">
        <img
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={300}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-4">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 group-hover:text-primary transition-colors duration-200">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-gray-50">
            ${product.price.toFixed(2)}
          </span>
          <Button
            variant="default"
            size="sm"
            onClick={() => addToCart(product)}
            className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 font-medium text-gray-900 shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:text-white"
          >
            <span className="relative rounded-md bg-white px-3 py-1.5 transition-all duration-300 ease-in group-hover:bg-opacity-0 dark:bg-gray-950">
              Add to Cart
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};