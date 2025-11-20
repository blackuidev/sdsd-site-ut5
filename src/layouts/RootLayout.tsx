import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header'; // Changed to named import
import { Footer } from '@/components/layout/Footer'; // Changed to named import
import { Toaster } from '@/components/ui/toaster';

const RootLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default RootLayout;
