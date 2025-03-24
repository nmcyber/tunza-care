import React from 'react'
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

import { Clock, Users, Heart, Shield } from "lucide-react"
import { containerVariants, itemVariants } from './FramerVariants'

  // Benefits data
  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Work hours that fit your lifestyle with various shift options available.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Supportive Team",
      description: "Join a collaborative environment where everyone works together to achieve excellence.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Professional Development",
      description: "Access to ongoing training and career advancement opportunities.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Meaningful Work",
      description: "Make a real difference in people's lives every day through compassionate care.",
    },
  ]
  

export default function CareersWhyWorkWithUs() {
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
        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4 px-3 py-1 text-sm font-medium rounded-full">
          Why Choose Us
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Work With <span className="text-[#1a6b9f]">Tunza Care</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Tunza Care, we value our team members and are committed to creating a supportive, rewarding work
          environment where you can thrive professionally while making a meaningful difference.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {benefits.map((benefit, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full border-none shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#1a6b9f]/10 flex items-center justify-center text-[#1a6b9f] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
  )
}
