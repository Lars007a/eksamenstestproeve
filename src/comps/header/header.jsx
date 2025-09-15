import styles from "./Header.module.css";
import BackroundBg from "../../assets/studio.jpg";

export default function header({}) {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${BackroundBg})` }}
    >
      <div className={styles.overlay}>
        <div className="container">
          <article className={styles.textBox}>
            <h3>cinestar studio</h3>
            <h1>Film og TV</h1>
            <h1 className="orangeText">Produktion</h1>
            <p>
              Vi skaber levende fortællinger, der fanger dit publikum. Fra idé
              til færdigt produkt leverer vi professionelle film- og
              tv-løsninger, der gør din historie uforglemmelig.
            </p>
          </article>
        </div>
      </div>
    </header>
  );
}
