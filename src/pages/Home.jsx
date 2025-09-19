import Header from "../comps/header/header";
import Awards from "../comps/awards/Awards.jsx";
import Intro from "../comps/intro/Intro.jsx";
import ServiceComp from "../comps/serviceComp/serviceComp.jsx";
import HistorySec from "../comps/history/history.jsx";
import Form from "../comps/form/Form.jsx";
import BlogSection from "../comps/blogSection/blogSection.jsx";
import Reviews from "../comps/reviews/reviews.jsx";
import Portfolio from "../comps/portfolio/portfolio.jsx";
import BackroundBg from "../assets/studio.jpg";
import pic from "../assets/photoshoot.jpg";
import useSimpleGet from "../hooks/useSimpleGet.jsx";
import { useEffect, useState } from "react";
import LoadingSpinner from "../comps/loadingSpinner/loadingSpinner.jsx";
import ErrorBox from "../comps/errorBox/errorBox.jsx";

export default function Home() {
  const req = useSimpleGet("blogs");
  const [blogsToShow, setBlogsToShow] = useState([]);

  useEffect(() => {
    if (req?.data?.data == null) return;
    const newArray = [...req.data.data];
    newArray.sort((a, b) => new Date(b.created) - new Date(a.created));
    //Søgte på resourcer online om sortering, fandt ud af sort funktionen med minus af de to elementer den tager.

    setBlogsToShow([newArray[0]]);
  }, [req.data]);

  return (
    <>
      <Header
        title={"film og tv"}
        text={
          "Vi skaber levende fortællinger, der fanger dit publikum. Fra idé til færdigt produkt leverer vi professionelle film- og tv-løsninger, der gør din historie uforglemmelig."
        }
        subtitle={"produktion"}
        thirdTitle={"cinestar studio"}
        frontpage={true}
        img={BackroundBg}
      />
      <Awards />
      <Intro />
      <Portfolio />
      <ServiceComp />
      <HistorySec />
      <Reviews />
      <Form />
      {req?.loading ? (
        <div style={{ paddingTop: "30px" }}>
          <LoadingSpinner />
        </div>
      ) : req?.error ? (
        <div className="container" style={{ paddingTop: "30px" }}>
          <ErrorBox animate={true} msg={req.error} />
        </div>
      ) : (
        req?.data && (
          <BlogSection
            includeIntroduction={true}
            readMoreBtn={false}
            showFullPost={false}
            posts={blogsToShow}
          />
        )
      )}
    </>
  );
}
