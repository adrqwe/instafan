import { Route, Routes } from "react-router";
import React from "react";

import routes from "./routes";
import HomePage from "../pages/HomePage";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Navigator;
