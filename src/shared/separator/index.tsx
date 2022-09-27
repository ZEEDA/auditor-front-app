import React from "react";
import styles from "./index.module.scss";
type Props = {};

const Separator: React.FC<Props> = (props: Props) => {
  return <hr className={styles.separator} />;
};

export default Separator;
