import React from "react";
import AuthBrand from "./auth-brand";
import "./layout.scss";

type Props = {
  children: JSX.Element;
};

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="main auth">
      <div className="flex column items-center">
        <AuthBrand />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
