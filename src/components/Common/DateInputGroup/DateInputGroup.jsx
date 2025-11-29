import React from "react";
import styles from "./DateInputGroup.module.css";
import DateBox from "../DateBox/DateBox";


const DateInputGroup = ({ label }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <DateBox placeholder="YY" />
        </div>
        <div className={styles.inputWrapper}>
          <DateBox placeholder="MM" />
        </div>
        <div className={styles.inputWrapper}>
          <DateBox placeholder="DD" />
        </div>
      </div>
    </div>
  );
};

export default DateInputGroup;