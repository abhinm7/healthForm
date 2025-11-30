import React from "react";
import styles from "./DateBox.module.css";

const DateBox = ({ placeholder, value, onChange, ...props }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="number"
        maxLength={2}
        value={value}
        onChange={onChange}
        placeholder=" " 
        {...props}
      />  
      <span className={styles.floatingLabel}>{placeholder}</span>
    </div>
  );
};

export default DateBox; 