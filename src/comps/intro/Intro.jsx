import styles from "./Intro.module.css";
import TitleComp from "../titleComp/TitleComp.jsx";
import vid from "../../assets/vid.mp4";
import pic02 from "../../assets/studio3.jpg";

export default function Intro() {
  return (
    <section className={styles.Introsec}>
      <div className="container">
        <TitleComp
          subTitle={"Cinestar Studio"}
          text={
            "Lad os omsætte dine visioner til levende billeder, der fænger dit publikum. Hos os får du en professionel, kreativ proces fra idéudvikling til færdig produktion."
          }
          title={"Har du en ide til dit næste projekt?"}
          center={false}
        />
        <video poster={pic02} autoPlay={false} controls>
          <source src={vid} type="video/mp4" />
        </video>
        <TitleComp
          subTitle={""}
          text={
            "            Hos Cinestar kombinerer vi vores passion for historiefortælling med et skarpt øje for detaljen. Med moderne udstyr og et erfarent team sikrer vi, at din produktion løfter sig fra skitse til strålende slutresultat – hver gang."
          }
          title={"TØV IKKE MED AT VÆLGE CINESTAR TIL DIT NÆSTE FILM-PROJEKT"}
          center={false}
        />
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h2>250+</h2>
            <p>film produktion</p>
          </div>
          <div className={styles.stat}>
            <h2>78+</h2>
            <p>musik video</p>
          </div>
        </div>
      </div>
    </section>
  );
}
