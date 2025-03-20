import React from "react";
import { motion } from "framer-motion";
import { banner, playIcon, reviews, stars } from "@/assets";
import Typography from "../shared/Typography";

const Hero = () => {
  return (
    <section className=' px-4 flex flex-col bg-white py-20 '>
      <div className=' flex max-w-6xl mx-auto md:flex-row items-center justify-between p-0'>
        {/* Left Section */}
        <div className='md:w-1/2 space-y-2'>
          <motion.h1
            className='text-5xl md:text-6xl font-bold text-gray-800 space-y-4'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Quality <span className=' text-sky-700'>Home Healthcare</span> You
            Can Trust. */}
            <Typography variant="heading"
            h1Parts={[
              { text: 'Quality', color: 'color1' },
              { text: 'Home Healthcare', color: 'color2' },
              { text: 'You Can Trust.', color: 'color1' },
            ]}
            />
          </motion.h1>
          <p className='text-gray-600'>
            Tunza Care Services is a WA NDIS provider, offering a range of
            in-home care, community participation, supported independent living,
            clinical care and allied health services across Western Australia.
          </p>
          <div className='flex m-2 '>
            <motion.button
              className=' w-60 p-1  bg-primary text-lg text-white mx-4 my-12 rounded-lg shadow-xl hover:bg-blue-700'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment →
            </motion.button>
            <div className='flex -space-x-8'>
              <motion.img
                src={playIcon}
                alt='playicon'
                className=' w-36'
                whileHover={{ scale: 1.05 }}
              />

              <motion.button
                className='text-green-400 text-lg '
                whileHover={{ scale: 1.05 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
          <div className='flex items-center space-x-4 '>
            <img
              src={reviews}
              alt='User1'
              className='w-30 h-16 rounded-full border border-white'
            />
            <div>
              <p className='text-md font-medium text-gray-700'>3.2K</p>
              <p className='text-sm text-gray-500'>People with us</p>
            </div>
            <div className=''>
              <img src={stars} alt='stars' className='w-40 h-7' />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='relative md:w-1/2'>
          <motion.img
            src={banner}
            alt='Healthcare'
            className='rounded-lg'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className='absolute top-8 sm:top-10 lg:top-16 right-6 sm:right-7 lg:right-10 bg-white p-1 md:p-2 lg:p-3  rounded-sm  shadow-md text-center'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className='text-xl font-bold text-blue-600 p-1 lg:p-2'>150+</p>
            <hr />
            <p className='text-xs text-gray-500 p-1 lg:p-2'>Lorem Ipsum</p>
          </motion.div>
          <motion.div
            className='flex items-center absolute bottom-8 sm:bottom-12 lg:bottom-14 left-2 sm:left-3 lg:left-4 w-40 sm:w-48 lg:w-64 xl:w-72 space-x-2  bg-white p-1 sm:p-2 lg:p-4 rounded-lg shadow-md'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className='text-blue-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M20.25 8.511c0 7.197-8.25 13.5-8.25 13.5s-8.25-6.303-8.25-13.5A8.25 8.25 0 0112 3a8.25 8.25 0 018.25 5.511z'
                />
              </svg>
            </div>
            <div className=''>
              <p className='text-sm font-medium text-gray-700 p-1'>
                Health Control
              </p>
              <p className='text-xs text-gray-500 p-1'>
                Lorem Ipsum is simply dummy{" "}
              </p>
              <div className='w-full bg-gray-200 rounded-full h-2 mt-2 '>
                <div
                  className='bg-blue-600 h-2 rounded-full'
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
