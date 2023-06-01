import backgroundVideo from "@assets/video/Ink-21536.mp4";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;

  background-color: ${(props) => props.theme.dark};
  overflow: hidden;
`;

const Title = styled.h1`
  position: absolute;
  top: 2rem;
  left: 2rem;

  font-size: ${(props) => props.theme.fontlg};
  font-family: ${(props) => props.theme.fontL};
  color: ${(props) => props.theme.greyLight};
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-image: linear-gradient(45deg, ${(props) => props.theme.gradient});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;

  span {
    font-size: ${(props) => props.theme.fontxxxl};
    text-transform: uppercase;
    font-weight: 600;
    padding: 2rem;
  }
`;

const VideoContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: bottom;
  }
`;

const HeroSection: React.FC = () => {
  return (
    <Section>
      <VideoContainer>
        <video muted loop autoPlay>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </VideoContainer>
      <Title>iPhone 14 Pro Max</Title>
      <TextContainer>
        <span>So.Cold.</span>
        <span>So.Bold.</span>
      </TextContainer>
    </Section>
  );
};

export default HeroSection;
