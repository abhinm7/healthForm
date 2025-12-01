import React from "react";
import styles from "./ProfilePic.module.css";

const ProfilePic = () => {
  return (
    <div className={styles.photoContainer}>
      <img src="/image.png" alt="Patient profile" className={styles.profileImg} />

      <button className={styles.photoIcon} aria-label="Upload Photo">
        <img src="/camera.svg" alt="Upload icon"/>
      </button>
    </div>
  );
};

export default ProfilePic;
