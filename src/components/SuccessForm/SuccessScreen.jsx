import React from "react";
import styles from "./SuccessScreen.module.css";

const SuccessScreen = ({ data, onRegisterNew }) => {
  // Get current date for "Created at"
  const currentDate = new Date().toLocaleString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles.container}>
      <div className={styles.successCard}>
        <p className={styles.statusLabel}>Service Order Status</p>

        <div className={styles.headerRow}>
          <h2 className={styles.title}>Patient Registration Successful.</h2>
          <span className={styles.checkIcon}><img src="/verify.svg" alt="" /></span>
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.row}>
            <span className={styles.label}>UHID No :</span>
            <span className={styles.value}>{data?.uhid}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Bill No :</span>
            <span className={styles.value}>
              {data?.billNo}
            </span>
          </div>
        </div>

        <div className={styles.metaInfo}>
          <p>Created at {currentDate} by {data?.firstName}</p>
          <p>Transaction Ref No #292921819929</p>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.actionBtn}>
          <span className={styles.icon}>
            <img src="/card.svg" alt="" />
          </span>{" "}
          View Profile
        </button>
        <button className={styles.actionBtn}>
          <span className={styles.icon}>
            <img src="/paypal.svg" alt="" />
          </span>{" "}
          Print Receipt
        </button>
        <button className={styles.actionBtn}>
          <span className={styles.icon}>
            <img src="/paypal.svg" alt="" />
          </span>{" "}
          Print UHID
        </button>
        <button className={styles.actionBtn} onClick={onRegisterNew}>
          <span className={styles.icon}>
            <img src="/paypal.svg" alt="" />
          </span>{" "}
          Print UHID
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
