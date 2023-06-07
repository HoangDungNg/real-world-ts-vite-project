import React from "react";
import { ColorContextProvider } from "@context";

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
      <ColorContextProvider>
        <ColorSection batterySectionRef={batterSectionRef} />
        <CameraSection />
        <PricingSection />
      </ColorContextProvider>
    </>
  );
};

export default LandingPage;
