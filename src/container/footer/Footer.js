import styles from "./style.module.scss";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>E-Content</h2>
        <span>Боловсролын мэдээллийн технологийн төв хөгжүүлэв.</span>
      </div>
      <div className={styles.media}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
