import React from "react";
import styles from "./index.module.scss";

type Props = {
  children: React.ReactNode;
};

const UserSide: React.FC<Props> = ({ children }) => {
  return (
    <div className="user_side_wrapper">
      <div className={`${styles.user_side}`}>{children}</div>
    </div>
  );
};

export default UserSide;
