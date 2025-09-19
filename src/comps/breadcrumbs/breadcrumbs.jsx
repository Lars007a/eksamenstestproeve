import styles from "./breadcrumbs.module.css";

export default function breadcrumbs({ text, link, orange = false }) {
  return (
    <a
      href={link}
      className={`${styles.breadcrumbs} ${orange == true && styles.orange}`}
    >
      <p>{text}</p>
    </a>
  );
}
