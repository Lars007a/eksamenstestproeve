import styles from "./Form.module.css";
import pic from "../../assets/studie2.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import TitleComp from "../titleComp/TitleComp";
import { useState } from "react";
import FormPopup from "../../comps/popup.jsx";
import ErrorBox from "../errorBox/errorBox.jsx";
import { useSimplePost } from "../../hooks/useSimplePost.jsx";

export default function Form() {
  const [showPopup, setShowPopup] = useState(null);
  const [formError, setFormError] = useState(null);
  const msgSend = useSimplePost();

  const submit = async (event) => {
    event.preventDefault();
    setFormError(null);

    const form = event.target;
    const fd = new FormData(form);
    const name = fd.get("name");
    const subject = fd.get("subject");
    const msg = fd.get("msg");
    const email = fd.get("email");

    if (!name || !subject || !msg) {
      setFormError("SKal skrive noget i felterne!");
      return;
    }

    if (!email.includes("@")) {
      setFormError("Skal skrive en email!");
      return;
    }

    msgSend
      .sendRequest("message", {
        name: name,
        subject: subject,
        description: msg,
      })
      .then((val) => {
        if (val.status != "ok") {
          throw new Error(val.message);
        }

        setShowPopup(val.data.name);
      })
      .catch((error) => {
        setFormError(error.message);
      });
  };

  return (
    <section className={styles.form}>
      <div className="container">
        <TitleComp
          subTitle={"KONTAKT"}
          text={
            "Har du spørgsmål eller ønsker du at vide mere om, hvordan vi kan hjælpe med dit næste projekt? Udfyld formularen, og vi kontakter dig hurtigst muligt. Vi ser frem til at samarbejde med dig!"
          }
          title={"BOOK EN SAMTALE MED OS"}
        />
      </div>
      <div className={styles.formSec}>
        <div
          className={styles.overlay}
          style={{ background: `url(${pic})` }}
        ></div>
        <div className="container">
          <div className={styles.contactSec}>
            <div>
              <FaPhoneAlt />
              <p>+45 12 34 56 78</p>
            </div>
            <div>
              <FaLocationDot />
              <p>Fotovej 66, 8456 Cineby</p>
            </div>
            <div>
              <IoMdMail />
              <p>cinestar@production.dk</p>
            </div>
          </div>

          <form onSubmit={submit} noValidate>
            <input type="text" name="name" placeholder="Navn" />
            <input type="text" name="email" placeholder="Emne" />
            <input type="text" name="subject" placeholder="Emne" />
            <textarea name="msg" placeholder="Besked"></textarea>
            <input type="submit" value={"Send besked"} />
            {formError ? <ErrorBox msg={formError} animate={true} /> : ""}
          </form>
        </div>
      </div>
      {showPopup && (
        <FormPopup
          message={`Tak for din besked ${showPopup}`}
          secondaryMessage={
            "Vi bestræber os på at kontakte dig via din email indenfor 24 timer."
          }
          closeFunc={() => {
            setShowPopup(false);
          }}
        />
      )}
    </section>
  );
}
