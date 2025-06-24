import { holding_hands_banner, smilling_nurse } from "@/assets";
import EmploymentSection from "@/components/Employment/employment-section";
import StaffingOpportunities from "@/components/Employment/staffing-opportunities";
import Typography from "@/components/shared/Typography";
import { Helmet } from 'react-helmet-async';

export default function EmploymentPage() {
  return (
    <>
      <Helmet>
        <title>Employment Opportunities | Join Tunza Care</title>
        <meta name="description" content="Discover rewarding career and employment opportunities at Tunza Care. Join our team and make a difference in the lives of people with disabilities." />
        <link rel="canonical" href="https://tunza-care.nmcyber.com/employment" />
      </Helmet>
    <main className="min-h-screen w-full relative mt-20 flex flex-col">
      {/* Banner Section */}
      <section className="relative w-full items-center justify-center  md:min-h-[35dvh] md:max-h-[40dvh] bg-primary/90 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={smilling_nurse}
            alt="Caring hands"
            style={{ objectPosition: "50% 30%", objectFit: "cover", height: "100%", width: "100%", backgroundRepeat: "no-repeat" }}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        {/* Text Content Div */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] w-8 bg-white/70 mr-3"></div>
            <Typography variant="span">Join Our Team</Typography>
            <div className="h-[1px] w-8 bg-white/70 ml-3"></div>
          </div>
            <Typography variant="h1" className="">Make a difference in people's lives</Typography>
        </div>
      </section>

      <EmploymentSection />

      <StaffingOpportunities />

      <section className="py-16 px-4 bg-transparent">
        <div className=" max-xl:max-w-7xl max-w-[90svw] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
              <p className="text-gray-600">We understand the importance of work-life balance. Our flexible working hours allow you to manage your time effectively, accommodating both personal and professional commitments.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600">We are committed to your professional development. Our organization offers various opportunities for training and advancement, ensuring that you can build a successful and fulfilling career with us.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rewarding Work</h3>
              <p className="text-gray-600">At our organization, you will find meaningful work that makes difference. We value your contributions and strive to create an environment where you can feel proud of the impact you make every day.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Diversity and Inclusion</h3>
              <p className="text-gray-600">We celebrate diversity and are committed to creating an inclusive workplace. We believe that different perspectives enrich our organization and drive creativity.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}