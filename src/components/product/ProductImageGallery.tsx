import React, { useState } from 'react';
import { cn } from '@/components/lib/utils';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images, productName }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  if (!images || images.length === 0) {
    return <div className="flex items-center justify-center h-64 bg-gray-800 rounded-lg text-gray-500">No Image Available</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnail Selector */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto max-h-96 md:max-h-full pb-2 md:pb-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${productName} thumbnail ${index + 1}`}
            className={cn(
              "w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-all duration-200",
              mainImage === image ? "border-blue-500 ring-2 ring-blue-500" : "border-transparent hover:border-gray-600"
            )}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>

      {/* Main Image Display */}
      <div className="flex-grow">
        <img
          src={mainImage}
          alt={productName}
          className="w-full h-96 object-contain rounded-lg shadow-lg bg-gray-800"
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;