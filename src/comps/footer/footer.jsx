import styles from "./footer.module.css";
import logoImg from "../../assets/logo.png";
import bgImg from "../../assets/liquifer.png";
import TitleComp from "../titleComp/titleComp.jsx";

export default function footer({}) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h2 className={styles.title}>HAR DU EN IDÉ I TANKERNE?</h2>
        <h2 className={styles.title}>LAD OS STARTE DIT PROJEKT SAMMEN</h2>
        <div className={styles.contactBox}>
          <p className={styles.orangeText}>Cinestar Studio</p>
          <p className={styles.orangeText}>+123-456-789</p>
          <p className={styles.orangeText}>hello@awesomesite.com</p>
        </div>

        <div className={styles.socialBox}>
          <ul>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>

            <li>
              <a href="https://Twitter.com">Twitter</a>
            </li>

            <li>
              <a href="https://LinkedIn.com">LinkedIn</a>
            </li>

            <li>
              <a href="https://Instagram.com">Instagram</a>
            </li>

            <li>
              <a href="https://YouTube.com">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={styles.bottom}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <img src={logoImg} alt="Cinestar logo" />
          <p className={styles.text}>
            COPYRIGHT 2025 © CINESTAR | POWERED BY ROMETHEM E STUDIO
          </p>
        </div>
      </div>
    </footer>
  );
}
