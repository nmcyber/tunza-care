
// src/pages/Home.jsx
import React from 'react';
import logos from '../data/logos';
import TrustedPartnership from '@/components/TrustedPartnerships';
import Hero from '@/components/Hero/hero';
import Location from '@/components/Footer/location';
import HealthcareBanner from '@/components/shared/HealthcareBanner';

const Home = () => {
  return (
    <section className='py-20  m-auto bg-gray-100 '>
      {/* <section className=" min-h-full bg-gray-100 text-gray-800 flex flex-col items-center justify-center py-16">
      </section> */}
      <Hero/>
      <TrustedPartnership />
      {/* <HealthcareBanner /> */}
      <Location />
     
    </section>
  );
};

export default Home;

