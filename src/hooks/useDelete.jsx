export default function sendDelete() {
  function sendRequest(endpoint, token = null) {
    const resp = fetch(`http://localhost:3042/${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: token == null ? "" : `Bearer ${token}`,
      },
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

  return { sendRequest };
}
