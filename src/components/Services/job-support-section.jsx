import { Card, CardContent } from "@/components/ui/card"
import { charity_icon, finding_and_keeping } from "@/assets"
import { InvertedBorder } from "../shared/InvertedRadius"
import Typography from "../shared/Typography"

const JobSupportSection = () => {
  return (
    <section className="w-full relative md:inset-y-20 flex flex-col">
    {/* Content Section */}
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="md:max-w-6xl 2xl:max-w-7xl mx-auto">
        <Card className="rounded-xl overflow-hidden border-none shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col p-8 md:gap-16 md:py-11 md:px-9 lg:flex-row border-0 border-indigo-800 ">
              {/* Left Side - Our Approach */}
              <div className=" grid justify-items-start items-start w-full lg:w-1/2 md:px-8 md:py-4 bg-[#f8f9fa] rounded-lg ">
                {/* <Typography variant="subtitle" className=" text-left">Our Approach</Typography>
                <Typography variant="h1" className="py-0 "
                  h1Parts={[
                    { text: "welcome", color: "color1" },
                    { text: "communities", color: "color2" },
                  ]} /> */}

                <div className="space-y-4 text-gray-600">
                <Typography variant="h2" className="text-3xl font-bold mb-4">
                    Finding And Keeping <span className="text-[#1a6b9f]">A Job</span>...
                  </Typography>
                  <Typography variant="p" className="text-gray-600 mb-4">
                    You get a better and greater sense of what is happening in the community, build independence, do what you
                    love and be passionate about it. Tunza Care Services will help build up a resume that matches your skills,
                    interests, and ambitions to find a job that you enjoy doing.
                  </Typography>
                  <Typography variant="p" className="text-gray-600">
                    From supported/open employment, self-employment, or ADE/micro business, SLES.
                  </Typography>
                </div>
              </div>

              {/* Right Side - Services List */}
              <div id='house-image'
                className='relative z-0 w-full md:w-1/2 outline-none border-0 border-fuchsia-500'>
              <img
                  src={finding_and_keeping}
                  alt='Caregiver and client smiling together'
                  className='w-full rounded-lg'
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
              <InvertedBorder
                bottom='0'
                left='0'
                padding='3'
                rotation='-rotate-180'
                innerColor={"bg-[#E1ECF1]"}
                imgSrc={charity_icon}
                imgAlt='Star Icon'
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
          </CardContent>
        </Card>
      </div>
    </section>
  </section>
  )
}

export default JobSupportSection

          // <div className="w-full md:w-3/5 p-8">
            
          // </div>