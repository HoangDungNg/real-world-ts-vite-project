import React from "react";

import {
  BatterySection,
  CameraSection,
  ColorSection,
  DesignSection,
  DisplaySection,
  HeroSection,
  PhoneModel,
  PricingSection,
  ProcessorSection,
  Quote,
} from "./LandingPageSections";

const LandingPage: React.FC = () => {
  const batterSectionRef = React.createRef<HTMLDivElement>();
  return (
    <>
      <Quote />
      <PhoneModel />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection batterySectionRef={batterSectionRef} />
      <ColorSection batterySectionRef={batterSectionRef} />
      <CameraSection />
      <PricingSection />
    </>
  );
};

export default LandingPage;
