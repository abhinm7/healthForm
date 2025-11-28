import React from "react";
import { X } from 'lucide-react';
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.headerContent}>
        <div className={styles.headerTabs}>
          <div className={`${styles.tabItem} ${styles.active}`}>
            New Patient Registration
          </div>

          <div className={styles.tabItem}>
            <span className={styles.stepBadge}>1</span>
            Incoming ABHA Consent
          </div>
        </div>
        <div className={styles.closeSection}>
          <button className={styles.closeBtn} aria-label="Close">
            <X size={30} strokeWidth={1} strokeLinecap="round" 
            />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
