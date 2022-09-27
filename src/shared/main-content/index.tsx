import React, { Children } from "react";
import styles from "./index.module.scss";
type Props = {
  children: React.ReactNode;
};
const MainContent: React.FC<Props> = ({ children }) => {
  return (
    <main className={styles.main_content}>
      <div className={styles.main_content_wrapper}>{children}</div>
    </main>
  );
};

export default MainContent;
