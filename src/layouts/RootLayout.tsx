import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext'; // Import CartProvider
import { Toaster } from '@/components/ui/toaster'; // Import Toaster

export function RootLayout() {
  return (
    <CartProvider> {/* Wrap the entire layout with CartProvider */}
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <Toaster /> {/* Add Toaster for notifications */}
      </div>
    </CartProvider>
  );
}