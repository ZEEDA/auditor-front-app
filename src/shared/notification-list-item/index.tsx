import React from "react";
import styles from "./index.module.scss";
type Props = {
  notification: {
    id: string;
    title: string;
    date: string;
    isOpend: boolean;
  };
};
const NotificationListItem: React.FC<Props> = ({ notification }) => {
  return (
    <li
      className={`${styles.notif_item} ${
        notification.isOpend ? "" : styles.new
      }`}
    >
      <span className={styles.icon}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8 2.53751H4.2C2.43269 2.53751 1 3.91423 1 5.61251V13.3C1 14.9983 2.43269 16.375 4.2 16.375H13.8C15.5673 16.375 17 14.9983 17 13.3V5.61251C17 3.91423 15.5673 2.53751 13.8 2.53751Z"
            stroke="#A2A2C3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.8 1V4.075M12.2 1V4.075M1 7.15H17"
            stroke="#A2A2C3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={styles.title}>{notification.title}</span>
      <span className={styles.date}>{notification.date}</span>
    </li>
  );
};

export default NotificationListItem;
