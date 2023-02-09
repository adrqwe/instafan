import { Route, Routes } from "react-router";
import React from "react";

import routes from "./routes";
import HomePage from "../pages/HomePage";

const Navigator = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.search} element={<HomePage />} />
      <Route path={routes.explore} element={<HomePage />} />
      <Route path={routes.messages} element={<HomePage />} />
      <Route path={routes.notifications} element={<HomePage />} />
      <Route path={routes.create} element={<HomePage />} />
    </Routes>
  );
};

export default Navigator;
