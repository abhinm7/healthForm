import React, { useState } from "react";
import styles from "./TabNav.module.css";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("regular");

  const tabs = [
    { id: "regular", label: "Regular" },
    { id: "quick", label: "Quick" },
    { id: "import", label: "Import from ABHA" },
    { id: "scan", label: "Scan Documents" }
  ];

  return (
    <div className={styles.tabContainer}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ""}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;