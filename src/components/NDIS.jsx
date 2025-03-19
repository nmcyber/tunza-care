import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Badge } from "./ui/badge"

const InvertedBorder = ({ top,
  right,
  left,
  bottom,
  beforeTop,
  beforeRight,
  beforeBottom,
  beforeLeft,
  beforeRotation,
  afterTop,
  afterRight,
  afterBottom,
  afterLeft,
  afterRotation,
  innerBorderRadius,
  imgSrc,
  imgSize = '48px',
  imgAlt,
  spanBgColor,
  children,}) => {
  let mainDivPositionClasses = 'absolute';

  if (top !== undefined && left !== undefined) {
    mainDivPositionClasses += ` top-${top} left-${left}`;
  } else if (top !== undefined && right !== undefined) {
    mainDivPositionClasses += ` top-${top} right-${right}`;
  } else if (bottom !== undefined && left !== undefined) {
    mainDivPositionClasses += ` bottom-${bottom} left-${left}`;
  } else if (bottom !== undefined && right !== undefined) {
    mainDivPositionClasses += ` bottom-${bottom} right-${right}`;
  } else if (top !== undefined) {
    mainDivPositionClasses += ` top-${top} left-0`;
  } else if (bottom !== undefined) {
    mainDivPositionClasses += ` bottom-${bottom} left-0`;
  } else if (left !== undefined) {
    mainDivPositionClasses += ` top-0 left-${left}`;
  } else if (right !== undefined) {
    mainDivPositionClasses += ` top-0 right-${right}`;
  } else {
    mainDivPositionClasses += ' top-0 left-0'; // Default position
  }

  const mainDivClasses = `${mainDivPositionClasses} z-20 p-3 ${innerBorderRadius} bg-white after:w-8 after:h-8 after:bg-radial-[at_100%_100%] after:from-white after:to-white after:aspect-square after:bg-white-500  after:absolute after:rotate-6 after:shadow-[-0.5rem_0_0_white] after:z-20 before:absolute before:w-9 before:h-9 before:bg-radial-[at_0%_0%] before:from-white before:to-white before:aspect-square before:bg-blue before:-rotate-6 before:z-20 before:shadow-[-0.5rem_0_0_white]`;

  let beforePositionClasses = 'absolute';
  if (beforeTop !== undefined && beforeLeft !== undefined) {
    beforePositionClasses += ` ${beforeTop} ${beforeLeft}`;
  } else if (beforeTop !== undefined && beforeRight !== undefined) {
    beforePositionClasses += ` ${beforeTop} ${beforeRight}`;
  } else if (beforeBottom !== undefined && beforeLeft !== undefined) {
    beforePositionClasses += ` ${beforeBottom} ${beforeLeft}`;
  } else if (beforeBottom !== undefined && beforeRight !== undefined) {
    beforePositionClasses += ` ${beforeBottom} ${beforeRight}`;
  } else if (beforeTop !== undefined) {
    beforePositionClasses += ` ${beforeTop} left-0`;
  } else if (beforeBottom !== undefined) {
    beforePositionClasses += ` ${beforeBottom} left-0`;
  } else if (beforeLeft !== undefined) {
    beforePositionClasses += ` top-0 ${beforeLeft}`;
  } else if (beforeRight !== undefined) {
    beforePositionClasses += ` top-0 ${beforeRight}`;
  } else {
    beforePositionClasses += ' top-0 left-0'; // Default position
  }

  let afterPositionClasses = 'absolute';
  if (afterTop !== undefined && afterLeft !== undefined) {
    afterPositionClasses += ` ${afterTop} ${afterLeft}`;
  } else if (afterTop !== undefined && afterRight !== undefined) {
    afterPositionClasses += ` ${afterTop} ${afterRight}`;
  } else if (afterBottom !== undefined && afterLeft !== undefined) {
    afterPositionClasses += ` ${afterBottom} ${afterLeft}`;
  } else if (afterBottom !== undefined && afterRight !== undefined) {
    afterPositionClasses += ` ${afterBottom} ${afterRight}`;
  } else if (afterTop !== undefined) {
    afterPositionClasses += ` ${afterTop} left-0`;
  } else if (afterBottom !== undefined) {
    afterPositionClasses += ` ${afterBottom} left-0`;
  } else if (afterLeft !== undefined) {
    afterPositionClasses += ` top-0 ${afterLeft}`;
  } else if (afterRight !== undefined) {
    afterPositionClasses += ` top-0 ${afterRight}`;
  } else {
    afterPositionClasses += ' -top-3 -right-6'; // Default after position
  }

  return (
    <div id="iB" className={mainDivClasses}>
    <div className="bg-[hsl(199,36%,91%)] rounded-full p-3">
      <div className="flex items-center justify-center">
        <span className={`flex mx-auto aspect-square rounded-full p-3 text-white bg-[${spanBgColor}] transition-colors`}>
          {imgSrc && (
            <img
              src={imgSrc}
              alt={imgAlt}
              className="object-contain h-3 w-3"
              style={{ objectFit: 'contain', width: imgSize }}
            />
          )}
        </span>
      </div>
    </div>
    <div className={`${beforePositionClasses} w-9 h-9 bg-radial-[at_0%_0%] outline-0 outline-lime-500 from-white to-white aspect-square bg-blue ${beforeRotation} z-20 shadow-[-0.5rem_0_0_white] bg-[radial-gradient(circle_at_100%_100%,transparent_1.4rem,white,white_calc(1.4rem_+_1px))]`} />
    <div className={`${afterPositionClasses} w-8 h-8 bg-radial-[at_100%_100%] from-white to-white aspect-square bg-white-500 ${afterRotation} outline-0 outline-lime-500 bg-[radial-gradient(circle_at_100%_100%,transparent_1.4rem,white,white_calc(1.4rem_+_2px))] shadow-[-0.5rem_0_0_white] z-20`} />
    {children}
  </div>
  );
};

export default function NDIS({ title, highlightedTitle, services, image, badgeImage, className }) {


  return (
    <section className=" relative z-10 flex flex-col outline-0 outline-pink-700 w-[90svw] max-w-[90svw] mx-auto py-12 bg-background overflow-hiddenn bbg-[url(/left_.svg)] bg-no-repeat after:bg-no-repeat after:bg-right-top after:object-contain after:absolute after:aspect-square after:h-full after:border-0 after:border-red-500 after:top-0 after:-right-[2.15%] after:z-0 ">

        {/* Main Content Card */}
        <div className=" flex rounded-lg py-11 px-11 overflow-hidden bg-white relative z-10 border-none outline-none ">
        {/* Controls where the overflow is at for the inverted border radius */}
        <Card className="rounded-lg bg-none overflow-hiddenn border-0 border-lime-500 outline-none shadow-none">
          <CardContent className="p-0 bg-none ">
          {/* defines the white background color that will appear in the gap between the two seperate columns */}
            <div id="house-info" className=" relative bbbbg-background flex flex-col space-y-10 md:space-y-0 md:flex-row md:gap-8 ">
                          {/* LEFT Side - Content */}
            {/* ============================================= */}
          <div className="w-full md:w-1/2 p-6 bg-background md:p-10 relative rounded-lg border-0 border-lime-500">
              <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            {title} {highlightedTitle && <span className="text-primary">{highlightedTitle}</span>}
          </h2>

          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-1 text-green-500">
                  <Check className="h-4 w-4" />
                </span>
                <span>{service.text}</span>
              </li>
            ))}
          </ul>
        </div>
              </div>
              {/* ============================================= */}
              {/* Right Side - Image with Play Button and inverted border radius */}
              <div id="house-image" className="relative z-0 w-full md:w-1/2 outline-none border-0 border-fuchsia-500">
                <img
                  src="/about-tunza-care.webp"
                  alt="Caregiver and client smiling together"
                  className="w-full h-full object-cover rounded-lg"
                />               

                  {/* INVERTED BORDER COMPONENT - TOP RIGHT */}
                {/* <div id="play" className="absolute z-20 p-0 after:w-5 after:bg-radial-[at_100%_100%] after:from-white after:to-white after:aspect-square after:bg-lime-500 after:rounded-full after:absolute after:top-0 after:-left-4 bg-white  top-0 right-0 border-2 border-fuchsia-500 ">
                <div className=" bg-[hsl(199,36%,91%)] rounded-full p-3 ">
                <div className=" flex items-center justify-center ">
                  <button className=" flex mx-auto aspect-square rounded-full p-3 text-white hover:bg-blue-600 transition-colors">
                    <img src="/logos/verified.svg" alt="Play Button" className="object-contain h-3 w-3" style={{ objectFit: 'contain', width: "43px" }} />
                  </button>
                </div>
                </div>
                  </div> */}

                  {/* Custom top-left style */}
                {/* <InvertedBorder top="-5%" left="-10%" right="auto" bottom="auto" cornerColor="#146690">                   
                </InvertedBorder> */}

                {/* Example 1: Top-right position with custom image and background */}
                <InvertedBorder
                    right="0"
                    top="0"
                    imgSrc="/logos/verified.svg"
                    imgAlt="Star Icon"
                    imgSize="48px"
                    innerBorderRadius='rounded-lg'
                    beforeRotation="-rotate-[2deg]"
                    afterRotation="rotate-[180deg]"
                    beforeBottom="-bottom-3"
                    beforeRight="right-4"
                    afterTop='-top-0'
                    afterLeft='-left-0'
                    spanBgColor="#146690"
                  >
                  </InvertedBorder>
{/* 
                  <div id="play" className="absolute z-20 p-0 bg-white top-0 right-2 border-0 rotate border-lime-500 ">
                <div className=" bg-[hsl(199,36%,91%)] rounded-full p-3 ">
                <div className=" flex items-center justify-center ">
                <button className=" flex mx-auto aspect-square rounded-full p-3 text-white hover:bg-blue-600 transition-colors">
                    <img src="/play.svg" alt="Play Button" className="object-cover h-4 w-4" />
                </button>
                </div>
                </div>
                </div> */}

                  {/* INVERTED BORDER COMPONENT */}
                <div id="house-pricee" className=" absolute z-20 p-4 -bottom-6 -left-[32%] bg-white rounded-xl outline-0 outline-red-400 ">
                <div className="grid grid-cols-1 text-white gap-0   space-y-0 items-center border-0 border-lime-400">
                  {/* <span className="text-xl font-bold ">150+</span>
                  <span className="text-xs ">Lorem ipsum dum</span> */}
                  <img src="/logos/NDIS_logo.png" alt="" style={{ objectFit: "contain", height: "120px"}} className=" object-cover"/>
                </div>
                </div>
                {/* <Badge id="badge" className="absolute bottom-4 left-4 bg-orange-500 text-white before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:top-full before:left-0 before:rounded-tl-full"
                >
                  66
                </Badge> */}

              </div>

            </div>
          </CardContent>
        </Card>
        </div>
      {/* <div className=" absolute w-full h-full border-2 border-red-500 top-0 right-0 bg-[url(/left_.svg)] bg-no-repeat object-contain z-20 " /> */}
    </section>
  )
}

