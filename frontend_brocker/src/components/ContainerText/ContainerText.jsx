import styles from "./ContainerText.module.css";
function ContainerText() {
  return (
    <div className={styles.container}>
      <h2 className={styles.containerTitle}>Esp32 con MQTT</h2>
      <p className={styles.containerParagraph}>
        Esta es una prueba de conexión los mensajes son enviados a traves de un
        socket y el socket los recibe a partir de un broker que tiene de
        publicador un esp32
      </p>
    </div>
  );
}

export default ContainerText;
