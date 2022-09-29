import React from "react";
import styles from "./index.module.scss";
type Props = {};

const UserActivity: React.FC<Props> = (props: Props) => {
  const activities = [
    {
      cotnent: "Add new template named quality control assurance",
      date: "3:00 pm",
      author: "Amin Eladawy",
      status: "done",
    },
    {
      cotnent: "Remove template named quality control assurance",
      date: "3:00 pm",
      author: "Amin Eladawy",
      status: "missed",
    },
    {
      cotnent: "Edit template named quality control assurance",
      date: "3:00 pm",
      author: "Amin Eladawy",
      status: "new",
    },
    {
      cotnent: "Edit template named quality control assurance",
      date: "3:00 pm",
      author: "Amin Eladawy",
      status: "active",
    },
  ];
  return (
    <div className={styles.user_Activity}>
      <h3 className={styles.user_Activity_title}>Activity</h3>
      <div className={styles.user_Activity_list}>
        {activities.map((activity, index) => {
          //  const statusColor= `var(--task-${activity.status}-color)`
          return (
            <div className={styles.user_Activity_list_item} key={index}>
              <span
                className={styles.user_Activity_list_item_indicator}
                style={{ backgroundColor: `var(--task-${activity.status}-color)` }}
              ></span>
              <p className={styles.user_Activity_list_item_text}>
                {activity.cotnent}
              </p>
              <div className={styles.user_Activity_list_item_info}>
                <span className={styles.user_Activity_list_item_info_date}>
                  <i>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 0.9375C3.87598 0.9375 0.9375 3.87598 0.9375 7.5C0.9375 11.124 3.87598 14.0625 7.5 14.0625C11.124 14.0625 14.0625 11.124 14.0625 7.5C14.0625 3.87598 11.124 0.9375 7.5 0.9375ZM10.0854 9.51709L9.6665 10.0884C9.65739 10.1008 9.64591 10.1113 9.63272 10.1193C9.61953 10.1273 9.60489 10.1326 9.58965 10.1349C9.5744 10.1372 9.55885 10.1365 9.54388 10.1328C9.52892 10.1291 9.51483 10.1225 9.50244 10.1133L7.07959 8.34668C7.0645 8.33584 7.05223 8.32153 7.04381 8.30496C7.0354 8.28839 7.03109 8.27005 7.03125 8.25146V4.21875C7.03125 4.1543 7.08398 4.10156 7.14844 4.10156H7.85303C7.91748 4.10156 7.97021 4.1543 7.97021 4.21875V7.84424L10.0591 9.35449C10.1118 9.39111 10.1235 9.46436 10.0854 9.51709Z" fill="#D6D6E7"/>
                    </svg>                  
                  </i>
                  <span>{activity.date}</span>
                </span>
                <span className={styles.user_Activity_list_item_info_author}>
                  <i>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.6875 3.0625C3.6875 4.61312 4.94938 5.875 6.5 5.875C8.05062 5.875 9.3125 4.61312 9.3125 3.0625C9.3125 1.51187 8.05062 0.25 6.5 0.25C4.94938 0.25 3.6875 1.51187 3.6875 3.0625ZM11.5 12.125H12.125V11.5C12.125 9.08812 10.1619 7.125 7.75 7.125H5.25C2.8375 7.125 0.875 9.08812 0.875 11.5V12.125H11.5Z" fill="#D0D0E3"/>
                    </svg>
                  </i>
                  <span>{activity.author}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserActivity;
