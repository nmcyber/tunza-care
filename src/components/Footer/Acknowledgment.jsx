import { motion } from "framer-motion"

export const Acknowledgment = ({ itemVariants }) => (
  <motion.div variants={itemVariants} className="border-t border-gray-100 py-6 text-center">
    <p className="text-gray-600 text-xs sm:text-sm max-w-3xl mx-auto px-4">
      We pay our respects to the Traditional Owners of the land on which we work and live, and to their cultures;
      and to Elders past, present and emerging.
    </p>
  </motion.div>
)