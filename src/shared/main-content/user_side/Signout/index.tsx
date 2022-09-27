import React from "react";
import styles from "./index.module.scss";
type Props = {};

const SignOut = (props: Props) => {
  return (
    <div className={styles.signout_wrapper}>
      <span className={styles.text}>Sign Out</span>
      <button className={styles.action}>
        <span className="icon">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 10.3438L11 6.5M15 10.3438L11 14.1875M15 10.3438H5M10 18.9922C8.8181 18.9922 7.64778 18.7685 6.55585 18.3339C5.46392 17.8992 4.47177 17.2622 3.63604 16.4591C2.80031 15.656 2.13738 14.7026 1.68508 13.6534C1.23279 12.6041 1 11.4795 1 10.3438C1 9.20802 1.23279 8.08341 1.68508 7.03414C2.13738 5.98486 2.80031 5.03146 3.63604 4.22838C4.47177 3.4253 5.46392 2.78826 6.55585 2.35364C7.64778 1.91901 8.8181 1.69531 10 1.69531"
              stroke="#A2A2C3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default SignOut;
