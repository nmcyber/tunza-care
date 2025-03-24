import React from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { containerVariants, itemVariants } from './FramerVariants'

  // Application process steps
  const applicationSteps = [
    {
      number: "01",
      title: "Apply Online",
      description: "Complete our online application form with your details and resume.",
    },
    {
      number: "02",
      title: "Initial Screening",
      description: "Our recruitment team will review your application and contact suitable candidates.",
    },
    {
      number: "03",
      title: "Interview",
      description: "Meet with our team to discuss your experience and learn more about the role.",
    },
    {
      number: "04",
      title: "Reference & Checks",
      description: "We'll conduct reference checks and necessary screening verifications.",
    },
    {
      number: "05",
      title: "Job Offer",
      description: "Successful candidates will receive a formal offer to join our team.",
    },
  ]
  

export default function CareersApplicationProcess() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4 px-3 py-1 text-sm font-medium rounded-full">
          How to Apply
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Our <span className="text-[#1a6b9f]">Application Process</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We've designed a straightforward application process to help you join our team quickly and efficiently.
        </p>
      </motion.div>

      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Process steps */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {applicationSteps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#1a6b9f] font-bold text-xl border-2 border-[#1a6b9f] mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-gray-600 mb-6">
          Ready to take the first step? Browse our open positions and apply today!
        </p>
        <Button
          className="bg-[#1a6b9f] hover:bg-[#155a87] text-white"
          size="lg"
          onClick={() => document.getElementById("current-openings").scrollIntoView({ behavior: "smooth" })}
        >
          View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  </section>
  )
}
