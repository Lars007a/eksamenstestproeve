import styles from "./Header.module.css";

export default function header({
  title,
  subtitle,
  thirdTitle,
  text,
  frontpage = true,
  img,
  children,
}) {
  return (
    <header
      className={`${styles.header} ${
        frontpage ? "" : styles.otherPage
      }`} /* hvis ikke frontpage, giv en anden klasse. */
      /* tag ind billedet vi har fået givet. */
      style={{ "--bg": `url(${img})` }}
    >
      <div className="container">
        <div className={styles.content}>
          <article className={styles.textBox}>
            {/* hvis elementerne der skal vises på forsiden. */}
            {frontpage && <h3>{thirdTitle}</h3>}
            <h1>{title}</h1> {/* title skal vises på alle sider. */}
            {frontpage && (
              <>
                <h1 className={styles.orange}>{subtitle}</h1>
                <p>{text}</p>
              </>
            )}
            {/* kun giv breadcrumbs på andre sider end frontpage. */}
            {frontpage == false ? (
              <div className={styles.breadcrumbs}>
                {children}
              </div> /* Breadcrumbs er passed in som children components.  */
            ) : (
              ""
            )}
          </article>
        </div>
      </div>
    </header>
  );
}
