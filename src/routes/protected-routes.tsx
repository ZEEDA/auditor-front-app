import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { AppContext, AuthReducerType } from "../contexts";
import LayoutAside from "../layout/layout-aside";

type Props = {
  children?: React.ReactNode;
  auth: AuthReducerType;
};

const ProtectedRoute: React.FC<Props> = ({ auth, children }) => {
  return !!auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
