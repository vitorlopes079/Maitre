import React from "react";
import styles from "../styles/NumbersBox.module.css";

const NumbersBox = () => {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.numberItem}>
        <h4 className={styles.numberItemTitle}>2000+</h4>
        <p className={styles.numberItemLabel}>Clients</p>
      </div>
      <div className={styles.numberItem}>
        <h4 className={styles.numberItemTitle}>2000+</h4>
        <p className={styles.numberItemLabel}>Satisfais</p>
      </div>
    </div>
  );
};

export default NumbersBox;