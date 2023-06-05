import React, { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

interface ISection {
  style?: CSSProperties;
  children?: ReactNode;
  id?: string;
}

const SectionContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Section = React.forwardRef<null | HTMLDivElement, ISection>(
  ({ style, children, id }, ref) => {
    return (
      <SectionContainer style={style} ref={ref} id={id}>
        {children}
      </SectionContainer>
    );
  }
);

export default Section;
