import React from 'react';
import RootLayout from './layouts/RootLayout';

const App = ({ children }) => {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  );
};

export default App;
// <p>&copy; {new Date().getFullYear()} Vite React Template. All rights reserved.</p>