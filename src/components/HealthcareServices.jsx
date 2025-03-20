import { ServicesSection } from "@/components/services-section"

// This is a complete example of how to use the ServicesSection component
// with real content for a healthcare provider

export const HealthcareServices = () => {
  const healthcareServices = {
    title: "Tunza Care",
    highlightedTitle: "Australia",
    services: [
      { text: "Personal care and daily living" },
      { text: "Transport options" },
      { text: "24/7 support" },
      { text: "Social and community participation" },
      { text: "Finding and keeping a job" },
      { text: "Individual living options (ILO)" },
      { text: "Supporting independent living (SIL)" },
      { text: "Level 2 Support Coordination" },
      { text: "Respite" },
      { text: "Staffing agent" },
    ],
    image: "/images/healthcare-provider.jpg",
    badgeImage: "/images/ndis-badge.png",
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <ServicesSection {...healthcareServices} />
    </div>
  )
}

