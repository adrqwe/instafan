import { Route, Routes } from "react-router";
import { useEffect } from "react";

import routes from "./routes";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import PasswordResetPage from "../pages/PasswordResetPage";
import GUIInterface from "./GUIInterface";
import { INavigatorProps } from "./Navigator.types";
import CreatePostPage from "../pages/CreatePostPage";

const Navigator = ({ setLoaderState }: INavigatorProps) => {
  useEffect(() => {
    window.addEventListener(
      "load",
      () =>
        setTimeout(() => {
          setLoaderState(false);
        }, 500),
      false
    );

    window.setTimeout(() => {
      setLoaderState(false);
    }, 1500);
  }, []);

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
            <CreatePostPage />
          </GUIInterface>
        }
      />
    </Routes>
  );
};

export default Navigator;
