import React from 'react';
import { Link } from 'react-router-dom';
import './RootLayout.css';

const RootLayout = ({ children }) => {
  return (
    <div className=" min-h-dvh bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm py-4 px-6 max-h-16">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">NMCyber</h1>
          <ul className="flex space-x-4">
            <li>
            <Link to="/" className="text-indigo-600 hover:text-indigo-800"> 
                Home
              </Link>
            </li>
            <li>
              <a href="/about" className="text-indigo-600 hover:text-indigo-800">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className=" h-full flex-grow p-6">{children}</main>
      <footer className="bg-gray-200 py-4 text-center text-gray-600">
      <p>&copy; {new Date().getFullYear()} NMCYBER Templates. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RootLayout;