import React from "react";
import styles from "./index.module.scss";
import userImg from "../../assets/images/svg/user.svg";
import ZThemeSwitcher from "../zthemeswitcher";

type Props = {
  title: string;
};

const MainHeader: React.FC<Props> = ({ title }) => {
  const handleToggleSideBar = () => {
    document.body.classList.add("show_user_side");
  };
  return (
    <div className={styles.page_header}>
      <div className={styles.page_title}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.header_actions}>
        <span className={styles.date}>25 AUG 2022, Thursday</span>
        <button className={styles.toggle_btn} onClick={handleToggleSideBar}>
          <img src={userImg} alt="Toggle Menu" />
        </button>
        <ZThemeSwitcher />
      </div>
    </div>
  );
};

export default MainHeader;
