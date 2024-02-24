import styles from "./ImageContainer.module.css";
import VideoRef from "../../assets/media/Toothless Dancing _ Green Screen.mp4";
import React from "react";

function ImageContainer() {
  return (
    <picture className={styles.containerVideo}>
      <video autoPlay loop className={styles.video}>
        <source src={VideoRef} type="video/mp4" />
      </video>
    </picture>
  );
}

export default ImageContainer;
