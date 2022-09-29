import React from "react";
import styles from "./index.module.scss";
import userImage from "../../../../assets/images/svg/user.svg";
type Props = {};

const UserTeam = (props: Props) => {
  return (
    <div className={styles.user_team}>
      <h3 className={styles.user_team_title}>My team</h3>
      <div className={styles.user_team_list}>
        {[1, 2, 3,].map((user, index) => (
          <div className={styles.user_team_list_item} key={index}>
            <img src={userImage}/>
          </div>
        ))}
        <div className={`${styles.user_team_list_item} ${styles.add_user}`}>
            <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default UserTeam;
