import React from "react";
import MainHeader from "../../shared/main-header";
import styles from "./index.module.scss";
import notifImg from "../../assets/images/notif.png";
import NotificationsList from "./notifications-list";
type Props = {};

const NotificationsPage: React.FC<Props> = (props: Props) => {
  return (
    <>
      <MainHeader title="Notifications" />
      <div className={styles.heading_section}>
        <img src={notifImg} alt="" className={styles.notif_icon} />
        <div className={styles.action}>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <span className="text">To turn desktop notification </span>
        </div>
      </div>
      <NotificationsList />
    </>
  );
};

export default NotificationsPage;
