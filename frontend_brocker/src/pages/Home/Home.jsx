import React from "react";
import styles from "./Home.module.css";
import InfoContainer from "../../components/infoContainer/infoContainer";
import ImageContainer from "../../components/imageContainer/ImageContainer";
import ContainerText from "../../components/ContainerText/ContainerText";

function Home() {
  return (
    <div className={styles.containerSection}>
      <main className={styles.main}>
        <ImageContainer />
        <section className={styles.secondSection}>
          <ContainerText />
          <InfoContainer />
        </section>
      </main>
    </div>
  );
}

export default Home;
