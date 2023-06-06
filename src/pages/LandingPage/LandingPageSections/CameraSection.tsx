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

const CameraSection: React.FC = () => {
  const { sectionRef, videoRef1, videoRef2 } = useVideoScaleOnScroll();
  const SectionCustomStyles: CSSProperties = {
    zIndex: 1,
    backgroundColor: THEME_VARS.white,
    overflow: "hidden",
  };

  return (
    <Section style={SectionCustomStyles} id="camera-section" ref={sectionRef}>
      <Video muted loop autoPlay ref={videoRef1}>
        <source src={v1} type="video/mp4" />
      </Video>
      <VideoTwo muted loop autoPlay ref={videoRef2}>
        <source src={v2} type="video/mp4" />
      </VideoTwo>
    </Section>
  );
};

export default CameraSection;
