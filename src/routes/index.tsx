import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutAside from "../layout/layout-aside";
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";
import HomePage from "../pages/Home";
import Notifications from "../pages/Notifications";

import ProtectedRoute from "./protected-routes";

type Props = {};

const RootRouter = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route
            path="dashboard"
            element={
              <LayoutAside>
                <HomePage />
              </LayoutAside>
            }
          />
          <Route
            path="notifications"
            element={
              <LayoutAside>
                <Notifications />
              </LayoutAside>
            }
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
