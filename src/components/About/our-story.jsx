import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const timelineEvents = [
    {
      year: "2020",
      // title: "Our Beginning",
      description:
        "The vision for Tunza Care Services took shape, a commitment to person-centered care, and a desire to raise the standard of disability support across WA.",
    },
    {
      year: "2021",
      // title: "NDIS Registration",
      description:
        `Despite ongoing restriction and the complexities brought by COVID-19, we officially launched Tunza Care Services. Starting a new organization in the middle of the global health crisis was not easy, from workforce shortages to navigating changing safety protocols - but our commitment to participants never wavered.`,
    },
    {
      year: "2022",
      // title: "Service Expansion",
      description:
        `We became a registered NDIS provider. Achieving this milestone during a time of recovery and rebuilding was a proud moment for our team, marking our readiness to deliver safe, high-quality, and compliant services.`,
    },
    {
      year: "2023",
      // title: "Growing Our Team",
      description:
        `We expanded into remote and regional areas, where the effects of isolation and service gaps were still deeply felt post-pandemic. We worked closely with local communities to ensure that people with disabilities in these areas had consistent access to the support they deserved.`,
    },
    {
      year: "2024",
      // title: "Today",
      description:
        `Our focus turned toward growth and long-term impact, and we laid the groundwork to expand interstate- particularly into the Northern Territory, where we saw a pressing need for community-led disability support`,
    },
    {
      year: "Present",
      // title: "Today",
      description:
        `Our focus turned toward growth and long-term impact, and we laid the groundwork to expand interstate- particularly into the Northern Territory, where we saw a pressing need for community-led disability support`,
    },
  ];

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Our <span className='text-primary'>Story</span>
            </h2>
            <p className='text-gray-600 mb-8'>
              Founded by a family with lived experience and a heartfelt
              understanding of the challenges faced on the people with
              disability&#44; Tunza Care Services was established with a core
              belief that everyone deserves to live with dignity&#44;
              choice&#44; and independence. We know that every person&apos;s
              story is unique&#44; and we are committed to walking alongside our
              participants with empathy&#44; respect&#44; and unwavering
              support.
              <br />
              Our approach is firmly grounded in person-centered care. We take
              the time to listen&#44; to understand&#44; and to tailor our
              support to meet the individual goals and aspirations of each
              participant. From the beginning&#44; we&apos;ve strived to build a
              team that shares our values &mdash; passionate professionals who
              lead with compassion&#44; integrity&#44; and respect.
              <br />
              As we&apos;ve grown&#44; our mission has remained unchanged: to
              empower people with disability to lead full&#44; meaningful lives
              within their communities. Whether it&apos;s provided daily
              support&#44; helping people build skills and confidence&#44; or
              simply being there through life&apos;s ups and downs&#44; we are
              honored to be part of each person&apos;s journey.
              <br />
              At Tunza Care Services&#44; we&apos;re more than a service
              provider &mdash; we&apos;re a family&#44; and we treat every
              participant as a part of that family.
            </p>

            <div className='relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-md'>
              <img
                src='/placeholder.svg?height=400&width=600'
                alt='Tunza Care Services journey'
                style={{ objectFit: "cover" }}
                className='object-cover'
              />
            </div>
          </motion.div>

          <div ref={ref}>
            <div className='relative pl-0 border-l-2 border-primary/30'>
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className='mb-12 last:mb-0 relative'
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <div className='absolute -left-[41px] top-0 w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center border-4 border-primary/20'>
                    <span className='text-primary font-bold'>{event.year}</span>
                  </div>
                  <div className='pt-2 pl-8'>
                    <h3 className='text-xl font-semibold mb-2'>
                      {event.title}
                    </h3>
                    <p className='text-gray-600'>{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
