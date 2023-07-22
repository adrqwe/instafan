import { Route, Routes } from "react-router";

import routes from "./routes";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage.component";

const Navigator = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<LoginPage />} />
      <Route path={routes.search} element={<HomePage />} />
      <Route path={routes.explore} element={<HomePage />} />
      <Route path={routes.messages} element={<HomePage />} />
      <Route path={routes.notifications} element={<HomePage />} />
      <Route path={routes.create} element={<HomePage />} />
    </Routes>
  );
};

export default Navigator;
