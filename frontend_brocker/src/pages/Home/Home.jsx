import React from "react";
import styles from "./Home.module.css";
import InfoContainer from "../../components/infoContainer/infoContainer";

function Home() {
  return (
    <main className={styles.main}>
      <InfoContainer />
    </main>
  );
}

export default Home;
