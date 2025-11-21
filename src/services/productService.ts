import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Product } from '../types/ecommerce';

const productsCollectionRef = collection(db, 'products');

export const getProducts = async (): Promise<Product[]> => {
  const querySnapshot = await getDocs(productsCollectionRef);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Product[];
};

export const getProductById = async (id: string): Promise<Product | null> => {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as Product;
  }
  return null;
};
