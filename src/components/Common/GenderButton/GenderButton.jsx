import React from "react";
import styles from './GenderButton.module.css';

const GenderButton = ({ selected = "", onSelect }) => {
  const options = ["Female", "Male", "Others"];

  return (
    <div>
      <div className={styles.gender}>
        <label className={styles.fieldLabel}>Gender*</label>
        <div className={styles.genderGroup}>
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className={`${styles.genderBtn} ${selected === option ? styles.activeGender : ''}`}
              onClick={() => onSelect && onSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenderButton;