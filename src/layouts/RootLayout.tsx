import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default RootLayout;
