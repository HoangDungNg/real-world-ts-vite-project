import React, { CSSProperties, MutableRefObject, ReactNode } from "react";
import styled from "styled-components";

export interface ITextContainer {
  style?: Omit<CSSProperties, "display">;
  children?: ReactNode;
  ref?: MutableRefObject<null>;
  innerTextFontSize?: number | string;
  innerTextWidth?: number | string;
  innerTextFontWeight?: number;
  innerTextTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
  innerTextPadding?: number | string;
}

const StyledTextContainer = styled.p<ITextContainer>`
  width: 100%;
  height: 50vh;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${(props) => props.theme.dark};

  span {
    font-size: ${(props) => props.innerTextFontSize ?? props.theme.fontBig};
    width: ${(props) => props.innerTextWidth ?? "90%"};
    font-weight: ${(props) => props.innerTextFontWeight ?? 600};
    text-transform: ${(props) => props.innerTextTransform ?? "capitalize"};
    padding: ${(props) => props.innerTextPadding};
  }
`;

const TextContainer = React.forwardRef<null, ITextContainer>((props, ref) => {
  return (
    <StyledTextContainer style={props.style} ref={ref as MutableRefObject<null>}>
      {props.children}
    </StyledTextContainer>
  );
});

export default TextContainer;
