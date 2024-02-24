import React from 'react'
import ContainerText from '../ContainerText/ContainerText';
import styles from './InfoContainer.module.css';

function InfoContainer() {
  return (
    <div className={styles.mainContainer}>
        <ContainerText title="a" content="b" ></ContainerText>
    </div>
  )
}

export default InfoContainer;
