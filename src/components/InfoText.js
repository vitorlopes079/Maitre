import React from "react";
import styles from "../styles/InfoText.module.css";

const InfoText = ({isHero, title, text}) => {
  return (
    <>
      <h1 className={`${styles.title} ${isHero ? styles.hero : " "}`}>{title}</h1>
      <p className={styles.text}>
        {text}
      </p>
    </>
  );
};

export default InfoText;
