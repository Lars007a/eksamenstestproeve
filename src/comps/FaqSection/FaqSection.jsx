import styles from "./FaqSection.module.css";
import TitleComp from "../titleComp/TitleComp.jsx";
import FaqBox from "../faqBox/faqBox.jsx";

export default function FaqSection({ questions = [] }) {
  return (
    <section className={styles.sec}>
      <div className="container">
        <div className={styles.content}>
          <TitleComp
            center={false}
            img={null}
            subTitle={"Ofte stillede spørgsmål"}
            text={
              "Her finder du svar på de spørgsmål, vi oftest bliver stillet om vores processer, tjenester og produktioner. Har du brug for yderligere information? Tøv ikke med at kontakte os!"
            }
            title={"DE MEST ALMINDELIGE SPØRGSMÅL, VI FÅR"}
          />

          <div className={styles.con}>
            {questions.map((element, index) => {
              return <FaqBox questionObj={element} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
