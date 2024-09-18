import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import styles from './index.module.sass';
import { Zoom } from "react-reveal";
import { useTranslations } from "next-intl"

export const Prices: React.FC = () => {
  const t = useTranslations();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, []);

  return (
    <div className={styles.container} id='advantage'>
      <Zoom bottom cascade>
        <p className={styles.container__title}>{t("advantagesBlock.title")}</p>
      </Zoom>
      <Swiper
  effect="coverflow"
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={3}
  spaceBetween={20}
  loop={true}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={{ clickable: true }}
  modules={[EffectCoverflow, Pagination, Autoplay]}
  className={styles.swiper}
  ref={swiperRef}
  breakpoints={{
    320: {
      slidesPerView: 1, // Telefonlar uchun bitta slayd ko'rinadi
      spaceBetween: 10,
      centeredSlides: true,
    },
    769: {
      slidesPerView: 3, // Kattaroq ekranlar uchun uchta slayd ko'rinadi
      spaceBetween: 20,
      centeredSlides: false,
    },
  }}
>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("advantagesBlock.titleOne")}</p>
          <p className={styles.swiperSlide__lesson}>{t("advantagesBlock.descOne")}</p>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("advantagesBlock.guarant")}</p>
          <p className={styles.swiperSlide__lesson}>{t("advantagesBlock.guarantDesc")}</p>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("advantagesBlock.conver")}</p>
          <p className={styles.swiperSlide__lesson}>{t("advantagesBlock.converDesc")}</p>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("advantagesBlock.titleTwo")}</p>
          <p className={styles.swiperSlide__lesson}>{t("advantagesBlock.descTwo")}</p>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("advantagesBlock.titleThree")}</p>
          <p className={styles.swiperSlide__lesson}>{t("advantagesBlock.descThree")}</p>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("advantagesBlock.titleFour")}</p>
          <p className={styles.swiperSlide__lesson}>{t("advantagesBlock.descFour")}</p>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>{t("advantagesBlock.titleFive")}</p>
          <p className={styles.swiperSlide__lesson}>{t("advantagesBlock.descFive")}</p>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};
