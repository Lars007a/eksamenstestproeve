import styles from "./login.module.css";
import ErrorBox from "../../errorBox/errorBox.jsx";
import { useLogin } from "../../../hooks/useLogin.jsx";
import { useState } from "react";

export default function LoginForm({ onSuccess }) {
  const login = useLogin();
  const [error, setError] = useState(null);

  const submit = (event) => {
    event.preventDefault();
    setError(null);

    const form = event.target;
    const fd = new FormData(form);

    const email = fd.get("email");
    const password = fd.get("password");

    if (!email || !password) {
      setError("Skal skrive email og password ind!");
      return;
    }

    if (!email.includes("@")) {
      setError("Skal skrive en email!");
      return;
    }

    login
      .sendLoginRequest(email, password)
      .then((val) => {
        if (val.status == "ok") {
          onSuccess();
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submit} className={styles.loginForm} noValidate>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value={"Login"} />
          {error != null ? <ErrorBox animate={true} msg={error} /> : ""}
        </form>
      </div>
    </>
  );
}
