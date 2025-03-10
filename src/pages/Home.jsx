// src/pages/Home.jsx
import React from 'react';
import logos from '../data/logos';
import TrustedPartnership from '@/components/TrustedPartnerships';

const Home = () => {
  return (
    <>
      {/* <section className=" min-h-full bg-gray-100 text-gray-800 flex flex-col items-center justify-center py-16">
      </section> */}
      <TrustedPartnership />
      <TrustedPartnership />
    </>
  );
};

export default Home;