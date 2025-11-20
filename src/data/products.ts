import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegant Smartwatch Pro',
    description: 'A sleek and powerful smartwatch with advanced health tracking and smart notifications. Crafted from aerospace-grade aluminum.',
    price: 299.99,
    imageUrl: '/images/product1.webp',
    images: [
      '/images/product1-1.webp',
      '/images/product1-2.webp',
      '/images/product1-3.webp'
    ],
    category: 'Electronics',
    rating: 4.8,
    reviews: 125,
    inStock: true
  },
  {
    id: '2',
    name: 'Minimalist Desk Lamp',
    description: 'Modern LED desk lamp with adjustable brightness and color temperature. Perfect for home offices and creative spaces.',
    price: 79.99,
    imageUrl: '/images/product2.webp',
    images: [
      '/images/product2-1.webp',
      '/images/product2-2.webp',
      '/images/product2-3.webp'
    ],
    category: 'Home Goods',
    rating: 4.5,
    reviews: 80,
    inStock: true
  },
  {
    id: '3',
    name: 'Premium Wireless Earbuds',
    description: 'Immersive sound experience with active noise cancellation and comfortable fit. Up to 30 hours of battery life.',
    price: 189.00,
    imageUrl: '/images/product3.webp',
    images: [
      '/images/product3-1.webp',
      '/images/product3-2.webp',
      '/images/product3-3.webp'
    ],
    category: 'Audio',
    rating: 4.7,
    reviews: 210,
    inStock: true
  },
  {
    id: '4',
    name: 'Designer Leather Backpack',
    description: 'Handcrafted full-grain leather backpack with multiple compartments for daily essentials and a laptop.',
    price: 249.00,
    imageUrl: '/images/product4.webp',
    images: [
      '/images/product4-1.webp',
      '/images/product4-2.webp',
      '/images/product4-3.webp'
    ],
    category: 'Accessories',
    rating: 4.9,
    reviews: 95,
    inStock: false
  },
  {
    id: '5',
    name: 'Smart Coffee Maker',
    description: 'Brew your perfect coffee from anywhere with this app-controlled smart coffee maker. Features programmable settings and self-cleaning.',
    price: 129.99,
    imageUrl: '/images/product5.webp',
    images: [
      '/images/product5-1.webp',
      '/images/product5-2.webp',
      '/images/product5-3.webp'
    ],
    category: 'Kitchen Appliances',
    rating: 4.6,
    reviews: 60,
    inStock: true
  },
  {
    id: '6',
    name: 'Ergonomic Office Chair',
    description: 'Experience ultimate comfort and support with this fully adjustable ergonomic office chair. Designed for long working hours.',
    price: 399.00,
    imageUrl: '/images/product6.webp',
    images: [
      '/images/product6-1.webp',
      '/images/product6-2.webp',
      '/images/product6-3.webp'
    ],
    category: 'Office Furniture',
    rating: 4.7,
    reviews: 150,
    inStock: true
  }
];