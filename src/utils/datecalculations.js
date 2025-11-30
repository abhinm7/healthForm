const calculateDobFromAge = (years, months, days) => {
  const today = new Date();
  const dob = new Date(today);

  dob.setFullYear(dob.getFullYear() - (parseInt(years) || 0));
  dob.setMonth(dob.getMonth() - (parseInt(months) || 0));
  dob.setDate(dob.getDate() - (parseInt(days) || 0));

  return {
    yy: dob.getFullYear().toString().slice(-2), // return YY last 2 digits
    mm: (dob.getMonth() + 1).toString().padStart(2, "0"),
    dd: dob.getDate().toString().padStart(2, "0")
  };
};

const calculateAgeFromDob = (yy, mm, dd) => {
  if (!yy || !mm || !dd) return null;

  const currentYY = new Date().getFullYear() % 100;
  const year = parseInt(yy) <= currentYY ? 2000 + parseInt(yy) : 1900 + parseInt(yy); // auto-century correction

  const dob = new Date(year, parseInt(mm) - 1, parseInt(dd)); // JS month index starts at 0
  const today = new Date();

  let ageY = today.getFullYear() - dob.getFullYear();
  let ageM = today.getMonth() - dob.getMonth();
  let ageD = today.getDate() - dob.getDate();

  if (ageD < 0) { ageM--; ageD += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); } // borrow days
  if (ageM < 0) { ageY--; ageM += 12; } // borrow months

  return { yy: `${ageY}`, mm: `${ageM}`, dd: `${ageD}` };
};

export const getRelatedDateUpdates = (field, value, currentData) => {
  const updates = { [field]: value }; // always update changed field

  if (field.startsWith("age")) {
    const age = {
      yy: field === "ageYY" ? value : currentData.ageYY,
      mm: field === "ageMM" ? value : currentData.ageMM,
      dd: field === "ageDD" ? value : currentData.ageDD
    };
    if (age.yy) {
      const dob = calculateDobFromAge(age.yy, age.mm, age.dd);
      updates.dobYY = dob.yy; updates.dobMM = dob.mm; updates.dobDD = dob.dd; // sync DOB
    }
  }

  if (field.startsWith("dob")) {
    const dob = {
      yy: field === "dobYY" ? value : currentData.dobYY,
      mm: field === "dobMM" ? value : currentData.dobMM,
      dd: field === "dobDD" ? value : currentData.dobDD
    };
    if (dob.yy && dob.mm && dob.dd) {
      const age = calculateAgeFromDob(dob.yy, dob.mm, dob.dd);
      if (age) {
        updates.ageYY = age.yy; updates.ageMM = age.mm; updates.ageDD = age.dd; // sync Age
      }
    }
  }

  return updates;
};
