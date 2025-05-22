import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
// import Typography from "../shared/Typography";

export const ServicesSection = ({
  title,
  highlightedTitle,
  services,
  image,
  badgeImage,
  className,
}) => {
  return (
    <Card className={cn("bg-white p-6 shadow-sm rounded-xl", className)}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='space-y-6'>
          <>
            {/* <Typography variant="subtitle">
                  Testimonials
                </Typography>
                <Typography
                  variant="h1"
                  h1Parts={[
                    { text: {title}, color: 'color1' },
                    { text: {highlightedTitle}, color: 'color2' },
                  ]}
                /> */}
          </>
          <h2 className='text-3xl font-bold'>
            {title}{" "}
            {highlightedTitle && (
              <span className='text-primary'>{highlightedTitle}</span>
            )}
          </h2>

          <ul className='space-y-2'>
            {services.map((service, index) => (
              <li key={index} className='flex items-start gap-2'>
                <span className='flex-shrink-0 mt-1 text-green-500'>
                  <Check className='h-4 w-4' />
                </span>
                <span>{service.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Left Side - Image with Play Button and inverted border radius */}
        <div
          id='house-image'
          className='relative z-0 w-full md:w-5/12 outline-none border-0 border-fuchsia-500'
        >
          <img
            src='/about-tunza-care.webp'
            alt='Caregiver and client smiling together'
            title='Caregiver and client smiling together'
            className='w-full h-full object-cover rounded-lg'
          />

          {/* INVERTED BORDER COMPONENT - TOP RIGHT */}
          <div
            id='play'
            className='absolute z-20 p-0 bg-white top-0 right-0 border-0 border-lime-500 '
          >
            <div className=' bg-[hsl(199,36%,91%)] rounded-full p-3 '>
              <div className=' flex items-center justify-center '>
                <button className=' flex mx-auto aspect-square rounded-full p-3 text-white hover:bg-blue-600 transition-colors'>
                  {/* <Play className="h-6 w-6" /> */}
                  <img
                    src='/play.svg'
                    alt='Play Button'
                    title='Play Button'
                    className='object-cover h-4 w-4'
                  />
                </button>
              </div>
            </div>
          </div>

          {/* INVERTED BORDER COMPONENT */}
          <div
            id='house-price'
            className=' absolute z-20 p-4 -bottom-6 -left-7 outline-0 outline-red-400 '
          >
            <div className='grid grid-cols-1 text-white gap-0 space-y-0 items-center border-0 border-lime-400'>
              <span className='text-xl font-bold '>150+</span>
              <span className='text-xs '>Lorem ipsum dum</span>
            </div>
          </div>
          {/* <Badge id="badge" className="absolute bottom-4 left-4 bg-orange-500 text-white before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:top-full before:left-0 before:rounded-tl-full"
            >
            66
            </Badge> */}
        </div>

        {/* <div className="relative">
          <img
            src={image || "/placeholder.svg"}
            alt="Service illustration"
            className="w-full h-auto rounded-lg object-cover"
          />

          {badgeImage && (
            <div className="absolute bottom-4 right-4">
              <img src={badgeImage || "/placeholder.svg"} alt="Certification badge" className="w-24 h-24" />
            </div>
          )}
        </div> */}
      </div>
    </Card>
  );
};
