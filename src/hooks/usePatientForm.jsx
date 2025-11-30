import { useState } from "react";

export const usePatientForm = () => {
  const initialData = {
    // Identification
    mobile: "", firstName: "", lastName: "", gender: "Female", 
    ageYY: "", ageMM: "", ageDD: "", dobYY: "", dobMM: "", dobDD: "",
    // Contact
    address1: "", address2: "", pin: "", area: "", city: "", district: "", state: "",
    primaryMobile: "", kinMobile: "", email: "", attendantName: "", attendantRel: "",
    // KYC
    kycDocType: "", kycVerified: false, kycFiles: [],
    // Preferences
    consent: true, language: "Odia"
  };

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error immediately when typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const resetForm = () => {
    setFormData(initialData);
    setErrors({});
  };

  return {
    formData,
    errors,
    setErrors, // We still need this for validation in the parent
    handleChange,
    resetForm
  };
};