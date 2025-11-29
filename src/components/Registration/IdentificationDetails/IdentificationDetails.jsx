import React from "react";
import styles from "./IdentificationDetails.module.css";
import ProfilePic from "../../Common/ProfilePic/ProfilePic";
import InputField from "../../Common/InputField/InputField";
import GenderButton from "../../Common/GenderButton/GenderButton";
import DateInputGroup from "../../Common/DateInputGroup/DateInputGroup";

const IdentificationDetails = () => {
  return (
    <div className={styles.identificationDetails}>
      <div className={styles.header}>
        <h5>Identification Details</h5>
      </div>
      <div className={styles.identityGrid}>
        <ProfilePic />
        <div className={styles.inputDetails}>
          <div className={styles.mainDetails}>
            <div className={styles.phone}>
              <InputField label="Enter Mobile Number *" />
            </div>
            <div className={styles.names}>
              <InputField label="First Name*" />
              <InputField label="Second Name*" />
            </div>
          </div>

          <div className={styles.subDetails}>
            <GenderButton />
            <div className={styles.dateGroups}>
              <div className={styles.dobContainer}>
                <DateInputGroup label="Age*" />
              </div>

              <span className={styles.orText}>OR</span>

              <div className={styles.dobContainer}>
                <DateInputGroup label="Date of Birth*" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentificationDetails;
