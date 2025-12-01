import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ label, value, onChange, onBlur, type = "text", error, ...props }) => {
  let inputLabel = error?error:label
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.inputContainer} ${error ? styles.errorBorder : ''}`}>
        <input
          className={`${styles.input} ${error ? styles.errorInput : ''}`}
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
      {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    </div>
  );
};

export default InputField;