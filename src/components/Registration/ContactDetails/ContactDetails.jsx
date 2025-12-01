import React from "react";
import styles from "./ContactDetails.module.css";
import InputField from "../../Common/InputField/InputField";

const ContactDetails = ({ data, onChange, errors }) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Contact Details</h5>
      
      <div className={styles.formLayout}>
        <div className={styles.row}>
          <div className={styles.w200}>
            <InputField 
              label="Address Line 1 *" 
              value={data.address1} 
              onChange={(e) => onChange("address1", e.target.value)} 
              error={errors.address1} 
            />
          </div>
          <div className={styles.w200}>
            <InputField 
              label="Address Line 2 *" 
              value={data.address2} 
              onChange={(e) => onChange("address2", e.target.value)} 
              error={errors.address2} 
            />
          </div>
          <div className={styles.w112}>
            <InputField 
              label="PIN*" 
              value={data.pin} 
              onChange={(e) => onChange("pin", e.target.value)} 
              error={errors.pin} 
              type="number"
              maxLength={6}
            />
          </div>
          <div className={styles.w179}>
            <InputField 
              label="Select Area*" 
              value={data.area} 
              onChange={(e) => onChange("area", e.target.value)} 
              error={errors.area} 
            />
          </div>
          <div className={styles.w156}>
            <InputField 
              label="City" 
              value={data.city} 
              onChange={(e) => onChange("city", e.target.value)} 
              error={errors.city}
            />
          </div>
          <div className={styles.w140}>
            <InputField 
              label="District*" 
              value={data.district} 
              onChange={(e) => onChange("district", e.target.value)} 
              error={errors.district}
            />
          </div>
          <div className={styles.w140}>
            <InputField 
              label="State*" 
              value={data.state} 
              onChange={(e) => onChange("state", e.target.value)} 
              error={errors.state}
            />
          </div>
          <div className={styles.w42}>
            <div className={styles.staticBox}>IN</div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.w403}>
            <InputField 
              label="Primary Registered Number*" 
              value={data.primaryMobile} 
              onChange={(e) => onChange("primaryMobile", e.target.value)} 
              error={errors.primaryMobile}
              type="number"
              maxLength={10}
            />
          </div>
          <div className={styles.w465}>
            <InputField 
              label="Next Kin Contact No. *" 
              value={data.kinMobile} 
              onChange={(e) => onChange("kinMobile", e.target.value)} 
              error={errors.kinMobile}
              type="number"
              maxLength={10}
            />
          </div>
          <div className={styles.w337}>
            <InputField 
              label="Email" 
              value={data.email} 
              onChange={(e) => onChange("email", e.target.value)} 
              error={errors.email}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.w403}>
            <InputField 
              label="Attendant Name" 
              value={data.attendantName} 
              onChange={(e) => onChange("attendantName", e.target.value)} 
              error={errors.attendantName}
            />
          </div>
          <div className={styles.w465}>
            <InputField 
              label="Attendant Relationship" 
              value={data.attendantRel} 
              onChange={(e) => onChange("attendantRel", e.target.value)} 
              error={errors.attendantRel}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactDetails;