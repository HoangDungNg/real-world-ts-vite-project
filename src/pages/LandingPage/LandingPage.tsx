import React from "react";
import { Outlet } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <>
      <h1>This is landing page</h1>
      <Outlet />
    </>
  );
};

export default LandingPage;
