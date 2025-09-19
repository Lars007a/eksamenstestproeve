import { useLocalStorage } from "@uidotdev/usehooks";
import LoginForm from "../login/login";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../hooks/useLogin.jsx";

export default function LoginProtect({ children }) {
  const [user, setUser] = useLocalStorage("user", null);
  const [loggedIn, setLoggedIn] = useState(false);
  const loginFuncs = useLogin();

  useEffect(() => {
    //Hvis brugeren ikke har nogen bruger gemt, så bare set loggedIn til false.
    if (user == null) {
      setLoggedIn(false);
      return;
    }
    //Hvis de har en bruger gemt, tjek deres token ved at sende en request til "/auth/token".
    loginFuncs
      .checkToken(user.token)
      .then((val) => {
        //Hvis ikke ok token.
        if (val.status != "ok") {
          //Send en fejl hvis ikke ok token.
          throw new Error("Ikke god token");
        }

        console.log("runnning 2");
        //token godkendt.
        setLoggedIn(true); //Set loggedIn til sandt, hvis en god token.
        console.log("runnning 3");
      })
      .catch((error) => {
        //token er ikke godkendt.
        //Slet brugeren fra localstorage, og fjern login fra backstorage.
        setLoggedIn(false);
        setUser(null);
        console.log("runnning error");
      });
  }, [user, user?.token]); //kør når siden loader, så kun dem med en valid token kommer igennem.

  return (
    <>
      {loggedIn ? (
        children
      ) : (
        <LoginForm
          onSuccess={() => {
            setLoggedIn(true);
          }}
        />
      )}
    </>
  );
}
