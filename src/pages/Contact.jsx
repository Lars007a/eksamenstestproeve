import Form from "../comps/form/Form";
import Header from "../comps/header/header";
import bgImg from "../assets/studio.jpg";
import Breadcrumbs from "../comps/breadcrumbs/breadcrumbs";

export default function Contact() {
  return (
    <>
      <Header
        img={bgImg}
        frontpage={false}
        title={"Kontakt"}
        breadcrumbs={"Forside/Kontakt"}
      >
        <Breadcrumbs link={"/faq"} text={"Forside"} orange={false} />
        <Breadcrumbs link={"/contact"} text={"Kontakt"} orange={true} />
      </Header>
      <Form />
    </>
  );
}
