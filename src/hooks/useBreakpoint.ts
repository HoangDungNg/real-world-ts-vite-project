import { useEffect, useState } from "react";

export const useBreakpoint = (breakpoint: number) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Initial check
    setMatches(mediaQuery.matches);

    // Add listener for media query changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [breakpoint]);

  return matches;
};
