// src/components/ServiceAreas.jsx
import React from 'react';

const ServiceAreas = () => {
  const waServiceAreas = [
    'Perth Metropolitan Area',
    'Cuderdin',
    'Geraldton',
    'Kojonup',
    'Toodyay',
    'Merredin',
    'Narrogin',
    'Northam',
    'York',
  ];

  const upcomingServiceAreas = [
    'Albany',
    'Broom',
    'Esperance',
    'Kalgoorlie',
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Our Service Areas</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* WA Service Areas */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Western Australia (WA)</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {waServiceAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Upcoming Service Areas */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Upcoming Service Areas</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {upcomingServiceAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;