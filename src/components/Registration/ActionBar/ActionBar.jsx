import React from "react";
import styles from "./ActionBar.module.css";
import CustomButton from "../../Common/CustomButton/CustomButton";

const ActionBar = ({ onRegister, onCancel }) => {
  const charge = 200;
  return (
    <div className={styles.actionBar}>
      <div className={styles.container}>
        <div className={styles.priceSection}>
          <p>
            Registration charge : <span>{charge}</span>
          </p>
        </div>
        <div className={styles.actions}>
          <CustomButton variant="primary" onClick={onRegister}>
            Collect Payment & Register
          </CustomButton>

          <CustomButton variant="secondary" onClick={onCancel}>
            Cancel
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;