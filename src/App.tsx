import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PortfolioDetailPage } from './pages/PortfolioDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFound } from './pages/NotFound';
import { Toaster } from './components/ui/toaster';
import { ProductsPage } from './pages/ProductsPage'; // Import ProductsPage
import { CheckoutPage } from './pages/CheckoutPage'; // Import CheckoutPage

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} /> {/* New Products Route */}
          <Route path="/checkout" element={<CheckoutPage />} /> {/* New Checkout Route */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<PortfolioDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </RootLayout>
    </Router>
  );
}

export default App;
