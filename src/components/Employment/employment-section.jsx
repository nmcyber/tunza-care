import { motion } from "framer-motion";
import { Check, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ApplicationFormDialog } from "./application-form-dialog";

const EmploymentSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
          variants={itemVariants}
        >
          <div className="p-8 sm:p-10">
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-gray-700 mb-4">
                At Tunza Care Services we are on the hunt for superstars to join
                our organisation. Superstars who are passionate about helping
                and empowering those living with a disability to ensure they
                live a good life.
              </p>
              <p className="text-gray-700 mb-4">
                The role of a Support Worker involves being available to work
                several shift types including early morning, afternoon, evening,
                weekends, sleepovers, and short shifts, across a number of
                different Neighborhoods within the community, so flexibility is
                integral for this role.
              </p>

              <div className="flex items-center mt-6 mb-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a6b9f] flex items-center justify-center text-white">
                  <MapPin size={16} />
                </div>
                <span className="ml-2 font-medium">Locations:</span>
                <span className="ml-2 text-gray-700">
                  Perth, Cunderdin and Kojonup
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-xl mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">
                We Are{" "}
                <span className="text-[#1a6b9f]">Looking For People</span> With:
              </h2>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700">
                    A desire to work within Tunza Care Services Mission, Vision
                    and Values
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700">
                    A dedicated approach to helping individuals identify and
                    achieve their goals and aspirations
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700">
                    Ability to work autonomously, and within a team environment
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-xl mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">
                To Join The{" "}
                <span className="text-[#1a6b9f]">Tunza Care Services Team</span>
                , You Need To Have:
              </h2>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700">
                    NDIS Worker Screening Clearance
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700">
                    First Aid and CPR Certificate (obtained in the last 12
                    months)
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700">
                    Current WA C class driver's licence, and own reliable
                    roadworthy vehicle
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700">
                    Valid Australian working rights
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700">
                    Police Clearance less than 12 months
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700">
                    Comprehensive insured car
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700">
                    Capacity to meet the physical requirements of the position
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-xl mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">
                <span className="text-[#1a6b9f]">Qualifications</span> Needed
                Are:
              </h2>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700">
                    Certificate III in Individual Support
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700">First Aid and CPR</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700">Manual Handling</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-700">
                    Medication Competence
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-gray-700">
                If you have a qualification in Human Services (e.g., Disability,
                Community Services, Individual Support) and/or equivalent
                knowledge and experience obtained within a relevant industry
                that is a bonus, so please let us know!
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center"
            >
              <span className="text-gray-700 mr-4 mb-4 sm:mb-0">
                To apply, send your resume using the
              </span>
              {/* <Button className="bg-[#2DBA98] hover:bg-[#25a385] text-white rounded-md">
                Contact Form <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
              <Button className="bg-[#1a6b9f] hover:bg-[#155a87] text-white rounded-md ">
                <ApplicationFormDialog />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EmploymentSection;
