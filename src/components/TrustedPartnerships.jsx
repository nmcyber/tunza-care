import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import Typography from "./Typography"

const partners = [
  { id: 1, name: "Partner 1", logo: "/logos/logo_1.svg" },
  { id: 2, name: "Partner 2", logo: "/logos/logo_2.svg" },
  { id: 3, name: "Partner 3", logo: "/logos/logo_3.svg" },
  { id: 4, name: "Partner 4", logo: "/logos/logo_4.svg" },
  { id: 5, name: "Partner 5", logo: "/logos/logo_5.svg" },
];

export default function TrustedPartnership() {
  return (
    <section className=" relative z-10 flex flex-col w-full py-12 bg-background overflow-hidden after:bg-[url(/left_.svg)] after:bg-no-repeat after:bg-right-top after:object-contain after:absolute after:aspect-square after:h-full after:border-0 after:border-red-500 after:top-0 after:-right-[2.15%] after:z-0 ">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-medium text-gray-700 mb-8">
          Our Trusted Partnership
        </h2>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-10">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-8 md:h-10 opacity-70"
                onError={(e) => {
                  // e.target.src = `/placeholder.svg?height=40&width=120`
                  e.target.alt = "Logo placeholder";
                }}
              />
            </div>
          ))}
        </div>

        {/* Main Content Card */}
        <div className=" flex rounded-lg py-11 px-11 overflow-hidden bg-white relative z-10 border-none outline-none ">
          {/* Controls where the overflow is at for the inverted border radius */}
          <Card className="rounded-lg bg-none overflow-hiddenn border-0 border-lime-500 outline-none shadow-none">
            <CardContent className="p-0 bg-none ">
              {/* defines the white background color that will appear in the gap between the two seperate columns */}
              <div id="house-info" className=" relative bbbbg-background flex flex-col space-y-10 md:space-y-0 md:flex-row md:gap-8 ">
                {/* Left Side - Image with Play Button and inverted border radius */}
                <div id="house-image" className="relative z-0 w-full md:w-5/12 outline-none border-0 border-fuchsia-500">
                  <img
                    src="/about-tunza-care.webp"
                    alt="Caregiver and client smiling together"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  
                  {/* INVERTED BORDER COMPONENT - TOP RIGHT */}
                  <div id="play" className="absolute z-20 p-0 bg-white top-0 right-0 border-0 border-lime-500 ">
                    <div className=" bg-[hsl(199,36%,91%)] rounded-full p-3 ">
                      <div className=" flex items-center justify-center ">
                        <button className=" flex mx-auto aspect-square rounded-full p-3 text-white hover:bg-blue-600 transition-colors">
                          {/* <Play className="h-6 w-6" /> */}
                          <img src="/play.svg" alt="Play Button" className="object-cover h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* INVERTED BORDER COMPONENT */}
                  <div id="house-price" className=" absolute z-20 p-4 -bottom-6 -left-7 outline-0 outline-red-400 ">
                    <div className="grid grid-cols-1 text-white gap-0 space-y-0 items-center border-0 border-lime-400">
                      <span className="text-xl font-bold ">150+</span>
                      <span className="text-xs ">Lorem ipsum dum</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-7/12 p-6 bg-background md:p-10 relative rounded-lg border-0 border-lime-500">
                  <>
                    <Typography variant={"subtitle"}>About us</Typography>
                    <Typography variant="h1" className={"pt-4 pb-6"}
                    h1Parts={[
                      { text: 'Welcome', color: 'color1' },
                      { text: 'Communities', color: 'color2' },
                    ]}/>
                  </>

                  <p>
                    Our team have years of experience in disability care,
                    recognizing multicultural aspects of Western Australia,
                    respect and compassion for our clients, staff and the
                    community.
                  </p>

                  <p>
                    Tunza Care Services is culturally inclusive, that allows
                    people to make choices and have full control of their way
                    of living, feeling accepted and belonging to the team and
                    the community. Tunza Care will work together with you, to
                    personalise your needs according to your choices, ability,
                    and your unique experience. Tunza Care Services is a
                    Western Australian family owned company that will work and
                    deliver services across WA.
                  </p>
                  <p>
                    Tunza Care Services is culturally inclusive, that allows people to make choices and have full
                    control of their way of living, feeling accepted and belonging to the team and the community. Tunza
                    Care will work together with you, to personalise your needs according to your choices, ability, and
                    your unique experience. Tunza Care Services is a Western Australian family owned company that will
                    work and deliver services across WA.
                  </p>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
      {/* <div className=" absolute w-full h-full border-2 border-red-500 top-0 right-0 bg-[url(/left_.svg)] bg-no-repeat object-contain z-20 " /> */}
    </section>
  );
}
