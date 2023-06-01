import { THEME_VARS } from "@theme";
import React from "react";

import {
  BatterySection,
  DesignSection,
  DisplaySection,
  HeroSection,
  ProcessorSection,
  Quote,
} from "./LandingPageSections";

const LandingPage: React.FC = () => {
  console.log(THEME_VARS);

  return (
    <>
      <Quote />
      {/* <PhoneModel /> */}
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
    </>
  );
};

export default LandingPage;
