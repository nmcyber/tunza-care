import { motion } from "framer-motion";
import { Check, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ApplicationFormDialog } from "./application-form-dialog";

const StaffingOpportunities = () => {
  const jobCategories = [
    {
      id: "1",
      title: "Enrolled Nurses",
      services: [
        "Personal care and daily living",
        "Transport options",
        "24/7 support",
        "Social and community participation",
        "Finding and keeping a job",
      ],
      description:
        "At Tunza Care, Integrity is our core value, you feel like you possess it? We are looking for you.",
    },
    {
      id: "2",
      title: "Registered Nurses",
      services: [
        "Medication management",
        "Clinical assessments",
        "Care planning",
        "Health education",
        "Wound care",
      ],
      description:
        "Join our team of dedicated nurses providing exceptional care to our clients.",
    },
    {
      id: "3",
      title: "Assistants in Nursing",
      services: [
        "Personal hygiene assistance",
        "Mobility support",
        "Meal preparation",
        "Medication reminders",
        "Companionship",
      ],
      description:
        "Help make a difference in our clients' daily lives with compassionate support.",
    },
    {
      id: "4",
      title: "Support Workers",
      services: [
        "Community access",
        "Life skills development",
        "Household management",
        "Social engagement",
        "Respite care",
      ],
      description:
        "Empower our clients to live independently and participate fully in their communities.",
    },
    {
      id: "5",
      title: "Catering Assistants",
      services: [
        "Meal planning",
        "Food preparation",
        "Special dietary requirements",
        "Kitchen hygiene",
        "Nutritional support",
      ],
      description:
        "Help provide nutritious and enjoyable meals for our clients with diverse needs.",
    },
  ];

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
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-10">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4 px-3 py-1 text-sm font-medium rounded-full">
            Staffing Opportunities
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Offering <span className="text-[#1a6b9f]">Exemplary Services</span>
          </h2>
          <div className="space-y-4 text-gray-600 max-w-3xl mx-auto">
            <p>
              Tunza Care Staffing Agency is here to cater for your staffing
              requirements/demands.
            </p>
            <p>
              Our engagements are with disability service providers, age care
              and community service institutions looking for high-end solution
              for both your temporary and permanent staffing.
            </p>
            <p>
              We are here to offer exemplary services wherever and whenever you
              need.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Accordion
            type="single"
            collapsible
            defaultValue="1"
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            {jobCategories.map((job, index) => (
              <AccordionItem
                key={job.id}
                value={job.id}
                className={cn(
                  "border-b last:border-b-0",
                  index === 0 ? "border-b-gray-200" : "border-b-gray-100"
                )}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <span className="text-lg font-medium flex items-center">
                    <span className="mr-2">{job.id}.</span> {job.title}
                  </span>
                  <div className="h-6 w-6 rounded-full bg-[#1a6b9f] flex items-center justify-center text-white">
                    <Plus className="h-4 w-4 group-data-[state=open]:hidden" />
                    <Minus className="h-4 w-4 hidden group-data-[state=open]:block" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div className="space-y-6">
                    <ul className="space-y-2">
                      {job.services.map((service, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-2 text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-gray-600">{job.description}</p>

                    <div>
                      <Button className="bg-[#1a6b9f] hover:bg-[#155a87] text-white rounded-md ">
                        <ApplicationFormDialog />
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StaffingOpportunities;
