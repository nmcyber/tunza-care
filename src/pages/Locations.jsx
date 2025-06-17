import React from 'react';
import ServiceAreas from '../components/Services/service-areas';
import OurBranches from '../components/About/our-branches';
import { Helmet } from 'react-helmet-async';

const LocationsPage = () => {
  return (
    <>
      <Helmet>
        <title>Locations | Tunza Care Home Care Support Services</title>
        <meta 
          name="description" 
          content="Discover Tunza Care's service areas and branch locations across Australia. We provide exceptional home care support services in Western Australia and the Northern Territory."
        />
      </Helmet>
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        {/* Add Hero image */}
          <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/images/pattern-bg.svg')] bg-repeat"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Locations</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                Discover where Tunza Care is making a difference, with service areas 
                across Western Australia and branches in the Northern Territory.
              </p>
            </div>
          </div>
        </div>

        {/* Location Overview Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Where We Operate</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Tunza Care is committed to bringing exceptional care services to communities 
                across Australia. We currently operate in Western Australia and the Northern 
                Territory, with plans to expand our reach.
              </p>
            </div>
            
            {/* Map or Visual Representation - Placeholder */}
            <div className="bg-gray-100 h-64 md:h-96 rounded-lg mb-8 flex items-center justify-center">
              <p className="text-gray-500">Interactive map or Australia coverage visual coming soon</p>
            </div>
          </div>
        </section>

        {/* Service Areas Component */}
        <ServiceAreas />

        {/* Our Branches Component */}
        <OurBranches />

        {/* Contact for Locations Section */}
        <section className="py-12 bg-primary-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need More Information?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              If you have questions about our service areas or are interested in receiving care in your location, 
              our friendly team is here to help.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a href="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition duration-300">
                Contact Us
              </a>
              <a href="tel:+61123456789" className="inline-block bg-white hover:bg-gray-100 text-primary font-medium py-3 px-6 rounded-md transition duration-300 border border-primary">
              Emergency Line: 0415 - 523 323 / 0469 - 842 289
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LocationsPage;