import { gsap } from "gsap";
import React, { useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  transform: none !important;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${(props) => props.theme.white};
`;

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
  }
  & > *:not(:first-child):not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const BatterySection: React.FC = () => {
  const battery = useRef(null);
  const elements = gsap.utils.selector(battery);

  return (
    <Section>
      <Title>Go all day with single charge...</Title>
      <Battery ref={battery}>
        <li />
        <li />
        <li />
        <li />
        <li />
      </Battery>
    </Section>
  );
};

export default BatterySection;
