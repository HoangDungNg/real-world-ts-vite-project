import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

type useTextMovingOnScrollProps = {
  xPosition?: number;
};

export const useTextMovingOnScroll = (props: useTextMovingOnScrollProps | undefined) => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);
  const xPositionParam = props?.xPosition;

  const xPositionTextOne = xPositionParam ? `${xPositionParam}%` : "10%";
  const xPositionTextTwo = xPositionParam ? `-${xPositionParam}%` : "-10%";

  useLayoutEffect(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: xPositionTextOne }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: xPositionTextTwo }, "key1");

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return { container, textOne, textTwo };
};
