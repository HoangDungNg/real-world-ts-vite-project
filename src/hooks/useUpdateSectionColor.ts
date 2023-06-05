import { useLayoutEffect, useRef } from "react";
import { GLTFResult } from "@components/Scene/Scene";
import { ADDITIONAL_SPACE, ECOLOR } from "@constant";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";

import { useScrollingUp } from "./useScrollUp";

export const useUpdateSectionColor = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const scrollup = useScrollingUp();

  const { materials } = useGLTF("/scene.gltf") as GLTFResult;

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
        end: `+=${animationEndPosition} top`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        markers: true,
        once: true,
        onLeave: () => {
          gsap.set(sectionEle, {
            position: "fixed",
          });
        },
      },
    });

    const t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionEle,
          start: "top top",
          end: `+=${animationEndPosition} top`,
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
  }, []);

  return { sectionRef, rightRef, leftRef, textRef };
};
