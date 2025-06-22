import React from "react";
import leftArrow from "../../assets/leftArrow.png"; // adjust path if needed
import styles from "./NavButton.module.css";

const LeftNavButton = () => {
  return <img src={leftArrow} alt="Left" className={`swiper-button-prev ${styles.navButton}`} />;
};

export default LeftNavButton;
