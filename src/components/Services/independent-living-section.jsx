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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Individual Living <span className="text-[#1a6b9f]">Option (ILO)....</span>
              </h2>

              <p className="text-gray-600">
                We all need a place to call home, where you can relax and unwind. Where you can make choices and take
                full control of your independence or a place that feel part of a family with shared living or host
                arrangement. Tunza Care will help you have that choice and control of who to live with, where to live
                and how you want to live. The support team will help you to:
              </p>

              {/* Services list with checkmarks */}
              <ul className="space-y-2 mt-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{service.text}</span>
                  </li>
                ))}
              </ul>

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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right side - img */}
            <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=350&width=500"
                alt="Person in a wheelchair in their home"
                className="object-cover"
              />
            </div>
          </div>

          {/* Supported Independent Living section */}
          <div className="p-8 md:p-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold mb-6">
              Supported Independent <span className="text-[#1a6b9f]">Living (SIL)....</span>
            </h2>

            <p className="text-gray-600 max-w-4xl">
              We all need a place to call home, where you can relax and unwind. Where you can make choices and take full
              control of your independence or a place that feel part of a family with shared living or host arrangement.
              Tunza Care will help you have that choice and control of who to live with, where to live and how you want
              to live. The support team will help you to:
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndependentLivingSection

