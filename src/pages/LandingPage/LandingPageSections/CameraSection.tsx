import React from "react";
import v1 from "@assets/video/Scuba Diving-699.mp4";
import v2 from "@assets/video/Skate-49791.mp4";
import { Section } from "@components";
import { useVideoScaleOnScroll } from "@hooks";
import { THEME_VARS } from "@theme";
import styled, { CSSProperties } from "styled-components";

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  z-index: 2;
`;

const VideoTwo = styled.video`
  position: absolute;
  top: 0;
  right: 40%;
  width: 60%;
  height: auto;

  z-index: 1;
`;

const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  & > *:nth-child(2) {
    margin-left: 6rem;
  }
  & > *:nth-child(3) {
    margin-left: 12rem;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  z-index: 5;
  text-transform: capitalize;
`;

const SectionCustomStyles: CSSProperties = {
  zIndex: 1,
  backgroundColor: THEME_VARS.white,
  overflow: "hidden",
};

const CameraSection: React.FC = () => {
  const { sectionRef, videoRef1, videoRef2, titleRef } = useVideoScaleOnScroll();

  return (
    <Section style={SectionCustomStyles} id="camera-section" ref={sectionRef}>
      <Video muted loop autoPlay ref={videoRef1}>
        <source src={v1} type="video/mp4" />
      </Video>
      <VideoTwo muted loop autoPlay ref={videoRef2}>
        <source src={v2} type="video/mp4" />
      </VideoTwo>

      <TitleContainer ref={titleRef}>
        <Title>Ready.</Title>
        <Title>Steady.</Title>
        <Title>Action.</Title>
      </TitleContainer>
    </Section>
  );
};

export default CameraSection;
