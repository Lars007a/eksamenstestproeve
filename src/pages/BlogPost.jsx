import Header from "../comps/header/header.jsx";
import bgImg from "../assets/studio.jpg";
import BlogSection from "../comps/blogSection/blogSection.jsx";
import pic from "../assets/photoshoot.jpg";
import useSimpleGet from "../hooks/useSimpleGet.jsx";
import { useEffect } from "react";
import LoadingSpinner from "../comps/loadingSpinner/loadingSpinner.jsx";
import ErrorBox from "../comps/errorBox/errorBox.jsx";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../comps/breadcrumbs/breadcrumbs.jsx";

export default function BlogPost({}) {
  const { id } = useParams();

  const req = useSimpleGet(`blog/${id}`);

  useEffect(() => {
    console.log(req.data);
  }, [req.data]);

  return (
    <>
      <Header title={"Blog arkiv"} img={bgImg} frontpage={false}>
        <Breadcrumbs link={"/"} text={"Forside"} orange={false} />
        <Breadcrumbs link={"/blog"} text={"Blog arkiv"} orange={false} />
        <Breadcrumbs link={`/blog/${id}`} text={"Blog"} orange={true} />
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
          readMoreBtn={false}
          showFullPost={true}
          posts={[req?.data.data]}
        />
      )}
    </>
  );
}
