import { MutableRefObject, useEffect, useState } from "react";

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

export const useSectionEnters = (elementRef: MutableRefObject<HTMLDivElement | null>) => {
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        // Element is entering the viewport
        setIsEntered(true);
      } else {
        // Element is exiting the viewport
        setIsEntered(false);
      }
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return isEntered;
};

export const useSectionFullyExiting = (sectionRef: MutableRefObject<HTMLDivElement | null>) => {
  const [isSectionFullyExiting, setIsSectionFullyExiting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsSectionFullyExiting(entry.boundingClientRect.top <= 0 && entry.intersectionRatio === 0);
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: [0],
    });

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return { isSectionFullyExiting };
};
