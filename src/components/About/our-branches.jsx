// src/components/OurBranches.jsx
import React from 'react';

const OurBranches = () => {
  const branches = [
    {
      state: 'Northern Territory (NT)',
      locations: 'Alice Springs, Tenant Creek',
      address: '160 Woods Terrace, Braitling NT 0870',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Our Branches</h2>

        <div className="grid md:grid-cols-1 gap-8">
          {branches.map((branch, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">{branch.state}</h3>
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-medium">Locations:</span> {branch.locations}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-medium">Address:</span> {branch.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBranches;