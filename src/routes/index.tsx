import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppContext, AuthReducerType } from "../contexts";
import LayoutAside from "../layout/layout-aside";
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";
import HomePage from "../pages/Home";
import InspectionsPage from "../pages/Inspections/index";
import NotificationsPage from "../pages/Notifications";
import SchadualePage from "../pages/schaduale";
import TemplatesPage from "../pages/Templates";
import AddTemplate from "../pages/Templates/add";
import ProtectedRoute from "./protected-routes";

type Props = {
  auth: AuthReducerType;
};

const RootRouter: React.FC<Props> = ({ auth }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute auth={auth} />}>
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
                <NotificationsPage />
              </LayoutAside>
            }
          />
          <Route
            path="templates"
            element={
              <LayoutAside>
                <TemplatesPage />
              </LayoutAside>
            }
          />
          <Route
            path="inspection"
            element={
              <LayoutAside>
                <InspectionsPage />
              </LayoutAside>
            }
          />
          <Route
            path="schaduale"
            element={
              <LayoutAside>
                <SchadualePage />
              </LayoutAside>
            }
          />
          <Route path="templates/add" element={<AddTemplate />} />
        </Route>
        <Route
          path="/login"
          element={!!auth.token ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={!!auth.token ? <Navigate to="/" /> : <RegisterPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
