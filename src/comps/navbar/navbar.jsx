import styles from "./Navbar.module.css";
import logoImg from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

export default function navbar({}) {
  const [active, setActive] = useState(false);

  const hamburger = useRef(null);

  useEffect(() => {
    if (hamburger == undefined || hamburger == null) return;
    hamburger.current.classList.toggle(styles.active); //Kører animation.
  }, [active]);

  const click = (event) => {
    if (active) {
      //Ændre state, som "tænder for", mobilnaven.
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <nav className={`${styles.nav} ${active && styles.active}`}>
      <div className="container">
        <div className={styles.content}>
          {active == false && (
            <div className={styles.logoBox}>
              <a href="/home">
                <img className={styles.logo} src={logoImg} />
              </a>
            </div>
          )}
          {active && (
            <ul
              className={styles.fullscreen}
              onClick={() => {
                setActive(false);
              }}
            >
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? styles.active : ""
                  } /* tror den tager en funktion, for at finde ud af om aktiv, og hvis ja, tilføjer klassen, hvis nej, gør ikke. */
                >
                  Forside
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Kontakt
                </NavLink>
              </li>
            </ul>
          )}

          <div className={styles.hamburger} onClick={click} ref={hamburger}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
