import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-[-10%] right-[10%] w-[60%] h-[120%] rounded-full border-[40px] border-[#1a6b9f]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[80%] rounded-full border-[30px] border-[#2DBA98]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="bg-[#1a6b9f] rounded-2xl p-10 md:p-16 text-center text-white shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Care?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Contact us today to learn more about our services and how we can support you or your loved ones with
            compassionate, person-centered care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-[#1a6b9f] hover:bg-gray-100 px-8 py-6 h-auto text-lg font-medium rounded-lg"
            >
              <Link to="/contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg font-medium rounded-lg"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            We pay our respects to the Traditional Owners of the land on which we work and live, and to their cultures;
            and to Elders past, present and emerging.
          </p>
          <div className="flex justify-center">
            <div className="h-[2px] w-20 bg-[#1a6b9f]/30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction

