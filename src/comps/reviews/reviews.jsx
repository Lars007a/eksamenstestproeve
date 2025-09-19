import styles from "./reviews.module.css";
import TitleComp from "../titleComp/TitleComp.jsx";
import ReviewCard from "../reviewCard/reviewCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import useSimpleGet from "../../hooks/useSimpleGet.jsx";
import { useEffect } from "react";
import LoadingSpinner from "../../comps/loadingSpinner/loadingSpinner.jsx";
import ErrorBox from "../../comps/errorBox/errorBox.jsx";

export default function reviews({}) {
  const [active, setActive] = useState(1);

  const req = useSimpleGet(`reviews`);

  useEffect(() => {
    console.log(req.data);
  }, [req.data]);

  return (
    <section className={styles.reviews}>
      <div className="container">
        <TitleComp
          subTitle={"Udtalelser"}
          text={
            "“Cinestar er en fantastisk samarbejdspartner, der formår at kombinere kreativitet med professionalisme. Deres evne til at skabe unikke og engagerende produktioner er imponerende, og resultatet taler altid for sig selv.”"
          }
          title={"HVAD SIGER VORES SAMARBEJDSPARTNERE OM OS?"}
          center={true}
        />
        {req.loading && <LoadingSpinner />}
        {req.error && <ErrorBox animate={true} msg={req.error} />}
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1.5}
        centeredSlides={true}
        initialSlide={active}
        modules={[]}
        onSlideChange={(s) => {
          setActive(s.realIndex);
        }}
        breakpoints={{
          800: {
            slidesPerView: 3,
          },
        }}
      >
        {req?.data?.data?.map((element, index) => {
          return (
            <SwiperSlide
              key={index}
              className={`${styles.swipeSlide} ${
                index == active ? styles.active : ""
              }`}
            >
              <ReviewCard
                name={element.name}
                nameTitle={element.position}
                stars={element.rating}
                text={element.text}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
