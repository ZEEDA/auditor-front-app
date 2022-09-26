import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";
import HomePage from "../pages/Home";
import ProtectedRoute from "./protected-routes";

type Props = {};

const RootRouter = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
