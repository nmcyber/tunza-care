import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Heart } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { doctor_avatar, dr_stethoscope } from "@/assets"

const AnimatedDoctorImage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Small delay before starting animation for better perceived performance
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  // Sparkle component for added flair
  const Sparkle = ({ delay, x, y, size = 8 }) => (
    <motion.div
      className="absolute z-20 rounded-full bg-white"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.8)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.2, 0],
      }}
      transition={{
        duration: 1.8,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 3,
      }}
    />
  )

  return (
    <div className="relative aspect-square ">
    <div className="relative z-0 aspect-square rounded-tl-lg ">
      {/* Right Angle Triangle */}
      <div className="absolute z-10 inset-0 aspect-square w-1/2 rounded-tl-md bg-lime-500" />
      <div className="absolute z-10 -top-0 -left-0 aspect-square w-[95%] bg-lime-500 rounded-full" />

      {/* Outer scaled white shape */}
      <div className="relative z-0 -inset-x-0 -inset-y-4 transform scale-[1.1]">
        {/* Right Angle Triangle */}
        <div className="absolute z-10 inset-0 aspect-square w-1/2 rounded-tl-lg bg-white" />
        <div className="absolute z-10 -top-0 -left-0 aspect-square w-[95%] bg-white rounded-full" />
      </div>

      <div className="absolute z-10 aspect-square w-[95%] overflow-hidden rounded-full">
        {/* Animated image container */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated image */}
          <motion.img
            id="image"
            src={dr_stethoscope}
            alt="doctor with stethoscope"
            style={{ objectFit: "cover", objectPosition: "center", width: "100%" }}
            className="absolute z-10 inset-0 w-full "
            initial={{ y: "100%", opacity: 0 }}
            animate={{
              y: isVisible ? 0 : "100%",
              opacity: isVisible ? 1 : 0,
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              duration: 1.2,
              delay: 0.2,
            }}
          />

          {/* Animated overlay gradient for extra flair */}
          <motion.div
            className="absolute inset-0 z-20 bg-gradient-to-t from-transparent to-pink-300/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          />

          {/* Sparkle effects */}
          {isVisible && (
            <>
              <Sparkle delay={1.2} x={20} y={30} size={6} />
              <Sparkle delay={1.5} x={70} y={25} size={8} />
              <Sparkle delay={1.8} x={40} y={60} size={5} />
              <Sparkle delay={2.1} x={80} y={70} size={7} />
              <Sparkle delay={2.4} x={30} y={85} size={6} />
            </>
          )}

          {/* Circular reveal effect */}
          <motion.div
            className="absolute inset-0 z-15 bg-pink-500"
            initial={{ scale: 1 }}
            animate={{ scale: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: "circOut",
            }}
            style={{ transformOrigin: "center center" }}
          />
        </motion.div>
      </div>
    </div>
     {/* Doctor info card */}
     <motion.div
          className="absolute bottom-10 -left-1/2 -translate-x-1/2 bg-white text-black rounded-md p-3 shadow-xl flex items-center gap-3 w-11/12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src={doctor_avatar} style={{ objectFit: "cover", objectPosition: "70%"}} alt="Dr. Charles Jones" />
            <AvatarFallback>CJ</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">Dr. Charles Jones</p>
            <div className="h-2 w-44 bg-gray-200 rounded-full mt-1"></div>
          </div>
          {/* Heart icon */}
        <div className="absolute -top-1/3 right-6 bg-[#FF9500] p-2 rounded-[8px] shadow-lg">
          <Heart className="h-6 w-6 text-white" />
        </div>
    </motion.div>
    </div>
  )
}

export default AnimatedDoctorImage

