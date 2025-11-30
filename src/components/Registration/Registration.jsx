import React, { useState } from "react";
import styles from "./Registration.module.css";
import TabNavigation from "../Common/TabNav/TabNav";
import IdentificationDetails from "./IdentificationDetails/IdentificationDetails";
import ContactDetails from "./ContactDetails/ContactDetails";
import KycDocuments from "./KYCDetails/KYCDetails";
import Preferences from "./Preferences/Preferences";
import ActionBar from "./ActionBar/ActionBar";

const Registration = () => {
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
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = () => {
    console.log("Validating and Submitting...", formData);
  };

  return (
    <>
      <div className={styles.container}>
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
        <KycDocuments />
        <Preferences />
      </div>
      <ActionBar
        onRegister={handleSubmit}
        onCancel={() => alert("Cancelled")}
      />
    </>
  );
};

export default Registration;
