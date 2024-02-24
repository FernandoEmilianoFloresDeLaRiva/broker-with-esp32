import styles from "./Home.module.css"
import InfoContainer from "../../components/InfoContainer/InfoContainer"
import ContainerText from "../../components/ContainerText/ContainerText"
import ImageContainer from "../../components/ImageContainer/ImageContainer"
function Home() {
  return (
    <main className={styles.main}>
      <InfoContainer></InfoContainer>
      <ContainerText></ContainerText>
      <ImageContainer></ImageContainer>
    </main>
  )
}

export default Home