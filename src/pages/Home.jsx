import { lazy, Suspense } from "react";
import Hero from "@/components/Hero/Hero";
import NDIS from "@/components/Landing/NDIS";
import { images1, images2 } from "@/constants";
import Location from "@/components/Footer/location";
import { Helmet } from 'react-helmet-async';
import TrustedPartnership from "@/components/Landing/TrustedPartnerships";
import { OurPrinciplesSection } from "@/components/Landing/CoreMissionVision/OurPrinciplesSection";

// Lazy load components
const Gallery = lazy(() => import("@/components/shared/Gallery"));
const TestimonialsSection = lazy(() => import("@/components/Landing/Testimonials").then(module => ({ 
  default: module.TestimonialsSection 
})));
const BookAppointmentBanner = lazy(() => import("@/components/Services/BookApppointment/BookAppointment"));

// Loading fallback component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const healthcareServices = {
  highlightedTitle: "Comprehensive",
  title: "Care Solutions",
  services: [
    { text: "24/7 support" },
    { text: "Respite" },
    { text: "Staffing agent" },
    { text: "Transport options" },
    { text: "Cleaners / Gardener" },
    { text: "Finding and keeping a job" },
    { text: "Personal care and daily living" },
    { text: "Individual living options (ILO)" },
    { text: "Social and community participation" },
    { text: "Supporting independent living (SIL)" },
    { text: "Support Coordination Level 2, Level 3" },
  ]
};

const Home = () => {
  return (
     <>
      <Helmet>
        <title>Tunza Care - Compassionate NDIS Provider</title>
        <meta name="description" content="Tunza Care offers expert and compassionate support services under the NDIS on tunza-care.nmcyber.com. We are dedicated to enhancing the lives of individuals with disabilities." />
        <link rel="canonical" href="https://tunza-care.nmcyber.com/" />
      </Helmet>
    <section className='py-20 m-auto bg-gray-100 '>
      <Hero />
      <TrustedPartnership />
      <NDIS {...healthcareServices} />
      <OurPrinciplesSection />
      <Suspense fallback={<LoadingSpinner />}>
        <Gallery images1={images1} images2={images2} />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <BookAppointmentBanner />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
      <Location />
      </Suspense>
    </section>
    </>
  );
};

export default Home;
