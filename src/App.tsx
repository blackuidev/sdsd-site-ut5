import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import CartPage from '@/pages/CartPage';
import NotFound from '@/pages/NotFound';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<ProductDetailPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="cart" element={<CartPage />} />
            {/* Example static pages for footer links */}
            <Route path="about" element={<p className="min-h-screen flex items-center justify-center bg-gray-950 text-white text-3xl">About Us Page</p>} />
            <Route path="contact" element={<p className="min-h-screen flex items-center justify-center bg-gray-950 text-white text-3xl">Contact Page</p>} />
            <Route path="faq" element={<p className="min-h-screen flex items-center justify-center bg-gray-950 text-white text-3xl">FAQ Page</p>} />
            <Route path="shipping" element={<p className="min-h-screen flex items-center justify-center bg-gray-950 text-white text-3xl">Shipping & Returns Page</p>} />
            <Route path="privacy" element={<p className="min-h-screen flex items-center justify-center bg-gray-950 text-white text-3xl">Privacy Policy Page</p>} />
            <Route path="terms" element={<p className="min-h-screen flex items-center justify-center bg-gray-950 text-white text-3xl">Terms of Service Page</p>} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Toaster />
      </CartProvider>
    </Router>
  );
}

export default App;