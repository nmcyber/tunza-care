import * as React from "react"
import { cn } from "@/lib/utils"

const AvatarGroup = React.forwardRef(({ className, children, ...props }, ref) => {
  // Convert children to array and limit to 4 avatars
  const avatarArray = React.Children.toArray(children).slice(0, 4)

  return (
    <div ref={ref} className={cn("flex -space-x-4", className)} {...props}>
      {avatarArray}
    </div>
  )
})

AvatarGroup.displayName = "AvatarGroup"

export { AvatarGroup }

