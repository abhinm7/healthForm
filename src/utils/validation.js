export const validateForm = (data) => {
    const errors = {};

    // Mobile Numbers (10 digits)
    if (!/^\d{10}$/.test(data.mobile)) {
        errors.mobile = "Mobile number must be 10 digits";
    }
    if (!/^\d{10}$/.test(data.primaryMobile)) {
        errors.primaryMobile = "Primary Mobile Number must be 10 digits";
    }
    if (!/^\d{10}$/.test(data.kinMobile)) {
        errors.kinMobile = "Must be 10 digits";
    }

    // Name

    if (!/^[A-Za-z\s]{2,}$/.test(data.firstName)) {
        errors.firstName = "Min 2 chars, alphabets only";
    }
    if (!/^[A-Za-z\s]{2,}$/.test(data.lastName)) {
        errors.lastName = "Min 2 chars, alphabets only";
    }

    // AGE and DOB

    const age = Number(data.ageYY);
    if (!data.ageYY || isNaN(age) || age < 0 || age > 120) {
        errors.ageYY = "Invalid Age";
    }

    if (!data.dobYY || !data.dobMM || !data.dobDD) {
        errors.dobYY = "DOB Field Required";
    }

    // Address

    if (!data.address1) errors.address1 = "Address 1 is required";
    if (!data.address2) errors.address2 = "Address 2 is required";  
    if (!data.area) errors.area = "Area is required";
    if (!data.city) errors.city = "City is required";
    if (!data.district) errors.district = "District is required";
    if (!data.state) errors.state = "State is required";
    if (!/^\d{6}$/.test(data.pin)) {
        errors.pin = "PIN must be 6 digits";
    }

    // Personal Details

    if (!data.gender) errors.gender = "Gender is required";
    if (!data.language) errors.language = "Language is required";
    if (!data.attendantName) errors.attendantName = "Attendant name is required";
    if (!data.attendantRel) errors.attendantRel = "Attendant relationship is required";

    // Email
    if (!data.email) {
        errors.email = "Email required";
    }
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "Invalid email format";
    }

    // KYC Validation

    const hasIdProof = data.kycFiles?.some(f => f.docCategory === "Identity Proof");
    if (!hasIdProof) {
        errors.kyc = "At least one Identity Proof is required";
    }

    if (!data.kycDocType) {
        errors.kycDocType = "Document type is required";
    }

    if (data.kycVerified === false) {
        errors.kycVerified = "KYC not verified";
    }

    return errors;
};
