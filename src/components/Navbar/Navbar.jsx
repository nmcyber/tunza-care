import React from "react";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { navigation } from "../../constants";
import { socials } from "../../constants";

import { cn } from "@/lib/utils";
// import { logo, socialIcons, socials } from "@/assets";
import { Button, buttonVariants } from "@/components/ui/button";

import Logo from "../shared/Logo";
import { GradientButton } from "../shared/GradientButton";
// import ContactFormModal from "../Contact/ContactFormModal";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const Navbar = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className=" w-full py-2 fixed top-0 left-0 z-50 bg-white">
      <div className=" px-4 sm:px-8 lg:px-16 xl:px-24 ">
        <nav className="hidden justify-between lg:flex">
          <div className="flex flex-grow justify-between items-center gap-6 outline-0 outline-red-400">
            {/* LOGO COMPONENT */}
            <>
              <Logo />
            </>
            <div
              className={
                "relative z-50 flex flex-col  mb-12 items-center justify-center h-full lg:h-auto m-auto lg:flex-row"
              }
            >
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className={`block relative font-sans text-[17px] rounded-sm  hover:text-gray-400 hover:shadow-md hover:bg-slate-100 transition-colors duration-300 outline-0 outline-lime-600 mt-6 py-2 lg:-mr-0.25  font-semibold  lg:leading-5 lg:hover:text-n-1 xl:px-12 `}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <GradientButton
              children={"08 9387 6326"}
              className="relative font-semibold mt-8 px-6 py-2 rounded-2xl overflow-hidden group"
            />
          </div>
        </nav>

        {/* --------------------------- MOBILE MENU --------------------------- */}

        <div className="block lg:hidden outline-0 outline-lime-400">
          <div className="flex items-center justify-between">
            <Logo />
            <Sheet className=" ">
              <SheetTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <MenuIcon className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto border-none backdrop-blur-sm bg-[rgba(204,214,214,0.89)] outline-0 outline-orange-400">
                <SheetHeader>
                  <SheetTitle>
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                {/* --------------------------- MIDDLE MOBILE MENU SECTION --------------------------- */}
                <div className="my-4 flex flex-col">
                  {navigation.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      className={`block relative font-sans text-[19px] text-color-4 hover:text-white hover:underline hover:shadow-lg transition-colors duration-300 outline-0 outline-lime-600 ${
                        item.onlyMobile ? "lg:hidden" : ""
                      } px-8 py-5 lg:-mr-0.25  font-semibold  lg:leading-5 lg:hover:text-n-1 xl:px-12 `}
                    >
                      {item.title}
                    </a>
                  ))}
                  {/* ------------------- MOBILE CONTACT US BUTTON ------------------- */}

                  {/* {isMobile && (
                    <ContactFormModal
                      onClose={() => setIsContactModalOpen(false)}
                    />
                  )} */}
                </div>
                {/* -------------------- MOBILE MENU SHEET FOOTER ---------------- */}
                <SheetFooter>
                  <div className="mb-8 flex justify-start space-x-6 md:order-first md:mb-0">
                    {socials.map(
                      ({ link, ariaLabel, iconImage: Icon }, index) => (
                        <a
                          href={link}
                          key={index}
                          className="text-slate-600 hover:text-gray-950"
                        >
                          <span class="sr-only">{ariaLabel}</span>

                          <Icon size={`24`} />
                          <span className=" w-4 h-4 outline outline-lime-600"></span>
                        </a>
                      )
                    )}
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
