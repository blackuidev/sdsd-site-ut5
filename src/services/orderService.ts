import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Order, CartItem } from '../types/ecommerce';

const ordersCollectionRef = collection(db, 'orders');

export const createOrder = async (cartItems: CartItem[], total: number): Promise<Order> => {
  const orderItems = cartItems.map(item => ({
    productId: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
  }));

  const newOrder: Omit<Order, 'id'> = {
    items: orderItems,
    total,
    status: 'pending', // Initial status
    createdAt: new Date(), // Use serverTimestamp() for Firestore
  };

  const docRef = await addDoc(ordersCollectionRef, {
    ...newOrder,
    createdAt: serverTimestamp(), // Ensures server-side timestamp
  });

  return { id: docRef.id, ...newOrder };
};
