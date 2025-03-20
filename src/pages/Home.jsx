
// src/pages/Home.jsx
import React from 'react';
import logos from '../data/logos';
import TrustedPartnership from '@/components/TrustedPartnerships';
import Hero from '@/components/Hero/hero';
import Location from '@/components/Footer/location';
import HealthcareBanner from '@/components/shared/HealthcareBanner';
import Gallery from '@/components/shared/Gallery';
import NDIS from '@/components/NDIS';
import { ServicesSection } from '@/components/ServicesSection';
import { WelcomeSection } from '@/components/WelcomeSection';
import { TestimonialsSection } from '@/components/Testimonials';

const healthcareServices = {
  title: "Tunza Care",
  highlightedTitle: "Australia",
  services: [
    { text: "Personal care and daily living" },
    { text: "Transport options" },
    { text: "24/7 support" },
    { text: "Social and community participation" },
    { text: "Finding and keeping a job" },
    { text: "Individual living options (ILO)" },
    { text: "Supporting independent living (SIL)" },
    { text: "Level 2 Support Coordination" },
    { text: "Respite" },
    { text: "Staffing agent" },
  ],
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lchOxPNqQMlJVc3UogI5X5os8Iw2jQ.png",
  badgeImage: "/ndis-badge.png",
}

const Home = () => {
  return (
    <section className='py-20  m-auto bg-gray-100 '>
      {/* <section className=" min-h-full bg-gray-100 text-gray-800 flex flex-col items-center justify-center py-16">
      </section> */}
      <Hero/>
      <TrustedPartnership />
      <Gallery />
      {/* <HealthcareBanner /> */}
      <Location />
        
      <NDIS {...healthcareServices} />
      {/* <ServicesSection {...healthcareServices} /> */}
      <WelcomeSection />
      <TestimonialsSection />
      {/* <TrustedPartnership /> */}
     
    </section>

    </>

  );
};

export default Home;

