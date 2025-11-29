import React from "react";
import styles from "./ContactDetails.module.css";
import InputField from "../../Common/InputField/InputField";

const ContactDetails = () => {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Contact Details</h5>
      <div className={styles.formLayout}>
        <div className={`${styles.row}`}>
          <div className={`${styles.box} ${styles.w200}`}>
            <InputField label="Address Line 1 *" />
          </div>
          <div className={`${styles.box} ${styles.w200}`}>
            <InputField label="Address Line 2 *" />
          </div>
          <div className={`${styles.box} ${styles.w112}`}>
            <InputField label="PIN*" />
          </div>
          <div className={`${styles.box} ${styles.w179}`}>
            <InputField label="Select Area*" />
          </div>
          <div className={`${styles.box} ${styles.w156}`}>
            <InputField label="City" />
          </div>
          <div className={`${styles.box} ${styles.w140}`}>
            <InputField label="District*" />
          </div>
          <div className={`${styles.box} ${styles.w140}`}>
            <InputField label="State*" />
          </div>
          <div className={`${styles.box} ${styles.w42}`}>
            <div className={styles.staticBox}>IN</div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.box} ${styles.w403}`}>
            <InputField label="Primary Registered Number*" />
          </div>
          <div className={`${styles.box} ${styles.w465}`}>
            <InputField label="Next Kin Contact No. *" />
          </div>
          <div className={`${styles.box} ${styles.w337}`}>
            <InputField label="Email" />
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.box} ${styles.w403}`}>
            <InputField label="Attendant Name" />
          </div>
          <div className={`${styles.box} ${styles.w465}`}>
            <InputField label="Attendant Relationship" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
