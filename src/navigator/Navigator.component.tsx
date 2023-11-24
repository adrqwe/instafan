import { Route, Routes } from "react-router";

import routes from "./routes";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import PasswordResetPage from "../pages/PasswordResetPage";
import GUIInterface from "./GUIInterface";

const Navigator = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.signUp} element={<SignUpPage />} />
      <Route path={routes.passwordReset} element={<PasswordResetPage />} />
      <Route
        path={routes.homePage}
        element={
          <GUIInterface>
            <HomePage />
          </GUIInterface>
        }
      />
      <Route
        path={routes.search}
        element={
          <GUIInterface>
            <HomePage />
          </GUIInterface>
        }
      />
      <Route
        path={routes.explore}
        element={
          <GUIInterface>
            <HomePage />
          </GUIInterface>
        }
      />
      <Route
        path={routes.messages}
        element={
          <GUIInterface>
            <HomePage />
          </GUIInterface>
        }
      />
      <Route
        path={routes.notifications}
        element={
          <GUIInterface>
            <HomePage />
          </GUIInterface>
        }
      />
      <Route
        path={routes.create}
        element={
          <GUIInterface>
            <HomePage />
          </GUIInterface>
        }
      />
    </Routes>
  );
};

export default Navigator;
