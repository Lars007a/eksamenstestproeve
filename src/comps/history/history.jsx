import styles from "./history.module.css";
import pic from "../../assets/filming.jpg";
import TitleComp from "../titleComp/TitleComp";

export default function HistorySec({}) {
  return (
    <section className={styles.sec}>
      <div className="container">
        <div className={styles.content}>
          <TitleComp
            subTitle={"HISTORIEN"}
            title={"HISTORIEN BAG CINESTAR"}
            text="Cinestar blev grundlagt med en passion for at fortælle historier, der fanger og bevæger sit publikum. Virksomheden begyndte som en lille uafhængig film- og tv-produktionsenhed med et klart fokus på originalt og visuelt engagerende indhold."
          />
          <TitleComp
            subTitle={"Dyas Kardinal"}
            title={"Ceo af Cinestar"}
            img={pic}
          />
        </div>
      </div>
    </section>
  );
}
