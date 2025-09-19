import styles from "./PortfolioSlide.module.css";

export default function slide({ img }) {
  return (
    <div
      className={styles.slide}
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  );
}
