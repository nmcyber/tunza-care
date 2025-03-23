import { Check } from "lucide-react"

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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="w-full md:w-2/5 relative">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="People in wheelchairs playing basketball"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-[#1a6b9f] text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-3/5 p-8">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#1a6b9f]">Social And Community</span> Participation....
            </h2>
            <p className="text-gray-600 mb-6">
              At Tunza Care Services we are compassionate about our clients and it is our responsibility to ensure that
              they are well integrated into social and community activities. Support workers at Tunza Care Services will
              help our clients to join and participate in neighbouring local activities that will help them:
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 text-green-500">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="text-gray-700">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialParticipationSection

