import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

export function useLogin() {
  const [user, setUser] = useLocalStorage("user", null);

  function sendLoginRequest(email, password) {
    //Returnere promise.
    return fetch("http://127.0.0.1:3042/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((val) => {
        if (!val.ok) {
          throw new Error("Skete en fejl. Prøv igen!");
        }
        return val.json(); //Giv det til det næste i chainen.
      })
      .then((val) => {
        if (val.status == "error") {
          throw new Error(val.message);
        }

        const userData = jwtDecode(val.data.token);
        setUser({ token: val.data.token, userData: userData });

        return val; //Giv "val" til den næste i chainen, som er dem der får promisen returned, nemlig dem der caller promisen.
      })
      .catch((error) => {
        throw error; //Hvis at de næste i chainen skal se erroren.
      })
      .finally(() => {});
  }

  function checkToken(token) {
    const formData = new FormData();
    formData.set("token", token);

    const promise = fetch("http://localhost:3042/auth/token", {
      method: "POST",
      body: formData,
    })
      .then((val) => {
        return val.json();
      })
      .then((val) => {
        if (val.status != "ok") {
          throw new Error(val.message);
        }

        return val;
      });

    return promise;
  }

  return { sendLoginRequest, checkToken };
}
