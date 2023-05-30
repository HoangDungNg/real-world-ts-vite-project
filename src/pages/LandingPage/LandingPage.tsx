import React from "react";

import { HeroSection, PhoneModel, Quote } from "./LandingPageSections";

const LandingPage: React.FC = () => {
  return (
    <>
      <Quote />
      <PhoneModel />
      <HeroSection />
    </>
  );
};

export default LandingPage;
