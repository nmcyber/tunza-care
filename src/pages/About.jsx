import AboutHero from "@/components/About/about-hero"
import CallToAction from "@/components/About/call-to-action"
import OurApproach from "@/components/About/our-approach"
import OurStory from "@/components/About/our-story"
// import OurTeam from "@/components/About/our-team"
import OurValues from "@/components/About/our-values"
import { TestimonialsSection } from "@/components/Landing/Testimonials"

export default function AboutPage() {
  return (
    <main className="min-h-screen ">
      <AboutHero />
      <OurValues />
      <OurStory />
      <OurApproach />
      {/* <OurTeam /> */}
      <TestimonialsSection />
      <CallToAction />
    </main>
  )
}

