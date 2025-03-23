import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const OurStory = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const timelineEvents = [
    {
      year: "2018",
      title: "Our Beginning",
      description:
        "Tunza Care Services was founded with a vision to provide exceptional care services to individuals with disabilities across Western Australia.",
    },
    {
      year: "2019",
      title: "NDIS Registration",
      description:
        "We became a registered NDIS provider, expanding our ability to support participants with a range of services tailored to their needs.",
    },
    {
      year: "2020",
      title: "Service Expansion",
      description:
        "Despite the challenges of the pandemic, we expanded our services to include more comprehensive in-home care and community participation programs.",
    },
    {
      year: "2022",
      title: "Growing Our Team",
      description:
        "We welcomed more qualified staff to our team, enhancing our capacity to provide specialized care across multiple regions.",
    },
    {
      year: "2023",
      title: "Today",
      description:
        "We continue to grow and evolve, always focused on our mission to empower individuals to live fulfilling lives with dignity and independence.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Tunza Care Services is a Western Australian family-owned company that was born from a passion to make a
              difference in the lives of individuals with disabilities. Our journey has been guided by a commitment to
              person-centered care and a deep respect for the dignity and independence of those we serve.
            </p>

            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-md">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Tunza Care Services journey"
                style={{ objectFit: "cover" }}
                className="object-cover"
              />
            </div>
          </motion.div>

          <div ref={ref}>
            <div className="relative pl-8 border-l-2 border-primary/30">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="mb-12 last:mb-0 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <div className="absolute -left-[41px] top-0 w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center border-4 border-primary/20">
                    <span className="text-primary font-bold">{event.year}</span>
                  </div>
                  <div className="pt-2 pl-8">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory

