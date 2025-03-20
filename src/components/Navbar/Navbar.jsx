"use client"

import { useState } from "react"
import { Menu, Phone } from "lucide-react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { navigation, socials } from "@/constants"
import Logo from "@/components/shared/Logo"
import { useMediaQuery } from "@/hooks/use-mobile"

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { scrollY } = useScroll()

  // Track scroll direction and hide/show navbar accordingly
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Only hide navbar after scrolling past 100px
    if (latest < 100) {
      setIsVisible(true)
      return
    }

    // Determine scroll direction
    const isScrollingDown = latest > lastScrollY
    const scrollDifference = Math.abs(latest - lastScrollY)

    // Only trigger hide/show if scrolled more than 10px
    if (scrollDifference > 10) {
      setIsVisible(!isScrollingDown)
      setLastScrollY(latest)
    }
  })

  return (
    <motion.section
      className="w-full py-2 fixed top-0 left-0 z-50 bg-white shadow-sm"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="px-4 sm:px-8 md:px-16 xl:px-20">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-between outline-0 outline-lime-800">
          {/* <div className="flex items-center gap-16 ">
          </div> */}
            <Logo />

            <div className="flex items-center outline-0 outline-fuchsia-800">
              {navigation.map((item, index) => (
                <a
                  key={item.id}
                  href={item.url}
                  className={cn(
                    "relative font-sans text-[16px] font-medium px-6 py-2 rounded-md transition-colors duration-300",
                    item.title === "Home"
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                  )}
                >
                  {item.title}
                </a>
              ))}
            </div>

          <>
            <Button className="rounded-full bg-[#e6f2f5] text-[#0469842] hover:bg-[#d6eaef] px-6 outline-0 outline-blue-800 " variant="ghost">
              <Phone className="mr-2 h-4 w-4 text-teal-600" />
              <span className="text-teal-600 font-medium">0469 842 289</span>
            </Button>
          </>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center justify-between">
          <Logo />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent className="overflow-y-auto border-none backdrop-blur-sm bg-[rgba(204,214,214,0.95)]">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <div className="my-8 flex flex-col">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    className={cn(
                      "block relative font-sans text-[18px] text-gray-700 hover:text-teal-600 transition-colors duration-300",
                      item.title === "Home" ? "font-semibold text-teal-600" : "font-medium",
                      "px-2 py-4",
                    )}
                  >
                    {item.title}
                  </a>
                ))}

                <Button className="mt-6 rounded-full bg-[#e6f2f5] text-[#0469842] hover:bg-[#d6eaef]" variant="ghost">
                  <Phone className="mr-2 h-4 w-4 text-teal-600" />
                  <span className="text-teal-600 font-medium">0469 842 289</span>
                </Button>
              </div>

              <SheetFooter>
                <div className="mb-8 flex justify-start space-x-6">
                  {socials.map(({ link, ariaLabel, iconImage: Icon }, index) => (
                    <a href={link} key={index} className="text-teal-600 hover:text-teal-800 transition-colors">
                      <span className="sr-only">{ariaLabel}</span>
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.section>
  )
}

export default Navbar

