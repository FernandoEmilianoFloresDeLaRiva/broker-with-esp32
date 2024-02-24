import styles from './ContainerText.module.css'
function ContainerText() {
  return (
    <div className={styles.container}>
      <span className={styles.containerTitle}>
        Esp32 con MQTT
      </span>
      <span className={styles.containerParagraph}>
        Esta es una prueba de conexión los mensajes son enviados a traves de un
        socket y el socket los recibe a partir de un broker que tiene de
        publicador un esp32 
      </span>
    </div>
  );
}

export default ContainerText;
