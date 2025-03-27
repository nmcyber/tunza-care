
// import Link from "next/link"
import { motion } from "framer-motion"
import { navigation, socials } from "@/constants"
import { Phone, Mail, MapPin, Heart } from "lucide-react"
// import { obfuscateValue, handleObfuscatedClick } from "@/lib/utils"
import { Link } from "react-router-dom"
import { handleObfuscatedClick, obfuscateValue } from "@/utils/obfuscation"
import { logo } from "@/assets"

const Footer = () => {
  const currentYear = new Date().getFullYear()

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

  // Obfuscate contact information
  const phoneNumber = "0893876326"
  const emailAddress = "admin@tunzacare.com.au"
  const obfuscatedPhone = obfuscateValue(phoneNumber)
  const obfuscatedEmail = obfuscateValue(emailAddress)

  return (
    <footer className="bg-white pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute -left-20 top-40 w-40 h-40 rounded-full border-[15px] border-sky-50/50 -z-10"></div>
      <div className="absolute -right-10 bottom-40 w-32 h-32 rounded-full border-[12px] border-teal-50/40 -z-10"></div>

      <motion.div
        className="container mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="inline-block">
              <img src={logo} alt="Tunza Care Services Logo" className="h-16 w-auto" />
            </Link>

            <p className="text-gray-600 max-w-xs">
              Tunza Care Services is a WA NDIS provider, offering a range of in-home care and support services across
              Western Australia.
            </p>

            <div className="flex space-x-3">
              {socials.map(({ link, ariaLabel, iconImage: Icon }, index) => (
                <motion.a
                  href={link}
                  key={index}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1a6b9f]/10 text-[#1a6b9f] hover:bg-[#1a6b9f] hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={ariaLabel}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="font-semibold text-xl text-[#1a6b9f]">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="text-gray-600 hover:text-[#1a6b9f] transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="font-semibold text-xl text-[#1a6b9f]">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-[#1a6b9f] transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span>
                  Personal Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-[#1a6b9f] transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span>
                  Transport Options
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-[#1a6b9f] transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span>
                  Community Participation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-[#1a6b9f] transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span>
                  Independent Living
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-[#1a6b9f] transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2">›</span>
                  Support Coordination
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info - Updated with obfuscation */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="font-semibold text-xl text-[#1a6b9f]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a6b9f]/10 flex items-center justify-center text-[#1a6b9f]">
                  <Phone size={18} />
                </div>
                <a
                  href="#"
                  data-type="tel"
                  data-value={obfuscatedPhone}
                  onClick={handleObfuscatedClick}
                  className="text-gray-600 hover:text-[#1a6b9f] transition-colors duration-200"
                >
                  08 9387 6326
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a6b9f]/10 flex items-center justify-center text-[#1a6b9f]">
                  <Mail size={18} />
                </div>
                <a
                  href="#"
                  data-type="mailto"
                  data-value={obfuscatedEmail}
                  onClick={handleObfuscatedClick}
                  className="text-gray-600 hover:text-[#1a6b9f] transition-colors duration-200"
                >
                  info@tunzacare.com.au
                </a>
              </li>
              <li className="flex space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1a6b9f]/10 flex items-center justify-center text-[#1a6b9f] mt-1">
                  <MapPin size={18} />
                </div>
                <address className="text-gray-600 not-italic">
                  6/15 Pattie Street
                  <br />
                  Cannington WA 6107
                </address>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Acknowledgment of Country */}
        <motion.div variants={itemVariants} className="border-t border-gray-100 pt-6 pb-4 text-center">
          <p className="text-gray-600 text-sm max-w-3xl mx-auto">
            We pay our respects to the Traditional Owners of the land on which we work and live, and to their cultures;
            and to Elders past, present and emerging.
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-100 py-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Tunza Care Services. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-500 hover:text-[#1a6b9f] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-sm text-gray-500 hover:text-[#1a6b9f] transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
            <div className="flex items-center text-[#1a6b9f]">
              <span className="text-sm mr-1">Made with</span>
              <Heart size={14} className="fill-[#1a6b9f]" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer

