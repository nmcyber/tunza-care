"use client"
import { motion } from "framer-motion"

export const TeardropShape = ({ className = "", width = 200, height = 200, color = "#2DBA98", animate = true }) => {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* Shadow effect */}
      <div className="absolute inset-0 rounded-tl-full rounded-tr-full rounded-bl-none rounded-br-full blur-md bg-gray-300/50 translate-y-1"></div>

      {/* White border */}
      <div className="absolute inset-0 rounded-tl-full rounded-tr-full rounded-bl-none rounded-br-full bg-white"></div>

      {/* Colored shape */}
      <motion.div
        className="absolute inset-[3px] rounded-tl-full rounded-tr-full rounded-bl-none rounded-br-full"
        style={{ backgroundColor: color }}
        initial={animate ? { scale: 0.9 } : {}}
        animate={animate ? { scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>
    </div>
  )
}

// Example usage:
// <TeardropShape width={200} height={200} color="#2DBA98" />

