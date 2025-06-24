import OurBranches from '@/components/About/our-branches';
import IndependentLivingSection from "@/components/Services/independent-living-section";
import JobSupportSection from "@/components/Services/job-support-section";
import PersonalCareSection from "@/components/Services/personal-care-section";
import ServiceAreas from '@/components/Services/service-areas';
import ServicesSection from "@/components/Services/ServicesSection";
import SocialParticipationSection from "@/components/Services/social-participation-section";
import TransportSection from "@/components/Services/transport-section";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
// import ServiceAreas from '../components/ServiceAreas'; 
// import OurBranches from '../components/OurBranches'; 
// Additional service-related components or sections could be added here
const ServiceCards = () => {
  const serviceDetails = [
    {
      title: "Personal Care",
      description:
        "Assistance with daily activities including personal hygiene, dressing, and meal preparation.",
      icon: "👤",
    },
    {
      title: "Community Support",
      description:
        "Help with accessing community services, social activities, and building connections.",
      icon: "🏙️",
    },
    {
      title: "Transport Assistance",
      description:
        "Transportation to appointments, shopping, and community events.",
      icon: "🚗",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock care and assistance for those who need continuous support.",
      icon: "⏰",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Service Details
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive care services tailored to meet your
            individual needs and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceDetails.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
  <>
      <Helmet>
        <title>Our Services | Tunza Care Home Care Support Services</title>
        <meta name="description" content="Explore our comprehensive range of home care support services including personal care, community support, transport assistance, and 24/7 support." />
        <meta name="keywords" content="home care services, personal care, community support, transport assistance, 24/7 care, NDIS services, disability support" />
       <link rel="canonical" href="https://tunza-care.nmcyber.com/services" />
      </Helmet>
    <section className="min-h-screen">
      {/* Main Services Banner and Overview */}
      <ServicesSection />

      {/* Detailed Service Sections */}
      <PersonalCareSection />
      <TransportSection />
      <SocialParticipationSection />
      <JobSupportSection />
      <IndependentLivingSection />
      <ServiceAreas />
      <OurBranches />

      {/* Additional Service Details */}
      {/* <ServiceCards /> */}

      {/* Call to Action Section */}
      <section className=" pt-16 pb-36 mt-20 -mb-20 bg-[#1a6b9f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contact us today to learn more about how we can tailor our services
            to meet your specific needs.
          </p>

          <Link
            to="/contact"
            className="bg-white text-[#1a6b9f] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </section>
    </section>
    </>
  );
};

export default Services;
