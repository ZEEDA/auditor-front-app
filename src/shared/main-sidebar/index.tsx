import React, { useContext } from "react";
import logoLight from "../../assets/images/logo.png";
import logoDark from "../../assets/images/logo_white.png";
import { AppContext } from "../../contexts";
import Navbar from "../../shared/main-sidebar/navbar";
import styles from './index.module.scss';

const MainSidebar: React.FC = () => {
  const {state:{theme}} = useContext(AppContext)
  return (
    <div className={styles.sidebar}>
      <div className={styles.brand}>
        <img src={theme=='Light'?logoLight:logoDark} alt="" />
      </div>
      <Navbar />
    </div>
  );
};

export default MainSidebar;
