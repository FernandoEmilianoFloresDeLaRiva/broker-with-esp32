import React from "react";
import styles from "./ImageContainer.module.css";
import VideoRef from "../../assets/media/toothless-dragon-toothless.gif";

function ImageContainer() {
  return (
    <picture className={styles.containerVideo}>
      <img src={VideoRef} alt="Rox bailando" className={styles.video} />
    </picture>
  );
}

export default ImageContainer;
