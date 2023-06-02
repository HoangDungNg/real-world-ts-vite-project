import React from "react";
import { FlexSection, ITextContainer, TextContainer } from "@components";
import { useTextMovingOnScroll } from "@hooks";
import { THEME_VARS } from "@theme";
import { CSSProp } from "styled-components";

const FlexSectionCustomStyles: CSSProp = {
  flexDirection: "column",
  justifyContent: "flex-end",
  backgroundColor: THEME_VARS.white,
  overflow: "hidden",
};

const TextContainerCustomStyles: ITextContainer = {
  innerTextWidth: "80%",
  innerTextFontSize: THEME_VARS.fontxxxl,
  style: {
    alignItems: "flex-end",
  },
};

const DesignSection: React.FC = () => {
  const { container, textOne, textTwo } = useTextMovingOnScroll({});

  return (
    <FlexSection ref={container} style={FlexSectionCustomStyles}>
      <TextContainer ref={textOne}>
        <span>Flaw-less design with strong durability.</span>
      </TextContainer>
      <TextContainer ref={textTwo} {...TextContainerCustomStyles}>
        <span>Flat-edge design with toguhest smartphone glass.</span>
      </TextContainer>
    </FlexSection>
  );
};

export default DesignSection;
