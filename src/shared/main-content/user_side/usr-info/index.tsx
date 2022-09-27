import React from "react";
import styles from "./index.module.scss";
import userImage from "../../../../assets/images/svg/user.svg";
type Props = {};

const UserInfo = (props: Props) => {
  return (
    <div className={styles.user_info}>
      <div className={styles.user_info_about}>
        <div className={styles.user_info_about_img}>
          <img src={userImage} />
        </div>
        <div className={styles.user_info_about_text}>
          <span className={styles.user_info_about_text_name}>Mohamed Elgafy</span>
          <span className={styles.user_info_about_text_title}>Manager</span>
        </div>
      </div>
      <div className={styles.user_info_actions}>
        <button className={styles.user_info_actions_edit}>Edit my profile</button>
      </div>
    </div>
  );
};

export default UserInfo;
