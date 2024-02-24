import styles from "./InfoTextContainer.module.css";
export default function InfoTextContainer({ number, content }) {
  return (
    <div className={styles.container}>
      <span className={styles.containerNumber}>{number}</span>
      <span className={styles.containerParagraph}>{content}</span>
    </div>
  );
}
