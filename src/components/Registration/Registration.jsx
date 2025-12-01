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
import SuccessScreen from "../SuccessForm/SuccessScreen";
import { usePatientForm } from "../../hooks/usePatientForm";

const Registration = () => {
  const { formData, errors, setErrors, handleChange, resetForm } = usePatientForm();
  
  const [toast, setToast] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

   const handleSubmit = () => {
    const newErrors = validateForm(formData);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorMsg = Object.values(newErrors)[0];
      setToast({ type: "error", message: firstErrorMsg });
      return; 
    }

    const successPayload = {
      ...formData,
      uhid: `IGH-${Math.floor(100000 + Math.random() * 900000)}`,
      billNo: `FB${Math.floor(10000000 + Math.random() * 90000000)}`
    };

    setSubmittedData(successPayload);
    setIsSuccess(true);
    setToast({ type: "success", message: "Registration Successful!" });
  };

  if (isSuccess) { 
    return (
      <div className={styles.container}>
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        <SuccessScreen 
          data={submittedData} 
        />
      </div>
    );
  }
  
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
        onCancel={() => setToast({type: 'error', message: 'Registration Cancelled'})} 
      />
    </>
  );
};

export default Registration;
