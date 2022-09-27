import React from "react";
import styles from "./index.module.scss";
type Props = {
  children: React.ReactNode;
};

const CenterContent: React.FC<Props> = ({ children }) => {
  return <div className={styles.content_center}>{children}</div>;
};

export default CenterContent;
