// src/pages/Home.jsx
import React from 'react';
import logos from '../data/logos';

const Home = () => {
  return (
    <>
      <section className=" min-h-full bg-gray-100 text-gray-800 flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold mb-8">Vite React Template</h1>
        <p className="text-lg text-gray-600 mb-16">
          A template for creating Vite React apps with modern tools.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {logos.map((logo) => (
            <a
              key={logo.alt}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center space-y-2"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-16 h-16 hover:opacity-75 transition-opacity"
              />
              <span className="text-sm">{logo.alt}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;