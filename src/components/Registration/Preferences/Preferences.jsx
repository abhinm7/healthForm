import React, { useState } from "react";
import styles from "./Preferences.module.css";

const Preferences = () => {
  const [consent, setConsent] = useState(true); // Default ON like image
  const [language, setLanguage] = useState("Odia");

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Preferences</h5>

      <div className={styles.grid}>
        <div className={styles.prefItem}>
          <div className={styles.textGroup}>
            <h6 className={styles.itemTitle}>Consent for Medical Research</h6>
            <p className={styles.itemDesc}>
              These cookies are essential in order to use the website and use its features.
            </p>
          </div>
          
          <label className={styles.switch}>
            <input 
              type="checkbox" 
              checked={consent} 
              onChange={(e) => setConsent(e.target.checked)} 
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.prefItem}>
          <div className={styles.textGroup}>
            <h6 className={styles.itemTitle}>Communication Preferences</h6>
            <p className={styles.itemDesc}>Default Communication Language</p>
          </div>
          
          <div className={styles.selectWrapper}>
            <select 
              className={styles.select}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="Odia">Odia</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Preferences;