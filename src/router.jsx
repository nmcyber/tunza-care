import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import App from './App'; 

const Router = () => {
  return (
    <BrowserRouter>
    <App>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
      </App>
    </BrowserRouter>
  );
};

export default Router;