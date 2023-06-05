import React from "react";

import {
  BatterySection,
  CameraSection,
  ColorSection,
  DesignSection,
  DisplaySection,
  HeroSection,
  ProcessorSection,
  Quote,
} from "./LandingPageSections";

const LandingPage: React.FC = () => {
  return (
    <>
      <Quote />
      {/* <PhoneModel /> */}
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <ColorSection />
      <CameraSection />
    </>
  );
};

export default LandingPage;
