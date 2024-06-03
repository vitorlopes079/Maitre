import React from "react";
import styles from "../styles/Footer.module.css";
import footerBackground from "../images/footer.svg";
import Image from "next/image";
import ButtonFilled from "./ButtonFilled";
import whatsapp from "../images/whatsapp.png"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactContainer} id="contact">
          <p className={styles.text}>Prix consultation</p>
          <p className={`${styles.text} ${styles.price}`}>29€</p>
          <div className={styles.horizontalLine}></div>
          <p className={styles.text}><Image src={whatsapp} width={45} height={45} className={styles.whatssapp} alt="whatsapp icon"/>Whatsapp: +33759886784</p>
          <p className={styles.text}>Numéro téléphone: +33759886784</p>
        </div>
        <div className={styles.buttonContainer}>
          <ButtonFilled isFooter={true} text={"Prendre rendez-vous"}/>
        </div>
      </div>
      <div className={styles.footerWave}>
        <Image
          src={footerBackground}
          alt="Footer Background"
          fill
          className={styles.wave}
        />
      </div>
    </div>
  );
};

export default Footer;
