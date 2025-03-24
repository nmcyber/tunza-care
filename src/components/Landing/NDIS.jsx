import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { InvertedBorder } from "../shared/InvertedRadius";
import Typography from "../shared/Typography";
import { verified, young_doctor } from "@/assets";

export default function NDIS({
  title,
  highlightedTitle,
  services,
  image,
  badgeImage,
  className,
}) {
  return (
    <section className=' relative z-10 flex flex-col outline-0 outline-pink-700 container mx-auto py-12 bg-background overflow-hiddenn bbg-[url(/left_.svg)] bg-no-repeat after:bg-no-repeat after:bg-right-top after:object-contain after:absolute after:aspect-square after:h-full after:border-0 after:border-red-500 after:top-0 after:-right-[2.15%] after:z-0 '>
      {/* Main Content Card */}
      <div className=' flex rounded-lg py-11 px-11 overflow-hidden bg-white relative z-10 border-none outline-none '>
        {/* Controls where the overflow is at for the inverted border radius */}
        <Card className='rounded-lg bg-none overflow-hiddenn border-0 border-lime-500 outline-none shadow-none'>
          <CardContent className='p-0 bg-none '>
            {/* defines the white background color that will appear in the gap between the two seperate columns */}
            <div
              id='house-info'
              className=' relative md:max-h-screen 2xl:max-h-[70dvh] flex flex-col space-y-10 md:space-y-0 md:flex-row md:gap-8 '
            >
              {/* ============================================= */}
              {/* LEFT Side - Content */}
              {/* ============================================= */}
              <div className='w-full md:w-1/2 p-6 bg-background md:p-10 relative rounded-lg border-0 border-lime-500'>
                <div className=' space-y-4 '>
                  <>
                    <Typography variant='subtitle'>What We Offer</Typography>
                    <Typography
                      variant='h1'
                      className={"pt-0 pb-2"}
                      h1Parts={[
                        { text: highlightedTitle, color: "color2" },
                        { text: title, color: "color1" },
                      ]}
                    />
                <Typography variant='p' className='text-lg p-0 m-0 max-w-xl'>We provide a wide range of NDIS-registered services tailored to meet your individual needs and goals:</Typography>
                  </>
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
              </div>
              {/* ============================================= */}
              {/* Right Side - Image with Play Button and inverted border radius */}
              <div
                id='house-image'
                className='relative z-0 w-full md:w-1/2 outline-none border-0 border-fuchsia-500'
              >
                <img
                  src={young_doctor}
                  alt='Caregiver and client smiling together'
                  className='w-full rounded-lg'
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
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

                {/* Icon 1: Top-right position with custom image and background */}
                <InvertedBorder
                  right='0'
                  top='0'
                  padding='4'
                  rotation='-rotate-0'
                  innerColor={"bg-[#2DBA9826]"}
                  imgSrc={verified}
                  imgAlt='Star Icon'
                  imgSize='36px'
                  innerBorderRadius='rounded-bl-xl'
                  beforeRotation='rotate-[0deg]'
                  afterRotation='rotate-[0deg]'
                  beforeBottom='-bottom-6'
                  beforeRight='-right-3'
                  afterTop='-top-2'
                  afterLeft='-left-6'
                  spanBgColor='bg-[#2DBA98]'
                />
                {/* Icon 2:  */}
                {/* <InvertedBorder
                    top="0"
                    left="0"
                    rotation="-rotate-90"
                    imageRotation="rotate-90"
                    smoothness='2'
                    imgSrc="/logos/verified.svg"
                    imgAlt="Star Icon"
                    imgSize="64px"
                    innerBorderRadius='rounded-bl-2xl'
                    beforeRotation="rotate-[0deg]"
                    afterRotation="rotate-[0deg]"
                    spanBgColor="6C2A77"
                    /> */}

                {/* <InvertedBorder
                    right="0"
                    bottom="0"
                    rotation="rotate-90"
                    innerColor={'bg-[hsl(199,36%,91%)]'}
                    imageRotation="-rotate-90"
                    smoothness='2'
                    imgSrc="/logos/verified.svg"
                    imgAlt="Star Icon"
                    imgSize="24px"
                    innerBorderRadius='rounded-bl-2xl'
                    spanBgColor="146690"
                    /> */}

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
                <div
                  id='house-pricee'
                  className=' absolute flex z-20 p-4 -bottom-6 -left-[32%] bg-white rounded-xl border-0 border-red-400 '
                >
                  <div className='grid grid-cols-1 text-white gap-0 z-30 space-y-0 items-center border-0 border-lime-400'>
                    <img
                      src='/logos/NDIS_logo.png'
                      alt=''
                      style={{ objectFit: "contain", height: "120px" }}
                      className=' object-cover'
                    />
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
  );
}
