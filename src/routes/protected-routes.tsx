import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  currentUser: {
    name: string;
    token: string;
  } | null;
  children: JSX.Element;
};

const ProtectedRoute: React.FC<Props> = ({ currentUser, children }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
