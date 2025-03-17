
// src/pages/Home.jsx
import React from 'react';
import logos from '../data/logos';
import TrustedPartnership from '@/components/TrustedPartnerships';
import Hero from '@/components/Hero/hero';

const Home = () => {
  return (
    <section className='py-20  m-auto bg-white '>
      {/* <section className=" min-h-full bg-gray-100 text-gray-800 flex flex-col items-center justify-center py-16">
      </section> */}
      <Hero/>
      <TrustedPartnership />
     
    </section>
  );
};

export default Home;

