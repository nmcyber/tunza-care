import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Globe, Sparkles, Shield, Clock } from "lucide-react"

const OurApproach = () => {
  const approaches = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Person-Centered Care",
      description:
        "We individualize services to suit you, focusing on your interests, personal goals, and unique abilities.",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Compassionate Support",
      description: "Our team provides care with empathy, understanding, and genuine concern for your wellbeing.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Cultural Inclusivity",
      description: "We celebrate diversity and respect cultural differences in all aspects of our care delivery.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Empowerment Focus",
      description: "We work to build your confidence, skills, and independence to achieve your personal goals.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "We maintain high standards of care through ongoing training, supervision, and quality improvement.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Responsive Service",
      description: "We're available when you need us, with flexible scheduling and prompt response to your needs.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#1a6b9f]">Approach</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Tunza Care Services celebrates our differences and works with you to create services that are tailored to
            suit individual strengths, needs, and preferences.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {approaches.map((approach, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 w-12 h-12 rounded-full bg-[#1a6b9f]/10 flex items-center justify-center text-[#1a6b9f]">
                      {approach.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{approach.title}</h3>
                      <p className="text-gray-600">{approach.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-[#1a6b9f]/5 rounded-2xl p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold mb-4">Culturally Inclusive Care</h3>
              <p className="text-gray-700">
                Tunza Care Services is culturally inclusive, allowing people to make choices and have full control of
                their way of living, feeling accepted and belonging to the team and the community. We work together with
                you to personalize your needs according to your choices, ability, and your unique experience.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center">
                <Globe className="h-16 w-16 text-[#1a6b9f]/70" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurApproach

