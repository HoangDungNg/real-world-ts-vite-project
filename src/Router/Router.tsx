import React from "react";
import { Route, Routes } from "react-router-dom";

import { App } from "../Layout";
import { EROUTE } from "../constant";
import { ErrorFallBack, FirstPage, LandingPage, SecondPage } from "../pages";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={EROUTE.index} element={<App />}>
        <Route index element={<LandingPage />} />
        <Route path={EROUTE.firstPage} element={<FirstPage />} />
        <Route path={EROUTE.secondPage} element={<SecondPage />} />
        <Route path={"*"} element={<ErrorFallBack />} />
      </Route>
    </Routes>
  );
};

export default Router;
