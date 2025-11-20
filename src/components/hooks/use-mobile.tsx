import { useState, useEffect } from 'react';

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Example breakpoint for mobile
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup function
    return () => window.removeEventListener('resize', checkMobile);
  }, []); // Empty dependency array means this effect runs once on mount

  return isMobile;
}
