import React from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CareersHero() {
  return (
    <section className="relative bg-[#1a6b9f] text-white overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-10">
      <div className="absolute top-[-10%] right-[10%] w-[60%] h-[120%] rounded-full border-[40px] border-white"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[80%] rounded-full border-[30px] border-white"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6 px-3 py-1 text-sm font-medium rounded-full">
            Join Our Team
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Make a Difference with Tunza Care
          </h1>
          <p className="text-xl text-white/80 max-w-xl mb-8">
            Join our team of dedicated professionals providing exceptional care and support to individuals across
            Western Australia.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-white text-[#1a6b9f] hover:bg-gray-100"
              size="lg"
              onClick={() => document.getElementById("current-openings").scrollIntoView({ behavior: "smooth" })}
            >
              View Open Positions
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20" size="lg">
              Learn About Us
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Tunza Care team members helping clients"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a6b9f]/50 to-transparent"></div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-[260px]">
            <p className="text-[#1a6b9f] font-semibold mb-2">Join Our Family</p>
            <p className="text-gray-700 text-sm">
              We're looking for compassionate individuals who share our commitment to empowering lives through
              exceptional care.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  )
}
