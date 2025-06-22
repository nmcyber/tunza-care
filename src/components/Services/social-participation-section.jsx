import { Card, CardContent } from "@/components/ui/card"
import { charity_icon, Check_mark_custom, personal_care, social } from "@/assets"
import { InvertedBorder } from "../shared/InvertedRadius"
import Typography from "../shared/Typography"

const SocialParticipationSection = () => {
  const benefits = [
    {
      text: "Develop connection in the community, that will bring a sense of belonging, as well as help them meet and make friends from the local area.",
    },
    {
      text: "Discover, develop and improve their skills in various activities such as arts, games and sports that can improve their sensory experiences",
    },
    {
      text: "Socialize and have fun through games (bowling, pool etc), social groups, dance (Zumba) and group BBQ's.",
    },
  ]

  return (
    <section className="w-full relative md:inset-y-20 flex flex-col ">
      {/* Content Section */}
      <section className=" py-12 px-4 sm:px-6 lg:px-8 ">
        <div className=" md:max-w-6xl 2xl:max-w-7xl mx-auto">
          <Card className="rounded-xl overflow-hidden border-none shadow-lg">
            <CardContent className="p-0">
              <div className="flex flex-col space-y-10 pt-2 pb-6 px-5 md:gap-16 md:py-11 md:px-10 lg:flex-row-reverse border-0 border-indigo-600 ">

                  {/* Left side - Content */}
                <div className=" grid justify-items-start items-start w-full lg:w-1/2 bg-none">
                  <Typography variant="h1" className={"py-4"}
                    h1Parts={[
                      { text: "Social", color: "color1" },
                      { text: "participation", color: "color2" },
                    ]} />
                    <Typography variant="p" className="mb-6">
                    Tunza Care will provide you various social and community participation activities that will help you:
                  </Typography>

                  <ul className="space-y-3">
                    {benefits.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1 text-green-500">
                          <Check_mark_custom className="h-5 w-5" />
                        </span>
                        <span className="text-gray-700">{service.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right side - Image */}

                <div
                id='house-image'
                className='relative z-0 w-full md:w-1/2 outline-none border-0 border-fuchsia-500'
              >
                <img
                  src={social}
                  alt='Caregiver and client smiling together'
                  className='w-full rounded-lg max-md:min-h-[40dvh]'
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

export default SocialParticipationSection

