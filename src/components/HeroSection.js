import React from "react";
import ButtonFilled from "./ButtonFilled";
import GhostButton from "./GhostButton";
import styles from "../styles/HeroSection.module.css";
import InfoText from "./InfoText";

const HeroSection = () => {
  return (
    <div className={styles.wrapper} id="home">
      <section className={styles.HeroContainer}>
        <InfoText
          isHero={true}
          title={"Bienvenue sur le site de Maître Cheik"}
          text={
            "Fort d'une tradition ancestrale transmise de génération en génération, Maître Mamba est un marabout d'exception, initié dès son jeune âge à Ouagadougou, Burkina-Faso. Grâce à un don puissant et unique, il excelle dans les arts occultes tels que le maraboutage, la voyance, et la médiumnité. Spécialiste des problématiques sentimentales et familiales, Maître Mamba vous guide vers le bonheur et la chance, avec discrétion et professionnalisme, quelle que soit votre origine ou croyance."
          }
        />
        <div className={styles.buttonContainer}>
          <ButtonFilled text={"prendre rendez-vous"}/>
          <GhostButton text={"en savoir plus"}/>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
