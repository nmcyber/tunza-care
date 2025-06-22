import { motion } from "framer-motion"
import { socials } from "@/constants"
import { Link } from "react-router-dom"
import { logo } from "@/assets"

export const CompanyInfo = ({ itemVariants }) => (
  <motion.div variants={itemVariants} className="space-y-6">
    <Link to="/" className="inline-block">
      <img src={logo} alt="Tunza Care Services Logo" title='Tunza Care Logo' className="h-12 sm:h-16 w-auto" />
    </Link>
    <p className="text-gray-600 text-sm sm:text-base">
      Tunza Care Services is a registered NDIS provider offering a range of in-home care and support services in Australia.
    </p>
    <div className="flex space-x-4">
      {socials.map(({ link, ariaLabel, iconImage: Icon }, index) => (
        <motion.a
          href={link}
          key={index}
          className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={ariaLabel}
        >
          <Icon size={16} className="sm:size-[18px]" />
        </motion.a>
      ))}
    </div>
  </motion.div>
)