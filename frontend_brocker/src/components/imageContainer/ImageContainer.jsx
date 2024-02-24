import styles from './ImageContainer.module.css'
import VideoRef from '../../assets/media/toothless-dragon-toothless.gif'
import React from 'react';

function ImageContainer(){
    return (
        <picture>
            <video autoPlay loop className={styles.video} ><source src={VideoRef} type='video/mp4' /></video>
        </picture>
    );
}

export default ImageContainer;