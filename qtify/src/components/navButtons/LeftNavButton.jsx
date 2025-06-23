// src/components/navButtons/LeftNavButton.jsx
import React from "react";
import leftArrow from "../../assets/leftArrow.png";
import styles from "./NavButton.module.css";

const LeftNavButton = () => {
  return (
    <img
      src={leftArrow}
      alt="Previous"
      className={styles.navButton}
    />
  );
};

export default LeftNavButton;
