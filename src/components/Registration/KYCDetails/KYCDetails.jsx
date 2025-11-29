import React, { useState } from "react";
import styles from "./KycDetails.module.css";

const KycDocuments = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (e, docType) => {
    const file = e.target.files[0];
    if (file) {
      const newFile = { name: file.name, type: docType };
      setFiles((prevFiles) => [...prevFiles, newFile]);
    }
  };

  const handleRemove = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>KYC Documents ( Optional )</h5>

      <div className={styles.controlsGrid}>
        
        <div className={styles.dropdownContainer}>
          <div className={styles.labelBox}>Doc Type</div>
          <select className={styles.selectField}>
            <option>Aadhar Card</option>
            <option>PAN Card</option>
            <option>Driving License</option>
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
            <img src="settings.svg" alt="settings" width={18} />
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
          <input type="checkbox" className={styles.checkbox} />
          <span className={styles.checkboxLabel}>KYC Verified</span>
        </label>
      </div>

      <div className={styles.fileList}>
        {files.map((file, index) => (
          <div key={index} className={styles.fileItem}>
            <span className={styles.checkIcon}>
              <img src="/tick.svg" alt="tick" width={14} />
            </span>
            <span className={styles.fileName}>{file.name}</span>
            <span className={styles.successText}>Uploaded Successfully</span>
            <button onClick={() => handleRemove(index)} className={styles.deleteBtn}>
              <img src="/trash.svg" alt="trash" width={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KycDocuments;
