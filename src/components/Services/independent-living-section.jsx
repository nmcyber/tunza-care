import { indepedent_living, living_room } from '@/assets'
import { Card, CardContent } from "@/components/ui/card"
import { InvertedBorder } from "../shared/InvertedRadius"
import Typography from "../shared/Typography"
import { Check } from "lucide-react"

const IndependentLivingSection = () => {
  // Services list with checkmarks
  const services = [
    { text: "Medication management" },
    { text: "Cleaning and maintaining your home" },
    { text: "Transport you to run errands" },
    { text: "Connecting with the community" },
    { text: "Exercise and health eating" },
  ]

  return (
    <section className="w-full relative md:inset-y-20 flex flex-col">
    {/* Content Section */}
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <Card className="rounded-xl overflow-hidden border-none shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col p-8 md:gap-16 md:py-11 md:max-h-[90dvh] 2xl:max-h-[60dvh] md:px-9 lg:flex-row border-0 border-indigo-800 ">
            <div className=' grid md:flex gap-8 rounded-lg bg-[#f8f9fa]'>
              {/* Left Side - Our Approach */}
              <div className=" grid justify-items-start items-start w-full lg:w-1/2 md:px-8 md:py-4 bg-[#f8f9fa] rounded-lg ">
                {/* <Typography variant="subtitle" className=" text-left">Our Approach</Typography> */}
                <Typography variant="h1" className="py-0 "
                  h1Parts={[
                    { text: "Individual Living", color: "color1" },
                    { text: "Option (ILO)....", color: "color2" },
                  ]} />

                <div className="space-y-4 text-gray-600">
                <Typography variant="p" className="text-gray-600">
                We all need a place to call home, where you can relax and unwind. Where you can make choices and take
                full control of your independence or a place that feel part of a family with shared living or host
                arrangement. Tunza Care will help you have that choice and control of who to live with, where to live
                and how you want to live. The support team will help you to:
              </Typography>
                </div>
                <>
                  {/* Services list with checkmarks */}
              <ul className="space-y-2 mt-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{service.text}</span>
                  </li>
                ))}
              </ul>
                </>
              </div>

              {/* Right Side - Services List */}
              <div id='house-image'
                className='relative z-0 w-full md:w-1/2 '>
                <div className=' w-full scale-110 rounded-bl-xl h-full absolute inset-0 z-10 bg-white outline-8 outline-fuchsia-500' />

                <div className=' absolute -top-2 -left-14 w-8 aspect-sqaure bg-radial-[at_100%_100%] border-0 border-yellow-500 from-white to-white aspect-square bg-transparent z-30 shadow-[-0.5rem_0_0_1]' style={{
              backgroundImage: 'radial-gradient(circle at 0% 100%, transparent 1.4rem, white, white calc(1.4rem + 1px))' }}   />
              <img
                  src={indepedent_living}
                  alt='Independent Living Option'
                  className=' relative z-20 w-full rounded-lg bg-contain'
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              <InvertedBorder
                bottom='0'
                left='0'
                padding='3'
                rotation='-rotate-180'
                innerColor={"bg-[#E1ECF1]"}
                imgSrc={living_room}
                imgAlt='Living Room Chair Icon'
                imgSize='36px'
                imageRotation="-rotate-180"
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
            
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </section>
  )
}

export default IndependentLivingSection

          {/* Supported Independent Living section */}
          // <div className="p-8 md:p-12 border-t border-gray-200">
          //   <h2 className="text-3xl font-bold mb-6">
          //     Supported Independent <span className="text-[#1a6b9f]">Living (SIL)....</span>
          //   </h2>

          //   <p className="text-gray-600 max-w-4xl">
          //     We all need a place to call home, where you can relax and unwind. Where you can make choices and take full
          //     control of your independence or a place that feel part of a family with shared living or host arrangement.
          //     Tunza Care will help you have that choice and control of who to live with, where to live and how you want
          //     to live. The support team will help you to:
          //   </p>
          // </div>