import React from 'react'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"

import { Link } from "react-router-dom"
import { containerVariants, itemVariants } from './FramerVariants'

  // FAQ data
  const faqs = [
    {
      question: "What qualifications do I need to work at Tunza Care?",
      answer:
        "Requirements vary by position, but generally include relevant certifications (e.g., Certificate III in Individual Support for Support Workers), NDIS Worker Screening Clearance, First Aid certification, and a valid driver's license with reliable transportation.",
    },
    {
      question: "What areas do you service?",
      answer:
        "Tunza Care Services operates throughout the Perth metropolitan area, as well as in Cunderdin, Kojonup, and surrounding areas in Western Australia.",
    },
    {
      question: "Do you offer training for new employees?",
      answer:
        "Yes, we provide comprehensive onboarding and ongoing training to ensure all team members have the skills and knowledge needed to provide exceptional care.",
    },
    {
      question: "What types of shifts are available?",
      answer:
        "We offer various shift types including early morning, afternoon, evening, weekends, sleepovers, and short shifts to accommodate different preferences and availability.",
    },
    {
      question: "How long does the application process take?",
      answer:
        "The timeline varies, but typically takes 2-3 weeks from application to job offer for successful candidates.",
    },
  ]
  

export default function CareersFAQs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-200 mb-4 px-3 py-1 text-sm font-medium rounded-full">
          Common Questions
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Frequently Asked <span className="text-[#1a6b9f]">Questions</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Find answers to common questions about working at Tunza Care Services.
        </p>
      </motion.div>

      <motion.div
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {faqs.map((faq, index) => (
          <motion.div key={index} variants={itemVariants} className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-gray-600 mb-4">Have more questions? We're here to help!</p>
        <Link href="/contact">
          <Button variant="outline">Contact Us</Button>
        </Link>
      </motion.div>
    </div>
  </section>
  )
}
