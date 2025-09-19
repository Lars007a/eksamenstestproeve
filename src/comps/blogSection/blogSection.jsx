import styles from "./blogSection.module.css";
import BlogPost from "../blogPost/BlogPost.jsx";
import TitleComp from "../titleComp/TitleComp.jsx";

export default function BlogSection({
  readMoreBtn = false /* om blogpostene skal have readmoreknap til at give videre til postet. */,
  showFullPost = false /* om hele postet skal have alt teksten, eller bare en teaser. */,
  posts = [] /* de post der skal vises. */,
  includeIntroduction = true /* om introduktionsteksten til vores blog skal med eller ej. */,
}) {
  return (
    <section
      className={`${styles.blogsec} ${
        readMoreBtn == true || showFullPost == true
          ? styles.blackBackground
          : ""
      }`}
    >
      <div className="container">
        {includeIntroduction /* kun vis introduktionen vis den er sat til true. */ && (
          <TitleComp
            subTitle={"Blog"}
            title={"VORES SENESTE BLOG"}
            text={
              "Hold dig opdateret med de seneste nyheder, indblik og historier fra Cinestar. Vi deler inspiration, tips og bag kulisserne fra vores spændende projekter og produktioner."
            }
          />
        )}
        <div className={styles.blogContainer}>
          {posts.map((element, index) => {
            return (
              <BlogPost
                key={index}
                img={element?.image}
                date={element?.created}
                title={element?.title}
                text={element?.description}
                teaser={element?.teaser}
                readMoreBtn={readMoreBtn}
                showFullPost={showFullPost}
                id={element?._id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
