import styles from "./serviceComp.module.css";
import bgImg from "../../assets/liquifer.png";
import { FaF, FaFilm } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import TitleComp from "../titleComp/TitleComp.jsx";

export default function serviceComp() {
  return (
    <section
      className={styles.serviceComp}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container">
        <div className={styles.content}>
          <TitleComp
            subTitle={"Service"}
            title={"Hvilken service tilbyder vi?"}
            center={true}
          />
          <div className={styles.opts}>
            <article>
              <FaFilm />
              <div>
                <h2>Film Produktion</h2>
                <p>
                  Vi skaber professionelle filmproduktioner, der formidler dit
                  budskab klart, engagerende og visuelt overbevisende.
                </p>
              </div>
            </article>
            <article>
              <FaPaintBrush />
              <div>
                <h2>En kreativ retning</h2>
                <p>
                  Vi sikrer en kreativ retning, der løfter dit projekt fra
                  almindeligt til uforglemmeligt.
                </p>
              </div>
            </article>
            <article>
              <FaTv />
              <div>
                <h2>Tv Produktion</h2>
                <p>
                  Vi leverer komplette løsninger inden for formatudvikling,
                  optagelse og redigering.
                </p>
              </div>
            </article>
            <article>
              <FaMusic />
              <div>
                <h2>Musik video</h2>
                <p>
                  Lad din musik træde frem i et visuelt univers, der forstærker
                  din lyd og dit budskab.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
