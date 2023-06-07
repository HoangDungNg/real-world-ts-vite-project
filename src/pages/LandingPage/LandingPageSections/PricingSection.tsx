import React, { Suspense, useContext, useEffect, useRef } from "react";
import { ISection, Section } from "@components";
import { ModelThree } from "@components/Scene/SceneThree";
import { ColorProps, ECOLOR } from "@constant";
import { ColorContext } from "@context";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { THEME_VARS } from "@theme";
import styled from "styled-components";

const SectionCustomStyles: ISection = {
  style: {
    zIndex: 1,
    backgroundColor: ECOLOR.Blue.hexColor,
  },
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: ${(props) => props.theme.white};
  overflow: hidden;
`;

const Phone = styled.div`
  width: 100%;
  height: 70%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: grab;
`;

const Colors = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 35%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Color = styled.li`
  list-style: none;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0.5rem 0;

  border: 1px solid ${THEME_VARS.dark};
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  padding: 0.3rem;
`;

const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  font-family: ${(props) => props.theme.fontR};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0.4rem 1rem;
  border-radius: 50px;

  border: none;
  outline: none;

  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const ButtonLink = styled.a`
  color: ${(props) => props.theme.blue};
  text-decoration: none;
  margin-left: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const IndicatorText = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  position: absolute;
  top: 2rem;
`;

const PricingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { currentColor, changeColorContext } = useContext(ColorContext);

  useEffect(() => {
    if (sectionRef.current)
      sectionRef.current.style.backgroundColor = `rgba(${currentColor.rgbColor}, 0.4)`;
  }, [currentColor]);

  const updateColor = (color: ColorProps) => {
    changeColorContext(color);
  };

  const color1 = ECOLOR.SierraBlue;
  const color2 = ECOLOR.Gold;
  const color3 = ECOLOR.AlpineGreen;
  const color4 = ECOLOR.DeepPurple;
  const color5 = ECOLOR.Red;
  const color6 = ECOLOR.Blue;

  return (
    <Container>
      <Section {...SectionCustomStyles} ref={sectionRef}>
        <Phone>
          <IndicatorText>360&deg; &#x27F2;</IndicatorText>
          <Canvas camera={{ fov: 14 }}>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.4} />

            <Suspense fallback={null}>
              <ModelThree />
            </Suspense>

            <Environment preset="night" />
            <OrbitControls enableZoom={false} />
          </Canvas>

          <Colors>
            <Color color={color1.hexColor} onClick={() => updateColor(color1)} />
            <Color color={color2.hexColor} onClick={() => updateColor(color2)} />
            <Color color={color3.hexColor} onClick={() => updateColor(color3)} />
            <Color color={color4.hexColor} onClick={() => updateColor(color4)} />
            <Color color={color5.hexColor} onClick={() => updateColor(color5)} />
            <Color color={color6.hexColor} onClick={() => updateColor(color6)} />
          </Colors>
        </Phone>
        <Details>
          <SubTitle>iPhone</SubTitle>
          <Title>14 Pro Max</Title>
          <SubTitle>From $1099*</SubTitle>
        </Details>
        <ButtonContainer>
          <Button>Buy</Button>
          <ButtonLink href="#">Learn More &#x2192;</ButtonLink>
        </ButtonContainer>
      </Section>
    </Container>
  );
};

export default PricingSection;
