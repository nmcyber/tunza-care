import * as React from "react"
import { cn } from "@/lib/utils"

const AvatarGroup = React.forwardRef(({ className, children, ...props }, ref) => {
  // Convert children to array and limit to 4 avatars
  const avatarArray = React.Children.toArray(children).slice(0, 4)

  return (
    <span ref={ref} className={cn("flex -space-x-5", className)} {...props}>
      {avatarArray}
    </span>
  )
})

AvatarGroup.displayName = "AvatarGroup"

export { AvatarGroup }

