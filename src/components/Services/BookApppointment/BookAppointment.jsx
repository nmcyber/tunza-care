import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import AnimatedDoctorImage from "./AnimatedDoctor"
import { BookAppointmentDialog } from "@/components/Contact/book-appointment-dialog"

const BookAppointmentBanner = () => {
  return (
    <section className="relative z-0 w-[90svw] md:max-w-[85svw] mx-auto py-16 md:py-20 overflow-hidden text-white">
      {/* Background pattern circles */}
      <div className="absolute inset-0 z-10 ">
        <div className={`absolute -bottom-[65%] -right-[40%] aspect-square w-2/3 bg-[url(/src/assets/svg/tunza_care_full_silhoutte_logo.svg)] opacity-70 object-contain bg-no-repeat object-center `} />
        <div className={`absolute -top-[50%] left-[10%] aspect-square w-3/5 bg-[url(/src/assets/svg/tunza_care_full_silhoutte_logo.svg)] opacity-70 object-cover bg-no-repeat `} />
      </div>

      <div className=" relative bg-primary rounded-2xl px-8 sm:px-6 md:px-8 py-16 md:py-20 2xl:py-24 ">
      {/* The section below is on top of the Tunza Care Silhouttes z-20 */}
        <div className=" relative z-20 flex flex-col gap-8 md:flex-row items-stretch justify-between overflow-visible">
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
              className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium outline hover:bg-primary/5 hover:backdrop-blur-sm hover:text-white hover:outline-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookAppointmentDialog />
            </motion.button>
          </motion.div>

          {/* Right side - Doctor Image */}
          <motion.div
            className="w-11/12 mx-auto h-[35dvh] max-md:w-screen md:h-auto py-2 mt-8 justify-center max-md:aspect-square md:w-1/2 -mr-2 md:mr-0 relative "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full flex justify-center h-full ">
              <AnimatedDoctorImage />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BookAppointmentBanner

