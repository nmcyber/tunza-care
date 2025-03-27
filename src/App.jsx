import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import EmploymentPage from './pages/Employment';
import ContactPage from './pages/Contact';
import PrivacyPolicy from './pages/Privacy-Policy';
import TermsConditions from './pages/Terms-Conditions';
import ScrollToTop from './utils/ScrollToTop';
import ApplicationPage from './pages/Applications';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/employment" element={<EmploymentPage />} />
        <Route path="/careers" element={<ApplicationPage />} />
        <Route path="/careers/apply" element={<ApplicationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;