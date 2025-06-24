import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import ScrollToTop from './utils/ScrollToTop';

// Dynamically imported Page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const EmploymentPage = lazy(() => import('./pages/Employment'));
const ContactPage = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/Privacy-Policy'));
const TermsConditions = lazy(() => import('./pages/Terms-Conditions'));
const ApplicationPage = lazy(() => import('./pages/Applications'));
const LocationsPage = lazy(() => import('./pages/Locations'));

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/employment" element={<EmploymentPage />} />
            <Route path='/locations' element={<LocationsPage />} />
            <Route path="/careers" element={<ApplicationPage />} />
            <Route path="/careers/apply" element={<ApplicationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        <Footer />
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;