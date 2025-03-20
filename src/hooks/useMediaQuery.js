import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleChange = () => {
      setMatches(mediaQueryList.matches);
    };

    mediaQueryList.addEventListener('change', handleChange);

    // Initial check
    setMatches(mediaQueryList.matches);

    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
};