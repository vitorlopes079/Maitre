import React from "react";
import ImageContainer from "./ImageContainer";
import InfoText from "./InfoText";
import styles from "../styles/InfoSection.module.css";
import ButtonFilled from "./ButtonFilled";

const InfoSection = ({ text, title, buttonText, image, ellipse = false, hasLayer }) => {
  return (
    <div className={styles.InfoSectionContainer}>
      {ellipse && <div className={styles.ellipse}></div>}
      <ImageContainer image={image} hasLayer={hasLayer}/>

      <div className={styles.textSection}>
        <InfoText text={text} title={title} />
        <div className={styles.buttonContainer}>
          <ButtonFilled text={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
