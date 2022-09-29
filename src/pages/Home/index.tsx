import React, { useContext } from "react";
import { AppContext } from "../../contexts";
import MainHeader from "../../shared/main-header";
import styles from "./index.module.scss";
import wlcm_char_img from "../../assets/images/welcome_characher.png";
import AcivityReports from "./activity-report";

type Props = {};

const HomePage: React.FC = (props: Props) => {
  const {
    state: { auth },
  } = useContext(AppContext);

  const renderWelcomSection = () => {
    return (
      <div className={styles.welcome_section}>
        <img src={wlcm_char_img} alt="" className={styles.charachter} />
        <div className={styles.inner_text}>
          <h3 className={styles.title}>
            Welcome back {auth?.userData?.username}
          </h3>
          <p className={styles.description}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <button className={`btn btn-primary ${styles.cto}`}>
            Start New Template
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <MainHeader title="Dashboard" />
      {renderWelcomSection()}
      <AcivityReports />
    </>
  );
};

export default HomePage;
