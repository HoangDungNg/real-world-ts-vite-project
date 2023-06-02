import React, { useLayoutEffect, useRef } from "react";
import { FlexSection, IFlexSection } from "@components";
import { THEME_VARS } from "@theme";
import { gsap } from "gsap";
import styled from "styled-components";

const FlexSectionCustomStyles: IFlexSection = {
  style: {
    backgroundColor: THEME_VARS.white,
    justifyContent: "flex-end",
  },
};

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-55%, -50%);

  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontBig};
  z-index: 1;
`;

const Battery = styled.ul`
  position: absolute;
  right: 4rem;
  list-style: none;
  background-color: ${(props) => props.theme.white};
  border: 3px solid ${(props) => props.theme.dark};
  border-radius: 8px;
  padding: 0.5rem;
  width: 15rem;

  li {
    width: 100%;
    height: 5rem;
    background-color: ${(props) => props.theme.dark};
    background-image: linear-gradient(-90deg, ${(props) => props.theme.gradient});
    opacity: 0;
  }
  & > *:not(:first-child):not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const BatterySection: React.FC = () => {
  const battery = useRef(null);
  // gsap provides utils.selector to select all the child elements of a parent element
  const elements = gsap.utils.selector(battery);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    elements("li").forEach((el) => {
      tl.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        opacity: 1,
      });
    });
  }, []);

  return (
    <FlexSection {...FlexSectionCustomStyles}>
      <Title>Go all day with single charge...</Title>
      <Battery ref={battery}>
        <li />
        <li />
        <li />
        <li />
        <li />
      </Battery>
    </FlexSection>
  );
};

export default BatterySection;
