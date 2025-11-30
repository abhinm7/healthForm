import React from "react";
import styles from "./DateInputGroup.module.css";
import DateBox from "../DateBox/DateBox";

const DateInputGroup = ({ 
  label, 
  yy, mm, dd,          
  onChangeYY, onChangeMM, onChangeDD 
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <DateBox 
            placeholder="YY" 
            value={yy || ""} 
            onChange={onChangeYY} 
          />
        </div>
        <div className={styles.inputWrapper}>
          <DateBox 
            placeholder="MM" 
            value={mm || ""} 
            onChange={onChangeMM} 
          />
        </div>
        <div className={styles.inputWrapper}>
          <DateBox 
            placeholder="DD" 
            value={dd || ""} 
            onChange={onChangeDD} 
          />
        </div>
      </div>
    </div>
  );
};

export default DateInputGroup;