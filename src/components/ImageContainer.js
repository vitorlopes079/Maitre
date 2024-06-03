import React from "react";
import styles from "../styles/ImageContainer.module.css";
import Image from "next/image";
import NumbersBox from "./NumbersBox";

const ImageContainer = ({ image, hasLayer = false }) => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={image}
        width={553}
        height={342}
        alt="Apresentation image"
        className={styles.imageWrapper}
      />

      {hasLayer && <div className={styles.filterLayer}></div>}

      <div className={styles.numbersBoxWrapper}>
        <NumbersBox />
      </div>
    </div>
  );
};

export default ImageContainer;
