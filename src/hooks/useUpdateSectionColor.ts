import { RefObject, useContext, useEffect, useLayoutEffect, useRef } from "react";
import { ADDITIONAL_SPACE, ColorProps, ECOLOR } from "@constant";
import { ColorContext } from "@context";
import { gsap } from "gsap";

import { useScrollingUp, useSectionEnters, useSectionFullyExiting } from "./useScrollUp";

export const useUpdateSectionColor = (batteryRef: RefObject<HTMLDivElement>) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const scrollup = useScrollingUp();
  const isBatteryEnters = useSectionEnters(batteryRef);
  const { isSectionFullyExiting: isBatteryExists } = useSectionFullyExiting(batteryRef);

  const { currentColor, changeColorContext } = useContext(ColorContext);

  useEffect(() => {
    const sectionEle = sectionRef.current;
    if (isBatteryEnters && scrollup) {
      gsap.set(sectionEle, {
        position: "relative",
      });
    }

    if (!scrollup && isBatteryExists) {
      gsap.to(sectionEle, {
        position: "fixed",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [scrollup, isBatteryEnters, isBatteryExists]);

  useEffect(() => {
    const rightEle = rightRef.current;
    const leftEle = leftRef.current;
    const textEle = textRef.current;
    if (textEle) {
      textEle.innerText = currentColor.name;
      textEle.style.color = currentColor.hexColor;
    }
    if (rightEle) rightEle.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`;
    if (leftEle) leftEle.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.8)`;
  }, [currentColor]);

  useLayoutEffect(() => {
    const sectionEle = sectionRef.current;
    const animationEndPosition = sectionEle ? sectionEle.offsetWidth + ADDITIONAL_SPACE : undefined;

    const updateColor = (colorObj: ColorProps) => {
      changeColorContext(colorObj);
    };

    // pin the section
    gsap.to(sectionEle, {
      scrollTrigger: {
        trigger: sectionEle,
        start: "top top",
        end: `+=${animationEndPosition} bottom`,
        endTrigger: "#camera-section",
        scrub: true,
        pin: "#color-section",
        pinSpacing: true,
        once: true,
        onLeave: () => {
          gsap.set(sectionEle, {
            position: "fixed",
            duration: 0.3,
            ease: "power2.out",
          });
        },
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionEle,
          start: "top top",
          end: `+=${animationEndPosition} bottom`,
          scrub: true,
        },
      })
      .to(sectionEle, {
        onStart: updateColor,
        onStartParams: [ECOLOR.SierraBlue],
        onReverseComplete: updateColor,
        onReverseCompleteParams: [ECOLOR.SierraBlue],
      })
      .to(sectionEle, {
        onStart: updateColor,
        onStartParams: [ECOLOR.Gold],
        onReverseComplete: updateColor,
        onReverseCompleteParams: [ECOLOR.Gold],
      })
      .to(sectionEle, {
        onStart: updateColor,
        onStartParams: [ECOLOR.AlpineGreen],
        onReverseComplete: updateColor,
        onReverseCompleteParams: [ECOLOR.AlpineGreen],
      })
      .to(sectionEle, {
        onStart: updateColor,
        onStartParams: [ECOLOR.DeepPurple],
        onReverseComplete: updateColor,
        onReverseCompleteParams: [ECOLOR.DeepPurple],
      })
      .to(sectionEle, {
        onStart: updateColor,
        onStartParams: [ECOLOR.Red],
        onReverseComplete: updateColor,
        onReverseCompleteParams: [ECOLOR.Red],
      })
      .to(sectionEle, {
        onStart: updateColor,
        onStartParams: [ECOLOR.Blue],
        onReverseComplete: updateColor,
        onReverseCompleteParams: [ECOLOR.Blue],
      });
  }, []);

  return { sectionRef, rightRef, leftRef, textRef };
};
