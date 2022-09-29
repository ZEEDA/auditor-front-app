import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { AppContext } from "../contexts";
import LayoutAside from "../layout/layout-aside";

type Props = {
  // children: React.ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({}) => {
  const {
    state: { auth },
  } = useContext(AppContext);

  return !!auth.token ? <Outlet /> : <Navigate to="/login" />;
  // if (!!auth.token) {
  //   return <Navigate to="/dashboard" />;
  // }
  // return <Navigate to="/login" />;
};

export default ProtectedRoute;
