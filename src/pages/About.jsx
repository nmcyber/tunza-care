import AboutHero from "@/components/About/about-hero"
import CallToAction from "@/components/About/call-to-action"
import OurApproach from "@/components/About/our-approach"
import OurStory from "@/components/About/our-story"
// import OurTeam from "@/components/About/our-team"
import OurValues from "@/components/About/our-values"
import { Helmet } from 'react-helmet-async';
import { TestimonialsSection } from "@/components/Landing/Testimonials"

export default function AboutPage() {
  return (
  <>
    <Helmet>
      <title>About Us | Tunza Care Home Care Support Services</title>
      <meta name="description" content="Learn about Tunza Care's story, values, and approach to providing exceptional home care support services across Australia." />
      <meta name="keywords" content="Tunza Care, about us, home care values, care approach, healthcare mission, care provider history" />
      <link rel="canonical" href="https://tunza-care.nmcyber.com/about" />
    </Helmet>
    <main className="min-h-screen ">
      <AboutHero />
      <OurValues />
      <OurStory />
      <OurApproach />
      {/* <OurTeam /> */}
      <TestimonialsSection />
      <CallToAction />
    </main>
  </>
  )
}

