import { motion } from "framer-motion"
import { CompanyInfo } from "./CompanyInfo"
import { QuickLinks } from "./QuickLinks"
import { FooterMenuServices as Services } from "./FooterNavMenu"
import { ContactInfo } from "./ContactInfo"
import { Acknowledgment } from "./Acknowledgment"
import { BottomBar } from "./BottomBar"

const Footer = () => {
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
    <footer className="bg-white pt-12 sm:pt-16 relative rounded-t-2xl md:rounded-t-2xl lg:rounded-t-4xl overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute -left-20 top-40 w-40 h-40 rounded-full border-[15px] border-sky-50/50 -z-10 hidden sm:block"></div>
      <div className="absolute -right-10 bottom-40 w-32 h-32 rounded-full border-[12px] border-teal-50/40 -z-10 hidden sm:block"></div>

      <motion.div
        className="container mx-auto px-6 sm:px-6 lg:px-8 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-10">
          <CompanyInfo itemVariants={itemVariants} />
          <QuickLinks itemVariants={itemVariants} />
          <Services itemVariants={itemVariants} />
          <ContactInfo itemVariants={itemVariants} />
        </div>

        <Acknowledgment itemVariants={itemVariants} />
        <BottomBar itemVariants={itemVariants} />
      </motion.div>
    </footer>
  )
}

export default Footer