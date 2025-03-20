import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export const ServicesList = ({ services, className, checkColor = "text-green-500" }) => {
  return (
    <ul className={cn("space-y-2", className)}>
      {services.map((service, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className={cn("flex-shrink-0 mt-1", checkColor)}>
            <Check className="h-4 w-4" />
          </span>
          <span>{service.text}</span>
        </li>
      ))}
    </ul>
  )
}

