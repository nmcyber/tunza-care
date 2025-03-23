const TransportSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row-reverse">
          {/* Right side - Image */}
          <div className="w-full md:w-2/5 relative">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Caregiver helping person in wheelchair into a van"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#1a6b9f] text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-9 7c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07c-.41 1.16-1.52 2-2.83 2z" />
              </svg>
            </div>
          </div>

          {/* Left side - Content */}
          <div className="w-full md:w-3/5 p-8">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#1a6b9f]">Transport</span> Options...
            </h2>
            <p className="text-gray-600 mb-4">
              For every individual to be able to undertake both activities of daily living and meeting social needs,
              there is a need for transportation from one place to the other.
            </p>
            <p className="text-gray-600">
              At Tunza Care Services we will be able to provide all the client transport needs to ensure they meet their
              personal and social integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransportSection

