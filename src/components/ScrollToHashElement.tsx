// src/components/ScrollToHashElement.jsx

import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const location = useLocation();

  // A memoized value that changes only when the hash changes
  const hash = useMemo(() => location.hash, [location.hash]);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // We need a timeout to ensure the page has finished rendering
        // before we try to scroll.
        setTimeout(() => {
          const yOffset = -100; // Value from your fixed Navigation header
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]); 

  return null; 
};

export default ScrollToHashElement;