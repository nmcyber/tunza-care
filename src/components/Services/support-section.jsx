import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { charity_icon, support } from "@/assets"
import { InvertedBorder } from "../shared/InvertedRadius"
import Typography from "../shared/Typography"

const SupportSection = () => {
  return (
    <section className="w-full relative md:inset-y-20 flex flex-col ">
    {/* Content Section */}
    <section className=" py-12 px-4 sm:px-6 lg:px-8 ">
      <div className=" md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <Card className="rounded-xl overflow-hidden border-none shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col p-8 md:gap-16 md:py-11 md:px-10 lg:flex-row-reverse border-0 border-indigo-600 ">

                {/* Left side - Content */}
              <div className=" grid justify-items-start items-start w-full lg:w-1/2 bg-none">
              <div className="space-y-6 order-1 md:order-2">
              <Typography variant="h2" className="text-3xl font-bold">
                24/7 <span className="text-[#1a6b9f]">Support....</span>
              </Typography>

              <Typography variant="p" className="text-gray-600">
                Depending on individual needs Tunza Care is able to provide 24/7 care to our clients to enable them to
                live a quality life, by supporting them through their daily activities of living as well as develop and
                improve their life skills in their homes.
              </Typography>

              {/* Circular icon */}
              <div className="relative w-12 h-12 mt-4">
                <div className="absolute inset-0 bg-[#1a6b9f] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
              </div>

              {/* Right side - Image */}

              <div
              id='house-image'
              className='relative z-0 w-full md:w-1/2 outline-none border-0 border-fuchsia-500'
            >
              <img
                src={support}
                alt='Caregiver and client smiling together'
                className='w-full rounded-lg'
                style={{
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
               <InvertedBorder
                top='0'
                right='0'
                padding='4'
                rotation='-rotate-0'
                innerColor={"bg-[#E1ECF1]"}
                imgSrc={charity_icon}
                imgAlt='Star Icon'
                imgSize='36px'
                afterTop='-top-2'
                afterLeft='-left-6'
                beforeRight='-right-3'
                beforeBottom='-bottom-6'
                spanBgColor='bg-primary'
                afterRotation='rotate-[0deg]'
                beforeRotation='rotate-[0deg]'
                innerBorderRadius='rounded-bl-xl'
              />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </section>
  )
}

export default SupportSection

