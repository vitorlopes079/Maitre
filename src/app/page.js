import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import sea from "../images/sea.png";
import vector from "../images/vector.png";
import InfoSectionTop from "@/components/InfoSectionTop";
import InfoSection from "@/components/InfoSection";
import Testimony from "@/components/Testimony";
import Footer from "@/components/Footer";
import sunset from "../images/sunset.webp"
import crital from "../images/cristal.webp"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.vectorContainer}>
        <Image className={styles.image} src={vector} fill alt="Vector Image" />
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={sea} fill alt="Sea Image" />
      </div>
      <HeroSection />
      <InfoSectionTop />
      <InfoSection
        text={
          "Maître Mamba, guérisseur africain renommé, pratique des méthodes thérapeutiques non conventionnelles. Il considère l’être humain dans toutes ses dimensions, intégrant le corps, l’esprit, ainsi que l’environnement familial et social. Doté d'une sensibilité magnétique exceptionnelle, Maître Mamba perçoit les fluides énergétiques et agit en profondeur sur les pathologies psychiques et physiques, rééquilibrant les énergies. Ses thérapies reposent sur le pouvoir de ses mains, de son souffle, de ses recettes médicinales, de ses rituels religieux et de ses talismans de purification, offrant une approche holistique et efficace pour le bien-être de ses patients."
        }
        title={"Guérisseur"}
        buttonText={"Prendre rendez-vous"}
        image={sunset}
        hasLayer={true}
      />
      <InfoSection
        text={
          "Maître Mamba intervient sur tout le spectre de l'amour, offrant son aide pour les trois grandes étapes du cheminement amoureux : la conquête affective, la stabilité conjugale et le retour de l’être aimé. En tant qu'envoûteur puissant, il peut influencer le cœur et l’âme de l’être aimé, assurant ainsi une relation désirée grâce à ses magies puissantes. En fonction de l'intensité souhaitée, Maître Mamba conçoit des prières charnelles, des philtres de possession et des rituels sentimentaux capables de créer, maintenir et protéger le désir d'amour au sein du couple."
        }
        title={"Amourologue"}
        buttonText={"Prendre rendez-vous"}
        image={crital}
        ellipse={true}

      />
      <Testimony />
      <Footer />
    </main>
  );
}
