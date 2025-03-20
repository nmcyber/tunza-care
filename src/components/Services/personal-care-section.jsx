import { Check } from "lucide-react"

const PersonalCareSection = () => {
  const services = [
    { text: "Personal care and daily living" },
    { text: "Transport options" },
    { text: "24/7 support" },
    { text: "Social and community participation" },
    { text: "Finding and keeping a job" },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="w-full md:w-2/5 relative">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Person loading laundry into washing machine"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-[#1a6b9f] text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
              </svg>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-3/5 p-8">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#1a6b9f]">Personal Care</span> And Daily Living...
            </h2>
            <p className="text-gray-600 mb-6">
              Tunza Care will provide you with assistance in self-care tasks and daily personal care such as:
            </p>

            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 text-green-500">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="text-gray-700">{service.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalCareSection

