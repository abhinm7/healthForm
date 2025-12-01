import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ label, value, onChange, onBlur, type = "text", error, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.inputContainer} ${error ? styles.errorBorder : ''}`}>
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder=" " 
          {...props}
          required
        />
        <label className={`${styles.label} ${error ? styles.errorLabel : ''}`}>
          {label}
        </label> 
      </div>
      {/* Show error message if it exists */}
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default InputField;