import React, { useLayoutEffect, useRef } from "react";
import { FlexSection } from "@components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled, { keyframes } from "styled-components";

import { QuoteTextType } from "./LandingPageSectionTypes";

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.dark};
  color: ${(props) => props.theme.white};
`;

const moveUp = keyframes`
  100% {
    transform: translateY(0);
  }
`;

const Text = styled.p<QuoteTextType>`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  position: relative;
  height: ${(props) => props.theme.fontmd};
  overflow: hidden;

  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards; //making the animation to not be reverted so the text wont dissapear
    animation-delay: ${(props) => props.delay};
    font-family: ${(props) => props.theme.fontL};

    // cut the paragraph in text shape and make the background visible in cut paragraph
    background-image: linear-gradient(-45deg, ${(props) => props.theme.gradient});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .author {
    width: 100%;
    text-align: end;
    background-image: linear-gradient(-180deg, ${(props) => props.theme.gradient});
  }
`;

const Quote: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef<HTMLDivElement>(null);
  const tl = useRef(gsap.timeline());

  useLayoutEffect(() => {
    const ele = sectionRef.current;
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline().to(ele as GSAPTweenTarget, {
        scrollTrigger: {
          trigger: ele,
          start: "top top",
          pin: true,
          pinSpacing: false,
        },
      });
      return () => ctx.revert();
    }, sectionRef);
  }, []);

  return (
    <FlexSection ref={sectionRef}>
      <TextContainer>
        <Text delay="0s">
          <span>&#8220; You can&apos;t connect the dots looking forward; </span>
        </Text>
        <Text delay="0.4s">
          <span>&nbsp;&nbsp;&nbsp;You can only connect them looking backward.</span>
        </Text>
        <Text delay="0.8s">
          <span>&nbsp;&nbsp;&nbsp;So you have to trust that the dots</span>
        </Text>
        <Text delay="1.2s">
          <span>&nbsp;&nbsp;&nbsp;will somehow connect in your future. &#8221;</span>
        </Text>
        <Text delay="1.6s">
          <span className="author">&nbsp;&nbsp;&nbsp;&#x23AF; Steve Jobs</span>
        </Text>
      </TextContainer>
    </FlexSection>
  );
};

export default Quote;
