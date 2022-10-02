import React from "react";
import NotificationListItem from "../../../shared/notification-list-item";
import styles from "./index.module.scss";
type Props = {};

const NotificationsList = (props: Props) => {
  const NList = [
    {
      id: "1",
      title: "Notification description Here",
      date: "3 hours ago",
      isOpend: false,
    },
    {
      id: "2",
      title: "Notification description Here",
      date: "3 hours ago",
      isOpend: false,
    },
    {
      id: "3",
      title: "Notification description Here",
      date: "3 hours ago",
      isOpend: true,
    },
    {
      id: "4",
      title: "Notification description Here",
      date: "3 hours ago",
      isOpend: true,
    },
    {
      id: "5",
      title: "Notification description Here",
      date: "3 hours ago",
      isOpend: true,
    },
  ];
  return (
    <div className={styles.notif_list_wrapper}>
      <ul className={styles.notif_list}>
        {NList.map((item) => (
          <NotificationListItem notification={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default NotificationsList;
