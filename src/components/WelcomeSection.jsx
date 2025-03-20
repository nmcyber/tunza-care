import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Typography from "./Typography"

// Icons
const SunIcon = () => (
  <div className="bg-amber-100 p-3 rounded-md w-12 h-12 flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
        stroke="#F59E0B"
        strokeWidth="2"
      />
      <path
        d="M12 3V5M12 19V21M5 12H3M21 12H19M18.364 5.636L16.95 7.05M7.05 16.95L5.636 18.364M16.95 16.95L18.364 18.364M7.05 7.05L5.636 5.636"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
)

const HandshakeHeartIcon = () => (
  <div className="bg-sky-100 p-3 rounded-md w-12 h-12 flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 14L8.5 11.5M8.5 11.5L6 9M8.5 11.5L11.5 8.5M11.5 8.5L14 6M11.5 8.5L15 5"
        stroke="#0284C7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 10C17 10 19 12.5 19 14C19 15.6569 17.6569 17 16 17C14.3431 17 13 15.6569 13 14C13 12.5 15 10 15 10"
        stroke="#0284C7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)

const WheelchairIcon = () => (
  <div className="bg-green-100 p-3 rounded-md w-12 h-12 flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 8V12M12 12H16M12 12L9 17M16 19.5C16 20.8807 14.8807 22 13.5 22C12.1193 22 11 20.8807 11 19.5C11 18.1193 12.1193 17 13.5 17C14.8807 17 16 18.1193 16 19.5ZM8 19.5C8 20.8807 6.88071 22 5.5 22C4.11929 22 3 20.8807 3 19.5C3 18.1193 4.11929 17 5.5 17C6.88071 17 8 18.1193 8 19.5ZM14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)

export const WelcomeSection = ({ className }) => {
  return (
    <section className={cn("relative py-16 px-4 overflow-hidden", className)}>
      {/* Background decoration */}
      <div className="absolute -left-20 top-0 w-96 h-96 rounded-full border-[40px] border-sky-50/50 -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="bg-sky-100 text-sky-700 hover:bg-sky-100 mb-4">
            About Us
          </Badge>
          <h2 className="text-4xl font-bold">
            Welcome <span className="text-primary">Communities</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Vision Card */}
          <Card className="p-6 flex flex-col items-start">
            <SunIcon />
            <h3 className="text-xl font-bold text-primary-foreground mt-4 mb-2">Our Vision</h3>
            <p className="text-muted-foreground">
              To provide quality care & services to empower people with disabilities to live a good life.
            </p>
          </Card>

          {/* Core Values Card */}
          <Card className="p-6 flex flex-col items-start bg-primary text-primary-foreground shadow-lg relative">
            <HandshakeHeartIcon />
            <h3 className="text-xl font-bold mt-4 mb-2">Our Core Values</h3>
            <ul className="space-y-1">
              <li>Respect</li>
              <li>Compassion</li>
              <li>Integrity</li>
              <li>Individuality</li>
            </ul>
            {/* Shadow effect */}
            <div className="absolute -bottom-6 left-0 right-0 h-6 bg-gradient-to-b from-primary/20 to-transparent rounded-b-xl mx-4"></div>
          </Card>

          {/* Mission Card */}
          <Card className="p-6 flex flex-col items-start">
            <WheelchairIcon />
            <h3 className="text-xl font-bold text-primary-foreground mt-4 mb-2">Our Mission</h3>
            <p className="text-muted-foreground">
              To welcome communities that value respect & empower people with disabilities.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

