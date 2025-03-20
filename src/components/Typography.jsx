import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

const Typography = ({
  variant,
  children,
  className,
  h1Parts,
}) => {
  const variantClasses = {
    h2: 'font-bold text-[28px] leading-[38px] md:text-[36px] md:leading-[46px] ',
    span: 'font-normal text-[18px] leading-[26px] md:text-[22px] md:leading-[32px] ',
    p: 'font-normal text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] ',
  };

  if (variant === 'h1' && Array.isArray(h1Parts)) {
    const h1BaseStyles = 'font-normal md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl leading-[60px] tracking-[-0.6px] capitalize';
    return (
      <h1 className={cn(h1BaseStyles, className)}>
        {h1Parts.map((part, index) => (
          <React.Fragment key={index}>
            <span className={part.color === 'color1' ? 'text-black' : 'text-[#13668E]'}>
              {part.text}
            </span>
            {/* Add space between parts */}
            {index < h1Parts.length - 1 && ' '}
          </React.Fragment>
        ))}
      </h1>
    );
  }

  if (variant === 'subtitle') {
    const subtitleClasses = 'text-[#13668E] text-center font-inter text-[18px] hover:cursor-pointer hover:text-white hover:bg-[#2DBA98] font-medium leading-normal rounded-[51px] bg-[rgba(212,227,235,0.70)] py-2 px-4';
    return <div className="flex justify-center "><Badge className={cn(subtitleClasses, className)}>{children}</Badge></div>;
  }

  const Tag = variant;
  const tagClassName = variant === 'h1' ? className : cn(variantClasses[variant], className);

  return (
    <Tag className={tagClassName}>{children}</Tag>
  );
};

export default Typography;