import { useState } from "react";

export function useSimplePost() {
  function sendRequest(endpoint, body, token = null) {
    const resp = fetch(`http://localhost:3042/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token == null ? "" : `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    })
      .then((val) => {
        return val.json();
      })
      .then((val) => {
        if (val.status != "ok") {
          throw new Error(val.message);
        }
        return val; //Giv value til den næste i .then() chain.
      });

    return resp; //return fetch hook.
  }

  function sendRequestFORM(endpoint, body, token = null) {
    const resp = fetch(`http://localhost:3042/${endpoint}`, {
      method: "POST",
      headers: {
        authorization: token == null ? "" : `Bearer ${token}`,
      },
      body: body,
    })
      .then((val) => {
        return val.json();
      })
      .then((val) => {
        if (val.status != "ok") {
          throw new Error(val.message);
        }
        return val; //Giv value til den næste i .then() chain.
      });

    return resp; //return fetch hook.
  }

  return { sendRequest, sendRequestFORM };
}
