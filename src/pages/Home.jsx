import Hero from "@/components/Hero/Hero";
import NDIS from "@/components/Landing/NDIS";
import { images1, images2 } from "@/constants";
import Gallery from "@/components/shared/Gallery";
import Location from "@/components/Footer/location";
import { TestimonialsSection } from "@/components/Landing/Testimonials";
import TrustedPartnership from "@/components/Landing/TrustedPartnerships";
import BookAppointmentBanner from "@/components/Services/BookApppointment/BookAppointment";
import { OurPrinciplesSection } from "@/components/Landing/CoreMissionVision/OurPrinciplesSection";

const healthcareServices = {
  highlightedTitle: "Comprehensive",
  title: "Care Solutions",
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
  ]
};

const Home = () => {
  return (
    <section className='py-20 m-auto bg-gray-100 '>
      <Hero />
      <TrustedPartnership />
      <NDIS {...healthcareServices} />
      <OurPrinciplesSection />
      <Gallery images1={images1} images2={images2} />
      <TestimonialsSection />
      <BookAppointmentBanner />
      <Location />
    </section>
  );
};

export default Home;
