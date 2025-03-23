import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const AboutHero = () => {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-[-10%] right-[10%] w-[60%] h-[120%] rounded-full border-[40px] border-white"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[80%] rounded-full border-[30px] border-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="bg-white/20 text-white hover:bg-white/30 mb-6 px-3 py-1 text-sm font-medium rounded-full">
              About Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Lives Through Compassionate Care
            </h1>
            <p className="text-xl text-white/80 max-w-xl">
              Tunza Care Services is a Western Australian family owned company delivering quality person-centered care
              across WA, empowering individuals with disabilities to live with choice, independence, and community
              inclusion.
            </p>
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
                style={{ objectFit: "cover" }}
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-[260px]">
              <p className="text-primary font-semibold mb-2">Our Promise</p>
              <p className="text-gray-700 text-sm">
                We recognize the multicultural aspects of Western Australia and provide services with respect and
                compassion for our clients, staff, and the community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero

