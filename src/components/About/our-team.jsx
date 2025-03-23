import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years of experience in disability care, Sarah founded Tunza Care Services with a vision to transform how care is delivered.",
      linkedin: "#",
      email: "sarah@tunzacare.com.au",
    },
    {
      name: "Michael Ndegwa",
      role: "Operations Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael ensures our day-to-day operations run smoothly, maintaining our high standards of care across all services.",
      linkedin: "#",
      email: "michael@tunzacare.com.au",
    },
    {
      name: "Emily Chen",
      role: "Clinical Services Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Emily oversees our clinical care services, bringing her extensive nursing background to ensure best practices.",
      linkedin: "#",
      email: "emily@tunzacare.com.au",
    },
    {
      name: "David Ochieng",
      role: "Community Engagement Lead",
      image: "/placeholder.svg?height=300&width=300",
      bio: "David builds relationships with community partners and ensures our services are accessible to diverse communities.",
      linkedin: "#",
      email: "david@tunzacare.com.au",
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team of dedicated professionals brings years of experience in disability care, recognizing the
            multicultural aspects of Western Australia and providing services with respect and compassion.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 w-full">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} style={{ objectFit: "cover" }} className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our team is supported by a dedicated group of care professionals, including registered nurses, support
            workers, and administrative staff, all committed to delivering exceptional care.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default OurTeam

