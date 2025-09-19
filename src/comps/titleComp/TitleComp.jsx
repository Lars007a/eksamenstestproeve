import styles from "./TitleComp.module.css";

export default function TitleComp({
  title = "",
  subTitle = "",
  text = "",
  center = false /* om teksten skal centreres. */,
  img = null,
}) {
  return (
    <article className={`${styles.titleIntro} ${center && styles.center}`}>
      {subTitle && <h3 className="smallTitle">{subTitle}</h3>}
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
      {img == null ? "" : <img src={img} alt="billed"></img>}
    </article>
  );
}
