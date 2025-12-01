import React, { useState } from "react";
import styles from "./Preferences.module.css";

const Preferences = ({ data, onChange }) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Preferences</h5>

      <div className={styles.grid}>
        <div className={`${styles.prefItem} ${styles.w359}`}>
          <div className={styles.textGroup}>
            <h6 className={styles.itemTitle}>Consent for Medical Research</h6>
            <p className={styles.itemDesc}>
              These cookies are essential in order to use the website and use
              its features.
            </p>
          </div>
          <div className={styles.slideBox}></div>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={data.consent}
              onChange={(e) => onChange("consent", e.target.checked)}
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={`${styles.prefItem} ${styles.w410}`}>
          <div className="">
            <h6 className={styles.itemTitle}>Communication Preferences</h6>
            <p className={styles.itemDesc}>Default Communication Language</p>
          </div>

          <div className={styles.selectWrapper}>
            <select
              className={styles.select}
              value={data.language}
              onChange={(e) => onChange("language", e.target.value)}
            >
              <option value="Odia">Odia</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>

            <img src="./arrow.svg" alt="arrow" className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
