import React from "react";
import logo from "../../assets/images/logo.png";
import Navbar from "../../shared/main-sidebar/navbar";
import styles from './index.module.scss';

const MainSidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.brand}>
        <img src={logo} alt="" />
      </div>
      <Navbar />
    </div>
  );
};

export default MainSidebar;
