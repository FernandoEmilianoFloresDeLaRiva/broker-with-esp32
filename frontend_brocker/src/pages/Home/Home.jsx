import React from 'react'
import styles from "./Home.module.css"
import ImageContainer from '../../components/imageContainer/ImageContainer'


function Home() {
  return (
    <main className={styles.main}>
      <ImageContainer />
    </main>
  )
}

export default Home