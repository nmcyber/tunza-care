import React from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function CareersCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a6b9f] text-white">
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
          Join our team of dedicated professionals and help us deliver exceptional care to those who need it most.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-white text-[#1a6b9f] hover:bg-gray-100 px-8 py-6 h-auto text-lg font-medium rounded-lg"
            onClick={() => document.getElementById("current-openings").scrollIntoView({ behavior: "smooth" })}
          >
            View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg font-medium rounded-lg"
            >
              Contact Our Team
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
  )
}
