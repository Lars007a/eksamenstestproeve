import Header from "../comps/header/header";
import bgImg from "../assets/studio.jpg";
import FaqSection from "../comps/FaqSection/FaqSection.jsx";
import useSimpleGet from "../hooks/useSimpleGet.jsx";
import { useEffect } from "react";
import LoadingSpinner from "../comps/loadingSpinner/loadingSpinner.jsx";
import ErrorBox from "../comps/errorBox/errorBox.jsx";
import Breadcrumbs from "../comps/breadcrumbs/breadcrumbs.jsx";

export default function FAQ() {
  const req = useSimpleGet("faqs");

  useEffect(() => {
    console.log(req.data);
  }, [req.data]);

  return (
    <>
      <Header img={bgImg} frontpage={false} title={"FAQ"}>
        <Breadcrumbs link={"/"} text={"Forside"} orange={false} />
        <Breadcrumbs link={"/faq"} text={"FAQ"} orange={true} />
      </Header>

      {req?.loading && <LoadingSpinner />}
      {req?.error && <ErrorBox msg={req.error} animate={true} />}

      {req?.data?.data && <FaqSection questions={req.data.data} />}
    </>
  );
}
