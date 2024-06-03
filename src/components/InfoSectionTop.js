import React from "react";
import InfoText from "./InfoText";
import ButtonFilled from "./ButtonFilled";
import styles from "../styles/InfoSectionTop.module.css";
import ImageContainer from "./ImageContainer";
import glass from "../images/glass.webp"

const InfoSectionTop = () => {
  return (
    <div id="about" className={`${styles.InfoSectionTopContainer} ${styles.shape}`}>
      <div className={styles.ellipse}></div>
      <div className={styles.textSection}>
        <InfoText
          title={"Voyant Médium"}
          text={
            "Maître Mamba, voyant médium de renom, excelle dans l'art de dévoiler la destinée de ses patients et d'établir des contacts spirituels. Grâce à ses révélations et divinations, il offre des aperçus précieux sur le futur et l'inconnu. Doté de dons extrasensoriels et occultes, et guidé par une réflexion humaine profonde, Maître Mamba fournit des analyses précises et éclairées. Il ressent et identifie les activités paranormales autour des individus ou dans des lieux spécifiques, permettant ainsi de cartographier les dangers à éviter et les opportunités à saisir. En connexion constante avec le temporel et les esprits, il constitue un allié inestimable pour ceux qui aspirent à maîtriser leur vie"
          }
        />
        <div className={styles.buttonContainer}>
          <ButtonFilled text={"Prendre rendez-vous"}/>
        </div>
      </div>
      <ImageContainer image={glass}/>

    </div>
  );
};

export default InfoSectionTop;
