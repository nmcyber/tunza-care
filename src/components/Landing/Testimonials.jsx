import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import Typography from "../shared/Typography"
import { Marquee } from "../magicui/marquee"
import { quotes } from "@/assets"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "James Ryan",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "The care provided by Tunza has been exceptional. Their staff is professional, compassionate, and truly dedicated to improving quality of life.",
    rating: 5,
    date: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    avatar: "https://randomuser.me/api/portraits/women/41.jpg",
    content:
      "I couldn't be happier with the support my father receives. The caregivers are attentive and have become like family to us.",
    rating: 5,
    date: "Feb 3, 2024",
  },
  {
    id: 3,
    name: "Emily Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "From day one, Tunza Care has exceeded our expectations. Their personalized approach makes all the difference in my mother's care.",
    rating: 5,
    date: "Dec 12, 2023",
  },
  {
    id: 4,
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    content:
      "The transportation services have been a game-changer for my independence. I can now attend community events and appointments with ease.",
    rating: 5,
    date: "Mar 5, 2024",
  },
  {
    id: 5,
    name: "Olivia Wilson",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    content:
      "The social activities organized by Tunza have helped me make new friends and feel connected to my community again. Truly life-changing.",
    rating: 5,
    date: "Jan 28, 2024",
  },
  {
    id: 6,
    name: "David Martinez",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    content:
      "Thanks to Tunza's employment support, I've found a job that accommodates my needs and makes me feel valued. Their guidance was invaluable.",
    rating: 5,
    date: "Feb 17, 2024",
  },
  {
    id: 7,
    name: "Sophia Lee",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    content:
      "The 24/7 support gives our family peace of mind knowing help is always available. The staff responds quickly and professionally.",
    rating: 5,
    date: "Mar 1, 2024",
  },
  {
    id: 8,
    name: "Robert Taylor",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    content:
      "Moving to independent living was a big step, but Tunza made the transition smooth. Their ongoing support has been crucial to my success.",
    rating: 5,
    date: "Dec 5, 2023",
  },
  {
    id: 9,
    name: "Grace Williams",
    avatar: "https://randomuser.me/api/portraits/women/81.jpg",
    content:
      "The personal care services are delivered with dignity and respect. I appreciate how the caregivers take time to understand my preferences.",
    rating: 5,
    date: "Feb 22, 2024",
  },
]

// Split testimonials for marquee rows
const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2))
const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2))

const TestimonialCard = ({ testimonial, featured = false, delay = 0 }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card
        className={cn("p-6 flex flex-col h-full relative overflow-hidden", featured && "border-[#1a6b9f]/30 shadow-md")}
      >
        {/* Quote icon */}
        <div className="absolute -right-2 -top-2 opacity-5">
          <Quote className="w-20 h-20" />
        </div>

        <div className="flex items-center gap-3 mb-3">
          <img
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
          />
          <div>
            <h3 className="font-medium">{testimonial.name}</h3>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn("w-4 h-4", i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300")}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground flex-grow">{testimonial.content}</p>
        <div className="text-right text-sm text-muted-foreground mt-4">{testimonial.date}</div>
      </Card>
    </motion.div>
  )
}

const MarqueeTestimonialCard = ({ img, name, content, rating, date }) => {
  return (
    <Card
      className={cn("p-6 flex flex-col h-full relative overflow-hidden",
        // You might want to remove or adjust these specific styles for the marquee
        // "border-[#1a6b9f]/30 shadow-md",
        "w-80 mx-2" // Keep the width for marquee layout
      )}
    >
      {/* Quote icon */}
      <div className="absolute -right-2 -top-2 opacity-5">
        <img src={quotes} alt="double qoutes" className="w-20 h-20  " />
      </div>

      <div className="flex items-center gap-3 mb-3">
        <img
          src={img || "/placeholder.svg"}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
        />
        <div>
          <h3 className="font-medium">{name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn("w-4 h-4", i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300")}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground flex-grow line-clamp-3">{content}</p>
      <div className="text-right text-sm text-muted-foreground mt-4">{date}</div>
    </Card>
  );
};

export const TestimonialsSection = ({ className }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 6
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage,
  )

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

  return (
    <section ref={sectionRef} className={cn("relative py-16 px-4 overflow-hidden", className)}>
      {/* Background decorations */}
      <motion.div
        className="absolute -right-20 top-0 w-96 h-96 rounded-full border-[40px] border-sky-50/50 -z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <motion.div
        className="absolute -left-20 bottom-0 w-64 h-64 rounded-full border-[30px] border-teal-50/40 -z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Typography variant="subtitle">Testimonials</Typography>
          <Typography
            variant="h1"
            className={"py-4"}
            h1Parts={[
              { text: "What Our ", color: "color1" },
              { text: "Clients Say", color: "color2" },
            ]}
          />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Hear from the people who have experienced our care and services firsthand. Their stories inspire us to
            continue providing exceptional support.
          </p>
        </motion.div>

        {/* Marquee section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s] py-4">
              {firstRow.map((testimonial) => (
                <MarqueeTestimonialCard
                  key={`marquee-1-${testimonial.id}`}
                  img={testimonial.avatar}
                  name={testimonial.name}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  date={testimonial.date}
                />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:25s] py-4">
              {secondRow.map((testimonial) => (
                <MarqueeTestimonialCard
                  key={`marquee-2-${testimonial.id}`}
                  img={testimonial.avatar}
                  name={testimonial.name}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  date={testimonial.date}
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </motion.div>

        {/* Featured testimonials */}
        <motion.div
          className="mb-12 hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Featured Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <AnimatePresence mode="wait">
              {currentTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${currentPage}-${testimonial.id}`}
                  testimonial={testimonial}
                  featured={index === 0}
                  delay={index * 0.1}
                />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className=" hidden justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-gray-100 hover:bg-gray-200 border-none"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>

          {/* Page indicators */}
          <div className="flex items-center gap-1 mx-2">
            {[...Array(totalPages)].map((_, i) => (
              <motion.div
                key={i}
                className={cn("w-2 h-2 rounded-full", currentPage === i ? "bg-[#1a6b9f]" : "bg-gray-300")}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentPage(i)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>

          <Button
            variant="default"
            size="icon"
            className="rounded-full bg-primary hover:bg-primary/90"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

