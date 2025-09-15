import styles from "./awards.module.css";
import img01 from "../../assets/awards/award1.png";
import img02 from "../../assets/awards/award2.png";
import img03 from "../../assets/awards/award3.png";

export default function Awards() {
  return (
    <section className={styles.awards}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.award}>
            <img src={img01} alt="Award" />
          </div>
          <div className={styles.award}>
            <img src={img02} alt="Award" />
          </div>
          <div className={styles.award}>
            <img src={img03} alt="Award" />
          </div>
        </div>
      </div>
    </section>
  );
}
