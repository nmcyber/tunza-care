import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import Typography from '@/components/shared/Typography';

function ServiceCard({ iconSrc, altText, title, description, iconBgColor, whileHoverIconBgColor = '#FDBA09' }) {
  return (
    <motion.div
      className='overflow-hidden rounded-xl h-full'
      style={{ border: 'none', outline: 'none' }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 30px 25px rgba(19, 102, 142, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <Card className="py-7 px-6 flex flex-col h-full items-start hover:cursor-pointer relative group hover:bg-[url('/bg/card_bg.svg')] hover:bg-no-repeat hover:bg-cover shadow-md border-none outline-none overflow-hidden">
        <img
          src={iconSrc}
          alt={altText}
          className="w-[72px] h-[72px] rounded-md p-4"
          style={{ backgroundColor: iconBgColor }}
          as={motion.img}
          whilehover={{ backgroundColor: whileHoverIconBgColor }}
          transition={{ duration: 0.2 }}
        />
        <Typography variant='h2' className="mt-4 mb-2 text-foreground group-hover:text-white transition-colors duration-200">{title}</Typography>
        {description && (
            <div className="flex-grow"> {/* Added flex-grow to push description to the top if needed */}
            <Typography variant='span' className="text-muted-foreground group-hover:text-white transition-colors duration-200">
              {description}
            </Typography>
          </div>
        )}
      </Card>
    </motion.div>
  );
}

export default ServiceCard;