import React from "react";
import styles from './GenderButton.module.css'

const GenderButton = () => {
  return (
    <div>
      <div className={styles.gender}>
        <label className={styles.fieldLabel}>Gender*</label>
        <div className={styles.genderGroup}>
          {/* You can add state later to toggle 'active' class */}
          <button
            type="button"
            className={`${styles.genderBtn} ${styles.activeGender}`}
          >
            Female
          </button>
          <button type="button" className={styles.genderBtn}>
            Male
          </button>
          <button type="button" className={styles.genderBtn}>
            Others
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenderButton;
