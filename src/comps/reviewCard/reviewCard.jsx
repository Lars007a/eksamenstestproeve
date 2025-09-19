import { useEffect, useState } from "react";
import styles from "./reviewCard.module.css";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

export default function reviewCard({ text, stars, name, nameTitle }) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        {[0, 1, 2, 3, 4].map((element, index) => {
          return index > stars - 1 ? ( // -1 siden stjerne ikke er 0 indekseret.
            <IoMdStarOutline key={index} />
          ) : (
            <IoMdStar key={index} />
          );
        })}
      </div>
      <div className={styles.middle}>
        <blockquote>
          <p>"{text}"</p>
        </blockquote>
      </div>
      <div className={styles.byline}>
        <h6 className={styles.name}>{name}</h6>
        <h6 className={styles.title}>{nameTitle}</h6>
      </div>
    </article>
  );
}
