import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronRightIcon, Play } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { avatar_1, avatar_2, avatar_3, banner, heart_icon } from "@/assets";
import Typography from "../shared/Typography";
import { ShimmerButton } from "../magicui/shimmer-button";
import { NumberTicker } from "../magicui/number-ticker";
import { Link } from "react-router-dom";

const Hero = () => {
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, { once: true });
  const progressControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      progressControls.start({
        width: "78%",
        transition: { duration: 1.5, ease: "easeOut" },
      });
    }
  }, [isInView, progressControls]);

  return (
    <section className=" px-4 pt-10 pb-16 sm:px-6 lg:px-8 min-md:py-8 md:py-12 bg-white">
      <div className=" md:max-w-[90svw] md:max-h-[65dvh] mx-auto flex flex-col md:flex-row items-center max-md:gap-16 md:gap-8 lg:gap-12 ">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="heading"
              className=' max-md:text-6xl max-md:leading-[68px]'
              h1Parts={[
                { text: "Quality", color: "color1" },
                { text: "Home Healthcare", color: "color2" },
                { text: "You Can Trust.", color: "color1" },
              ]}
            />

            <Typography variant="p" className="mt-4 text-lg max-w-xl">
            {/* Tunza Care Services is a registered NDIS provider offering a range of in-home care, social &
            community participation, supported independent living (SIL), individual living option (ILO),
            clinical care and allied health services through Australia. */}
            Tunza Care Services is a registered NDIS provider offering a range of in-home care and support services in Australia.
            </Typography>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* TODO: Add a Link to Calendly */}
            <ShimmerButton className="shadow-2xl bg-primary hover:bg-[#155a87] text-white rounded-full px-6 py-2 text-lg font-medium">
              {" "}
              {/* Add any specific styling for the shimmer container if needed */}
              Inquiries
              <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ShimmerButton>

            <div className="flex items-center gap-2">
              {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#e6f2f5]">
                <Play className="h-5 w-5 text-primary ml-0.5" />
              </div> */}
              <Link to="/about" className="text-primary font-medium">
                Learn More
              </Link>
              {/* <span className="text-primary font-medium"></span>s */}
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 mt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AvatarGroup>
              <Avatar>
                <AvatarImage src={avatar_1} alt="User 1" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src={avatar_2} alt="User 2" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src={avatar_3} alt="User 3" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src={avatar_1} alt="User 4" />
                <AvatarFallback>+</AvatarFallback>
              </Avatar>
            </AvatarGroup>

            <div>
              {/* <p className="text-lg font-semibold text-gray-800">3.2K</p> */}
              <NumberTicker
                value={3200}
                className="whitespace-pre-wrap ext-lg font-semibold text-gray-800 tracking-tighter "
              >
                K
              </NumberTicker>
              <p className="text-sm text-gray-500">People with us</p>
            </div>

            {/* TODO:Staggered animation for stars */}
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="ml-1 text-sm font-medium">5.0</span>
            </div>
          </motion.div>
        </div>

        {/* Right Section - Image with Overlays */}
        <div className=" flex w-full px-8 md:px-2 h-full md:w-1/2 relative  ">
          <motion.div
            className=" h-full rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-9" // Example: 16:9 aspect ratio
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={banner}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: "100%",
              }}
              alt="Healthcare professional with patient"
              title='Healthcare professional with patient'
              className="w-full h-full"
            />
          </motion.div>

          {/* 150+ Card */}
          <motion.div
            className="absolute -top-6 right-2 md:top-2 md:right-4 bg-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-2xl font-bold text-primary">100+</p>
            <div className="w-full h-px bg-gray-200 my-2"></div>
            <p className="text-sm text-gray-500">Qualified Staff</p>
          </motion.div>

          {/* Health Control Card */}
          <motion.div
            className="absolute hidden md:flex bottom-6 -left-4 md:-left-12 bg-white p-4 rounded-lg shadow-md max-w-[280px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 2.5 }}
            ref={progressRef}
          >
            <div className="grid grid-cols-[auto_1fr] items-start gap-3">
              <div className="mt-1 bg-primary p-2  rounded-full">
                <img
                  src={heart_icon}
                  alt="Heart Icon"
                  title="Heart Icon"
                  className={`object-contain h-5 w-5`}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Health Control
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Personalized care plans tailored to your specific health needs
                </p>
              </div>
              <div className=" relative col-span-2">
                {" "}
                {/* Span across both columns */}
                {/* Progressbar */}
                <div className="w-full flex items-center px-2 bg-gray-200 rounded-full h-5 mt-1">
                  <motion.div
                    className="bg-primary h-2 rounded-full"
                    initial={{ width: "0%" }}
                    animate={progressControls}
                  ></motion.div>
                </div>
                <p className=" absolute -inset-y-3 inset-x-6 text-xs text-right mt-0 text-gray-500">
                  78%
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
