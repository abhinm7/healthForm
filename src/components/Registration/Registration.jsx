import React, { useState } from "react";
import styles from "./Registration.module.css";
import TabNavigation from "../Common/TabNav/TabNav";
import IdentificationDetails from "./IdentificationDetails/IdentificationDetails";
import ContactDetails from "./ContactDetails/ContactDetails";
import KycDocuments from "./KYCDetails/KYCDetails";
import Preferences from "./Preferences/Preferences";
import ActionBar from "./ActionBar/ActionBar";
import Toast from "../Common/Toast/Toast";
import { validateForm } from "../../utils/validation";

const Registration = () => {
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    // Identification
    mobile: "",
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    dobYY: "",
    dobMM: "",
    dobDD: "",
    // Contact
    address1: "",
    address2: "",
    pin: "",
    area: "",
    city: "",
    district: "",
    state: "",
    primaryMobile: "",
    kinMobile: "",
    email: "",
    attendantName: "",
    attendantRel: "",
    // KYC
    kycDocType: "",
    kycVerified: false,
    kycFiles: [],
    // Preferences
    consent: true,
    language: "Odia",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = () => {
    const newErrors = validateForm(formData);
  
     if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorMsg = Object.values(newErrors)[0];
      setToast({ type: "error", message: firstErrorMsg });
      return  
    }

    const successPayload = {
      ...formData,
      uhid: `IGH-${Math.floor(100000 + Math.random() * 900000)}`,
      billNo: `FB${Math.floor(10000000 + Math.random() * 90000000)}`
    };
    setSubmittedData(successPayload);
    setIsSuccess(true);
    console.log(successPayload);
    
    
    setToast({ type: "success", message: "Registration Successful!" });
  };

  return (
    <>
      <div className={styles.container}>
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        <TabNavigation />
        <IdentificationDetails
          data={formData}
          onChange={handleChange}
          errors={errors}
        />
        <ContactDetails
          data={formData}
          onChange={handleChange}
          errors={errors}
        />
        <KycDocuments data={formData} onChange={handleChange} errors={errors} />
        <Preferences data={formData} onChange={handleChange} />
      </div>
      <ActionBar
        onRegister={handleSubmit}
        onCancel={() => alert("Cancelled")}
      />
    </>
  );
};

export default Registration;
