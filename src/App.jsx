import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import ServicesPage from './pages/Service/ServicePage';
import CardsPage from './pages/Cards/CardsPage';
import ContactPage from './pages/Contact/ContactPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
