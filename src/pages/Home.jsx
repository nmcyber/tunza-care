// src/pages/Home.jsx
import React from "react";
import logos from "../data/logos";
import NDIS from "@/components/Landing/NDIS";
import Hero from "@/components/Hero/hero";
import Location from "@/components/Footer/location";
import Gallery from "@/components/shared/Gallery";
import HealthcareBanner from "@/components/shared/HealthcareBanner";
import TrustedPartnership from "@/components/Landing/TrustedPartnerships";
import { OurPrinciplesSection } from "@/components/Landing/CoreMissionVision/OurPrinciplesSection";
import { TestimonialsSection } from "@/components/Landing/Testimonials";

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
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lchOxPNqQMlJVc3UogI5X5os8Iw2jQ.png",
  badgeImage: "/ndis-badge.png",
};

const Home = () => {
  return (
    <section className='py-20  m-auto bg-gray-100 '>
      {/* <section className=" min-h-full bg-gray-100 text-gray-800 flex flex-col items-center justify-center py-16">
      </section> */}
      <Hero />
      <TrustedPartnership />
      <NDIS {...healthcareServices} />
      <OurPrinciplesSection />
      <Gallery />
      {/* <HealthcareBanner /> */}
      <TestimonialsSection />
      <Location />

      {/* <ServicesSection {...healthcareServices} /> */}
      {/* <TrustedPartnership /> */}
    </section>
  );
};

export default Home;
