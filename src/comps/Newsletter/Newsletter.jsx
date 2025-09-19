import styles from "./Newsletter.module.css";
import bgImg from "../../assets/liquifer.png";
import TitleComp from "../titleComp/TitleComp.jsx";
import { useSimplePost } from "../../hooks/useSimplePost.jsx";
import { useState } from "react";
import Popup from "../popup.jsx";
import ErrorBox from "../errorBox/errorBox.jsx";

export default function Newsletter() {
  const send = useSimplePost();
  const [formError, setFormError] = useState(null);
  const [showPopup, setShowPopup] = useState(null);

  const submit = (event) => {
    event.preventDefault();
    setFormError(null);

    const form = event.target;
    console.log(form);
    const fd = new FormData(form);
    const email = fd.get("email");

    if (!email) {
      setFormError("SKal din email ind!");
      return;
    }

    if (!email.includes("@")) {
      setFormError("Skal være en email!");
      return;
    }

    send
      .sendRequest("subscription", { email: email })
      .then((val) => {
        console.log(val);
        if (val.status != "ok") {
          throw new Error(val.message);
        }

        setShowPopup(email);
      })
      .catch((error) => {
        setFormError(error.message);
      });
  };

  return (
    <section
      className={styles.newsletter}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container">
        <div className={styles.content}>
          <TitleComp
            center={false}
            img={null}
            subTitle="EN BLOG, DER KAN INSPIRERE OG HJÆLPE DIG"
            text={
              "Få de nyeste opdateringer, tips og indsigter direkte i din indbakke. Vores blog deler viden, inspiration og historier, der kan hjælpe dig med at tage dine projekter til det næste niveau."
            }
          />

          <form onSubmit={submit} noValidate>
            <input type="email" name="email" placeholder="Email" />
            <input type="submit" value={"Tilmeld nu"} />
          </form>
          <div style={{ marginTop: "15px" }}>
            {formError && <ErrorBox msg={formError} animate={true} />}
          </div>
        </div>
      </div>

      {showPopup != null || showPopup != undefined ? (
        <Popup
          closeFunc={() => {
            setShowPopup(null);
          }}
          message={`Tak`}
          secondaryMessage={`Din email ${showPopup} er nu tilmeldt nyhedsbrevet!`}
        />
      ) : (
        ""
      )}
    </section>
  );
}
