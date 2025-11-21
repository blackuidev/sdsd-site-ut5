export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id?: string; // Firestore will generate this
  userId?: string; // Optional, if user authentication is added later
  items: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
}