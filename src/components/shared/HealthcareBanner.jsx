import { doctor } from "@/assets";
import React from "react";

const HealthcareBanner = () => {
  return (
    <div className=' container mx-auto px-10 flex flex-col lg:flex-row items-center justify-between bg-blue-300 text-white p-8 lg:p-16 rounded-2xl shadow-lg'>
      {/* Left Section */}
      <div className='flex flex-col gap-4 lg:w-1/2'>
        <h1 className='text-3xl lg:text-5xl font-bold leading- p-3'>
          Quality Home Healthcare You Can Trust.
        </h1>
        <button className='mt-4 w-1/2 bg-white text-[#64cdf6] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-200 hover:text-white transition'>
          Book Appointment now →
        </button>
      </div>

      {/* Right Section */}
      <div className='relative mt-8 lg:mt-0 lg:w-1/2'>
        {/* Doctor Image */}
        <div className=''>
          <img
            src={doctor}
            alt='Doctor'
            className='rounded-full w-48 h-48 object-cover border-4 border-blue-600'
          />
        </div>

        {/* Doctor Info */}
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-4'>
          <img
            src='https://via.placeholder.com/50' // Replace with actual image URL
            alt='Doctor Thumbnail'
            className='w-12 h-12 rounded-full object-cover'
          />
          <div>
            <h3 className='font-semibold text-blue-600'>Dr. Charles Jones</h3>
            <p className='text-sm text-gray-600'>
              Your trusted healthcare provider
            </p>
          </div>
          <div className='text-blue-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareBanner;
