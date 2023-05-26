import React from "react";
import { Route, Routes } from "react-router-dom";

import { FirstPage, LandingPage, SecondPage } from "@pages";
import { EROUTE } from "../Constant";
import { App } from "../Layout";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={EROUTE.index} element={<App />}>
        <Route index element={<LandingPage />} />
        <Route path={EROUTE.firstPage} element={<FirstPage />} />
        <Route path={EROUTE.secondPage} element={<SecondPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
