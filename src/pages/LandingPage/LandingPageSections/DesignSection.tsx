import { gsap } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: ${(props) => props.theme.whte};
  overflow: hidden;
`;

const TextContainer = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${(props) => props.theme.dark};

  span {
    font-size: ${(props) => props.theme.fontBig};
    width: 90%;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

const TextContainer2 = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: ${(props) => props.theme.dark};

  span {
    font-size: ${(props) => props.theme.fontxxxl};
    width: 80%;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

const DesignSection: React.FC = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);

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
      .fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <Section ref={container}>
      <TextContainer ref={textOne}>
        <span>Flaw-less design with strong durability.</span>
      </TextContainer>
      <TextContainer2 ref={textTwo}>
        <span>Flat-edge design with toguhest smartphone glass.</span>
      </TextContainer2>
    </Section>
  );
};

export default DesignSection;
