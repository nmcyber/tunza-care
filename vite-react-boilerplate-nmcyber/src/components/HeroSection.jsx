import React from 'react';
import { LucideChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className=" min-h-full bg-indigo-600 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Vite React Boilerplate</h1>
        <p className="text-lg mb-8">
          A modern React setup with Tailwind CSS and Shadcn UI components for rapid development.
        </p>
        <button className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-full shadow-md hover:bg-indigo-50 transition duration-200">
          Get Started <LucideChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;