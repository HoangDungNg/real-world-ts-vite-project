import React from "react";
import a15 from "@assets/Images/A15-Bionic.jpg";
import { FlexSection, IFlexSection } from "@components";
import { THEME, THEME_VARS } from "@theme";
import styled, { keyframes } from "styled-components";

const FlexSectionCustomStyles: IFlexSection = {
  style: {
    justifyContent: "flex-start",
    backgroundColor: THEME_VARS.dark,
    color: THEME_VARS.white,
    overflow: "hidden",
  },
};

const Title = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${(props) => props.theme.fontBig};
  font-family: ${(props) => props.theme.fontL};
  z-index: 1;

  background-image: linear-gradient(90deg, ${(props) => props.theme.gradient});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const glow = keyframes`
    0% {
        box-shadow: 1px 1px 10px ${THEME.white};
    }
    50% {
        box-shadow: 2px 2px 25px ${THEME.white};
    }
    0% {
        box-shadow: 1px 1px 10px ${THEME.white};
    }
`;

const Processor = styled.div`
  width: 35%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${glow} 3s ease infinite;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: ${(props) => props.theme.fontxs};
  color: ${(props) => props.theme.greyLight};
  width: 30%;
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    margin: 0.2rem 0;
    padding-left: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const ProcessorSection: React.FC = () => {
  return (
    <FlexSection {...FlexSectionCustomStyles}>
      <Title>Fastest Processor</Title>
      <Container>
        <Processor>
          <img src={a15} alt="A15 processor" />
        </Processor>
        <Text>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolorem cupiditate?
            Dicta modi, vel nobis rem ipsam impedit adipisci dolorum suscipit repellat debitis
            quisquam odio rerum corporis maxime? Dolor, voluptates.
          </span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolorem cupiditate?
            Dicta modi, vel nobis rem ipsam impedit.
          </span>
        </Text>
      </Container>
    </FlexSection>
  );
};

export default ProcessorSection;
