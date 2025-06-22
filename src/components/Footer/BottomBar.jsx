import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Code, Heart } from "lucide-react"
import { AuroraText } from '../magicui/aurora-text'

export const BottomBar = ({ itemVariants }) => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.div
      variants={itemVariants}
      className="border-t border-gray-100 py-6 space-y-4 sm:space-y-0 sm:flex sm:flex-row sm:justify-between sm:items-center"
    >
      <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
        © {currentYear} Tunza Care Services. All Rights Reserved.
      </p>

      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <div className="flex space-x-4 text-xs sm:text-sm">
          <Link
            to="/privacy-policy"
            className="text-gray-500 hover:text-primary transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-conditions"
            className="text-gray-500 hover:text-primary transition-colors duration-200"
          >
            Terms & Conditions
          </Link>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2 text-primary text-xs sm:text-sm">
          <span>Made with</span>
          <Heart size={12} className="fill-primary" />
          <span>by</span>
          <a href="https://nextclicktechnologies.com/" className="text-bold" target="_blank" rel="noopener noreferrer">
            <AuroraText className="font-semibold">
            NextClick
            </AuroraText>
          </a>
        </div>
        {/* Developer Signature */}
        <div className="flex items-center text-xs space-x-1 sm:space-x-2 text-gray-400">
            <span>Dev</span>
            <Code size={12} className="text-primary" />
            <a 
              href="https://alexander.chepkiyeng.dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative"
            >
                Alexander
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                alexander.chepkiyeng.dev
              </span>
            </a>
            <Code size={12} className="text-primary" />
            <a 
              href="https://github.com/sagar9k" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative"
            >
                Sagar
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                alexander.chepkiyeng.dev
              </span>
            </a>
          </div>
      </div>
    </motion.div>
  )
}