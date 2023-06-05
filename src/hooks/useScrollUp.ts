import { useEffect, useState } from "react";

export const useScrollingUp = () => {
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    function handleScroll() {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPos < prevScrollPos) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }

      prevScrollPos = currentScrollPos;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollingUp;
};
