import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import ProfilePage from './pages/ProfilePage';
import ProjectsPage from './pages/ProjectsPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
