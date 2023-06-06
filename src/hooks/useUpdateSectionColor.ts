import { RefObject, useEffect, useLayoutEffect, useRef } from "react";
import { GLTFResult } from "@components/Scene/Scene";
import { ADDITIONAL_SPACE, ECOLOR } from "@constant";
import { useGLTF } from "@react-three/drei";
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

  const { materials } = useGLTF("/scene.gltf") as GLTFResult;

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

  useLayoutEffect(() => {
    const sectionEle = sectionRef.current;
    const rightEle = rightRef.current;
    const leftEle = leftRef.current;
    const textEle = textRef.current;
    const animationEndPosition = sectionEle ? sectionEle.offsetWidth + ADDITIONAL_SPACE : undefined;

    const updateColor = (colorName: string, color: string, rgbColor: string) => {
      materials.Body.color.set(color);
      if (textEle) {
        textEle.innerText = colorName;
        textEle.style.color = color;
      }
      if (rightEle) rightEle.style.backgroundColor = `rgba(${rgbColor}, 0.4)`;
      if (leftEle) leftEle.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
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
        markers: true,
        onLeave: () => {
          gsap.set(sectionEle, {
            position: "fixed",
            duration: 0.3,
            ease: "power2.out",
          });
        },
      },
    });

    const t2 = gsap
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
        onStartParams: Object.values(ECOLOR.SierraBlue),
        onReverseComplete: updateColor,
        onReverseCompleteParams: Object.values(ECOLOR.SierraBlue),
      })
      .to(sectionEle, {
        onStart: updateColor,
        onStartParams: Object.values(ECOLOR.Gold),
        onReverseComplete: updateColor,
        onReverseCompleteParams: Object.values(ECOLOR.Gold),
      })
      .to(sectionEle, {
        onStart: updateColor,
        onStartParams: Object.values(ECOLOR.AlpineGreen),
        onReverseComplete: updateColor,
        onReverseCompleteParams: Object.values(ECOLOR.AlpineGreen),
      })
      .to(sectionEle, {
        onStart: updateColor,
        onStartParams: Object.values(ECOLOR.DeepPurple),
        onReverseComplete: updateColor,
        onReverseCompleteParams: Object.values(ECOLOR.DeepPurple),
      })
      .to(sectionEle, {
        onStart: updateColor,
        onStartParams: Object.values(ECOLOR.Red),
        onReverseComplete: updateColor,
        onReverseCompleteParams: Object.values(ECOLOR.Red),
      })
      .to(sectionEle, {
        onStart: updateColor,
        onStartParams: Object.values(ECOLOR.Blue),
        onReverseComplete: updateColor,
        onReverseCompleteParams: Object.values(ECOLOR.Blue),
      });
  }, [materials.Body.color]);

  return { sectionRef, rightRef, leftRef, textRef };
};
