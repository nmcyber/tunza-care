import { motion } from "framer-motion"
import { navigation } from "@/constants"
import { Link } from "react-router-dom"

export const QuickLinks = ({ itemVariants }) => (
  <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
    <h4 className="font-semibold text-lg sm:text-xl text-primary">Quick Links</h4>
    <ul className="space-y-2 sm:space-y-3">
      {navigation.map((item) => (
        <li key={item.id}>
          <Link
            to={item.url}
            className="text-sm sm:text-base text-gray-600 hover:text-primary transition-colors duration-200 flex items-center"
          >
            <span className="mr-2">›</span>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
)