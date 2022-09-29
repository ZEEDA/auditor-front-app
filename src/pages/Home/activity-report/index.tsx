import React, { useState } from "react";
import styles from "./index.module.scss";
import DatePicker from "react-datepicker";
type Props = {};

const AcivityReports = (props: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.reports_section}>
      <header>
        <h2 className={styles.title}>Daily Activity (Last 30 Days)</h2>
        <div className={styles.filter}>
          <div className="iconic-input">
            <span className="icon">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4_183)">
                  <path
                    d="M14.25 3.16666H4.74999C3.00109 3.16666 1.58333 4.58442 1.58333 6.33332V14.25C1.58333 15.9989 3.00109 17.4167 4.74999 17.4167H14.25C15.9989 17.4167 17.4167 15.9989 17.4167 14.25V6.33332C17.4167 4.58442 15.9989 3.16666 14.25 3.16666Z"
                    stroke="#3CA7E2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.33333 1.58333V4.74999M12.6667 1.58333V4.74999M1.58333 7.91666H17.4167"
                    stroke="#3CA7E2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_183">
                    <rect width="19" height="19" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default AcivityReports;
