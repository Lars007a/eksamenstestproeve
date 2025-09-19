import { useState } from "react";
import styles from "./faqBox.module.css";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function FaqBox({ questionObj }) {
  const [active, setActive] = useState(false);

  const show = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <p className={styles.title}>{questionObj?.question}</p>
        {active ? (
          <FaChevronUp onClick={show} />
        ) : (
          <FaChevronDown onClick={show} />
        )}
      </div>

      <article className={`${styles.textContent} ${active && styles.active}`}>
        <p>{questionObj?.answer}</p>
      </article>
    </div>
  );
}
