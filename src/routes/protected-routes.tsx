import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../contexts";

type Props = {
  children: JSX.Element;
};

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const {
    state: { auth },
    dispatch,
  } = useContext(AppContext);

  
  useEffect(() => {
    console.log("Protected Routes: ", auth);
    return () => {
      
    }
  }, [auth])
  
  if (!!auth.token) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
