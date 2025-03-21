import { motion } from 'framer-motion';

export const GradientButton = ({ children, className = "" }) => (
    <motion.button
      className={`${className} `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 text-xl text-white ">{children}</span>
      <div className="absolute inset-0 backdrop-blur-md bg-transparent rounded-full  " />
      <div className="absolute inset-0 bg-[#64cdf6]/60  opacity-80 group-hover:opacity-100 transition-opacity duration-300 rounded-full " />
    </motion.button>
  );