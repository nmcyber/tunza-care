// import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Typography from "../../shared/Typography";
import { handshake, target, wheelchair } from "@/assets";
import ServiceCard from "./ServiceCard";

const cardData = [
  {
    iconSrc: target,
    altText: "Target icon",
    title: "Our Vision",
    iconBgColor: '#FDBA091F',
    description:
      "To empower individuals with disabilities to live fulfilling lives through exceptional home care services across Australia.",
  },
  {
    iconSrc: handshake,
    altText: "Handshake icon",
    title: "Our Core Values",
    iconBgColor: '#DDE9EF',
    description: (
      <ul className='space-y-1 mt-2 text-muted-foreground group-hover:text-white transition-colors duration-200'>
        <li>Respect</li>
        <li>Compassion</li>
        <li>Integrity</li>
        <li>Individuality</li>
      </ul>
    ),
  },
  {
    iconSrc: wheelchair,
    altText: "Wheelchair icon",
    title: "Our Mission",
    iconBgColor: '#E0F5F0',
    description:
      "To deliver quality person-centered care, empowering individuals with disabilities to live with choice, independence, and community inclusion.",
  },
];

export const OurPrinciplesSection = ({ className }) => {
  return (
    <section className={cn("relative py-16 px-4 overflow-hidden", className)}>
      {/* Background decoration */}
      <div className='absolute -left-20 top-0 w-96 h-96 rounded-full border-[40px] border-sky-50/50 -z-10'></div>

      <div className='container mx-auto px-4 md:px-16 6xl:px-8'>
        {/* Section header */}
        <div className='text-center '>
          <>
            <Typography variant='subtitle'>our foundation</Typography>
            <Typography
              variant='h1'
              className={"pt-4 pb-16"}
              h1Parts={[
                { text: "core", color: "color1" },
                { text: "principles", color: "color2" },
              ]}
            />
          </>
        </div>

        {/* Cards grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {cardData.map((card, index) => (
            <ServiceCard
              key={index}
              iconSrc={card.iconSrc}
              iconBgColor={card.iconBgColor}
              altText={card.altText}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
