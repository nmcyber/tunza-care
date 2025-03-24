import React from 'react'

import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { containerVariants, itemVariants } from './FramerVariants'

  // Testimonials data
  const testimonials = [
    {
      quote:
        "Working at Tunza Care has been incredibly rewarding. I've grown professionally while making a meaningful impact in our clients' lives.",
      name: "Sarah Johnson",
      role: "Support Worker",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The supportive team environment and flexible scheduling have made Tunza Care the perfect workplace for me. I feel valued every day.",
      name: "Michael Ndegwa",
      role: "Registered Nurse",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "I appreciate how Tunza Care invests in our professional development. I've gained valuable skills that have advanced my career.",
      name: "Emily Chen",
      role: "Case Manager",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

export default function CareersTestimonials() {
  return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 mb-4 px-3 py-1 text-sm font-medium rounded-full">
                Team Voices
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Our <span className="text-[#1a6b9f]">Team Says</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hear from our team members about their experiences working at Tunza Care Services.
              </p>
            </motion.div>
  
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-6">
                        <svg
                          width="45"
                          height="36"
                          viewBox="0 0 45 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#1a6b9f]/20"
                        >
                          <path
                            d="M13.4 36C9.4 36 6.1 34.6333 3.5 31.9C1.16667 29.1667 0 25.8 0 21.8C0 18.0667 1.03333 14.5 3.1 11.1C5.16667 7.7 7.76667 4.76667 10.9 2.3C14.0333 -0.166666 17.3667 -0.666666 20.9 0.800001L22.1 3.2C19.5 4.66667 17.1333 6.83333 15 9.7C12.8667 12.5667 11.8 15.4333 11.8 18.3C11.8 19.5 12.0667 20.4333 12.6 21.1C13.1333 21.7667 13.9 22.1 14.9 22.1C16.7 22.1 18.2333 22.8333 19.5 24.3C20.7667 25.7667 21.4 27.5 21.4 29.5C21.4 31.5 20.7 33.2 19.3 34.6C17.9 35.5333 15.8667 36 13.4 36ZM36.4 36C32.4 36 29.1 34.6333 26.5 31.9C24.1667 29.1667 23 25.8 23 21.8C23 18.0667 24.0333 14.5 26.1 11.1C28.1667 7.7 30.7667 4.76667 33.9 2.3C37.0333 -0.166666 40.3667 -0.666666 43.9 0.800001L45.1 3.2C42.5 4.66667 40.1333 6.83333 38 9.7C35.8667 12.5667 34.8 15.4333 34.8 18.3C34.8 19.5 35.0667 20.4333 35.6 21.1C36.1333 21.7667 36.9 22.1 37.9 22.1C39.7 22.1 41.2333 22.8333 42.5 24.3C43.7667 25.7667 44.4 27.5 44.4 29.5C44.4 31.5 43.7 33.2 42.3 34.6C40.9 35.5333 38.8667 36 36.4 36Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
  )
}
