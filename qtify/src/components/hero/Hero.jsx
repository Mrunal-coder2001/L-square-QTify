import React from "react";
import styles from "./Hero.module.css";
import headphones from "../../assets/hero-headphones.png"; // Use your actual image path

function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h2>Over thousands of podcast episodes</h2>
      </div>
      <img
        src={headphones}
        alt="Headphones"
        className={styles.heroImage}
      />
    </div>
  );
}

export default Hero;
