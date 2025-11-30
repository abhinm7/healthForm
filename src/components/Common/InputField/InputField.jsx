import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ label, value, onChange, type = "text", ...props }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" " 
        {...props}
        required
      />
      <label className={styles.label}>
        {label}
      </label> 
    </div>
  );
};

export default InputField;