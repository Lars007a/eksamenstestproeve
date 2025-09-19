import styles from "./Logout.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function Logout({}) {
  const [user, setUser] = useLocalStorage("user", null);

  return (
    <button
      onClick={() => {
        setUser(null);
      }}
      className={styles.btn}
    >
      Log ud
    </button>
  );
}
