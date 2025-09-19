import styles from "./errorBox.module.css";

export default function errorBox({ msg, animate = true }) {
  return (
    <div className={`${styles.box} ${animate && styles.animate}`}>
      <p>{msg}</p>
    </div>
  );
}
