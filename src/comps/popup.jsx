import styles from "./popup.module.css";

export default function popup({ message, secondaryMessage, closeFunc }) {
  return (
    <div className={styles.popup}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.mainTitle}>{message}</p>
          <p className={styles.secTitle}>{secondaryMessage}</p>
          <button onClick={closeFunc}>Luk</button>
        </div>
      </div>
    </div>
  );
}
