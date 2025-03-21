"use client"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { holding_hands_banner, logo, verified, young_doctor } from "@/assets"
import { InvertedBorder } from "../shared/InvertedRadius"
import Typography from "../shared/Typography"

const ServicesSection = () => {
  // Services list with checkmarks
  const services = [
    { text: "Personal care and daily living" },
    { text: "Transport options" },
    { text: "24/7 support" },
    { text: "Social and community participation" },
    { text: "Finding and keeping a job" },
    { text: "Individual living options (ILO)" },
    { text: "Supporting independent living (SIL)" },
  ]

  return (
    <div className="w-full relative md:inset-y-20 flex flex-col">
      {/* Banner Section */}
      <section className="relative w-full bg-[#1a6b9f]/90 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={holding_hands_banner}
            alt="Caring hands"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-8 bg-white/70 mr-3"></div>
            <p className="text-sm font-medium tracking-widest uppercase">Our Services</p>
            <div className="h-[1px] w-8 bg-white/70 ml-3"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl">We Care For You And Your Loved Ones</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="rounded-xl overflow-hidden border-none shadow-lg">
            <CardContent className="p-0">
              <div className="flex flex-col p-8 md:gap-16 md:py-11 md:px-10 lg:flex-row border-0 border-indigo-800 ">
                {/* Left Side - Our Approach */}
                <div className="w-full lg:w-1/2 bg-white">
                  <Typography variant="span">Our Approach</Typography>
                  <Typography variant="h1" className={"py-4"}
                    h1Parts={[
                      { text: "welcome", color: "color1" },
                      { text: "communities", color: "color2" },
                    ]} />

                  <div className="space-y-4 text-gray-600">
                    <p>
                      We offer a Person Centred Approach, where we individualize services to suit you, as we work
                      together to focus on your interests, personal goals and understanding your unique ability through
                      gender, age, culture, language, faith, sexual identity and relationship status.
                    </p>
                    <p>
                      Tunza Care celebrate our differences and work with you to create services that are tailored to
                      suit individual strength, needs and preferences.
                    </p>
                  </div>
                </div>

                {/* Right Side - Services List */}
                <div className="w-full lg:w-1/2 bg-[#f8f9fa] md:px-8 md:py-4 relative rounded-lg outline-0 outline-lime-400">
                <InvertedBorder
                  right='0'
                  top='0'
                  padding='4'
                  rotation='-rotate-0'
                  innerColor={"bg-transparent"}
                  imgSrc={logo}
                  imgAlt='Star Icon'
                  imgSize='64px'
                  objectFit="cover"
                  imgHeight="h-16"
                  imgWidth="w-24"
                  imgHolderRounded="rounded-none"
                  hideSpanBg={true}
                  innerBorderRadius='rounded-bl-xl'
                  beforeRotation='rotate-[0deg]'
                  afterRotation='rotate-[0deg]'
                  beforeBottom='-bottom-6'
                  beforeRight='-right-3'
                  afterTop='-top-2'
                  afterLeft='-left-6'
                  spanBgColor='bg-[#2DBA98]'
                />
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a6b9f] mb-8 mt-4">OUR SERVICES ARE</h3>

                  <ul className="space-y-4">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1 text-green-500 bg-green-100 rounded-full p-0.5">
                          <Check className="h-4 w-4" />
                        </span>
                        <span className="text-gray-700 font-medium">{service.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default ServicesSection

