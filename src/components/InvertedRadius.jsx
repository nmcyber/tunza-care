// Alexander Chepkiyeng GitHub@Xanderyeng
// Took a while coming up with a reusable border radius component which I can scale across any of my future projects.
// Still needs some work on refining it to a crisp but it's a good start.
// I'll also need to make an adapation for it in Typescript

export const InvertedBorder = ({ top,
    right,
    left,
    bottom,
    padding = '3',
    rotation,
    imageRotation,
    smoothness = '2',
    beforeTop,
    beforeRight,
    beforeBottom,
    beforeLeft,
    beforeRotation,
    afterTop,
    afterRight,
    afterBottom,
    afterLeft,
    afterRotation,
    innerBorderRadius,
    imgSrc,
    imgSize = '48px',
    imgAlt,
    spanBgColor,
    children }) => {
    let mainDivPositionClasses = 'absolute';
  
    if (top !== undefined && left !== undefined) {
      mainDivPositionClasses += ` top-${top} left-${left}`;
    } else if (top !== undefined && right !== undefined) {
      mainDivPositionClasses += ` top-${top} right-${right}`;
    } else if (bottom !== undefined && left !== undefined) {
      mainDivPositionClasses += ` bottom-${bottom} left-${left}`;
    } else if (bottom !== undefined && right !== undefined) {
      mainDivPositionClasses += ` bottom-${bottom} right-${right}`;
    } else if (top !== undefined) {
      mainDivPositionClasses += ` top-${top} left-0`;
    } else if (bottom !== undefined) {
      mainDivPositionClasses += ` bottom-${bottom} left-0`;
    } else if (left !== undefined) {
      mainDivPositionClasses += ` top-0 left-${left}`;
    } else if (right !== undefined) {
      mainDivPositionClasses += ` top-0 right-${right}`;
    } else {
      mainDivPositionClasses += ' top-0 left-0'; // Default position
    }
  
    const mainDivClasses = `${mainDivPositionClasses} outline outline-lime-500 z-20 p-${padding} ${innerBorderRadius} ${rotation} bg-white after:w-8 after:h-8 after:bg-radial-[at_100%_100%] after:from-white after:to-white after:aspect-square after:bg-white-500  after:absolute after:top-0 aafter:rotate-6 after:shadow-[-0.5rem_0_0_white] after:z-20 before:absolute before:bottom-0 before:-right-8 before:w-9 before:h-9 before:bg-radial-[at_100%_100%] before:from-white before:to-white before:aspect-square before:bg-blue before:z-20 before:shadow-[-0.5rem_0_0_white]`;
  
    let beforePositionClasses = 'absolute';
    if (beforeTop !== undefined && beforeLeft !== undefined) {
      beforePositionClasses += ` ${beforeTop} ${beforeLeft}`;
    } else if (beforeTop !== undefined && beforeRight !== undefined) {
      beforePositionClasses += ` ${beforeTop} ${beforeRight}`;
    } else if (beforeBottom !== undefined && beforeLeft !== undefined) {
      beforePositionClasses += ` ${beforeBottom} ${beforeLeft}`;
    } else if (beforeBottom !== undefined && beforeRight !== undefined) {
      beforePositionClasses += ` ${beforeBottom} ${beforeRight}`;
    } else if (beforeTop !== undefined) {
      beforePositionClasses += ` ${beforeTop} left-0`;
    } else if (beforeBottom !== undefined) {
      beforePositionClasses += ` ${beforeBottom} left-0`;
    } else if (beforeLeft !== undefined) {
      beforePositionClasses += ` top-0 ${beforeLeft}`;
    } else if (beforeRight !== undefined) {
      beforePositionClasses += ` top-0 ${beforeRight}`;
    } else {
      beforePositionClasses += ' top-0 left-0'; // Default position
    }
  
    let afterPositionClasses = 'absolute';
    if (afterTop !== undefined && afterLeft !== undefined) {
      afterPositionClasses += ` ${afterTop} ${afterLeft}`;
    } else if (afterTop !== undefined && afterRight !== undefined) {
      afterPositionClasses += ` ${afterTop} ${afterRight}`;
    } else if (afterBottom !== undefined && afterLeft !== undefined) {
      afterPositionClasses += ` ${afterBottom} ${afterLeft}`;
    } else if (afterBottom !== undefined && afterRight !== undefined) {
      afterPositionClasses += ` ${afterBottom} ${afterRight}`;
    } else if (afterTop !== undefined) {
      afterPositionClasses += ` ${afterTop} left-0`;
    } else if (afterBottom !== undefined) {
      afterPositionClasses += ` ${afterBottom} left-0`;
    } else if (afterLeft !== undefined) {
      afterPositionClasses += ` top-0 ${afterLeft}`;
    } else if (afterRight !== undefined) {
      afterPositionClasses += ` top-0 ${afterRight}`;
    } else {
      afterPositionClasses += ' -top-3 -right-6'; // Default position
    }
  
    return (
      <div id="iB" className={mainDivClasses}>
      <div className="bg-[hsl(199,36%,91%)] rounded-full p-3">
        <div className="flex items-center justify-center">
          <span className={`flex mx-auto aspect-square rounded-full p-3 text-white bg-[${spanBgColor}] ${imageRotation} transition-colors`}>
            {imgSrc && (
              <img
                src={imgSrc}
                alt={imgAlt}
                className={`object-contain h-3 w-3`}
                style={{ objectFit: 'contain', width: imgSize }}
              />
            )}
          </span>
        </div>
      </div>
      <div className={`${beforePositionClasses} w-9 h-9 bg-radial-[at_0%_0%] outline-0 outline-lime-500 from-white to-white aspect-square bg-blue ${beforeRotation} z-20 shadow-[-0.5rem_0_0_white] bg-[radial-gradient(circle_at_100%_100%,transparent_1.4rem,white,white_calc(1.4rem_+_${smoothness}px))]`} />
      <div className={`${afterPositionClasses} w-8 h-8 bg-radial-[at_100%_100%] from-white to-white aspect-square bg-white-500 ${afterRotation} outline-0 outline-lime-500 bg-[radial-gradient(circle_at_100%_100%,transparent_1.4rem,white,white_calc(1.4rem_+_${smoothness}px))] shadow-[-0.5rem_0_0_white] z-20`} />
      {children}
    </div>
    );
  };