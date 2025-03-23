import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, ShipWheelIcon as Wheelchair } from "lucide-react"
import { FaHandshake } from "react-icons/fa"

const OurValues = () => {
  const cardData = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Vision",
      iconBgColor: "#FDBA091F",
      description:
        "To empower individuals with disabilities to live fulfilling lives through exceptional home care services across Australia.",
    },
    {
      icon: <FaHandshake className="h-8 w-8" />,
      title: "Our Core Values",
      iconBgColor: "#DDE9EF",
      description: (
        <ul className="space-y-1 mt-2 text-muted-foreground group-hover:text-white transition-colors duration-200">
          <li>Respect</li>
          <li>Compassion</li>
          <li>Integrity</li>
          <li>Individuality</li>
        </ul>
      ),
    },
    {
      icon: <Wheelchair className="h-8 w-8" />,
      title: "Our Mission",
      iconBgColor: "#E0F5F0",
      description:
        "To deliver quality person-centered care, empowering individuals with disabilities to live with choice, independence, and community inclusion.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a6b9f]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2DBA98]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#1a6b9f]">Values</span> & Principles
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Tunza Care Services, we are guided by a strong set of values that inform everything we do. Our commitment
            to these principles ensures we deliver the highest quality of care.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cardData.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:bg-[#1a6b9f] transition-colors duration-300 border-none shadow-md hover:shadow-xl">
                <CardContent className="p-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-[#1a6b9f] group-hover:text-white transition-colors duration-300"
                    style={{ backgroundColor: card.iconBgColor }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                    {card.title}
                  </h3>
                  <div className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                    {card.description}
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

export default OurValues

