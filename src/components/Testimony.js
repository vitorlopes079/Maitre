import React from "react";
import styles from "../styles/Testimony.module.css";
import avatar from "../images/avatar.png";
import Image from "next/image";
import yellowShape from "../images/yellowShape.svg";

const Testimony = () => {
  return (
    <section className={styles.testimonyContainer}>
      <div className={styles.yellowShapeContainer}>
        <Image
          src={yellowShape}
          fill
          style={{ objectFit: "cover" }}
          alt="Yellow Shape"
          className={styles.yellowShapeImage}
        />
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.middleContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.imageContainer}>
              <Image src={avatar} width={105} height={105} alt="Avatar" />
            </div>
            <p className={styles.text}>
              &ldquo;Je tiens à exprimer ma profonde gratitude envers Maître
              Cheik pour son aide précieuse dans mon parcours amoureux. Grâce à
              ses puissants rituels et prières, j&apos;ai réussi à reconquérir
              l&apos;amour de ma vie. Maître Cheik a su rétablir la stabilité dans
              notre couple et renforcer notre lien affectif. Sa capacité à
              influencer positivement le cœur et l&apos;âme de mon partenaire est
              vraiment impressionnante. Son approche holistique, alliant magie
              et sensibilité, m&apos;a permis de vivre une relation harmonieuse et
              épanouissante. Je recommande vivement ses services à quiconque
              cherche à améliorer sa vie amoureuse.&ldquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
