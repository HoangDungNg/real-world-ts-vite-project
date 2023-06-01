import { THEME_VARS } from "@theme";
import React from "react";

import { DesignSection, DisplaySection, HeroSection, Quote } from "./LandingPageSections";

const LandingPage: React.FC = () => {
  console.log(THEME_VARS);

  return (
    <>
      <Quote />
      {/* <PhoneModel /> */}
      <HeroSection />
      <DesignSection />
      <DisplaySection />
    </>
  );
};

export default LandingPage;
