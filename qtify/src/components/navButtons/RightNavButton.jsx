// src/components/navButtons/RightNavButton.jsx
import React from "react";
import rightArrow from "../../assets/rightArrow.png";
import styles from "./NavButton.module.css";

const RightNavButton = () => {
  return (
    <img
      src={rightArrow}
      alt="Next"
      className={styles.navButton}
    />
  );
};

export default RightNavButton;
