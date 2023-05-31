import React from "react";

import { DesignSection, HeroSection, Quote } from "./LandingPageSections";

const LandingPage: React.FC = () => {
  return (
    <>
      <Quote />
      {/* <PhoneModel /> */}
      <HeroSection />
      <DesignSection />
    </>
  );
};

export default LandingPage;
