// Alexander Chepkiyeng GitHub@Xanderyeng
// Took a while coming up with a reusable border radius component which I can scale across any of my future projects.
// Still needs some work on refining it to a crisp but it's a good start.
// I'll also need to make an adapation for it in Typescript

// Alexander Chepkiyeng GitHub@Xanderyeng
// Reusable border radius component with support for both pixel values and Tailwind CSS classes
// Reusable border radius component with enhanced support for responsive design

// With this implementation, I can now:

// Use negative numbers for pixel values:
{/* <InvertedBorder bottom={-2} />  // Will render as "-bottom-[2px]" */}

// Use positive numbers for pixel values:
{/* <InvertedBorder bottom={2} />   // Will render as "bottom-[2px]" */}

// Use Tailwind classes directly:
{/* <InvertedBorder bottom="2" />   // Will render as "bottom-2" */}

// Use negative Tailwind classes directly:
{/* <InvertedBorder bottom="-bottom-2" /> // Will pass through as "-bottom-2" */}

// The component now has comprehensive handling for all these cases and will maintain the formatting I need.


import { useEffect, useState } from 'react';
// import { useMobile } from '@/hooks/use-mobile';

// Simple useMobile hook implementation
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); // Consider devices with width < 768px as mobile
    };
    
    // Check initially
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  return isMobile;
};

export const InvertedBorder = ({
  top,
  right,
  left,
  bottom,
  padding = '3',
  paddingMobile,
  paddingSm,
  paddingMd,
  paddingLg,
  paddingXl,
  rotation,
  innerColor,
  imgHeight = 'h-3',
  imgWidth = 'w-3',
  objectFit = 'contain',
  imgHolderRounded = 'rounded-full',
  imageRotation,
  smoothness = '2',
  beforeTop,
  beforeBottom = "-bottom-6",
  beforeRight = "-right-3",
  beforeLeft,
  beforeRotation = 'rotate-0',
  afterRotation = 'rotate-0',
  afterTop = '-top-2',
  afterLeft = '-left-6',
  afterRight,
  afterBottom,
  innerBorderRadius,
  imgSrc,
  imgSize = '24px',
  imgAlt,
  spanBgColor,
  children,
  showInnerDiv = true,
  showSpan = true,
  hideInnerDivBg = false,
  hideSpanBg = false,
  innerDivSize,
  hideOnMobile = false,
  visibleFrom, // 'sm', 'md', 'lg', 'xl', '2xl'
  hiddenFrom, // 'sm', 'md', 'lg', 'xl', '2xl'
  className = '',
}) => {
  const isMobile = useMobile();
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // Handle visibility based on screen size
    if (hideOnMobile && isMobile) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [hideOnMobile, isMobile]);
  
  // If component should be hidden, return null
  if (!isVisible) return null;
  
  const processPosition = (value, position) => {
    // If the value is already a fully formatted class (like "-top-2")
    if (typeof value === 'string' && value.startsWith('-')) {
      // It's already a negative tailwind class
      return value;
    }
    
    // If it's a number
    if (typeof value === 'number') {
      // Handle negative numbers - FIXED: Correct syntax for negative values
      if (value < 0) {
        return `${position}-[-${Math.abs(value)}px]`;
      }
      // Handle positive numbers
      return `${position}-[${value}px]`;
    }
    
    // If it's a string but not a negative class (e.g., '2', 'md', etc.)
    return `${position}-${value}`;
  };

  // Handle main div position classes
  const positionClasses = ['absolute'];
  
  // Add position classes only if they're defined
  if (top !== undefined) positionClasses.push(processPosition(top, 'top'));
  if (right !== undefined) positionClasses.push(processPosition(right, 'right'));
  if (bottom !== undefined) positionClasses.push(processPosition(bottom, 'bottom'));
  if (left !== undefined) positionClasses.push(processPosition(left, 'left'));
  
  // If no positions are specified, add defaults
  if (top === undefined && right === undefined && bottom === undefined && left === undefined) {
    positionClasses.push('top-0', 'left-0');
  }
  
  // Generate responsive padding classes
  const paddingClasses = [];
  if (padding) paddingClasses.push(`p-${padding}`);
  if (paddingMobile) paddingClasses.push(`p-${paddingMobile}`);
  if (paddingSm) paddingClasses.push(`sm:p-${paddingSm}`);
  if (paddingMd) paddingClasses.push(`md:p-${paddingMd}`);
  if (paddingLg) paddingClasses.push(`lg:p-${paddingLg}`);
  if (paddingXl) paddingClasses.push(`xl:p-${paddingXl}`);
  
  // Add responsive visibility classes
  if (visibleFrom) {
    positionClasses.push(`hidden ${visibleFrom}:block`);
  }
  if (hiddenFrom) {
    positionClasses.push(`${hiddenFrom}:hidden`);
  }
  
  // Full main div classes including position and other properties
  const mainDivClasses = `${positionClasses.join(' ')} outline-0 outline-lime-500 z-20 ${paddingClasses.join(' ')} ${innerBorderRadius || ''} ${rotation || ''} bg-white ${className}`;
  
  // Handle before div positioning
  const beforePositionClasses = ['absolute'];
  
  // Process each before position property
  if (beforeTop !== undefined) {
    // Special case for pre-formatted classes
    if (typeof beforeTop === 'string' && (beforeTop.startsWith('-') || beforeTop.startsWith('top-'))) {
      beforePositionClasses.push(beforeTop);
    } else {
      beforePositionClasses.push(processPosition(beforeTop, 'top'));
    }
  }
  
  if (beforeRight !== undefined) {
    if (typeof beforeRight === 'string' && (beforeRight.startsWith('-') || beforeRight.startsWith('right-'))) {
      beforePositionClasses.push(beforeRight);
    } else {
      beforePositionClasses.push(processPosition(beforeRight, 'right'));
    }
  }
  
  if (beforeBottom !== undefined) {
    if (typeof beforeBottom === 'string' && (beforeBottom.startsWith('-') || beforeBottom.startsWith('bottom-'))) {
      beforePositionClasses.push(beforeBottom);
    } else {
      beforePositionClasses.push(processPosition(beforeBottom, 'bottom'));
    }
  }
  
  if (beforeLeft !== undefined) {
    if (typeof beforeLeft === 'string' && (beforeLeft.startsWith('-') || beforeLeft.startsWith('left-'))) {
      beforePositionClasses.push(beforeLeft);
    } else {
      beforePositionClasses.push(processPosition(beforeLeft, 'left'));
    }
  }
  
  // Handle after div positioning with the same approach
  const afterPositionClasses = ['absolute'];
  
  if (afterTop !== undefined) {
    if (typeof afterTop === 'string' && (afterTop.startsWith('-') || afterTop.startsWith('top-'))) {
      afterPositionClasses.push(afterTop);
    } else {
      afterPositionClasses.push(processPosition(afterTop, 'top'));
    }
  }
  
  if (afterRight !== undefined) {
    if (typeof afterRight === 'string' && (afterRight.startsWith('-') || afterRight.startsWith('right-'))) {
      afterPositionClasses.push(afterRight);
    } else {
      afterPositionClasses.push(processPosition(afterRight, 'right'));
    }
  }
  
  if (afterBottom !== undefined) {
    if (typeof afterBottom === 'string' && (afterBottom.startsWith('-') || afterBottom.startsWith('bottom-'))) {
      afterPositionClasses.push(afterBottom);
    } else {
      afterPositionClasses.push(processPosition(afterBottom, 'bottom'));
    }
  }
  
  if (afterLeft !== undefined) {
    if (typeof afterLeft === 'string' && (afterLeft.startsWith('-') || afterLeft.startsWith('left-'))) {
      afterPositionClasses.push(afterLeft);
    } else {
      afterPositionClasses.push(processPosition(afterLeft, 'left'));
    }
  }
  
  // Default after positions if none specified
  if (!afterPositionClasses.some(c => c.includes('top-') || c.includes('bottom-') || 
      c.includes('left-') || c.includes('right-') || c.startsWith('-'))) {
    afterPositionClasses.push('-top-3', '-right-6');
  }

  const innerDivStyle = innerDivSize ? {
    width: innerDivSize,
    height: innerDivSize,
  } : {};

  return (
    <div id="iB" className={mainDivClasses}>
      {showInnerDiv && (
        <div
          id="1"
          className={`relative z-0 rounded-full overflow-hidden p-3 ${!hideInnerDivBg ? innerColor : ''}`}
          style={innerDivStyle}
        >
          <div className="relative z-0 flex items-center justify-center">
            {showSpan && (
              <span
                className={`flex mx-auto aspect-square ${imgHolderRounded} p-3 text-white ${!hideSpanBg ? `${spanBgColor}` : ''} ${imageRotation || ''} transition-colors`}
              >
                {imgSrc && (
                  <img
                    src={imgSrc}
                    alt={imgAlt}
                    className={`object-contain ${imgHeight} ${imgWidth}`}
                    style={{ objectFit: objectFit, width: imgSize }}
                  />
                )}
              </span>
            )}
          </div>
        </div>
      )}
      <div
        className={`${beforePositionClasses.join(' ')} w-9 h-9 bg-radial-[at_100%_100%] border-0 border-fuchsia-500 from-white to-white aspect-square bg-transparent ${beforeRotation || ''} z-20 shadow-[-0.5rem_0_0_1]`}
        style={{
          backgroundImage: `radial-gradient(circle at 0% 100%, transparent 1.45rem, white, white calc(1.4rem + ${smoothness}px))`,
        }}
      />
      <div
        className={`${afterPositionClasses.join(' ')} w-8 h-8 bg-radial-[at_100%_100%] from-white to-white aspect-square bg-white-500 ${afterRotation || ''} border-0 border-lime-500 shadow-[-0.5rem_0_0_1] z-20`}
        style={{
          backgroundImage: `radial-gradient(circle at 0% 100%, transparent 1.45rem, white, white calc(1.4rem + ${smoothness}px))`,
        }}
      />
      {children}
    </div>
  );
};