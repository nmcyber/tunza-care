const JobSupportSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row-reverse">
          {/* Right side - Image */}
          <div className="w-full md:w-2/5 relative">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Support worker meeting with client in wheelchair"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#1a6b9f] text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
            </div>
          </div>

          {/* Left side - Content */}
          <div className="w-full md:w-3/5 p-8">
            <h2 className="text-3xl font-bold mb-4">
              Finding And Keeping <span className="text-[#1a6b9f]">A Job</span>...
            </h2>
            <p className="text-gray-600 mb-4">
              You get a better and greater sense of what is happening in the community, build independence, do what you
              love and be passionate about it. Tunza Care Services will help build up a resume that matches your skills,
              interests, and ambitions to find a job that you enjoy doing.
            </p>
            <p className="text-gray-600">
              From supported/open employment, self-employment, or ADE/micro business, SLES.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobSupportSection

