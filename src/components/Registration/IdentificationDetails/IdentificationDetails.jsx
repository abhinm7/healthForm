import React from "react";
import styles from "./IdentificationDetails.module.css";
import ProfilePic from "../../Common/ProfilePic/ProfilePic";
import InputField from "../../Common/InputField/InputField";
import GenderButton from "../../Common/GenderButton/GenderButton";
import DateInputGroup from "../../Common/DateInputGroup/DateInputGroup";
import { getRelatedDateUpdates } from "../../../utils/datecalculations";

const IdentificationDetails = ({ data, onChange, onBlur, errors }) => {
  const handleDateChange = (field, val) => {
    const updates = getRelatedDateUpdates(field, val, data);
    Object.entries(updates).forEach(([key, value]) => {
      onChange(key, value);
    });
  };

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
              <InputField
                label="Enter Mobile Number *"
                value={data.mobile}
                onChange={(e) => onChange("mobile", e.target.value)}
                onBlur={() => onBlur && onBlur("mobile")}
                error={errors.mobile}
                type="number"
              />
            </div>

            <div className={styles.names}>
              <InputField
                label="First Name*"
                value={data.firstName}
                onChange={(e) => onChange("firstName", e.target.value)}
                onBlur={() => onBlur && onBlur("firstName")}
                error={errors.firstName}
              />

              <InputField
                label="Last Name*"
                value={data.lastName}
                onChange={(e) => onChange("lastName", e.target.value)}
                onBlur={() => onBlur && onBlur("lastName")}
                error={errors.lastName}
              />
            </div>
          </div>

          <div className={styles.subDetails}>
            <GenderButton
              selected={data.gender}
              onSelect={(val) => onChange("gender", val)}
            />
            <div className={styles.dateGroups}>
              <div className={styles.dobContainer}>
                <DateInputGroup
                  label="Age*"
                  yy={data.ageYY}
                  mm={data.ageMM}
                  dd={data.ageDD}
                  onChangeYY={(e) => handleDateChange("ageYY", e.target.value)}
                  onChangeMM={(e) => handleDateChange("ageMM", e.target.value)}
                  onChangeDD={(e) => handleDateChange("ageDD", e.target.value)}
                />
              </div>

              <span className={styles.orText}>OR</span>

              <div className={styles.dobContainer}>
                <DateInputGroup
                  label="Date of Birth*"
                  yy={data.dobYY}
                  mm={data.dobMM}
                  dd={data.dobDD}
                  onChangeYY={(e) => handleDateChange("dobYY", e.target.value)}
                  onChangeMM={(e) => handleDateChange("dobMM", e.target.value)}
                  onChangeDD={(e) => handleDateChange("dobDD", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentificationDetails;
