import React from "react";
import leftArrow from "../../assets/leftArrow.png";
import styles from "./NavButton.module.css";

const LeftNavButton = () => {
  return (
    <img
      src={leftArrow}
      alt="Left"
      className={`swiper-button-prev ${styles.navButton} ${styles.left}`}
    />
  );
};

export default LeftNavButton;
