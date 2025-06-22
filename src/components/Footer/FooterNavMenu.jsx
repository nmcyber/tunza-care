import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const SERVICES = [
  "Personal Care",
  "Transport Options",
  "Community Participation",
  "Independent Living",
  "Support Coordination"
]

export const FooterMenuServices = ({ itemVariants }) => (
  <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
    <h4 className="font-semibold text-lg sm:text-xl text-primary">Our Services</h4>
    <ul className="space-y-2 sm:space-y-3">
      {SERVICES.map((service) => (
        <li key={service}>
          <Link
            to="/services"
            className="text-sm sm:text-base text-gray-600 hover:text-primary transition-colors duration-200 flex items-center"
          >
            <span className="mr-2">›</span>
            {service}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
)