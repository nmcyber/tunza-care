import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;

// NOTE: This component uses the useLocation hook from react-router-dom to get the current location

// A common issue in single-page applications (SPAs) built with React & React Router...
// 
// When navigating between routes, the browser doesn't automatically scroll to the top of the new page.
// 
// This is because the page itself isn't fully reloaded; instead, React Router updates the component tree.