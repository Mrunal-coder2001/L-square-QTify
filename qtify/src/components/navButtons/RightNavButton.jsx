import rightArrow from "../../assets/rightArrow.png";
import styles from "./NavButton.module.css";

const RightNavButton = () => {
  return (
    <img
      src={rightArrow}
      alt="Right"
      className={`swiper-button-next ${styles.navButton} ${styles.right}`}
    />
  );
};

export default RightNavButton;
