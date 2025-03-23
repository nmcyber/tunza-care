"use client"
import { motion } from "framer-motion"
import { ArrowRight, Heart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { doctor_avatar, tunza_care_full_silhoutte_logo } from "@/assets"
import { object } from "zod"

const BookAppointmentBanner = () => {
  return (
    <section className="relative z-0 max-w-[85svw] mx-auto  py-16 overflow-hidden text-white">
      {/* Background pattern circles */}
      <div className="absolute inset-0 z-10 ">
        <div className={`absolute -bottom-[65%] -right-[40%] aspect-square w-2/3 bg-[url(/src/assets/svg/tunza_care_full_silhoutte_logo.svg)] opacity-70 object-contain bg-no-repeat object-center border-0 border-white`} />
        <div className={`absolute -top-[50%] left-[10%] aspect-square w-3/5 bg-[url(/src/assets/svg/tunza_care_full_silhoutte_logo.svg)] opacity-70 object-cover bg-no-repeat border-0 border-white`} />
      </div>



      <div className=" relative bg-[#1a6b9f] rounded-2xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 2xl:py-24">
      {/* The section below is on top of the Tunza Care Silhouttes z-20 */}
        <div className=" relative z-20 flex flex-col md:flex-row items-stretch justify-between border-0 border-lime-600">
          {/* Left side - Text and Button */}
          <motion.div
            className="w-full md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-normal leading-tight tracking-[0.8px] mb-8">
              Quality Home <br />
              Healthcare You <br />
              Can Trust.
            </h1>

            <motion.button
              className="  flex items-center gap-2 bg-white text-[#1a6b9f] px-6 py-3 rounded-full font-medium outline hover:bg-primary/5 hover:backdrop-blur-sm hover:text-white hover:outline-gray-200  transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment now
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>

          {/* Right side - Doctor Image */}
          <motion.div
            className="w-full md:w-1/2 relative border-0 border-yellow-600"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full flex justify-center h-full border-0 border-yellow-600">
              {/* Circular frame with doctor image */}
              {/* w-[280px] h-[280px] md:w-[350px] md:h-[350px] mx-auto */}
              <div className="relative aspect-square outline-0 outline-white ">
                {/* <div className="absolute inset-0 rounded-tl-lg rounded-tr-full bg-red-500 p-2">
                  <div className="w-full h-full rounded-tl-lg rounded-tr-full bg-[#2DBA98] overflow-hidden relative">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Doctor with stethoscope"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div> */}
               
               <div className=" relative z-0 aspect-square rounded-tl-lg border-0 border-pink-700">
                {/* Right Angle Triangle */}
                <div className=" absolute z-10 inset-0 aspect-square w-1/2 rounded-tl-md bg-lime-500 " />
                 <div className=" absolute z-10 -top-0 -left-0 aspect-square w-[95%]  bg-lime-500 rounded-full" />
                 {/* Outer scaled white shape */}
                 <div className=" relative z-0 -inset-x-0 -inset-y-4 transform scale-[1.1]">
                 {/* Right Angle Triangle */}
                 <div className=" absolute z-10 inset-0 aspect-square w-1/2 rounded-tl-lg bg-white " />
                 <div className=" absolute z-10 -top-0 -left-0 aspect-square w-[95%]  bg-white rounded-full" />
                 </div>
               </div>
                
                {/* Doctor info card */}
                <motion.div
                  className="absolute bottom-10 -left-1/2 -translate-x-1/2 bg-white text-black rounded-md p-3 shadow-xl border-0 border-red-400 flex items-center gap-3 w-11/12"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={doctor_avatar} style={{ objectFit: "cover", objectPosition: "70%"}} alt="Dr. Charles Jones" />
                    <AvatarFallback>CJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Dr. Charles Jones</p>
                    <div className="h-2 w-44 bg-gray-200 rounded-full mt-1"></div>
                  </div>
                  {/* Heart icon */}
                <div className="absolute -top-1/3 right-6 bg-[#FF9500] p-2 rounded-[8px] shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BookAppointmentBanner

