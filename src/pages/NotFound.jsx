import Header from "../comps/header/header";
import bgImg from "../assets/studio.jpg";

export default function NotFound() {
  return (
    <>
      <Header img={bgImg} frontpage={false} title={"Kan ikke finde siden..."} />
    </>
  );
}
