import styles from "./footer.module.css";
import logoImg from "../../assets/logo.png";

export default function footer({}) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.titleBox}>
            <h2>Har du en ide i tankerne?</h2>
            <h2>Lad os starte dit projekt sammen</h2>
          </div>

          <div className={styles.contactBox}>
            <p className="orangeText">Cinestar Studio</p>
            <p className="orangeText">+123-456-789</p>
            <p className="orangeText">hello@awesomesite.com</p>
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

          <div className={styles.bottom}>
            <img src={logoImg} alt="Cinestar logo" />
            <p className={styles.text}>
              COPYRIGHT 2025 © CINESTAR | POWERED BY ROMETHEM E STUDIO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
