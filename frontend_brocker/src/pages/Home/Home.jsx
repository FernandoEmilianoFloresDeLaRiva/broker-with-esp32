import React from 'react'
import styles from "./Home.module.css"
import ImageContainer from '../../components/ImageContainer/ImageContainer'
import InfoContainer from '../../components/InfoContainer/InfoContainer'

function Home() {
  return (
    <main className={styles.main}>
      <ImageContainer />
    </main>
  )
}

export default Home