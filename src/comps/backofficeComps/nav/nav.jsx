import styles from "./nav.module.css";
import BackofficeBlog from "../backofficeBlog/backofficeBlog";
import BackofficeReviews from "../backofficeBlog/backofficeBlog";
import Logout from "../logout/Logout";

export default function Nav({ setter }) {
  return (
    <div className="container">
      <ul className={styles.nav}>
        <li
          onClick={() => {
            setter(
              <BackofficeBlog />
            ); /* ændre state fra backoffice page state til backoffice blog page component, så den bliver vist i loginprotect component. */
          }}
        >
          Blogs
        </li>
        <Logout />
      </ul>
    </div>
  );
}
