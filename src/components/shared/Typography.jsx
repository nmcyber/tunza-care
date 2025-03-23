import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

const Typography = ({ variant, children, className, h1Parts }) => {
  const variantClasses = {
    h2: "font-bold text-[28px] leading-[38px] md:text-[36px] md:leading-[46px] ",
    h3: "font-bold text-[24px] leading-[34px] md:text-[28px] md:leading-[38px] ",
    h4: "font-bold text-[20px] leading-[30px] md:text-[24px] md:leading-[34px] ",
    span: "font-normal text-[18px] leading-[26px] md:text-[22px] md:leading-[32px] ",
    p: "font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] ",
    heading: "text-black font-almarai text-[85px] font-normal leading-[85px] tracking-[-0.85px] capitalize",
  };

  const baseH1Styles = "font-normal md:text-5xl lg:text-7xl xl:text-5xl 2xl:text-5xl leading-[60px] tracking-[-0.8px] capitalize";

  if ((variant === "h1" || variant === "heading")) {
    const baseStyles = variant === "h1" ? baseH1Styles : variantClasses.heading;

    // Handle cases where h1Parts is an array
    if (Array.isArray(h1Parts)) {
      return (
        <h1 className={cn(baseStyles, className)}>
          {h1Parts.map((part, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  part.color === "color1" ? "text-black" : "text-[#13668E]"
                }
              >
                {part.text}
              </span>
              {index < h1Parts.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>
      );
    }

    // Handle case where h1Parts is a single object
    if (typeof h1Parts === 'object' && h1Parts !== null && 'text' in h1Parts) {
      return (
        <h1 className={cn(baseStyles, className)}>
          <span
            className={
              h1Parts.color === "color1" ? "text-black" : "text-[#13668E]"
            }
          >
            {h1Parts.text}
          </span>
        </h1>
      );
    }

    // Handle case where h1Parts is not provided (undefined) or null
    return <h1 className={cn(baseStyles, className)}>{children}</h1>;
  }

  if (variant === "subtitle") {
    const subtitleClasses =
      "text-[#13668E] text-center font-inter text-[16px] capitalize hover:cursor-pointer hover:text-white hover:bg-[#2DBA98] font-medium leading-normal rounded-[51px] bg-[rgba(212,227,235,0.70)] py-1 px-8";
    return (
      <div className='flex justify-center '>
        <Badge className={cn(subtitleClasses, className)}>{children}</Badge>
      </div>
    );
  }

  const Tag = variant === "heading" ? "h1" : variant;
  const tagClassName =
    variant === "h1" || variant === "heading"
      ? className
      : cn(variantClasses[variant], className);

  return <Tag className={tagClassName}>{children}</Tag>;
};

export default Typography;