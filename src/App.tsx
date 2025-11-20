import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import PortfolioPage from './pages/Portfolio'; // Import the new portfolio page
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Simple Navigation Bar */}
        <nav className="bg-gray-800 p-4 text-white flex justify-center space-x-6">
          <Link to="/" className="hover:text-gray-300 transition-colors duration-200">Home</Link>
          <Link to="/portfolio" className="hover:text-gray-300 transition-colors duration-200">Portfolio</Link>
          {/* Add more navigation links here if needed */}
        </nav>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<PortfolioPage />} /> {/* Add the portfolio route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
