import styles from "./portfolio.module.css";
import TitleComp from "../titleComp/TitleComp.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import PortfolioSlide from "../PortfolioSlide/PortfolioSlide.jsx";
import pic03 from "../../assets/school_life.jpg";
import pic02 from "../../assets/into_your_heart.jpg";
import pic01 from "../../assets/daughter_mom.jpg";
import { useRef } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

export default function Portfolio({}) {
  return (
    <section className={styles.portfolio}>
      <div className="container">
        <div className={styles.content}>
          <TitleComp
            subTitle={"PORTFOLIO"}
            text={""}
            title={"UDVALGTE PROJEKTER"}
          />
          <div className={styles.slideShow}>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                clickable: true,
                nextEl: `.${styles.nextEl}`,
                prevEl: `.${styles.prevEl}`,
              }}
              pagination={{
                clickable: true,
                el: `.${styles.pag}` /* pagRef?.current */,
                type: "bullets",
                bulletActiveClass: `${styles.pagactive}`,
                bulletClass: `${styles.pagbullet}`,
              }}
              modules={[Navigation, Pagination]}
              breakpoints={{
                800: {
                  slidesPerView: 3,
                },
              }}
            >
              <div className={`${styles.nextEl} ${styles.nav}`}>
                <GrNext />
              </div>
              <div className={`${styles.prevEl} ${styles.nav}`}>
                <GrPrevious />
              </div>
              <SwiperSlide>
                <PortfolioSlide img={pic01} />
              </SwiperSlide>
              <SwiperSlide>
                <PortfolioSlide img={pic02} />
              </SwiperSlide>
              <SwiperSlide>
                <PortfolioSlide img={pic03} />
              </SwiperSlide>
            </Swiper>

            <div className={styles.pag}></div>
          </div>

          <article className={styles.textSec}>
            <p>
              Her præsenterer vi et udvalg af de produktioner, vi er stolte af
              at have skabt.
            </p>
            <p>
              Hvert projekt fortæller sin unikke historie og illustrerer vores
              ambition om at levere høj kvalitet, originalitet og visuel
              gennemslagskraft.
            </p>
            <p>Gå på opdagelse, og lad dig inspirere af vores arbejde.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
