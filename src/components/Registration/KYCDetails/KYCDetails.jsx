import React from "react";
import styles from "./KYCDetails.module.css";

const KycDocuments = ({ data, onChange, errors }) => {

  const handleFileUpload = (e, category) => {
    if (!data.kycDocType) {
      alert("Please select a Document Type from the dropdown first!");
      e.target.value = null;
      return;
    }

    const file = e.target.files[0];
    if (file) {
      const newFile = {
        docType: data.kycDocType, 
        docCategory: category, 
        file: file.name, 
      };

      const updatedFiles = [...data.kycFiles, newFile];
      onChange("kycFiles", updatedFiles);
    }
  };

  const handleRemove = (index) => {
    const updatedFiles = data.kycFiles.filter((_, i) => i !== index);
    onChange("kycFiles", updatedFiles);
  };

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>KYC Documents ( Optional )</h5>

      <div className={styles.controlsGrid}>
        <div className={styles.dropdownContainer}>
          <div className={styles.labelBox}>Doc Type</div>
          <select
            className={styles.selectField}
            value={data.kycDocType}
            onChange={(e) => onChange("kycDocType", e.target.value)}
          >
            <option value="">Select Doc Type</option>
            <option value="Aadhar Card">Aadhar Card</option>
            <option value="PAN Card">PAN Card</option>
            <option value="Driving License">Driving License</option>
            <option value="Passport">Passport</option>
          </select>
        </div>

        <label className={styles.uploadBtn}>
          <input
            type="file"
            hidden
            onChange={(e) => handleFileUpload(e, "Identity Proof")}
            accept=".jpg,.jpeg,.pdf"
          />
          <span>Upload Identity Proof</span>
        </label>

        <label className={styles.uploadBtn}>
          <span style={{ marginRight: 5 }}>
            <img src="/settings.svg" alt="settings" width={18} />
          </span>
          <input
            type="file"
            hidden
            onChange={(e) => handleFileUpload(e, "Address Proof")}
            accept=".jpg,.jpeg,.pdf"
          />
          <span>Upload Address Proof</span>
        </label>

        <label className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={data.kycVerified}
            onChange={(e) => onChange("kycVerified", e.target.checked)}
          />
          <span className={styles.checkboxLabel}>KYC Verified</span>
        </label>
      </div>

      <div className={styles.fileList}>
        {data.kycFiles.map((file, index) => (
          <div key={index} className={styles.fileItem}>
            <span className={styles.checkIcon}>
              <img src="/tick.svg" alt="tick" width={14} />
            </span>
            
            <span className={styles.fileName}>{file.file}</span>
            <span className={styles.successText}>Uploaded Successfully</span>

            <button
              onClick={() => handleRemove(index)}
              className={styles.deleteBtn}
            >
              <img src="/trash.svg" alt="trash" width={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KycDocuments;
