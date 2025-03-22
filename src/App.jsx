import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import PrivacyPolicy from './pages/Privacy-Policy';
import TermsConditions from './pages/Terms-Conditions';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;