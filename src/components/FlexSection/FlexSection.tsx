import React, { CSSProperties, ReactNode } from "react";
import styled, { css } from "styled-components";

type CustomStyle = Omit<CSSProperties, "width" | "height" | "position" | "display">;

export interface IFlexSection {
  id?: string;
  style?: CustomStyle;
  children?: ReactNode;
  noTransform?: boolean;
}

const SectionContainer = styled.section<IFlexSection>`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.noTransform
      ? undefined
      : css`
          transform: none !important;
        `};
`;

const Section = React.forwardRef<null | HTMLDivElement, IFlexSection>((props, ref) => {
  return (
    <SectionContainer style={{ ...props.style }} ref={ref} id={props.id}>
      {props.children}
    </SectionContainer>
  );
});

export default Section;
