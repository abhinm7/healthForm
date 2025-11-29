import React from "react";
import styles from "./IdentificationDetails.module.css";
import ProfilePic from "../../Common/ProfilePic/ProfilePic";
import InputField from "../../Common/InputField/InputField";

const IdentificationDetails = () => {
  return (
    <div className={styles.identificationDetails}>
      <div className={styles.header}>
        <h5>Identification Details</h5>
      </div>
      <div className={styles.identityGrid}>
        <ProfilePic />
        <div className={styles.mainDetails}>
          <div className={styles.phone}>
            <InputField label="Enter Mobile Number *"/>
          </div>
          <div className={styles.names}>
            <InputField label="First Name*"/>
            <InputField label="Second Name*"/>
          </div>
        </div>
        <div className={styles.gender}>Gender</div>
        <div className={styles.age}>AGE</div>
        <span className={styles.orText}>OR</span>
        <div className={styles.dob}>DOB</div>
      </div>
    </div>
  );
};

export default IdentificationDetails;
