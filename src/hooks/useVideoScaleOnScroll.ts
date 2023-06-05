import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export const useVideoScaleOnScroll = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const Ele = sectionRef.current;
    const video1Ele = videoRef1.current;
    const video2Ele = videoRef2.current;

    // pin the section
    gsap.to(Ele, {
      scrollTrigger: {
        trigger: Ele,
        start: "top top",
        end: "bottom+=500 bottom",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: Ele,
          start: "top top",
          end: "bottom+=500 bottom",
          scrub: true,
        },
      })
      .to(video1Ele, { scale: 0.3 }, "key1")
      .to(video2Ele, { scale: 0.6 }, "key1");
  }, []);
  return { sectionRef, videoRef1, videoRef2 };
};
