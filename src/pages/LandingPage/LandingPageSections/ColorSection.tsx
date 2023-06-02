import React from "react";
import { FlexSection } from "@components";
import { ECOLOR } from "@constant";
import { useUpdateSectionColor } from "@hooks";
import styled from "styled-components";

const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(${ECOLOR.SierraBlue.rgbColor}, 0.8);
  position: relative;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  background-color: rgba(${ECOLOR.SierraBlue.rgbColor}, 0.4);
  position: relative;
`;

const Center = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  filter: brightness(0.85);
`;

const ColorSection: React.FC = () => {
  const { sectionRef, leftRef, textRef, rightRef } = useUpdateSectionColor();

  return (
    <FlexSection ref={sectionRef}>
      <Left ref={leftRef} />
      <Center ref={textRef}>Sierra Blue</Center>
      <Right ref={rightRef} />
    </FlexSection>
  );
};

export default ColorSection;
