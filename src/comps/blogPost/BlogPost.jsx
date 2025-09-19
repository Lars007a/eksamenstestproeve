import styles from "./BlogPost.module.css";

export default function BlogPost({
  date,
  title,
  text,
  img,
  teaser,
  readMoreBtn = false /* om "læs mere" knappen skal med */,
  showFullPost = false /* om hele postet skal vises. */,
  id /* postets id. */,
}) {
  return (
    <article className={`${styles.post} ${showFullPost && styles.full}`}>
      {/* tilføj en ekstra klasse, hvis postet skal vise den fulde tekst. */}
      <img src={img} alt="blog post image" />
      <div className={styles.postBody}>
        <div className={styles.titleContainer}>
          <h2>{title}</h2>
          {showFullPost && (
            <p className={styles.smallText}>Oprettet d. {date}</p>
          )}
          {/* ændre på hvor datoen vises, hvis den fulde tekst vises. */}
        </div>
        <p>{showFullPost ? text : teaser}</p>
        {/* Ændre teksten hvis den fulde tekst vises. */}
      </div>
      {/* hvis knappen, hvis den er sat til true. */}
      {readMoreBtn == true ? (
        <div className={styles.bottom}>
          <button className={styles.readMoreBtn}>
            <a href={`/blog/${id}`}>Læs mere</a>
          </button>
        </div>
      ) : (
        ""
      )}
      {/* hvis datoen et andet sted, hvis det fulde post ikke vises, og readmoreBtn ikke vises. */}
      {showFullPost == false && readMoreBtn == false ? (
        <div className={styles.bottom}>
          <span>Oprettet d. {date}</span>
        </div>
      ) : (
        ""
      )}
    </article>
  );
}
