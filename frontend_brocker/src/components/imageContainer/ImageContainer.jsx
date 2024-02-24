import styles from './ImageContainer.module.css'
import VideoRef from '../../assets/media/Toothless Dancing _ Green Screen.mp4'

function ImageContainer(){
    return (
        <picture>
            <video autoPlay loop className={styles.video} ><source src={VideoRef} type='video/mp4' /></video>
        </picture>
    );
}

export default ImageContainer;