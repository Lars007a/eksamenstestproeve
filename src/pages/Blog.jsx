import Newsletter from "../comps/Newsletter/Newsletter.jsx";
import BlogSection from "../comps/blogSection/blogSection.jsx";
import Header from "../comps/header/header";
import bgImg from "../assets/studio.jpg";
import pic from "../assets/photoshoot.jpg";
import useSimpleGet from "../hooks/useSimpleGet.jsx";
import { useEffect } from "react";
import LoadingSpinner from "../comps/loadingSpinner/loadingSpinner.jsx";
import ErrorBox from "../comps/errorBox/errorBox.jsx";
import Breadcrumbs from "../comps/breadcrumbs/breadcrumbs.jsx";

export default function Blog() {
  const req = useSimpleGet(`blogs`);

  useEffect(() => {
    console.log(req.data);
  }, [req.data]);

  return (
    <>
      <Header img={bgImg} frontpage={false} title={"Blog arkiv"}>
        <Breadcrumbs link={"/"} text={"Forside"} orange={false} />
        <Breadcrumbs link={"/blog"} text={"Blog arkiv"} orange={true} />
      </Header>

      {req.loading && (
        <div style={{ paddingTop: "30px" }}>
          <LoadingSpinner />
        </div>
      )}
      {req.error && (
        <div className="container" style={{ paddingTop: "30px" }}>
          <ErrorBox animate={true} msg={req.error} />
        </div>
      )}
      {req?.data?.data && (
        <BlogSection
          includeIntroduction={false}
          readMoreBtn={true}
          showFullPost={false}
          posts={req?.data?.data}
        />
      )}
      <Newsletter />
    </>
  );
}
