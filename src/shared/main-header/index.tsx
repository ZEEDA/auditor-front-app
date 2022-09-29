import React from "react";
import styles from "./index.module.scss";
import userImg from "../../assets/images/svg/user.svg";

type Props = {
  title: string;
};

const MainHeader: React.FC<Props> = ({title}) => {
  return (
    <div className={styles.page_header}>
      <div className={styles.page_title}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.header_actions}>
        <span className={styles.date}>25 AUG 2022, Thursday</span>
        <button className={styles.toggle_btn}>
          <img src={userImg} alt="Toggle Menu" />
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
