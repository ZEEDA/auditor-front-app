import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from "./auth-brand.module.scss";

type Props = {};

const AuthBrand = (props: Props) => {
  return (
    <div className={styles.brand}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default AuthBrand;
