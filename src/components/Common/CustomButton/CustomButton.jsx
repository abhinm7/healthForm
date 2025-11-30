import React from "react";
import styles from "./CustomButton.module.css";

const CustomButton = ({ 
  children, 
  onClick, 
  variant = "primary", 
  type = "button", 
  disabled = false 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${styles.btn} 
        ${variant === "secondary" ? styles.secondary : styles.primary}
      `}
    >
      {children}
    </button>
  );
};

export default CustomButton;